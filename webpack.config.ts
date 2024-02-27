import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import path from "path";
import webpack from "webpack";

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

interface EnvVariable {
    mode: BuildModeType;
    port: number;
}

export default (env: EnvVariable) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const options = {
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths,
    };

    const isDev = env.mode === "development";
    const isProd = env.mode === "production";

    return {
        mode: env.mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: options.paths.html }),
            isDev && new webpack.ProgressPlugin(),
            isDev && new Dotenv(),
            isProd &&
                new MiniCssExtractPlugin({
                    filename: "css/[name].[contenthash-8].css",
                    chunkFilename: "css/[name].[contenthash-8].css",
                }),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },

                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: [{ loader: "@svgr/webpack", options: { icon: true } }],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@": options.paths.src,
            },
        },
        devtool: isDev && "inline-source-map",
        devServer: isDev
            ? {
                  port: options.port ?? 3000,
                  open: true,
                  historyApiFallback: true,
              }
            : undefined,
    };
};
