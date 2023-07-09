---
slug: /gta/lua/array
title: array
---

# array

```ebnf
Methods to work with C arrays
```

## Functions

## `array:read_byte`

### Parameters

| Name  | Type | Description            |
| ----- | ---- | ---------------------- |
| index | int  | Element index in array |

### Return value

| Type | Description                       |
| ---- | --------------------------------- |
| int  | UInt8 value for requested element |

### Methods

* `array:read_byte(index)`

## `array:read_word`

### Parameters

| Name  | Type | Description            |
| ----- | ---- | ---------------------- |
| index | int  | Element index in array |

### Return value

| Type | Description                        |
| ---- | ---------------------------------- |
| int  | UInt16 value for requested element |

### Methods

* `array:read_word(index)`

## `array:read_long`

### Parameters

| Name  | Type | Description            |
| ----- | ---- | ---------------------- |
| index | int  | Element index in array |

### Return value

| Type | Description                        |
| ---- | ---------------------------------- |
| int  | UInt32 value for requested element |

### Methods

* `array:read_long(index)`

## `array:read_int64`

### Parameters

| Name  | Type | Description            |
| ----- | ---- | ---------------------- |
| index | int  | Element index in array |

### Return value

| Type | Description                        |
| ---- | ---------------------------------- |
| int  | UInt64 value for requested element |

### Methods

* `array:read_int64(index)`

## `array:size`

### Return value

| Type | Description                     |
| ---- | ------------------------------- |
| int  | Current element count for array |

### Methods

* `array:size()`

## Examples

### Process incoming script hash event

```lua
function OnScriptEvent(ply, args)
	console.log("Script with hash " .. args:read_long(0) .. " incoming from player " .. ply .. " with argc " .. args:size() - 1 .. "\n")

	return true
end
```
