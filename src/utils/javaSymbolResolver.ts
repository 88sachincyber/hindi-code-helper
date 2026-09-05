import * as vscode from "vscode";

export interface JavaSymbolInfo {
    symbol: string;
    type?: string;
    owner?: string;
}

interface VariableTypeInfo {
    declaredType: string;
    actualType: string;
}

export class JavaSymbolResolver {

    resolve(
        document: vscode.TextDocument,
        position: vscode.Position
    ): JavaSymbolInfo | undefined {

        const range = document.getWordRangeAtPosition(
            position,
            /[a-zA-Z_$][a-zA-Z0-9_$]*/
        );

        if (!range) {
            return;
        }

        const word = document.getText(range);

        const line = document.lineAt(position.line).text;

        /*
         * ------------------------------------------------
         * Case 1:
         *
         * name.length()
         * list.add()
         * map.get()
         * ------------------------------------------------
         */
        const normalMethodPattern = new RegExp(
            `([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*\\.\\s*${word}\\s*\\(`
        );

        const normalMethodMatch =
            line.match(normalMethodPattern);

        if (normalMethodMatch) {

            const variableName =
                normalMethodMatch[1];

            const typeInfo =
                this.findVariableType(
                    document,
                    variableName,
                    position.line
                );

            if (typeInfo) {

                return {
                    symbol: word,
                    type: typeInfo.declaredType,
                    owner: typeInfo.actualType
                };
            }
        }

        /*
         * ------------------------------------------------
         * Case 2:
         *
         * this.name.length()
         * ------------------------------------------------
         */
        const thisMethodPattern = new RegExp(
            `this\\.([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*\\.\\s*${word}\\s*\\(`
        );

        const thisMethodMatch =
            line.match(thisMethodPattern);

        if (thisMethodMatch) {

            const variableName =
                thisMethodMatch[1];

            const typeInfo =
                this.findVariableType(
                    document,
                    variableName,
                    position.line
                );

            if (typeInfo) {

                return {
                    symbol: word,
                    type: typeInfo.declaredType,
                    owner: typeInfo.actualType
                };
            }
        }

        /*
         * ------------------------------------------------
         * Case 3:
         *
         * Known Java class
         * ------------------------------------------------
         */
        const stringChainPattern = new RegExp(
            `"[^"]*"\\s*\\.\\s*[a-zA-Z_$][a-zA-Z0-9_$]*\\s*\\.\\s*${word}\\s*\\(`
        );

        if (stringChainPattern.test(line)) {

            return {
                symbol: word,
                type: "String",
                owner: "String"
            };
        }
        if (
            this.isKnownClass(word) ||
            this.isImportedClass(document, word)
        ) {

            return {
                symbol: word,
                type: word,
                owner: word
            };
        }

        return {
            symbol: word
        };
    }

    private findVariableType(
        document: vscode.TextDocument,
        variableName: string,
        currentLine: number
    ): VariableTypeInfo | undefined {

        /*
         * Search backwards for a local variable
         * or field declaration.
         */
        for (let i = currentLine; i >= 0; i--) {

            const line =
                document.lineAt(i).text;

            const typeInfo =
                this.extractVariableType(
                    line,
                    variableName
                );

            if (typeInfo) {
                return typeInfo;
            }
        }

        return undefined;
    }

    private extractVariableType(
        line: string,
        variableName: string
    ): VariableTypeInfo | undefined {

        /*
         * Supports:
         *
         * String name;
         * private String name;
         * private final String name;
         * String name = "Sachin";
         * final String name = "Sachin";
         */
        const declarationPattern = new RegExp(
            `(?:public|private|protected|static|final|volatile|transient|\\s)*\\s*` +
            `([A-Z][a-zA-Z0-9_$]*(?:\\s*<[^>]+>)?)\\s+` +
            `${variableName}\\b` +
            `(?:\\s*=\\s*(?:new\\s+([A-Z][a-zA-Z0-9_$]*)))?`
        );

        const match =
            line.match(declarationPattern);

        if (!match) {
            return undefined;
        }

        const declaredType =
            this.cleanType(match[1]);

        let actualType = declaredType;

        /*
         * Example:
         *
         * List<String> list = new ArrayList<>();
         *
         * actualType = ArrayList
         */
        if (match[2]) {

            actualType = match[2];

        } else {

            actualType =
                this.mapInterfaceToImplementation(
                    declaredType
                );
        }

        return {
            declaredType,
            actualType
        };
    }

    private cleanType(type: string): string {

        type = type.trim();

        const genericIndex =
            type.indexOf("<");

        if (genericIndex !== -1) {

            type = type.substring(
                0,
                genericIndex
            );
        }

        return type.trim();
    }

    private mapInterfaceToImplementation(
        type: string
    ): string {

        switch (type) {

            case "List":
                return "ArrayList";

            case "Map":
                return "HashMap";

            case "Set":
                return "HashSet";

            default:
                return type;
        }
    }

    private isKnownClass(
        word: string
    ): boolean {

        const classes = [
            "String",
            "Math",
            "Arrays",
            "ArrayList",
            "HashMap",
            "HashSet",
            "System",
            "Integer",
            "Double",
            "Character",
            "StringBuilder",
            "Object",
            "Thread",
            "Scanner",
            "Collections",
            "Exception",
            "File",
            "LocalDate",
            "LocalDateTime",
            "List",
            "Map",
            "Set"
        ];

        return classes.includes(word);
    }

    private isImportedClass(
        document: vscode.TextDocument,
        className: string
    ): boolean {

        for (let i = 0; i < document.lineCount; i++) {

            const line =
                document.lineAt(i).text.trim();

            if (
                line === `import java.util.${className};` ||
                line === `import java.lang.${className};` ||
                line === `import java.time.${className};`
            ) {
                return true;
            }
        }

        return false;
    }
}