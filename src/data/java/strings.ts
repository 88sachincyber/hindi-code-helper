import { JavaBuiltin } from "../../types/builtin";

export const javaStrings: JavaBuiltin[] = [

    {
        name: "String",
        type: "class",
        category: "String",
        owner: "String",
        hindi: "String ka use text store karne ke liye hota hai.",
        simple: "String = text store karna",
        syntax: 'String name = "Sachin";',
        example: 'String name = "Sachin";',
        output: "Sachin",
        tip: "Java String immutable hoti hai, matlab existing String ko directly change nahi karte."
    },

    {
        name: "length",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String mein kitne characters hain, ye batata hai.",
        simple: "String ki length/count nikalta hai.",
        syntax: "string.length()",
        example: '"Hello".length();',
        output: "5"
    },

    {
        name: "charAt",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke given index par jo character hai, use return karta hai.",
        simple: "Index se ek character nikalta hai.",
        syntax: "string.charAt(index)",
        example: '"Hello".charAt(1);',
        output: "e",
        tip: "Index 0 se start hota hai."
    },

    {
        name: "substring",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ka ek specific part nikalne ke liye use hota hai.",
        simple: "String ka ek piece nikalta hai.",
        syntax: "string.substring(start, end)",
        example: '"Sachin".substring(1, 4);',
        output: "ach",
        tip: "Start index include hota hai, end index include nahi hota."
    },

    {
        name: "toUpperCase",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke letters ko uppercase mein convert karta hai.",
        simple: "Text ko CAPITAL letters mein convert karta hai.",
        syntax: "string.toUpperCase()",
        example: '"hello".toUpperCase();',
        output: "HELLO"
    },

    {
        name: "toLowerCase",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke letters ko lowercase mein convert karta hai.",
        simple: "Text ko small letters mein convert karta hai.",
        syntax: "string.toLowerCase()",
        example: '"HELLO".toLowerCase();',
        output: "hello"
    },

    {
        name: "trim",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke beginning aur end ke extra spaces ko remove karta hai.",
        simple: "Starting aur ending spaces hataata hai.",
        syntax: "string.trim()",
        example: '"  Hello  ".trim();',
        output: "Hello"
    },

    {
        name: "contains",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Check karta hai ki String ke andar given text present hai ya nahi.",
        simple: "Text ke andar text search karta hai.",
        syntax: "string.contains(sequence)",
        example: '"Hello Java".contains("Java");',
        output: "true"
    },

    {
        name: "equals",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Do Strings ka actual text/content same hai ya nahi, ye check karta hai.",
        simple: "Do Strings ka content compare karta hai.",
        syntax: "string1.equals(string2)",
        example: '"Java".equals("Java");',
        output: "true",
        tip: "String compare karne ke liye == ki jagah equals() commonly use karo."
    },

    {
        name: "equalsIgnoreCase",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Do Strings ko compare karta hai, lekin uppercase/lowercase ka difference ignore karta hai.",
        simple: "Case ignore karke String compare.",
        syntax: "string1.equalsIgnoreCase(string2)",
        example: '"java".equalsIgnoreCase("JAVA");',
        output: "true"
    },

    {
        name: "startsWith",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Check karta hai ki String given text se start hoti hai ya nahi.",
        simple: "Starting text check karta hai.",
        syntax: "string.startsWith(prefix)",
        example: '"Hello Java".startsWith("Hello");',
        output: "true"
    },

    {
        name: "endsWith",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Check karta hai ki String given text par end hoti hai ya nahi.",
        simple: "Ending text check karta hai.",
        syntax: "string.endsWith(suffix)",
        example: '"Hello.java".endsWith(".java");',
        output: "true"
    },

    {
        name: "indexOf",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke andar given character ya text pehli baar kis index par mila, ye batata hai.",
        simple: "Text ka index find karta hai.",
        syntax: "string.indexOf(value)",
        example: '"Hello".indexOf("l");',
        output: "2",
        tip: "Agar value nahi mile to generally -1 return hota hai."
    },

    {
        name: "lastIndexOf",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Given character ya text ki last occurrence ka index return karta hai.",
        simple: "Last occurrence ka index find karta hai.",
        syntax: "string.lastIndexOf(value)",
        example: '"Hello".lastIndexOf("l");',
        output: "3"
    },

    {
        name: "replace",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke matching character ya text ko kisi doosre text se replace karta hai.",
        simple: "Text replace karta hai.",
        syntax: "string.replace(old, new)",
        example: '"Hello Java".replace("Java", "World");',
        output: "Hello World"
    },

    {
        name: "replaceAll",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Regular expression ke according String ke matching parts ko replace karta hai.",
        simple: "Pattern ke basis par text replace.",
        syntax: "string.replaceAll(regex, replacement)",
        example: '"abc123".replaceAll("[0-9]", "");',
        output: "abc",
        tip: "replaceAll() regex use karta hai."
    },

    {
        name: "split",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ko given separator ke basis par multiple parts mein todkar array deta hai.",
        simple: "String ko pieces mein split karta hai.",
        syntax: "string.split(regex)",
        example: '"Java,Python,Go".split(",");',
        output: "[Java, Python, Go]"
    },

    {
        name: "concat",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Do Strings ko join karta hai.",
        simple: "Strings ko jodta hai.",
        syntax: "string1.concat(string2)",
        example: '"Hello ".concat("Java");',
        output: "Hello Java"
    },

    {
        name: "isEmpty",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Check karta hai ki String ki length zero hai ya nahi.",
        simple: "Check karta hai String empty hai ya nahi.",
        syntax: "string.isEmpty()",
        example: '"".isEmpty();',
        output: "true"
    },

    {
        name: "isBlank",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "Check karta hai ki String empty hai ya sirf whitespace se bani hui hai.",
        simple: "Empty ya sirf spaces check karta hai.",
        syntax: "string.isBlank()",
        example: '"   ".isBlank();',
        output: "true",
        tip: "isBlank() Java 11 se available hai."
    },

    {
        name: "strip",
        type: "method",
        category: "String",
        owner: "String",
        hindi: "String ke beginning aur end ke whitespace ko remove karta hai.",
        simple: "Beginning/end whitespace hataata hai.",
        syntax: "string.strip()",
        example: '"  Hello  ".strip();',
        output: "Hello",
        tip: "strip() Unicode-aware hai aur Java 11 se available hai."
    }
];