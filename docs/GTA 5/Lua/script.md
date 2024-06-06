---
slug: /gta/lua/Script
title: Script
---

## enum ScriptEventId
```lua
ScriptEventId = {
    ISLAND = 0,
    INTERIOR_TELEPORT = 1,
    SEND_TO_MISSION = 2,
    SEND_TO_MISSION_ALT = 3,
    CHAT_MESSAGE_SPOOF_DETECT = 4,
    CRASH = 5,
    NETBAIL_KICK = 6,
    CEO_KICK = 7,
    CEO_MONEY = 8,
    MARK_AS_BEAST = 9,
    CEO_BAN = 10,
    BANNER_SCREEN = 11,
    TRANSACTION_ERROR = 12,
    DESTROY_PERSONAL_VEHICLE = 13,
    PERSONAL_VEHICLE_DESTROYED = 14,
    KICK_FROM_PERSONAL_VEHICLE = 15,
    DISOWN_PERSONAL_VEHICLE = 16,
    VEHICLE_EMP = 17,
    OFF_THE_RADAR = 18,
    CLEAR_WANTED_LEVEL = 19,
    COPS_BLIND_EYE = 20,
    NOTIFY = 21,
    SUB_SCRIPT_ACTION_ROTATE_CAM = 22,
    BOUNTY = 23,
    CASINO_CUTSCENE = 24,
    BLOCK_PASSIVE = 25,
    SEND_TO_WAREHOUSE = 26,
    SEND_TO_VEHICLE_WAREHOUSE = 27,
    INDIRECT_SH_KICK = 28,
    INDIRECT_FREEMODE_CRASH = 29,
    TELEPORT_TO_INTERIOR = 30,
    TELEPORT_TO_CLUB_HOUSE_EXIT = 31,
    SE_SOUND_BEEP = 32,
    INVITE_TO_INTERIOR_AS_PLAYER = 33,
    INVITE_TO_INTERIOR_AS_NPC = 34,
    SEND_UNLOCKS = 35,
    SCRIPT_CRASH = 36,
    SCRIPT_CRASH_VIA_GLOBAL = 37,
    PLAY_SOUND = 38,
    GLOBAL_BUFFER_OVERWRITE_1 = 39,
    GLOBAL_BUFFER_OVERWRITE_2 = 40,
    START_SCRIPT_BEGIN = 41,
    START_SCRIPT_PROCEED = 42,
    INTERIOR_STATE = 43,
    TRIGGER_RAID = 44,
    KICK_FROM_INTERIOR = 45,
    LEVEL_CHANGE = 46,
    COORD_CRASH = 47,
    TELEPORT_TO_CAYO = 48,
    GTA_BANNER = 49,
    SPECTATE = 50,
}
```

## script.ready
`Checks if script globals are available. Can be used to check when it is possible to work with functions like script.get_global.`
- Return:

 | Type    | Description                                   |
 | ------- | --------------------------------------------- |
 | boolean | Returns true if script globals are available. |

- Methods:
  - `script.ready()`

---

## script.is_loaded
`Checks if a script is loaded by hash or name.`
- Return:

 | Type    | Description                           |
 | ------- | ------------------------------------- |
 | boolean | Returns true if the script is loaded. |

- Methods:
  - `script.is_loaded(hash_or_name)`

---

## script.is_running
`Checks if a script is currently running by hash or name.`
- Return:

 | Type    | Description                            |
 | ------- | -------------------------------------- |
 | boolean | Returns true if the script is running. |

- Methods:
  - `script.is_running(hash_or_name)`

---

## script.request
`Requests loading a script by hash or name.`

- Methods:
  - `script.request(hash_or_name)`

---

## script.start
`Starts a script by hash or name with an optional stack size and additional arguments.`
- Parameters:

 | Name         | Type        | Description                                 |
 | ------------ | ----------- | ------------------------------------------- |
 | hash_or_name | Hash/string | The script hash or name.                    |
 | stack_size   | number      | The stack size for the new script.          |
 | ...          | any         | Additional arguments to pass to the script. |

- Return:

 | Type    | Description                                  |
 | ------- | -------------------------------------------- |
 | integer | Returns the thread ID of the started script. |

- Methods:
  - `script.start(hash_or_name, stack_size, ...)`

---

## script.spoof
`Spoofs a script by hash or name using a callback function.`
- Parameters:

 | Name         | Type        | Description              |
 | ------------ | ----------- | ------------------------ |
 | hash_or_name | Hash/string | The script hash or name. |
 | callback     | function    | Callback.                |

- Return:

 | Type    | Description                               |
 | ------- | ----------------------------------------- |
 | boolean | Returns true if the spoof was successful. |

- Methods:
  - `script.spoof(hash_or_name, callback)`

---

## script.force_host
`Forces migration to local player a script by hash or name, with an optional callback for completion.`

- Parameters:

 | Name                | Type        | Description              |
 | ------------------- | ----------- | ------------------------ |
 | hash_or_name        | Hash/string | The script hash or name. |
 | on_migration_finish | function    | Callback.                |

