---
slug: /gta/lua/buffer
title: buffer
---

# buffer

```ebnf
To transfer data over the network, Rage uses a special container that combines the functions of reading and writing data to a buffer. Midnight Lua provides a set of functions for reading data from such containers.

These functions are declared in the buffer class. This class is used in the OnNetworkEvent event.
```

## Functions

## `buffer:begin`
`Sets the reading position to the beginning. This function is recommended to be used after the completion of reading the message inside the Lua script.`

### Methods:
- `buffer:begin()`

## `buffer:read_byte`


### Return value
| Type | Description |
| ---- | ----------- |
| int  | UInt8 value |

### Methods:
- `buffer:read_byte()`

## `buffer:read_word`


### Return value
| Type | Description  |
| ---- | ------------ |
| int  | UInt16 value |

### Methods:
- `buffer:read_word()`

## `buffer:read_long`


### Return value
| Type | Description  |
| ---- | ------------ |
| int  | UInt32 value |

### Methods:
- `buffer:read_long()`

## `buffer:read_int64`


### Return value
| Type | Description  |
| ---- | ------------ |
| int  | UInt64 value |

### Methods:
- `buffer:read_int64()`

## `buffer:read_float`


### Return value
| Type  | Description |
| ----- | ----------- |
| float | float value |

### Methods:
- `buffer:read_float()`

## `buffer:read_bit`


### Return value
| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:
- `buffer:read_bit()`

## `buffer:read_array`


### Parameters
| Name | Type  | Description |
| ---- | ----- | ----------- |
| data | void* | None given  |
| size | int   | None given  |

### Return value
| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:
- `buffer:read_array(data, size)`

## `buffer:skip`


### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| bits | int  | None given  |

### Return value
| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:
- `buffer:skip(bits)`

## `buffer:skip_to_pos`


### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| bits | int  | None given  |

### Return value
| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:
- `buffer:skip_to_pos(bits)`

## Examples

### Process incoming FIRE_EVENT network message 

```lua
function OnNetworkEvent(ply, event, buf)
	local event_id = net.get_hash(event)
	local event_name = net.get_name(event)
	local player_name = player.get_name(ply)
	
	if event_id == -1352177760 then -- joaat("FIRE_EVENT")
		local count = buf:read_long(3)
		buf:begin()

		console.log_color(console_color.Red, "[Lua] Fire Event | Count: " .. count)
	end

	return true
end
```