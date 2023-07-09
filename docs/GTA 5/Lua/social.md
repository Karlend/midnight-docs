---
slug: /gta/lua/social
title: social
---

# social

```ebnf
Workspace to get info about account
```

## Functions

## `social.is_ready`

`Determines whether information about the Rockstar account is available. In other words, whether the social space functions can be called.`

### Return value:

| Name    | Type | Description                                               |
| ------- | ---- | --------------------------------------------------------- |
| success | bool | true if the social workspace is avaible, false otherwise. |

### Methods

* `social.is_ready()`

## `social.get_username`

`Get your username.`

### Return value:

| Name     | Type   | Description       |
| -------- | ------ | ----------------- |
| username | string | Current username. |

### Methods

* `social.get_username()`

## `social.get_mail`

`Get your email.`

### Return value:

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| email | string | Current email. |

### Methods

* `social.get_mail()`

## `social.get_rid`

`Get local player RockstarID.`

### Return value:

| Name | Type | Description         |
| ---- | ---- | ------------------- |
| rid  | int  | Current RockstarID. |

### Methods

* `social.get_rid()`

## `social.is_player_online`

`Check player for online.`

### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| rid         | int      | Player Rockstar ID |
| name        | string   | Player name        |
| on_response | function | Callback           |

### Methods

* `social.is_player_online(name, on_response)`
* `social.is_player_online(rid, on_response)`

### Callbacks:

* `function on_response(int rid, bool result)`
