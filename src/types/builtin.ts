export interface JavaBuiltin {
    name: string;

    type:
        | "class"
        | "method"
        | "function"
        | "keyword"
        | "operator"
        | "concept";

    category: string;

    owner?: string;

    hindi: string;

    simple: string;

    syntax: string;

    example: string;

    output?: string;

    tip?: string;
}

export interface JavaBuiltinGroup {
    name: string;

    description: string;

    builtins: JavaBuiltin[];
}