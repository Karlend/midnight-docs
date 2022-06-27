---
slug: /gta/lua/memory
title: memory
---

# memory

```ebnf
Methods to work with game memory
```

## Data types

### ptr\_info\_t

| Member       | Type   | Description                      |
| ------------ | ------ | -------------------------------- |
| name         | string | Prettified memory pointer string |
| address      | void\* | Absolute memory address          |
| rel\_address | void\* | Memory address relative to DLL   |
| module\_base | void\* | DLL instance                     |
| module\_name | string | DLL name                         |

## Functions

## `*memory.alloc`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| size | int  | None given  |

### Return value

| Type   | Description             |
| ------ | ----------------------- |
| void\* | Allocated memory region |

### Methods:

* `*memory.alloc(size)`

## `memory.free`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:

* `memory.free(addr)`

## `memory.is_valid_addr`

### Parameters

| Name | Type   | Description | Optional |
| ---- | ------ | ----------- | -------- |
| addr | void\* | None given  |          |
| size | int    | None given  | +        |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:

* `memory.is_valid_addr(addr, size)`

## `*memory.search`

### Parameters

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| module\_name | string | None given  |
| pattern      | string | None given  |

### Return value

| Type   | Description         |
| ------ | ------------------- |
| void\* | Found memory region |

### Methods:

* `*memory.search(module_name, pattern)`

## `*memory.absolute`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type   | Description        |
| ------ | ------------------ |
| void\* | Dereferenced value |

### Methods:

* `*memory.absolute(addr)`

## `*memory.relative`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type   | Description                           |
| ------ | ------------------------------------- |
| void\* | Address relative to the addr argument |

### Methods:

* `*memory.relative(addr)`

## `*memory.add`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | int    | None given  |

### Return value

| Type   | Description |
| ------ | ----------- |
| void\* | None given  |

### Methods:

* `*memory.add(addr, value)`

## `*memory.sub`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | int    | None given  |

### Return value

| Type   | Description |
| ------ | ----------- |
| void\* | None given  |

### Methods:

* `*memory.sub(addr, value)`

## `*memory.distribute`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type         | Description                   |
| ------------ | ----------------------------- |
| ptr\_info\_t | Collected pointer information |

### Methods:

* `*memory.distribute(addr)`

## `memory.read_byte`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | None given  |

### Methods:

* `memory.read_byte(addr)`

## `memory.read_word`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | None given  |

### Methods:

* `memory.read_word(addr)`

## `memory.read_long`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | None given  |

### Methods:

* `memory.read_long(addr)`

## `memory.read_int64`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | None given  |

### Methods:

* `memory.read_int64(addr)`

## `memory.read_float`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type  | Description |
| ----- | ----------- |
| float | None given  |

### Methods:

* `memory.read_float(addr)`

## `memory.read_double`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type  | Description |
| ----- | ----------- |
| float | None given  |

### Methods:

* `memory.read_double(addr)`

## `memory.read_vector`

### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| addr | void\* | None given  |

### Return value

| Type    | Description |
| ------- | ----------- |
| Vector3 | None given  |

### Methods:

* `memory.read_vector(addr)`

## `memory.write_byte`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | int    | None given  |

### Methods:

* `memory.write_byte(addr, value)`

## `memory.write_word`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | int    | None given  |

### Methods:

* `memory.write_word(addr, value)`

## `memory.write_long`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | int    | None given  |

### Methods:

* `memory.write_long(addr, value)`

## `memory.write_int64`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | int    | None given  |

### Methods:

* `memory.write_int64(addr, value)`

## `memory.write_float`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | float  | None given  |

### Methods:

* `memory.write_float(addr, value)`

## `memory.write_double`

### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| addr  | void\* | None given  |
| value | float  | None given  |

### Methods:

* `memory.write_double(addr, value)`

## `memory.write_vector`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| addr  | void\*  | None given  |
| value | Vector3 | None given  |

### Methods:

* `memory.write_vector(addr, value)`

## Examples

### Finding GameState variable address

```lua
local GameState = {}

function OnInit()
  local addr = memory.search("GTA5.exe", "48 85 C9 74 4B 83 3D")
  
  if not memory.is_valid_addr(addr) then
    print("[Lua] Failed to find GameState address.")
    return
  end
  
  addr = memory.add(addr, 7)
  addr = memory.relative(addr)
  addr = memory.add(addr, 1)
  
  GameState = addr
  
  print("GameState addr is " .. memory.distribute(GameState).name)
end
```
