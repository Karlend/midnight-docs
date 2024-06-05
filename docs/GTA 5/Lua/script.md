---
slug: /gta/lua/Script
title: Script
---

## script.ready
`Checks if script globals are available. Can be used to check when it is possible to work with functions like `script.get_global`.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if script globals are available. |

- Methods:

`script.ready()`

---

## script.is_loaded
`Checks if a script is loaded by hash or name.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the script is loaded. |

- Methods:

`script.is_loaded(hash_or_name)`

---

## script.is_running
`Checks if a script is currently running by hash or name.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the script is running. |

- Methods:

`script.is_running(hash_or_name)`

---

## script.request
`Requests loading a script by hash or name.`

- Methods:

`script.request(hash_or_name)`

---

## script.start
`Starts a script by hash or name with an optional stack size and additional arguments.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | hash_or_name | Hash|string | The script hash or name. |
 | stack_size | number | The stack size for the new script. |
 | ... | any | Additional arguments to pass to the script. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | Returns the thread ID of the started script. |

- Methods:

`script.start(hash_or_name, stack_size, ...)`

---

## script.spoof
`Spoofs a script by hash or name using a callback function.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the spoof was successful. |

- Methods:

`script.spoof(hash_or_name, callback)`

---

## script.force_host
`Forces migration to local player a script by hash or name, with an optional callback for completion.`

- Methods:

`script.force_host(hash_or_name, on_migration_finish)`

---

## script.get_yscs
`}`

- Methods:

`script.get_yscs()`

---

## script.start_mission
`@usage script.start_mission(1163912414)`

- Methods:

`script.start_mission(name_or_hash)`

---

## script.get_tse
`@usage local hash = script.get_tse(ScriptEventId.ISLAND) -- Will return '373376135' (1.68)`

- Methods:

`script.get_tse(index)`

---

## script.get_script_magic
`@return number The magic number for the specified player. Returns 0 if the player object is nil.`

- Methods:

`script.get_script_magic(player)`

---

## script.trigger_script_event
`end`

- Methods:

`script.trigger_script_event(player, hash, args)`

---

## ScrVar:at
`@return ScrVar A new ScrVar instance representing the variable at the calculated position.`

- Methods:

`ScrVar:at(index)`

---

## ScrVar:at
`@return ScrVar A new ScrVar instance representing the variable at the calculated position.`

- Methods:

`ScrVar:at(index, size)`

---

## ScrVar:get_base
`@return base number The base address as a number.`

- Methods:

`ScrVar:get_base()`

---

## ScrVar:get_index
`@return index number The index of the script variable.`

- Methods:

`ScrVar:get_index()`

---

## ScrVar:is_local
`@return result boolean Returns true if the object is a ScrLocal class, false otherwise.`

- Methods:

`ScrVar:is_local()`

---

## ScrVar:is_global
`@return result boolean Returns true if the object is a ScrGlobal class, false otherwise.`

- Methods:

`ScrVar:is_global()`

---

## script.get_global
`@return ScrGlobal A ScrGlobal instance representing the global variable at the given index.`

- Methods:

`script.get_global(index)`

---

## script.get_local
`@return ScrLocal A ScrLocal instance representing the local variable at the given index in the specified script context.`

- Methods:

`script.get_local(string_or_hash, index)`

---

