---
slug: /gta/lua/Lobby
title: Lobby
---

## lobby.is_session_active
`This function calls the NETWORK::NETWORK_IS_SESSION_ACTIVE function to determine the active status of the session.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the session is active, false otherwise. |

- Methods:

`lobby.is_session_active()`

---

## lobby.join_by_rid
`Joins a session by Rockstar ID. This function allows specifying a method variant via an enum parameter.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | rid | number | The Rockstar ID of the session to join. |
 | method | RidJoinMethod | Specifies join method. |


- Methods:

`lobby.join_by_rid(rid, method)`

---

## lobby.join_session
`@param session SessionJoinMethod`

- Methods:

`lobby.join_session(session)`

---

## lobby.is_global_otr
`This mode hides all players in the lobby from the global game map.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the global OTR mode is active, false otherwise. |

- Methods:

`lobby.is_global_otr()`

---

## lobby.global_otr_on
`This mode hides all players in the lobby from the global game map.`

- Methods:

`lobby.global_otr_on()`

---

## lobby.global_otr_off
`This disables the effect that hides all players in the lobby from the global game map.`

- Methods:

`lobby.global_otr_off()`

---

## lobby.is_locked
`Checks if the session is currently locked.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the session is locked, preventing new players from joining. |

- Methods:

`lobby.is_locked()`

---

## lobby.is_locker_notify_on
`Checks if notifications for locker operations are enabled.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if locker notifications are enabled. |

- Methods:

`lobby.is_locker_notify_on()`

---

## lobby.lock
`Returns true if the lock operation was successful or if the player is not in an online lobby.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the session was successfully locked or if not in an online lobby. |

- Methods:

`lobby.lock()`

---

## lobby.is_host_lock
`This method is used when the local player is the session host.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the host lock method is active. |

- Methods:

`lobby.is_host_lock()`

---

## lobby.is_non_host_lock
`This method can be bypassed by players with certain capabilities and is used when the local player is not the session host.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the non-host lock method is active. |

- Methods:

`lobby.is_non_host_lock()`

---

## lobby.is_smart_lock
`This method automatically chooses the locking method based on the session conditions.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the smart lock method is active. |

- Methods:

`lobby.is_smart_lock()`

---

## lobby.set_lock_method_host
`This is the most secure and recommended method, effective only when the local player is the host.`

- Methods:

`lobby.set_lock_method_host()`

---

## lobby.set_lock_method_nonhost
`This method can be bypassed and is used when the local player is not the host.`

- Methods:

`lobby.set_lock_method_nonhost()`

---

## lobby.set_lock_method_smart
`Automatically selects the lock method based on the current session conditions.`

- Methods:

`lobby.set_lock_method_smart()`

---

## lobby.turn_all_into_beast
`Turns all players in the lobby into beasts.`

- Methods:

`lobby.turn_all_into_beast()`

---

## lobby.turn_into_beast
`Turns a specific player into a beast.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | player | player_t | The player to transform into a beast. |


- Methods:

`lobby.turn_into_beast(player)`

---

## lobby.kick_all_modders
`Kicks all players marked as modders from the lobby.`

- Methods:

`lobby.kick_all_modders()`

---

## lobby.kick_random_player
`Kicks a random player from the lobby.`

- Methods:

`lobby.kick_random_player()`

---

## lobby.quit
`Quits the current lobby.`

- Methods:

`lobby.quit()`

---

## lobby.quit_forced
`This function can be particularly useful if a player is stuck during the loading process, such as being stuck in the clouds when entering a lobby.`

- Methods:

`lobby.quit_forced()`

---

## lobby.kick_script_host
`Kicks the current script host.`

- Methods:

`lobby.kick_script_host()`

---

## lobby.kick_session_host
`Kicks the current session host of the 'freemode' script.`

- Methods:

`lobby.kick_session_host()`

---

## lobby.kick_me
`Performs a quick exit from the lobby, similar to being kicked.`

- Methods:

`lobby.kick_me()`

---

## lobby.get_transition_state
`unknown`
- Return:

 | Type | Description |
 | --- | --- |
 | TransitionState | Current transition state. |

- Methods:

`lobby.get_transition_state()`

---

## lobby.start_spectate
`Starts spectating a specific player.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | player | player_t | The player to start spectating. |


- Methods:

`lobby.start_spectate(player)`

---

## lobby.stop_spectate
`Stops spectating the currently spectated player.`

- Methods:

`lobby.stop_spectate()`

---

## lobby.is_spectating
`Checks if the local player is in spectator mode.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the local player is in spectator mode, false otherwise. |

- Methods:

`lobby.is_spectating()`

---

## lobby.is_mission
`The function searches for specific mission script hashes, including 'fm_mission_controller' and 'am_mission_launch'.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the session is a mission, otherwise false. |

- Methods:

`lobby.is_mission()`

---

## lobby.is_searching
`It is important to note that player information cannot be fetched through native functions during this state.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if a matchmaking search is in progress, otherwise returns false. |

- Methods:

`lobby.is_searching()`

---

## lobby.is_session_started
`Indicated that the player list is available and fully populated.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the network session has started, otherwise returns false. |

- Methods:

`lobby.is_session_started()`

---

