const webpack = require('webpack');
const path = require('path');

function fn1() {
    return webpack({
        entry: './index.js',
        mode: 'none',
        output: {
            iife: false,
            pathinfo: 'verbose',
        },
    });
}
function fn4() {
    return webpack({
        entry: './index.js',
        mode: 'none',
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: 'chunk.[name].[id].[contenthash:6].js',
            path: path.resolve(__dirname, 'dist/deterministic'),
            clean: true,
        },
        optimization: {
            moduleIds: 'deterministic',
            chunkIds: 'deterministic'
        }
    });
}
fn4().run((err, stat)=>{
    // console.log(err, stat);
})
