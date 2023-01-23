const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Импортируем плагин
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// Импортируем плагин

let mode = "development";
let target = "web"; // в режиме разработки browserslist не используется

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

if (process.env.SERVE) {
  // Используем плагин только если запускаем devServer
  plugins.push(new ReactRefreshWebpackPlugin());
} // Данный код должен быть размещен после объявления массива plugins

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html", // Данный html будет использован как шаблон
  }),
  new MiniCssExtractPlugin(),
]; // Создаем массив плагинов

module.exports = {
  mode,
  target,
  plugins, // Сокращенная запись plugins: plugins в ES6+
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: {
    hot: true,
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] }, // Добавляем загрузчик для html
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      }, // Добавляем загрузчики стилей
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource", // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/, // не обрабатываем файлы из node_modules
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции
            // при каждом запуске
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
