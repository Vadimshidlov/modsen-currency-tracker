import { BuildOptions } from "config/build/types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevserver(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
    };
}
