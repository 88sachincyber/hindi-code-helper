import { JavaBuiltin } from "../../types/builtin";

export const javaOperators: JavaBuiltin[] = [

    {
        name: "+",
        type: "operator",
        category: "Arithmetic",
        owner: "Operators",
        hindi: "+ ka use addition ke liye hota hai. Strings ke saath ye text ko join bhi karta hai.",
        simple: "+ = add ya text join",
        syntax: "a + b",
        example: `int result = 10 + 5;
String name = "Sachin" + " Yadav";`,
        output: `15
Sachin Yadav`
    },

    {
        name: "-",
        type: "operator",
        category: "Arithmetic",
        owner: "Operators",
        hindi: "- ka use ek number se doosra number subtract karne ke liye hota hai.",
        simple: "- = minus",
        syntax: "a - b",
        example: "int result = 10 - 5;",
        output: "5"
    },

    {
        name: "*",
        type: "operator",
        category: "Arithmetic",
        owner: "Operators",
        hindi: "* ka use multiplication ke liye hota hai.",
        simple: "* = multiply",
        syntax: "a * b",
        example: "int result = 10 * 5;",
        output: "50"
    },

    {
        name: "/",
        type: "operator",
        category: "Arithmetic",
        owner: "Operators",
        hindi: "/ ka use division ke liye hota hai.",
        simple: "/ = divide",
        syntax: "a / b",
        example: "int result = 10 / 2;",
        output: "5",
        tip: "int / int karne par decimal part nahi milta."
    },

    {
        name: "%",
        type: "operator",
        category: "Arithmetic",
        owner: "Operators",
        hindi: "% remainder/modulus operator hai. Division ke baad bacha hua remainder deta hai.",
        simple: "% = remainder",
        syntax: "a % b",
        example: "int result = 10 % 3;",
        output: "1",
        tip: "Even/odd check karne mein % bahut useful hai."
    },

    {
        name: "++",
        type: "operator",
        category: "Increment",
        owner: "Operators",
        hindi: "++ variable ki value ko 1 se increase karta hai.",
        simple: "++ = 1 increase",
        syntax: "a++",
        example: `int count = 5;
count++;`,
        output: "count = 6"
    },

    {
        name: "--",
        type: "operator",
        category: "Decrement",
        owner: "Operators",
        hindi: "-- variable ki value ko 1 se decrease karta hai.",
        simple: "-- = 1 decrease",
        syntax: "a--",
        example: `int count = 5;
count--;`,
        output: "count = 4"
    },

    {
        name: "==",
        type: "operator",
        category: "Comparison",
        owner: "Operators",
        hindi: "== check karta hai ki dono values equal hain ya nahi.",
        simple: "== = equal check",
        syntax: "a == b",
        example: `int a = 10;
int b = 10;

System.out.println(a == b);`,
        output: "true",
        tip: "Objects/String ke liye content compare karne ke liye usually equals() use karo."
    },

    {
        name: "!=",
        type: "operator",
        category: "Comparison",
        owner: "Operators",
        hindi: "!= check karta hai ki dono values different hain ya nahi.",
        simple: "!= = not equal",
        syntax: "a != b",
        example: "System.out.println(10 != 5);",
        output: "true"
    },

    {
        name: ">",
        type: "operator",
        category: "Comparison",
        owner: "Operators",
        hindi: "> check karta hai ki left value right value se badi hai ya nahi.",
        simple: "> = greater than",
        syntax: "a > b",
        example: "System.out.println(10 > 5);",
        output: "true"
    },

    {
        name: "<",
        type: "operator",
        category: "Comparison",
        owner: "Operators",
        hindi: "< check karta hai ki left value right value se chhoti hai ya nahi.",
        simple: "< = less than",
        syntax: "a < b",
        example: "System.out.println(5 < 10);",
        output: "true"
    },

    {
        name: ">=",
        type: "operator",
        category: "Comparison",
        owner: "Operators",
        hindi: ">= check karta hai ki left value greater ya equal hai.",
        simple: ">= = greater or equal",
        syntax: "a >= b",
        example: "System.out.println(10 >= 10);",
        output: "true"
    },

    {
        name: "<=",
        type: "operator",
        category: "Comparison",
        owner: "Operators",
        hindi: "<= check karta hai ki left value less ya equal hai.",
        simple: "<= = less or equal",
        syntax: "a <= b",
        example: "System.out.println(5 <= 10);",
        output: "true"
    },

    {
        name: "&&",
        type: "operator",
        category: "Logical",
        owner: "Operators",
        hindi: "&& logical AND hai. Dono conditions true honi chahiye.",
        simple: "&& = dono conditions true",
        syntax: "condition1 && condition2",
        example: `int age = 22;

System.out.println(age >= 18 && age <= 60);`,
        output: "true"
    },

    {
        name: "||",
        type: "operator",
        category: "Logical",
        owner: "Operators",
        hindi: "|| logical OR hai. Kam se kam ek condition true honi chahiye.",
        simple: "|| = koi ek condition true",
        syntax: "condition1 || condition2",
        example: "System.out.println(true || false);",
        output: "true"
    },

    {
        name: "!",
        type: "operator",
        category: "Logical",
        owner: "Operators",
        hindi: "! boolean value ko ulta kar deta hai. true ko false aur false ko true.",
        simple: "! = condition ko reverse",
        syntax: "!condition",
        example: "System.out.println(!true);",
        output: "false"
    },

    {
        name: "=",
        type: "operator",
        category: "Assignment",
        owner: "Operators",
        hindi: "= right side ki value ko left side variable mein store karta hai.",
        simple: "= value assign karna",
        syntax: "variable = value;",
        example: "int age = 22;",
        output: "age = 22"
    },

    {
        name: "+=",
        type: "operator",
        category: "Assignment",
        owner: "Operators",
        hindi: "+= existing value mein value add karke dobara store karta hai.",
        simple: "+= add karke assign",
        syntax: "a += b;",
        example: `int count = 10;
count += 5;`,
        output: "15"
    },

    {
        name: "-=",
        type: "operator",
        category: "Assignment",
        owner: "Operators",
        hindi: "-= existing value se value subtract karke dobara store karta hai.",
        simple: "-= subtract karke assign",
        syntax: "a -= b;",
        example: `int count = 10;
count -= 3;`,
        output: "7"
    },

    {
        name: "*=",
        type: "operator",
        category: "Assignment",
        owner: "Operators",
        hindi: "*= existing value ko multiply karke result store karta hai.",
        simple: "*= multiply karke assign",
        syntax: "a *= b;",
        example: `int count = 10;
count *= 3;`,
        output: "30"
    },

    {
        name: "/=",
        type: "operator",
        category: "Assignment",
        owner: "Operators",
        hindi: "/= existing value ko divide karke result store karta hai.",
        simple: "/= divide karke assign",
        syntax: "a /= b;",
        example: `int count = 10;
count /= 2;`,
        output: "5"
    },

    {
        name: "?",
        type: "operator",
        category: "Ternary",
        owner: "Operators",
        hindi: "Ternary operator short if-else ki tarah kaam karta hai.",
        simple: "? = short if-else",
        syntax: "condition ? value1 : value2",
        example: `int age = 20;

String result = age >= 18
    ? "Adult"
    : "Minor";`,
        output: "Adult"
    }
];