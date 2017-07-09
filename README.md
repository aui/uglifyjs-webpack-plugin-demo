# uglifyjs-webpack-plugin-demo

Use multi-process and cache to speed up "uglifyjs-webpack-plugin".

Build time contrast:

```
| cache | maxWorkers |    time |
| ------| ---------- | ------- |
| false |          1 | 17480ms |
| false |         32 |  7457ms |
| true  |         32 |  1937ms |
```

DEMO: [![Build Status](https://travis-ci.org/aui/uglifyjs-webpack-plugin-demo.svg?branch=master)](https://travis-ci.org/aui/uglifyjs-webpack-plugin-demo)