---
slug: /gta/lua/system
title: system
---

# system

```ebnf
Provides a low-level API for some operating system functionality.
```

## Functions

## `system.rdtsc`

### Return value
| Type | Description                              |
| ---- | ---------------------------------------- |
| int  | The number of CPU cycles since its reset |

### Methods
- `system.rdtsc()`

## `system.ticks`

### Return value
| Type | Description                                                               |
| ---- | ------------------------------------------------------------------------- |
| int  | The number of milliseconds that have elapsed since the system was started |

### Methods
- `system.ticks()`

## `system.time`

### Return value
| Type | Description    |
| ---- | -------------- |
| int  | Unix timestamp |

### Methods
- `system.time()`

## `system.fiber`


Functionality that use a scripting engine (for example, natives) should be placed in the appropriate code execution space. For this, the ```system.fiber()``` function is used, which takes a callback and executes it in the game script.

### Parameters
| Name | Type     | Description  |
| ---- | -------- | ------------ |
| func | callback | Lua function |

### Return value
| Type | Description                                         |
| ---- | --------------------------------------------------- |
| bool | True if fiber successfully created, false otherwise |

### Methods
- `system.fiber(func)`

## Examples

### Spawn a Shotaro motorcycle in front of the player after a full session join.
```lua
function OnTransitionEnd(is_multiplayer)
  if is_multiplayer then
    system.fiber
    (
      function()
        vehicle.spawn(string.joaat("shotaro"))
      end
    )
  end
end
```
