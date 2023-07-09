---
slug: /gta/lua/player.flags
title: player.flags
---

# player.flags

```ebnf
Workspace to work with player flags
```

## Functions

## `player.flags.create`

### Parameters

| Name        | Type     | Description                                        |
| ----------- | -------- | -------------------------------------------------- |
| check       | function | Function. Must return true to draw flag on player  |
| caption     | string   | Short name of flag, shown in player list           |
| description | string   | Description of flag, shown on hover in player list |
| color\_r    | int      | Color - R                                          |
| color\_g    | int      | Color - G                                          |
| color\_b    | int      | Color - B                                          |
| color\_a    | int      | Color - A                                          |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Flag id     |

### Methods

* `player.flags.create(check, caption, description, color_r, color_g, color_b)`

## `player.flags.delete`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id   | int  | Flag id     |

### Methods

* `player.flags.delete(id)`

## `player.flags.set_color`

### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| id       | int  | Flag id     |
| color\_r | int  | Color - R   |
| color\_g | int  | Color - G   |
| color\_b | int  | Color - B   |
| color\_a | int  | Color - A   |

### Methods

* `player.flags.set_color(id, color_r, color_g, color_b, color_a)`

## `player.flags.set_caption`

### Parameters

| Name    | Type   | Description        |
| ------- | ------ | ------------------ |
| id      | int    | Flag id            |
| caption | string | Short name of flag |

### Methods

* `player.flags.set_caption(id, caption)`

## `player.flags.set_description`

### Parameters

| Name        | Type   | Description                                        |
| ----------- | ------ | -------------------------------------------------- |
| id          | int    | Flag id                                            |
| description | string | Description of flag, shown on hover in player list |

### Methods

* `player.flags.set_description(id, description)`

## `player.flags.set_callback`

### Parameters

| Name     | Type     | Description      |
| -------- | -------- | ---------------- |
| id       | int      | Flag id          |
| callback | function | Callback of flag |

### Methods

* `player.flags.set_callback(id, callback)`
