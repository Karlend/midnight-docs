---
slug: /gta/lua/http
title: http
---

# http

```ebnf
Http request to fetch/post info
```

## Functions

## `http.get`

`Get data from http request.`

### Parameters:

| Name        | Type     | Description                  |
| ----------- | -------- | ---------------------------- |
| link        | string   | Link to fetch                |
| on_response | function | Callback on successful fetch |

### Methods:

* `http.get(link, on_response)`

### Callbacks:

* `function on_response(code, headers, content)`