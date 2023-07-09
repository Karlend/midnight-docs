---
slug: /gta/lua/globals
title: globals
---

# globals

```ebnf
_G functions to make life easier
```

## Functions

## `require`

`Run given file and get value from it.`

### Parameters

| Name | Type   |
| ---- | ------ |
| path | string |

### Return value

| Type | Description              |
| ---- | ------------------------ |
| any  | Returned value from file |

### Methods

* `require(path)`

## `i2f`

`Converts int to float.`

### Parameters

| Name | Type |
| ---- | ---- |
| num  | int  |

### Return value

| Type  | Description              |
| ----- | ------------------------ |
| float | Value converted to float |

### Methods

* `i2f(num)`

## `s2i`

`Converts string to int.`

### Parameters

| Name | Type   |
| ---- | ------ |
| text | string |

### Return value

| Type | Description             |
| ---- | ----------------------- |
| int  | String converted to int |

### Methods

* `s2i(text)`

## `s2f`

`Converts string to float.`

### Parameters

| Name | Type   |
| ---- | ------ |
| text | string |

### Return value

| Type  | Description               |
| ----- | ------------------------- |
| float | String converted to float |

### Methods

* `s2f(text)`
