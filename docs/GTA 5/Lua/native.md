---
slug: /gta/lua/native
title: native
---

# native

```ebnf
Midnight Lua provides the ability to call script natives. To define the natives, the external file natives.lua is used, which contains a pre-generated namespace lists of natives.
```

## Functions

## `native.get_native_namespace`

`Get native namespace.`

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| native_hash | int  | Native hash |

### Return value:

| Name      | Type   | Description       |
| --------- | ------ | ----------------- |
| namespace | string | Native namespace. |

### Methods:

* `native.get_native_namespace(native_hash)`

## `native.get_native_name`

`Get native name.`

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| native_hash | int  | Native hash |

### Return value:

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| name | string | Native name. |

### Methods:

* `native.get_native_name(native_hash)`

## `native.get_native_name_full`

`Get native name.`

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| native_hash | int  | Native hash |

### Return value:

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| name | string | Native name. |

### Methods:

* `native.get_native_name_full(native_hash)`

## `native.invoke`

### Parameters
| Name        | Type | Description            | Optional |
| ----------- | ---- | ---------------------- | -------- |
| return_type | int  | Type of returned value |          |
| hash        | int  | Zero-day native hash   |          |
| ...         | any  | Native arguments       | +        |

### Return value
| Type   | Description            |
| ------ | ---------------------- |
| object | Depends on return_type |

### Methods:
- `native.invoke(return_type, hash, ...)`

## Examples

Implementation of the native NETWORK_SESSION_KICK_PLAYER call of the NETWORK namespace

``` lua
NETWORK.NETWORK_SESSION_KICK_PLAYER = function(player_i)
  -- Return type values
    --- 0: void
    --- 1: bool
    --- 2: int
    --- 3: float
    --- 4: string
    --- 5: vector3

  local return_type = 0
  native.invoke(return_type, 0xFA8904DC5F304220, player_i)
end
```

All types except 0 require the return keyword.
The second argument is the hash of the zero-day native.
The third, fourth, and so on arguments are arguments for the native himself.