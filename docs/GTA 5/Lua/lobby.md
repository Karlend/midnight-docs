---
slug: /gta/lua/Lobby
title: Lobby
---

## enum RidJoinMethod
```lua
RidJoinMethod = {
	FRIEND = 0,
	PRESENCE = 1
}
```

## enum SessionJoinMethod
```lua
SessionJoinMethod = {
    PUBLIC = 0,
    NEW_PUBLIC = 1,
    CREW = 12,
    NEW_CREW = 3,
    NEW_CREW_CLOSED = 2,
    FRIENDS = 9,
    NEW_FRIENDS_CLOSED = 6,
    SOLO = 10,
    INVITE = 11
}
```

## enum TransitionState
```lua
TransitionState = {
    EMPTY = 0,
    SP_SWOOP_UP = 1,
    MP_SWOOP_UP = 2,
    CREATOR_SWOOP_UP = 3,
    PRE_HUD_CHECKS = 4,
    WAIT_HUD_EXIT = 5,
    WAIT_FOR_SUMMON = 6,
    SP_SWOOP_DOWN = 7,
    MP_SWOOP_DOWN = 8,
    CANCEL_JOINING = 9,
    RETRY_LOADING = 10,
    RETRY_LOADING_SLOT_1 = 11,
    RETRY_LOADING_SLOT_2 = 12,
    RETRY_LOADING_SLOT_3 = 13,
    RETRY_LOADING_SLOT_4 = 14,
    WAIT_ON_INVITE = 15,
    PREJOINING_FM_SESSION_CHECKS = 16,
    LOOK_FOR_FRESH_JOIN_FM = 17,
    LOOK_TO_JOIN_ANOTHER_SESSION_FM = 18,
    CONFIRM_FM_SESSION_JOINING = 19,
    WAIT_JOIN_FM_SESSION = 20,
    CREATION_ENTER_SESSION = 21,
    PRE_FM_LAUNCH_SCRIPT = 22,
    FM_TEAMFULL_CHECK = 23,
    START_FM_LAUNCH_SCRIPT = 24,
    FM_TRANSITION_CREATE_PLAYER = 25,
    IS_FM_AND_TRANSITION_READY = 26,
    FM_SWOOP_DOWN = 27,
    POST_BINK_VIDEO_WARP = 28,
    FM_FINAL_SETUP_PLAYER = 29,
    MOVE_FM_TO_RUNNING_STATE = 30,
    FM_HOW_TO_TERMINATE = 31,
    START_CREATOR_PRE_LAUNCH_SCRIPT_CHECK = 32,
    START_CREATOR_LAUNCH_SCRIPT = 33,
    CREATOR_TRANSITION_CREATE_PLAYER = 34,
    IS_CREATOR_AND_TRANSITION_READY = 35,
    CREATOR_SWOOP_DOWN = 36,
    CREATOR_FINAL_SETUP_PLAYER = 37,
    MOVE_CREATOR_TO_RUNNING_STATE = 38,
    PREJOINING_TESTBED_SESSION_CHECKS = 39,
    LOOK_FOR_FRESH_JOIN_TESTBED = 40,
    LOOK_FOR_FRESH_HOST_TESTBED = 41,
    LOOK_TO_JOIN_ANOTHER_SESSION_TESTBED = 42,
    LOOK_TO_HOST_SESSION_TESTBED = 43,
    CONFIRM_TESTBED_SESSION_JOINING = 44,
    WAIT_JOIN_TESTBED_SESSION = 45,
    START_TESTBED_LAUNCH_SCRIPT = 46,
    TESTBED_TRANSITION_CREATE_PLAYER = 47,
    IS_TESTBED_AND_TRANSITION_READY = 48,
    TESTBED_SWOOP_DOWN = 49,
    TESTBED_FINAL_SETUP_PLAYER = 50,
    MOVE_TESTBED_TO_RUNNING_STATE = 51,
    TESTBED_HOW_TO_TERMINATE = 52,
    QUIT_CURRENT_SESSION_PROMPT = 53,
    WAIT_FOR_TRANSITION_SESSION_TO_SETUP = 54,
    TERMINATE_SP = 55,
    WAIT_TERMINATE_SP = 56,
    KICK_TERMINATE_SESSION = 57,
    TERMINATE_SESSION = 58,
    WAIT_TERMINATE_SESSION = 59,
    TERMINATE_SESSION_AND_HOLD = 60,
    TERMINATE_SESSION_AND_MOVE_INTO_HOLDING_STATE = 61,
    TEAM_SWAPPING_CHECKS = 62,
    RETURN_TO_SINGLEPLAYER = 63,
    WAIT_FOR_SINGLEPLAYER_TO_START = 64,
    WAITING_FOR_EXTERNAL_TERMINATION_CALL = 65,
    TERMINATE_MAINTRANSITION = 66,
    WAIT_FOR_DIRTY_LOAD_CONFIRM = 67,
    DLC_INTRO_BINK = 68
}
```

---

## lobby.is_session_active
`Checks if the current network session is active.`

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the session is active, false otherwise.                                      |

- Methods:
  - `lobby.is_session_active()`

---

## lobby.join_by_rid
`Joins a session by Rockstar ID. This function allows specifying a method variant via an enum parameter.`

