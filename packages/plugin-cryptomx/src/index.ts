import { Plugin } from "@ai16z/eliza";
import { helloWorldAction } from "./actions/helloWorldAction.ts";
// import { goalEvaluator } from "./evaluators/goal.ts";
// import { timeProvider } from "./providers/time.ts";

export * as actions from "./actions/index.ts";
export * as evaluators from "./evaluators/index.ts";
export * as providers from "./providers/index.ts";

export const cryptomxPlugin: Plugin = {
    name: "cryptomx",
    description: "testing plugins",
    actions: [helloWorldAction],
    evaluators: [],
    providers: [],
};
