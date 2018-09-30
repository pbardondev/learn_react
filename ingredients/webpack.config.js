module.exports = {
    entry: "./src/index.js",
     output: {
         path: "/Users/bardon/sandbox/git-projects/learn-react/ingredients/dist/assets",
         filename: "bundle.js"
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: [ 
                        '@babel/preset-env',
                        // '@babel/stage-0',
                        '@babel/react'
                        // '@babel/es2015'
                    ]
                 }
             }
         ]
     }
 }