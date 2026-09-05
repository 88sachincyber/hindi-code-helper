import { JavaBuiltin } from "../../types/builtin";

export const javaBasics: JavaBuiltin[] = [

    {
        name: "class",
        type: "keyword",
        category: "Basics",
        owner: "Basics",
        hindi: "class ka use Java mein ek blueprint banane ke liye hota hai. Iske andar variables aur methods define kar sakte hain.",
        simple: "class = object banane ka blueprint",
        syntax: "class ClassName { }",
        example: `class Student {
    String name;
}`,
        tip: "Class khud blueprint hai, object us blueprint ka actual instance hota hai."
    },

    {
        name: "public",
        type: "keyword",
        category: "Access Modifier",
        owner: "Basics",
        hindi: "public ka matlab hai ki jis class, method ya variable ko public banaya gaya hai, usse doosri classes se bhi access kiya ja sakta hai.",
        simple: "public = bahar se bhi access kar sakte ho",
        syntax: "public void method() { }",
        example: `public void hello() {
    System.out.println("Hello");
}`,
        tip: "public sabse open access modifier hai."
    },

    {
        name: "private",
        type: "keyword",
        category: "Access Modifier",
        owner: "Basics",
        hindi: "private ka matlab hai ki member ko sirf usi class ke andar access kiya ja sakta hai.",
        simple: "private = sirf same class ke andar",
        syntax: "private String name;",
        example: `class Student {

    private String name;

    void setName(String name) {
        this.name = name;
    }
}`,
        tip: "Encapsulation mein private ka bahut use hota hai."
    },

    {
        name: "protected",
        type: "keyword",
        category: "Access Modifier",
        owner: "Basics",
        hindi: "protected member ko same package ke andar aur child classes mein access kiya ja sakta hai.",
        simple: "protected = package + child class access",
        syntax: "protected int age;",
        example: `class Person {
    protected int age;
}`,
        tip: "Inheritance ke time protected useful hota hai."
    },

    {
        name: "static",
        type: "keyword",
        category: "Class Member",
        owner: "Basics",
        hindi: "static member object se nahi, directly class ke naam se access kiya ja sakta hai.",
        simple: "static = class se directly access",
        syntax: "static int count;",
        example: `class Counter {
    static int count = 0;
}

System.out.println(Counter.count);`,
        tip: "main() method bhi static hota hai."
    },

    {
        name: "final",
        type: "keyword",
        category: "Modifier",
        owner: "Basics",
        hindi: "final variable ki value ko dobara change nahi kar sakte. Final method ko override nahi kar sakte aur final class ko extend nahi kar sakte.",
        simple: "final = change/override/extend ko rokna",
        syntax: "final int MAX = 100;",
        example: `final int MAX = 100;

// MAX = 200; // Error`,
        tip: "Variable, method aur class — tino ke saath final ka meaning thoda different hota hai."
    },

    {
        name: "new",
        type: "keyword",
        category: "Object Creation",
        owner: "Basics",
        hindi: "new ka use class ka naya object banane ke liye hota hai.",
        simple: "new = naya object banana",
        syntax: "ClassName object = new ClassName();",
        example: `Student student = new Student();`,
        tip: "new generally heap memory mein object create karta hai."
    },

    {
        name: "this",
        type: "keyword",
        category: "OOP",
        owner: "Basics",
        hindi: "this current object ko refer karta hai. Jab instance variable aur parameter ka naam same ho, tab this bahut useful hota hai.",
        simple: "this = current object",
        syntax: "this.variable",
        example: `class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}`,
        tip: "this ka matlab hota hai jis object par current method/constructor chal raha hai."
    },

    {
        name: "super",
        type: "keyword",
        category: "OOP",
        owner: "Basics",
        hindi: "super parent class ke members ya constructor ko access karne ke liye use hota hai.",
        simple: "super = parent class ko refer karna",
        syntax: "super.method();",
        example: `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    void sound() {
        super.sound();
        System.out.println("Bark");
    }
}`,
        tip: "super ka use inheritance mein hota hai."
    },

    {
        name: "extends",
        type: "keyword",
        category: "Inheritance",
        owner: "Basics",
        hindi: "extends ka use ek class ko doosri class se inherit karane ke liye hota hai.",
        simple: "extends = parent class se features lena",
        syntax: "class Child extends Parent { }",
        example: `class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
}`,
        tip: "Java mein class-to-class inheritance ke liye extends use hota hai."
    },

    {
        name: "implements",
        type: "keyword",
        category: "Interface",
        owner: "Basics",
        hindi: "implements ka use class ko interface ke rules/methods implement karne ke liye hota hai.",
        simple: "implements = interface ke rules follow karna",
        syntax: "class ClassName implements InterfaceName { }",
        example: `interface Animal {
    void sound();
}

class Dog implements Animal {

    public void sound() {
        System.out.println("Bark");
    }
}`,
        tip: "Ek class multiple interfaces implement kar sakti hai."
    },

    {
        name: "interface",
        type: "keyword",
        category: "OOP",
        owner: "Basics",
        hindi: "interface ek contract jaisa hota hai. Ye batata hai ki implementing class ko kaunse methods provide karne chahiye.",
        simple: "interface = rules/contract",
        syntax: "interface InterfaceName { }",
        example: `interface Vehicle {
    void start();
}`,
        tip: "Interface abstraction aur loose coupling ke liye important hai."
    },

    {
        name: "abstract",
        type: "keyword",
        category: "OOP",
        owner: "Basics",
        hindi: "abstract ka use incomplete class ya method banane ke liye hota hai. Abstract method ka implementation child class mein diya jata hai.",
        simple: "abstract = incomplete blueprint",
        syntax: "abstract class Animal { }",
        example: `abstract class Animal {

    abstract void sound();
}`,
        tip: "Abstract class ka direct object nahi bana sakte."
    },

    {
        name: "return",
        type: "keyword",
        category: "Methods",
        owner: "Basics",
        hindi: "return method se result wapas bhejne ke liye use hota hai.",
        simple: "return = result wapas dena",
        syntax: "return value;",
        example: `int add(int a, int b) {
    return a + b;
}`,
        output: "add(2, 3) → 5"
    },

    {
        name: "void",
        type: "keyword",
        category: "Methods",
        owner: "Basics",
        hindi: "void ka matlab hai method koi value return nahi karega.",
        simple: "void = kuch return nahi karega",
        syntax: "void methodName() { }",
        example: `void greet() {
    System.out.println("Hello");
}`,
        tip: "void method mein return value nahi hoti."
    },

    {
        name: "instanceof",
        type: "keyword",
        category: "Type Checking",
        owner: "Basics",
        hindi: "instanceof check karta hai ki koi object kisi particular class ya interface ka object hai ya nahi.",
        simple: "instanceof = object ka type check karna",
        syntax: "object instanceof ClassName",
        example: `String name = "Sachin";

if (name instanceof String) {
    System.out.println("It is String");
}`,
        output: "It is String"
    },

    {
        name: "import",
        type: "keyword",
        category: "Packages",
        owner: "Basics",
        hindi: "import ka use doosre package ki class ko apni Java file mein use karne ke liye hota hai.",
        simple: "import = doosri class ko use karna",
        syntax: "import package.ClassName;",
        example: `import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();`,
        tip: "java.lang classes jaise String ko normally manually import nahi karna padta."
    },

    {
        name: "package",
        type: "keyword",
        category: "Packages",
        owner: "Basics",
        hindi: "package related Java classes ko ek group/namespace mein organize karta hai.",
        simple: "package = classes ko organize karna",
        syntax: "package packageName;",
        example: `package com.example.app;

public class Main {
}`,
        tip: "Package name generally folder structure se match kiya jata hai."
    },

    {
        name: "null",
        type: "keyword",
        category: "Reference",
        owner: "Basics",
        hindi: "null ka matlab hai reference variable abhi kisi object ko point nahi kar raha.",
        simple: "null = koi object reference nahi",
        syntax: "String name = null;",
        example: `String name = null;

if (name == null) {
    System.out.println("No name");
}`,
        output: "No name",
        tip: "null aur empty string \"\" same nahi hote."
    },

    {
        name: "var",
        type: "keyword",
        category: "Variables",
        owner: "Basics",
        hindi: "var compiler ko variable ka type automatically samajhne deta hai. Ye Java 10 se available hai.",
        simple: "var = compiler type khud detect kare",
        syntax: "var variable = value;",
        example: `var name = "Sachin";
var age = 22;`,
        tip: "var sirf local variables ke liye use hota hai."
    }
];