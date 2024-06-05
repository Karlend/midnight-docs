---
slug: /gta/lua/bit
title: bit
---

# bit

```ebnf
bla bla bla
```

## Functions

## `buffer:begin`
`Sets the reading position to the beginning. This function is recommended to be used after the completion of reading the message inside the Lua script.`

### Methods
- `buffer:begin()`

## `buffer:read_byte`


### Return value
| Type | Description |
| ---- | ----------- |
| int  | UInt8 value |

### Methods
- `buffer:read_byte()`


### function bit.set
`Sets a bit in an integer.`

- Parameters:

  | Name | Type    | Description              |
  | ---- | ------- | ------------------------ |
  | var  | integer | The integer value.       |
  | bit  | integer | The bit position to set. |

- Return:

  | Type    | Description                             |
  | ------- | --------------------------------------- |
  | integer | The new integer value with the bit set. |

### function bit.is_set
`Checks if a bit is set in an integer.`

- Parameters:

  | Name | Type    | Description                |
  | ---- | ------- | -------------------------- |
  | var  | integer | The integer value.         |
  | bit  | integer | The bit position to check. |

- Return:

  | Type    | Description             |
  | ------- | ----------------------- |
  | boolean | Whether the bit is set. |