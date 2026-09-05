import * as vscode from "vscode";
import { JavaHoverProvider } from "./providers/javaHoverProvider";

export function activate(context: vscode.ExtensionContext) {

    vscode.window.showInformationMessage(
        "🇮🇳 HindiCode Helper is ACTIVE!"
    );

    const javaHoverProvider =
        vscode.languages.registerHoverProvider(
            "java",
            new JavaHoverProvider()
        );

    context.subscriptions.push(javaHoverProvider);
}

export function deactivate() {
}