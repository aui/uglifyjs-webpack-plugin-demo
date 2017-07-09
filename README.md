# uglifyjs-webpack-plugin-demo

Use multi-process and cache to speed up "uglifyjs-webpack-plugin".

```
[DEMO 1] UglifyjsWebpackPlugin Options: {
    "cache": false,
    "maxWorkers": 1
}
Hash: 0597707cf257ceb59ef1
Version: webpack 3.1.0
Time: 10944ms
-----------------------------------
[DEMO 2] UglifyjsWebpackPlugin Options: {
    "cache": false,
    "maxWorkers": 32
}
Hash: 0597707cf257ceb59ef1
Version: webpack 3.1.0
Time: 6774ms
-----------------------------------
[DEMO 3] UglifyjsWebpackPlugin Options: {
    "cache": true,
    "maxWorkers": 32
}
Hash: 0597707cf257ceb59ef1
Version: webpack 3.1.0
Time: 1458ms
```

More: [![Build Status](https://travis-ci.org/aui/uglifyjs-webpack-plugin-demo.svg?branch=master)](https://travis-ci.org/aui/uglifyjs-webpack-plugin-demo)