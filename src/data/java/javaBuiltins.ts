import { JavaBuiltin } from "../../types/builtin";

import { javaBasics } from "./basics";
import { javaOperators } from "./operators";
import { javaControlFlow } from "./controlFlow";
import { javaStrings } from "./strings";

export const javaBuiltins: JavaBuiltin[] = [

    ...javaBasics,

    ...javaOperators,

    ...javaControlFlow,

    ...javaStrings

];