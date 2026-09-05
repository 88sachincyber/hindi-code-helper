import * as vscode from "vscode";
import { javaBuiltins } from "../data/java/javaBuiltins";
import { JavaBuiltin } from "../types/builtin";
import { JavaSymbolResolver } from "../utils/javaSymbolResolver";

export class JavaHoverProvider implements vscode.HoverProvider {

    private resolver = new JavaSymbolResolver();

    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.ProviderResult<vscode.Hover> {

        const symbolInfo = this.resolver.resolve(
            document,
            position
        );

        if (!symbolInfo) {
            return;
        }

        const builtin = this.findBuiltin(symbolInfo);

        if (!builtin) {
            return;
        }

        const markdown = this.createMarkdown(builtin);

        return new vscode.Hover(
            new vscode.MarkdownString(markdown)
        );
    }

    private findBuiltin(
    symbolInfo: {
        symbol: string;
        type?: string;
        owner?: string;
    }
): JavaBuiltin | undefined {

    /*
     * Best case:
     *
     * owner + method
     *
     * Example:
     *
     * String + length
     * ArrayList + add
     * HashMap + get
     */
    if (symbolInfo.owner) {

        const exactMatch = javaBuiltins.find(item =>
            item.name === symbolInfo.symbol &&
            item.owner === symbolInfo.owner
        );

        if (exactMatch) {
            return exactMatch;
        }
    }

    /*
     * Second fallback:
     *
     * Match by class/category.
     */
    if (symbolInfo.type) {

        const categoryMatch = javaBuiltins.find(item =>
            item.name === symbolInfo.symbol &&
            item.category === symbolInfo.type
        );

        if (categoryMatch) {
            return categoryMatch;
        }
    }

    /*
     * Last fallback:
     *
     * Match only by name.
     */
    return javaBuiltins.find(
        item => item.name === symbolInfo.symbol
    );
}

    private createMarkdown(item: JavaBuiltin): string {

        let markdown = "";

        markdown += `### 🇮🇳 ${item.name} kya karta hai?\n\n`;

        markdown += `${item.hindi}\n\n`;

        markdown += `**Simple words:** ${item.simple}\n\n`;

        markdown += `**Category:** ${item.category}\n\n`;

        markdown += `**Syntax:**\n`;

        markdown += "```java\n";
        markdown += `${item.syntax}\n`;
        markdown += "```\n\n";

        markdown += `**Example:**\n`;

        markdown += "```java\n";
        markdown += `${item.example}\n`;
        markdown += "```\n";

        if (item.output) {

            markdown += `\n**Output:**\n`;

            markdown += "```text\n";
            markdown += `${item.output}\n`;
            markdown += "```\n";
        }

        if (item.tip) {

            markdown += `\n💡 **Tip:** ${item.tip}\n`;
        }

        return markdown;
    }
}