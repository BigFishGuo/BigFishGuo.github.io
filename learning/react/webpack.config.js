const webpack = require("webpack");
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
//var url = require("url-loader?limit=10000!./file.png");

module.exports = function(env) {
    let environment = env === "production" ? '/build/' : '/dev/';
    let isProd = env === 'production' ? true : false;

    return {
        entry: {
            ep1: ['./src/js/example/ep1.js', './src/jsx/ep1.jsx'],
            ep2: './src/js/example/ep2.js',
            vendor: ["jquery", "react", "react-dom"]
        },
        output: {
            path: path.join(__dirname + environment),
            filename: "js/[name].bundle.js"
        },

        module: {
            rules: [
              {
                test: /\.(jsx|js)$/,
                exclude: '/node_modules/',
                use: "babel-loader?cacheDirectory"
              },
              {
                test: /\.less$/,
                //use: ["style-loader", "css-loader", "less-loader"]
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?minimize=false", "less-loader"]
                })
              }
            ]
        },

        plugins: [
            //雪碧图
            new SpritesmithPlugin({
                src: {
                    cwd: path.join(__dirname, 'src/images/ico'),
                    glob: '*.png'
                },
                target: {
                    image: path.join(__dirname, environment +　'images/sprite/sprite.png'),
                    css: path.join(__dirname, 'src/less/sprite/sprite.less')
                },
                apiOptions: {
                    cssImageRef: "../../.." + environment +　'images/sprite/sprite.png'
                }
            }),

            //压缩js
            new UglifyJSPlugin({
                beautify: !isProd,
                comments: true,
                compress: {
                    warnings: false,
                    drop_console: isProd,
                    collapse_vars: isProd,
                    reduce_vars: isProd,
                }
            }),

            //提取公共js
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "js/vendor.js",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                miniChunks: Infinity
            }),

            //分离css
            new ExtractTextPlugin({
                filename: "css/[name].css",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                disable: false,
                allChunks: true
            }),

            //生成模板
            new HtmlWebpackPlugin({
                template: "./pages/ep1.html",
                filename: "html/ep1.html",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                inject: "body",
                chunks: ["vendor", "ep1"]
            }),
            new HtmlWebpackPlugin({
                template: "./pages/ep2.html",
                filename: "html/ep2.html",
                //输出文件【注意：这里的根路径是module.exports.output.path】
                inject: "body",
                chunks: ["vendor", "ep2"]
            })
        ],

        resolve: {
            extensions: [" ", ".js", "jsx", ".ces6", ".css", ".less", "png", "jpg", "jpeg"],
            alias: {
                "jquery": path.join(__dirname, "node_modules/jquery/dist/jquery.min.js"),
                "react": path.join(__dirname, "node_modules/react/dist/react.min.js"),
                "react-dom": path.join(__dirname, "node_modules/react-dom/dist/react-dom.min.js")
            }
        }
    };
};
