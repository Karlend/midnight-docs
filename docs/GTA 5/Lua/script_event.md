---
slug: /gta/lua/script_event
title: script event
---

# script

```ebnf
Midnight Lua provides the ability to send script hash to players in a session. The script.send() function is used for this.
```

## Functions

## `script.send`


### Parameters
| Name   | Type  | Description            | Optional |
| ------ | ----- | ---------------------- | -------- |
| player | int   | Player index           |          |
| hash   | int   | Script event hash      |          |
| args   | table | Script event arguments |          |

### Methods
- `script.send(player, hash, args)`

## Examples

### Player who sent any message to the chat will receive an invitation to the island.

```lua
function OnChatMsg(ply, text)
  script.send(ply, -1479371259, {0, 1, 0})
end
```
