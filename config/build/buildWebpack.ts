import { buildDevserver } from "config/build/buildDevserver";
import { buildLoaders } from "config/build/buildLoaders";
import { buildPlugins } from "config/build/buildPlugins";
import { buildResolvers } from "config/build/buildResolvers";
import { BuildOptions } from "config/build/types/types";
import webpack from "webpack";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;

    const isDev = mode === "development";

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && "inline-source-map",
        devServer: isDev ? buildDevserver(options) : undefined,
    };
}