- Parameters:

 | Name       | Type      | Description                               |
 | ---------- | --------- | ----------------------------------------- |
 | rid        | number    | The Rockstar ID of the session to join.   |
 | method     | RidJoinMethod | Specifies join method.                   |

- Methods:
  - `lobby.join_by_rid(rid, method)`

---

## lobby.join_session
`Joins a new session.`

- Parameters:

 | Name       | Type      | Description                   |
 | ---------- | --------- | ----------------------------- |
 | session    | SessionJoinMethod | The session join method.   |

- Methods:
  - `lobby.join_session(session)`

---

## lobby.is_global_otr
`Checks if the global "Off the Radar" mode is active.`

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the global OTR mode is active, false otherwise.                               |

- Methods:
  - `lobby.is_global_otr()`

---

## lobby.global_otr_on
`Activates the global "Off the Radar" mode.`

- Methods:
  - `lobby.global_otr_on()`

---

## lobby.global_otr_off
`Deactivates the global "Off the Radar" mode.`

- Methods:
  - `lobby.global_otr_off()`

---

## lobby.is_locked
`Checks if the session is currently locked.`

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the session is locked, preventing new players from joining.                   |

- Methods:
  - `lobby.is_locked()`

---

## lobby.is_locker_notify_on
`Checks if notifications for locker operations are enabled.`

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if locker notifications are enabled.                                             |

- Methods:
  - `lobby.is_locker_notify_on()`

---

## lobby.lock
`Locks the session to prevent new players from joining.`

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the session was successfully locked or if not in an online lobby.              |

- Methods:
  - `lobby.lock()`

---

## lobby.is_host_lock
`Checks if the host lock method is active.`

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the host lock method is active.                                                |

- Methods:
  - `lobby.is_host_lock()`

---

## lobby.is_non_host_lock
`Checks if the non-host lock method is active.`

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the non-host lock method is active.                                            |

- Methods:
  - `lobby.is_non_host_lock()`

---

## lobby.is_smart_lock
`Checks if the smart lock method is active.`

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the smart lock method is active.                                               |

- Methods:
  - `lobby.is_smart_lock()`

---

## lobby.set_lock_method_host
`Sets the locking method to host.`

- Methods:
  - `lobby.set_lock_method_host()`

---

## lobby.set_lock_method_nonhost
`Sets the locking method to non-host.`

- Methods:
  - `lobby.set_lock_method_nonhost()`

---

## lobby.set_lock_method_smart
`Sets the locking method to smart.`

- Methods:
  - `lobby.set_lock_method_smart()`

---

## lobby.turn_all_into_beast
`Turns all players in the lobby into beasts.`

- Methods:
  - `lobby.turn_all_into_beast()`

---

## lobby.turn_into_beast
`Turns a specific player into a beast.`

- Parameters:

 | Name       | Type       | Description                               |
 | ---------- | ---------- | ----------------------------------------- |
 | player     | player_t   | The player to transform into a beast.     |

- Methods:
  - `lobby.turn_into_beast(player)`

---

## lobby.kick_all_modders
`Kicks all players marked as modders from the lobby.`

- Methods:
  - `lobby.kick_all_modders()`

---

## lobby.kick_random_player
`Kicks a random player from the lobby.`

- Methods:
  - `lobby.kick_random_player()`

---

## lobby.quit
`Quits the current lobby.`

- Methods:
  - `lobby.quit()`

---

## lobby.quit_forced
`Forces a quit from the current lobby and loads the most recent save.`

- Methods:
  - `lobby.quit_forced()`

---

## lobby.kick_script_host
`Kicks the current script host.`

- Methods:
  - `lobby.kick_script_host()`

---

## lobby.kick_session_host
`Kicks the current session host of the 'freemode' script.`

- Methods:
  - `lobby.kick_session_host()`

---

## lobby.kick_me
`Performs a quick exit from the lobby, similar to being kicked.`

- Methods:
  - `lobby.kick_me()`

---

## lobby.get_transition_state
`Returns the current transition state.`

- Return:

 | Type            | Description                                                                            |
 | --------------- | -------------------------------------------------------------------------------------- |
 | TransitionState | Current transition state.                                                              |

- Methods:
  - `lobby.get_transition_state()`

---

## lobby.start_spectate
`Starts spectating a specific player.`

- Parameters:

 | Name       | Type       | Description                               |
 | ---------- | ---------- | ----------------------------------------- |
 | player     | player_t   | The player to start spectating.           |

- Methods:
  - `lobby.start_spectate(player)`

---

## lobby.stop_spectate
`Stops spectating the currently spectated player.`

- Methods:
  - `lobby.stop_spectate()`

---

## lobby.is_spectating
`Checks if the local player is in spectator mode.`

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the local player is in spectator mode, false otherwise.                      |

- Methods:
  - `lobby.is_spectating()`

---

## lobby.is_mission
`Checks if the current session is a mission session.`

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the session is a mission, otherwise false.                                    |

- Methods:
  - `lobby.is_mission()`

---

## lobby.is_searching
`Checks if a matchmaking search is currently in progress.`

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if a matchmaking search is in progress, otherwise returns false.                  |

- Methods:
  - `lobby.is_searching()`

---

## lobby.is_session_started
`Checks if a network session has fully started.`

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the network session has started, otherwise returns false.                      |

- Methods:
  - `lobby.is_session_started()`