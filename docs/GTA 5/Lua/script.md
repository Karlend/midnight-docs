---
slug: /gta/lua/script
title: script
---

# script

```ebnf
Scripts provides the ability to change ingame variables.

Functions script_global:new(), script_local:new() will return script objects which you can read and write.
```

## Functions

## `script.exists`

### Parameters

| Name        | Type   | Description    |
| ----------- | ------ | -------------- |
| script_name | string | Name of script |
| script_hash | int    | Hash of script |

### Return value:

| Type | Description           |
| ---- | --------------------- |
| bool | True if script exists |

### Methods

* `script.exists(script_name)`
* `script.exists(script_hash)`

## `script_global:new`

### Parameters

| Name  | Type | Description  |
| ----- | ---- | ------------ |
| index | int  | Global index |

### Return value:

| Type   | Description |
| ------ | ----------- |
| script | Script wrap |

### Methods

* `script_global:new(index)`

## `script_local:new`

### Parameters

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| script\_name | string | Script name |
| script\_hash | int    | Script hash |
| index        | int    | Local index |

### Return value:

| Type   | Description |
| ------ | ----------- |
| script | Script wrap |

### Methods

* `script_local:new(script_name, index)`
* `script_local:new(script_hash, index)`

## `script:at`

### Parameters

| Name  | Type | Description        |
| ----- | ---- | ------------------ |
| index | int  | Local/Global index |
| size  | int  | Structure size     |

### Return value

| Type   | Description |
| ------ | ----------- |
| script | Script wrap |

### Methods

* `script:at(index, size)`
* `script:at(index)`

## `script:get_byte`

### Return value:

| Type | Description |
| ---- | ----------- |
| int  | Int8 value |

### Methods

* `script:get_byte()`

## `script:get_word`

### Return value

| Type | Description  |
| ---- | ------------ |
| int  | Int16 value |

### Methods

* `script:get_word()`

## `script:get_long`

### Return value

| Type | Description  |
| ---- | ------------ |
| int  | Int32 value |

### Methods

* `script:get_long()`

## `script:get_int64`

### Return value

| Type | Description  |
| ---- | ------------ |
| int  | Int64 value |

### Methods

* `script:get_int64()`

## `script:get_float`

### Return value

| Type  | Description |
| ----- | ----------- |
| float | Float value |

### Methods

* `script:get_float()`

## `script:set_byte`

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Int8 value |

### Methods

* `script:set_byte(value)`

## `script:set_word`

### Parameters

| Name  | Type | Description  |
| ----- | ---- | ------------ |
| value | int  | Int16 value |

### Methods

* `script:set_word(value)`

## `script:set_long`

### Parameters

| Name  | Type | Description  |
| ----- | ---- | ------------ |
| value | int  | Int32 value |

### Methods

* `script:set_long(value)`

## `script:set_int64`

### Parameters

| Name  | Type | Description  |
| ----- | ---- | ------------ |
| value | int  | Int64 value |

### Methods

* `script:set_int64(value)`

## `script:set_float`

### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float | Float value |

### Methods

* `script:set_float(value)`

## Examples

### Demonstration of getting a script magic value for a local player.

```lua
local magic = script_global:new(1630816):at(player.index(), 597):at(508):get_long()
```

### Demonstration of editing amount of lives in mission.

```lua
local lives = script_local:new("fm_mission_controller_2020", 43059):at(865):at(1)
print("Value before editing: " .. tostring(lives:get_long()))
lives:set_long(100)
```
