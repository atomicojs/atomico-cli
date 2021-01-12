import { Options, Output, BuildReturn } from "./src/create-build.js";

export { Plugin, Ref, Build } from "./src/create-build.js";

export function createBuild(options: Options): Promise<BuildReturn>;