---
slug: /gta/lua/Events
title: Events
---

## enum DrawContextColor
```lua
MouseButton = {
    --- Left mouse button.
    LBUTTON = 0,
    --- Right mouse button.
    RBUTTON = 1,
    --- Middle mouse button.
    MBUTTON = 2,
}
```

## enum MouseClickRegion
```lua
MouseClickRegion = {
    --- Mouse click within the game area.
    GAME = 0,
    --- Mouse click within the menu area.
    MENU = 1,
}
```

---

## events.on_player_join
`Registers a callback that is called when a player joins.`

- Parameters:

 | Name     | Type                    | Description                                              |
 | -------- | ----------------------- | -------------------------------------------------------- |
 | callback | fun(ply: player_t):void | The callback function to be invoked when a player joins. |

- Return: None

- Methods:
  - `events.on_player_join(callback)`

---

## events.on_player_left
`Registers a callback that is called when a player leaves.`

- Parameters:

 | Name     | Type                    | Description                                               |
 | -------- | ----------------------- | --------------------------------------------------------- |
 | callback | fun(ply: player_t):void | The callback function to be invoked when a player leaves. |

- Return: None

- Methods:
  - `events.on_player_left(callback)`

---

## events.on_player_active
`Registers a callback that is called when a player becomes active.`

- Parameters:

 | Name     | Type                    | Description                                                       |
 | -------- | ----------------------- | ----------------------------------------------------------------- |
 | callback | fun(ply: player_t):void | The callback function to be invoked when a player becomes active. |

- Return: None

- Methods:
  - `events.on_player_active(callback)`

---

## events.on_player_adding
`Registers a callback that is called when adding a player.`

- Parameters:

 | Name     | Type                                   | Description |
 | -------- | -------------------------------------- | ----------- |
 | callback | fun(name: string, rid: number):boolean | nil         | The callback function to be invoked when adding a player. |

- Return: None

- Methods:
  - `events.on_player_adding(callback)`

---

## events.on_session_join
`Registers a callback that is called when a session is joined.`

- Parameters:

 | Name     | Type       | Description                                                   |
 | -------- | ---------- | ------------------------------------------------------------- |
 | callback | fun():void | The callback function to be invoked when a session is joined. |

- Return: None

- Methods:
  - `events.on_session_join(callback)`

---

## events.on_session_left
`Registers a callback that is called when a session is left.`

- Parameters:

 | Name     | Type       | Description                                                 |
 | -------- | ---------- | ----------------------------------------------------------- |
 | callback | fun():void | The callback function to be invoked when a session is left. |

- Return: None

- Methods:
  - `events.on_session_left(callback)`

---

## events.on_game_state
`Registers a callback that is called when the game state changes.`

- Parameters:

 | Name     | Type                                            | Description                                                      |
 | -------- | ----------------------------------------------- | ---------------------------------------------------------------- |
 | callback | fun(prev_state: number, cur_state: number):void | The callback function to be invoked when the game state changes. |

- Return: None

- Methods:
  - `events.on_game_state(callback)`

---

## events.on_spawn
`Registers a callback that is called when the local player is spawned.`

- Parameters:

 | Name     | Type                         | Description                                                           |
 | -------- | ---------------------------- | --------------------------------------------------------------------- |
 | callback | fun(is_online: boolean):void | The callback function to be invoked when the local player is spawned. |

- Return: None

- Methods:
  - `events.on_spawn(callback)`

---

## events.on_death
`Registers a callback that is called when the local player dies.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun():void       | The callback function to be invoked when the local player dies. |

- Return: None

- Methods:
  - `events.on_death(callback)`

---

## events.on_script_started
`Registers a callback that is called when a script starts.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(script_name: string):void | The callback function to be invoked when a script starts. |

- Return: None

- Methods:
  - `events.on_script_started(callback)`

---

## events.on_script_stopped
`Registers a callback that is called when a script stops.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(script_name: string, reason: number):void | The callback function to be invoked when a script stops. |

- Return: None

- Methods:
  - `events.on_script_stopped(callback)`

---

## events.on_key_state
`Registers a callback that is called on key state change.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(key: string, is_down: boolean):void | The callback function to be invoked on key state change. |

- Return: None

- Methods:
  - `events.on_key_state(callback)`

---

## events.on_transition_end
`Registers a callback that is called at the end of the transition to online or single-player mode.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(is_online: boolean):void | The callback function to be invoked at the end of the transition. |

- Return: None

- Methods:
  - `events.on_transition_end(callback)`

---

## events.on_first_singleplayer_join
`Registers a callback that is called when the player fully enters single-player for the first time.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun():void       | The callback function to be invoked when the player fully enters single-player. |

- Return: None

- Methods:
  - `events.on_first_singleplayer_join(callback)`

---

## events.on_window_proc
`Registers a callback that is called for the game window's WindowProc.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(hwnd: number, uMsg: number, wParam: number, lParam: number):number|nil | The callback function to be invoked for the game window's WindowProc. |

- Return: None

- Methods:
  - `events.on_window_proc(callback)`

---

## events.on_player_shot
`Registers a callback that is called when a player shoots a weapon.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ply: player_t, weapon: number):void | The callback function to be invoked when a player shoots a weapon. |

- Return: None

- Methods:
  - `events.on_player_shot(callback)`

---

## events.on_modder_detected
`Registers a callback that is called when a player is detected as a modder.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ply: player_t, flag: number, params: table):void | The callback function to be invoked when a player is detected as a modder. |

- Return: None

- Methods:
  - `events.on_modder_detected(callback)`

---

## events.on_script_migrate
`Registers a callback that is called when a script migrates to another player.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(is_freemode: boolean, is_you: boolean, script_name: string, ply: player_t):void | The callback function to be invoked when a script migrates to another player. |

- Return: None

- Methods:
  - `events.on_script_migrate(callback)`

---

## events.on_sync_blocked
`Registers a callback that is called when synchronization is blocked for a player.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ply: player_t, reason: string, ban_time: number):void | The callback function to be invoked when synchronization is blocked for a player. |

- Return: None

- Methods:
  - `events.on_sync_blocked(callback)`

---

## events.on_script_event
`Registers a callback that is called when a script event is received.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ply: player_t, hash: number, args: table):void | The callback function to be invoked when a script event is received. |

- Return: None

- Methods:
  - `events.on_script_event(callback)`

---

## events.on_session_host_changed
`Registers a callback that is called when the session host changes.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ply: player_t):void | The callback function to be invoked when the session host changes. |

- Return: None

- Methods:
  - `events.on_session_host_changed(callback)`

---

## events.on_weapon_received
`Registers a callback that is called when a pedestrian receives a weapon.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ped: number, weapon_hash: number, ammo_count: number):void | The callback function to be invoked when a pedestrian receives a weapon. |

- Return: None

- Methods:
  - `events.on_weapon_received(callback)`

---

## events.on_chat_msg
`Registers a callback that is called when a chat message is received from a player.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun(ply: player_t, text: string):void | The callback function to be invoked when a chat message is received from a player. |

- Return: None

- Methods:
  - `events.on_chat_msg(callback)`

---

## events.on_frame
`Registers a callback that is called during the UI drawing call of the product.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun():void       | The callback function to be invoked during the UI drawing call. |

- Return: None

- Methods:
  - `events.on_frame(callback)`

---

## events.on_script_tick
`Registers a callback that is called every script tick.`

- Parameters:

 | Name     | Type             | Description                        |
 | -------- | ---------------- | ---------------------------------- |
 | callback | fun():void       | The callback function to be invoked every script tick