import { JavaBuiltin } from "../../types/builtin";

export const javaControlFlow: JavaBuiltin[] = [

    {
        name: "if",
        type: "keyword",
        category: "Control Flow",
        owner: "ControlFlow",
        hindi: "if ka use condition check karne ke liye hota hai. Condition true hui to andar ka code chalega.",
        simple: "if = agar condition true hai",
        syntax: "if (condition) { }",
        example: `int age = 20;

if (age >= 18) {
    System.out.println("Adult");
}`,
        output: "Adult"
    },

    {
        name: "else",
        type: "keyword",
        category: "Control Flow",
        owner: "ControlFlow",
        hindi: "else tab execute hota hai jab if ki condition false ho.",
        simple: "else = agar condition false ho",
        syntax: "if (condition) { } else { }",
        example: `int age = 15;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}`,
        output: "Minor"
    },

    {
        name: "else if",
        type: "keyword",
        category: "Control Flow",
        owner: "ControlFlow",
        hindi: "else if multiple conditions ko one-by-one check karne ke liye use hota hai.",
        simple: "else if = next condition check",
        syntax: "if (...) { } else if (...) { }",
        example: `int marks = 75;

if (marks >= 90) {
    System.out.println("A+");
} else if (marks >= 60) {
    System.out.println("A");
}`,
        output: "A"
    },

    {
        name: "switch",
        type: "keyword",
        category: "Control Flow",
        owner: "ControlFlow",
        hindi: "switch ek value ke according multiple possible cases mein se matching case ko execute karta hai.",
        simple: "switch = multiple choices mein matching case",
        syntax: "switch (value) { case ... }",
        example: `int day = 2;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;
}`,
        output: "Tuesday"
    },

    {
        name: "case",
        type: "keyword",
        category: "Switch",
        owner: "ControlFlow",
        hindi: "case switch ke andar ek possible value ko represent karta hai.",
        simple: "case = ek possible option",
        syntax: "case value:",
        example: `int day = 1;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
}`,
        output: "Monday"
    },

    {
        name: "default",
        type: "keyword",
        category: "Switch",
        owner: "ControlFlow",
        hindi: "default tab execute hota hai jab switch ka koi case match nahi hota.",
        simple: "default = koi case match na ho",
        syntax: "default:",
        example: `int day = 9;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;

    default:
        System.out.println("Invalid day");
}`,
        output: "Invalid day"
    },

    {
        name: "for",
        type: "keyword",
        category: "Loops",
        owner: "ControlFlow",
        hindi: "for loop kisi code ko baar-baar chalane ke liye use hota hai jab hume iterations ka idea pata ho.",
        simple: "for = code repeat karna",
        syntax: "for (initialization; condition; update) { }",
        example: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
        output: `1
2
3
4
5`
    },

    {
        name: "while",
        type: "keyword",
        category: "Loops",
        owner: "ControlFlow",
        hindi: "while loop tab tak code repeat karta hai jab tak condition true hai.",
        simple: "while = jab tak condition true",
        syntax: "while (condition) { }",
        example: `int i = 1;

while (i <= 3) {
    System.out.println(i);
    i++;
}`,
        output: `1
2
3`
    },

    {
        name: "do",
        type: "keyword",
        category: "Loops",
        owner: "ControlFlow",
        hindi: "do-while mein code pehle ek baar execute hota hai, uske baad condition check hoti hai.",
        simple: "do = pehle run, baad mein condition",
        syntax: "do { } while (condition);",
        example: `int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 3);`,
        output: `1
2
3`
    },

    {
        name: "break",
        type: "keyword",
        category: "Loops",
        owner: "ControlFlow",
        hindi: "break current loop ya switch ko turant stop kar deta hai.",
        simple: "break = loop ko rok do",
        syntax: "break;",
        example: `for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        break;
    }

    System.out.println(i);
}`,
        output: `1
2`
    },

    {
        name: "continue",
        type: "keyword",
        category: "Loops",
        owner: "ControlFlow",
        hindi: "continue current iteration ko skip karke next iteration par chala jata hai.",
        simple: "continue = current round skip",
        syntax: "continue;",
        example: `for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    System.out.println(i);
}`,
        output: `1
2
4
5`
    }
];