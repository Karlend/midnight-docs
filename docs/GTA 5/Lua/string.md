---
slug: /gta/lua/string
title: String
---

# string

```ebnf
Provides an API for ASCII strings.
```

## Functions

## `string.joaat`

### Parameters
| Name | Type   | Description             |
| ---- | ------ | ----------------------- |
| str  | string | The string to be hashed |

### Return value
| Type | Description          |
| ---- | -------------------- |
| int  | Hash of given string |

### Methods:
- `string.joaat(str)`

## `string.smart_joaat`


Extended version of the ```string.joaat()```  function.
In general, this is just the function that performs joaat hashing of the incoming string, but with some conditions:
* If the string argument is empty, the 0 will be returned;
* If the string argument is a decimal number, this number will be returned;
* If the string argument is a hexadecimal number, this number will be returned;
* In all other cases, the input string will be hashed.

### Parameters
| Name | Type   | Description             |
| ---- | ------ | ----------------------- |
| str  | string | The string to be hashed |

### Return value
| Type | Description          |
| ---- | -------------------- |
| int  | Hash of given string |

### Methods:
- `string.smart_joaat(str)`