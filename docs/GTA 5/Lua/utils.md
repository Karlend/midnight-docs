---
slug: /gta/lua/utils
title: utils
---

# utils

```ebnf
Some utils to make life a bit easier
```

## Functions

## `utils.teleport`

### Parameters

| Name | Type   | Description    |
| ---- | ------ | -------------- |
| ent  | int    | Entity handle  |
| x    | number | World position |
| y    | number | World position |
| z    | number | World position |

### Methods:

* `utils.teleport(ent, x, y, z)`
* `utils.teleport(ent, vecpos)`
* `utils.teleport(x, y, z)`
* `utils.teleport(vecpos)`

## `utils.request_control`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| ent   | int  | Entity handle  |
| tries | int  | Count of tries |

### Methods:

* `utils.request_control(ent, tries)`
* `utils.request_control(ent)`

### Return value:

| Name    | Type | Description       |
| ------- | ---- | ----------------- |
| success | bool | Получен ли доступ |

## `utils.set_mouse_pos`

`Set cursor position.`

### Parameters:

| Name   | Type    | Description                 |
| ------ | ------- | --------------------------- |
| v\_pos | Vector2 | Vector position          |
| pos\_x | number  | X positiom |
| pos\_y | number  | Y position |

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

### Methods:

* `utils.set_mouse_pos(v_pos)`
* `utils.set_mouse_pos(pos_x, pos_y)`

## `utils.get_mouse_pos`

`Get the current cursor position.`

### Parameters:

| Name   | Type    | Description                    |
| ------ | ------- | ------------------------------ |
| v\_pos | Vector2 | Vector to override |

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

### Methods:

* `utils.get_mouse_pos(v_pos)`

## `utils.set_clipboard`

`Set text to clipboard.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string | Clipboard text       |

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

### Methods:

* `utils.set_clipboard(text)`

## `utils.vector_to_angle`

`Convert vector to angles.`

### Parameters:

| Name    | Type    | Description                                 |
| ------- | ------- | ------------------------------------------- |
| forward | Vector3 | Vector to override   |
| angles  | Vector3 | Vector to override |

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

### Methods:

* `utils.vector_to_angle(forward, angles)`

## `utils.world_to_screen`

`Convert a Vector3 to a Vector2.`

### Parameters:

| Name   | Type    | Description                           |
| ------ | ------- | ------------------------------------- |
| world  | Vector3 | Input vector                         |
| screen | Vector2 | Vector to override |

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

### Methods:

* `utils.world_to_screen(world, screen)`

## `utils.send_chat`

`Send message in game chat.`

### Parameters:

| Name     | Type   | Description              |
| -------- | ------ | ------------------------ |
| text     | string | Message text             |
| is\_team | bool   | Should send in team chat |

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

### Methods:

* `utils.send_chat(text, is_team)`

## `utils.notify`

`Create a notification for player.`

### Parameters:

| Name        | Type        | Description         |
| ----------- | ----------- | ------------------- |
| name        | string      | Notification header |
| description | string      | Notification text   |
| icon        | gui_icon    | Notification icon   |
| type        | notify_type | Notification type   |

### Icons `gui_icon`
```lua
gui_icon =
{
   aimbot = 0,
   bind = 1,
   warning = 2,
   color = 3,
   visuals = 4,
   grenade = 5,
   boost = 6,
   image = 7,
   inventory = 8,
   join = 9,
   kick = 10,
   leave = 11,
   misc = 12,
   players = 13,
   self = 14,
   radar = 15,
   configs = 16,
   scripts = 17,
   security = 18,
   settings = 19,
   share = 20,
   incognito = 21,
   teleport = 22,
   tools = 23,
   triggerbot = 24,
   vehicle = 25,
   weapons = 26,
   armor = 27,
   world = 28,
   spoofing = 29,
}
```

### Notification types `notify_type`
```lua
notify_type =
{
    default = 0,
    success = 1,
    warning = 2,
    important = 3,
    fatal = 4,
}
```

### Methods:

* `utils.notify(name, description, icon, type)`

## `utils.change_ped_model`

`Change ped model.`

### Parameters:

| Name | Type          | Description |
| ---- | ------------- | ----------- |
| hash | number/string | Model hash  |

### Methods:

* `utils.change_ped_model(hash)`