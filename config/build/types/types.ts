export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type BuildModeType = "production" | "development";

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildModeType;
}
