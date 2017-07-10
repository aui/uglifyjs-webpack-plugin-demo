# uglifyjs-webpack-plugin-demo

Use multi-process and cache to speed up "uglifyjs-webpack-plugin".

Build time contrast:

```
| cache | workers | time(ms) |
| ------| ------- | -------- |
| false |       1 |    35216 |
| false |      31 |    16345 |
| true  |      31 |     3384 |
```

DEMO: [![Build Status](https://travis-ci.org/aui/uglifyjs-webpack-plugin-demo.svg?branch=master)](https://travis-ci.org/aui/uglifyjs-webpack-plugin-demo)