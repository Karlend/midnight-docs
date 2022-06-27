---
slug: /gta/lua/lobby
title: lobby
---

# lobby

```ebnf
Methods related lobby
```

## Data types

```lua
local session_type =
{
  public_join = 0, -- Join public session
  public_new = 1, -- Create new empty public session

  crew_join = 12, -- Join crew session
  crew_new_closed = 2, -- Create new closed crew session
  crew_new = 3, -- Create new open crew session

  friends_join = 9, -- Join public session with any friend
  friends_new_closed = 6, -- Create new friends only session

  solo_new = 10, -- Create solo session
  invite_new = 11, -- Create invite only session
}
```

## Functions

## `lobby.change_session`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| session\_type | int  | Session type |

### Methods:

* `lobby.change_session(session_type)`

## `lobby.join_by_rid`

### Parameters

| Name   | Type | Description                    |
| ------ | ---- | ------------------------------ |
| rid    | int  | R\*ID in uint32                |
| friend | bool | Should use friend(old) method? |

### Methods:

* `lobby.join_by_rid(rid)`
* `lobby.join_by_rid(rid, friend)`

## `lobby.is_session_active`

### Return value

| Type | Description       |
| ---- | ----------------- |
| bool | Is session active |

### Methods:

* `lobby.is_session_active()`

## Examples

### Instantly start searching for a session after entering a singleplayer

```lua
function OnFirstSingleplayerJoin()
  system.fiber( function() lobby.change_session(session_type.public_join) end )
end
```
