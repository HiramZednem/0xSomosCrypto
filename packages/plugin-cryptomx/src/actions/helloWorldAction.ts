import {
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    type Action,
} from "@ai16z/eliza";

export const helloWorldAction: Action = {
    name: "HELLO_WORLD",
    similes: [
        "HELLO_WORLD",
        "HELLO",
    ],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description: // this is for developers
        "Esta es una prueba de cómo funcionan las acciones",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: {[key: string]: unknown},
        _callback: HandlerCallback
    ): Promise<boolean> => {


        // scrapear informacion de wallet
        const message = "Acabo de invocar la accion hello_world... publicando esto en x..."

        _callback({text: message});
        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "ejecuta la accion HELLO_WORLD" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
            user: "{{user1}}",
            content: { text: "saluda hello_world" },
            },
            {
            user: "{{user2}}",
            content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
            user: "{{user1}}",
            content: { text: "hello_world" },
            },
            {
            user: "{{user2}}",
            content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
            user: "{{user1}}",
            content: { text: "Inicia HELLO_WORLD" },
            },
            {
            user: "{{user2}}",
            content: { text: "", action: "HELLO_WORLD" },
            },
        ],

    ] as ActionExample[][],
} as Action;