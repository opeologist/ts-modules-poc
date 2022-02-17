import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default ({ isDev }) => ({
  devServer: isDev
    ? {
        hot: true,
        server: {
          type: "spdy",
        },
      }
    : undefined,
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : false,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".mts", ".mjs", ".json"],
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [new HtmlWebpackPlugin(), isDev && new ReactRefreshPlugin()].filter(
    Boolean
  ),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                transform: {
                  react: {
                    development: isDev,
                    refresh: isDev,
                    runtime: "automatic",
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
});
