"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
const path_1 = require("path");
const schema = (0, nexus_1.makeSchema)({
    types: [],
    outputs: {
        schema: (0, path_1.join)(process.cwd(), "schema.graphql"),
        typegen: (0, path_1.join)(process.cwd(), "nexus-typegen.ts"), // 3
    },
});
exports.default = schema;
//# sourceMappingURL=shema.js.map