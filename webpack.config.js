const path = require("path")

const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),

        filename: "[name].[hash].js"
    },

    devServer: {
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            }
        ]
    }
}

// const path = require("path") - импортируется модуль path из Node.js. Этот модуль предоставляет функциональность для работы с путями файловой системы.

// const {CleanWebpackPlugin} = require("clean-webpack-plugin") - импортируется класс CleanWebpackPlugin из пакета clean-webpack-plugin. Этот плагин используется для очистки папки с собранными файлами перед каждой сборкой, чтобы избежать дубликатов и ненужных файлов.

// const HTMLWebpackPlugin = require("html-webpack-plugin") - импортируется класс HTMLWebpackPlugin из пакета html-webpack-plugin. Этот плагин используется для генерации HTML файла с нужными скриптами и ссылками, которые нужны для загрузки вашего приложения.

// module.exports = { - экспортируется конфигурация webpack как объект для дальнейшей настройки.

// mode: "development" указывает, что webpack должен использовать режим разработки, который обеспечивает более быструю сборку и более подробные отчеты об ошибках.

// entry: "./src/index.js" указывает, где находится точка входа вашего приложения, которое webpack должен начать собирать.

// output: {path: path.resolve(__dirname, "dist"), filename: "[name].[hash].js"} определяет куда webpack должен записывать собранный код и как называть файл.

// devServer: {port: 3000,} указывает настройки для сервера разработки, который запускается при запуске скрипта npm start. В данном случае задается порт 3000.

// plugins: [new HTMLWebpackPlugin({template: "./src/index.html"}), new CleanWebpackPlugin()] указывает на массив плагинов, которые используются webpack. В данном случае, используются два плагина:

// HTMLWebpackPlugin - этот плагин генерирует HTML файл с нужными скриптами и ссылками, которые нужны для загрузки вашего приложения. Здесь указывается шаблон, который используется для генерации этого файла.
// CleanWebpackPlugin - этот плагин очищает папку с собранными файлами перед каждой сборкой, чтобы избежать дубликатов и ненужных файлов.
// module: {rules: [{test: /\.(css|less)$/, use: ["style-loader", "css-loader", "less-loader"]}, {test: /\.(jpg|jpeg|png|svg)/, use: ["file-loader"]}]} это поле указывает на модули и правила обработки файлов. Каждое правило состоит из теста, который проверяет расширение файла и массива загрузчиков (loaders), которые используются для обработки этого типа файлов. В данном случае, файлы css и less обрабатываются с помощью style-loader, `css-loader` и less-loader, а файлы jpg, jpeg, png и svg обрабатываются с помощью file-loader.

// style-loader и css-loader используются для обработки css файлов, они добавляют css в тег head документа, а less-loader используется для обработки less файлов.
// file-loader используется для обработки файлов изображений, он копирует файл изображения в папку дистрибутива и возвращает путь к файлу.

// Таким образом, этот конфигурационный файл webpack используется для настройки и настройки сборки React приложения, используя webpack. Этот файл определяет точку входа, выходную папку, настройки сервера разработки, плагины и правила обработки файлов.