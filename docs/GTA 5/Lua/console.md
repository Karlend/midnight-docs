---
slug: /gta/lua/console
title: console
---

# console

```ebnf
Methods to access log console
```

## Functions

## `console.log`

### Parameters

| Name  | Type       | Description     |
| ----- | ---------- | --------------- |
| color | con\_color | Color type      |
| text  | string     | String to print |

### Colors `con_color`
```lua
con_color =
{
	Black = 0,
	Blue = 1,
	Green = 2,
	Cyan = 3,
	Red = 4,
	Purple = 5,
	Orange = 6,
	LightGrey = 7,
	Grey = 8,
	LightBlue = 9,
	LightGreen = 10,
	LightCyan = 11,
	LightRed = 12,
	LightPurple = 13,
	Yellow = 14
	White = 15,
};
```

### Methods

* `console.log(color, text)`
* `console.log(text)`

## Examples

### Logging using the log function without color

```lua
function OnInit()
  console.log("Lua script initialized\n")
end
```

### Logging using the log function with color

```lua
function OnScriptMigrate(is_freemode, is_you, name, ply)
    if is_freemode then
        if is_you then
            console.log(con_color.Green, "[Script] Freemode successfully migrated to you.\n")
        else
            console.log(con_color.Red, "[Script] Freemode has been taken by player '" .. player.get_name(ply) .. "'.\n")
        end
    end
end
```