- Methods:
  - `script.force_host(hash_or_name, on_migration_finish)`

---
--- @return table A table with the following fields for each script:
---     - name (string): The name of the script.
---     - hash (number): The joaat hash of the name.
---     - index (number): The index of the script, which is used to write to globals.
---     - group (number): The group to which the script belongs.
---     - stack_size (number): The amount of stack memory allocated for the script.

## script.get_yscs
`Returns a table containing information about all YSC scripts available in the game. This table can be used to manage scripts or missions, such as starting them.`

- Return:

 | Type  | Description                                                                                         |
 | ----- | --------------------------------------------------------------------------------------------------- |
 | table | Table with name(string) hash(number) index(number) group(number) stack_size(number) for each script |

- Methods:
  - `script.get_yscs()`

---

## script.start_mission
`Starts a freemode event (mission) by its name or hash. This function must be run within a fiber context`

- Parameters:

 | Name         | Type        | Description              |
 | ------------ | ----------- | ------------------------ |
 | hash_or_name | Hash/string | The script hash or name. |

- Return:

 | Type    | Description                                                                                      |
 | ------- | ------------------------------------------------------------------------------------------------ |
 | boolean | True if the mission was successfully started, false if the mission could not be found or started |

- Methods:
  - `script.start_mission(hash_or_name)`

---

## script.get_tse
`Returns the Script Event hash used in the 'trigger_script_event' function`

- Parameters:

 | Name               | Type   | Description                   |
 | ------------------ | ------ | ----------------------------- |
 | ScriptEventId enum | number | The index of the script event |

- Return:

 | Type    | Description                                     |
 | ------- | ----------------------------------------------- |
 | integer | The current hash for the specified script event |

- Methods:
  - `script.get_tse(index)`

---

## script.get_script_magic
`Returns a special magic number used for sending certain script events like 'off the radar' or 'clear wanted level'.`

- Parameters:

 | Name   | Type            | Description                            |
 | ------ | --------------- | -------------------------------------- |
 | player | number/player_t | The player identifier or player object |

- Return:

 | Type   | Description                                                                      |
 | ------ | -------------------------------------------------------------------------------- |
 | number | The magic number for the specified player. Returns 0 if the player object is nil |

- Methods:
  - `script.get_script_magic(player)`

---

## script.trigger_script_event
`Triggers a script event for the specified player with given event hash and arguments`

- Parameters:

 | Name   | Type            | Description                                                                                       |
 | ------ | --------------- | ------------------------------------------------------------------------------------------------- |
 | player | number/player_t | The player identifier or player object                                                            |
 | hash   | number          | The hash of the script event to trigger                                                           |
 | args   | table           | A table of basic Lua types (number, integer, string, boolean, nil) to be sent as event parameters |

- Methods:
  - `script.trigger_script_event(player, hash, args)`

---

## script.get_global
`Retrieves a global script variable`
- Parameters:

 | Name  | Type   | Description                      |
 | ----- | ------ | -------------------------------- |
 | index | number | The index of the global variable |

- Return:

 | Type      | Description                                                               |
 | --------- | ------------------------------------------------------------------------- |
 | ScrGlobal | A ScrGlobal instance representing the global variable at the given index. |

- Methods:
  - `script.get_global(index)`

---

## script.get_local
`Retrieves a local script variable by name or hash and index`

- Parameters:

 | Name         | Type        | Description                                                                   |
 | ------------ | ----------- | ----------------------------------------------------------------------------- |
 | hash_or_name | Hash/string | The index of the global variable                                              |
 | index        | number      | The index of the local variable within the specified script or thread context |

- Return:

 | Type     | Description                                                                                             |
 | -------- | ------------------------------------------------------------------------------------------------------- |
 | ScrLocal | A ScrLocal instance representing the local variable at the given index in the specified script context. |

- Methods:
  - `script.get_local(string_or_hash, index)`

---

## ScrVar:at
`Accesses an element at a specific index relative to the variable's memory location`

- Parameters:

 | Name  | Type   | Description                                               |
 | ----- | ------ | --------------------------------------------------------- |
 | index | number | The index offset from the current variable position       |
 | size  | number | The stride size for calculating the exact memory location |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | ScrVar | A new ScrVar instance representing the variable at the calculated position |

- Methods:
  - `ScrVar:at(index)`
  - `ScrVar:at(index, size)`

---

## ScrVar:get_base
`@return base number The base address as a number.`

- Methods:
  - `ScrVar:get_base()`

---

## ScrVar:get_index
`@return index number The index of the script variable.`

- Methods:
  - `ScrVar:get_index()`

---

## ScrVar:is_local
`@return result boolean Returns true if the object is a ScrLocal class, false otherwise.`

- Methods:
  - `ScrVar:is_local()`

---

## ScrVar:is_global
`@return result boolean Returns true if the object is a ScrGlobal class, false otherwise.`

- Methods:
  - `ScrVar:is_global()`

---
