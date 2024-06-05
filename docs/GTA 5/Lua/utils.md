---
slug: /gta/lua/Utils
title: Utils
---

## utils.get_clipboard
`@return string The text currently in the clipboard.`

- Methods:

`utils.get_clipboard()`

---

## utils.set_clipboard
`@return boolean True if the text was successfully set to the clipboard, otherwise false.`

- Methods:

`utils.set_clipboard(message)`

---

## utils.get_mouse_pos
`@return boolean, number, number True if the position was retrieved successfully along with the x and y coordinates of the mouse cursor. Returns False, 0.0, 0.0 if unsuccessful.`

- Methods:

`utils.get_mouse_pos()`

---

## utils.set_mouse_pos
`@return boolean True if the cursor was successfully moved, otherwise false.`

- Methods:

`utils.set_mouse_pos(x, y)`

---

## utils.vector_angles
`@return number, number, number The pitch, yaw, and roll angles calculated from the forward vector.`

- Methods:

`utils.vector_angles(forward)`

---

## utils.world_to_screen
`@return boolean, number, number True and the x, y screen coordinates if the conversion is successful. Returns False, 0.0, 0.0 if unsuccessful.`

- Methods:

`utils.world_to_screen(world)`

---

## utils.get_key_state
`@return boolean True if the key is pressed, false if not.`

- Methods:

`utils.get_key_state(key)`

---

## utils.get_key_name
`@return string The name of the key including any modifiers.`

- Methods:

`utils.get_key_name(key)`

---

## utils.stop_script
`@return boolean True if the script was successfully stopped, false if the script was not loaded or could not be stopped.`

- Methods:

`utils.stop_script()`

---

## utils.reload_script
`@return boolean True if the script was successfully reloaded, otherwise false.`

- Methods:

`utils.reload_script()`

---

## utils.get_fps
`@return integer The current FPS value.`

- Methods:

`utils.get_fps()`

---

## utils.get_frame_rate
`@return number The time duration of one frame in seconds.`

- Methods:

`utils.get_frame_rate()`

---

## utils.get_current_date
`@return integer, integer, integer The formatted date as year, month, and day, based on the specified format.`

- Methods:

`utils.get_current_date(format)`

---

## utils.get_current_time
`@return integer, integer, integer The formatted time as hour, minute, and second, based on the specified format.`

- Methods:

`utils.get_current_time(format)`

---

## utils.get_current_time_millis
`@return integer The number of milliseconds elapsed since the Unix epoch.`

- Methods:

`utils.get_current_time_millis()`

---

## utils.get_current_unix_time_seconds
`@return integer The number of seconds elapsed since the Unix epoch.`

- Methods:

`utils.get_current_unix_time_seconds()`

---

## utils.execute_in_os_thread
`@param lua_function function The Lua function to be executed asynchronously.`

- Methods:

`utils.execute_in_os_thread(lua_function)`

---

## utils.require_async
`function is passed as an argument to this callback. If the loading fails, 'nil' is passed instead.`

- Methods:

`utils.require_async(file, on_load)`

---

## utils.read_colons_and_tabs_file
`@return table A Lua table containing the data read from the file.`

- Methods:

`utils.read_colons_and_tabs_file(filePath, separator)`

---

## utils.write_colons_file
`@return boolean True if the data was successfully written to the file, false otherwise.`

- Methods:

`utils.write_colons_file(filePath, data, separator)`

---

## utils.yield
`This function should be called within a coroutine managed by the fiber system.`

- Methods:

`utils.yield()`

---

## utils.sleep
`allowing other operations to proceed before resuming.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | ms | integer | The number of milliseconds for which the fiber should sleep. |


- Methods:

`utils.sleep(ms)`

---

## utils.exec_fiber
`end)`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | func | function | The Lua function to be executed within a new fiber. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the function was successfully registered to run, false otherwise. |

- Methods:

`utils.exec_fiber(func)`

---

## utils.loop_fiber
`end)`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | func | function | The Lua function to be executed within the fiber indefinitely. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the function was successfully registered to loop, false otherwise. |

- Methods:

`utils.loop_fiber(func)`

---

## utils.teleport_self
`@param z number The z coordinate to teleport the player to.`

- Methods:

`utils.teleport_self(coords)`

---

## utils.teleport_entity
`@param z number The z coordinate to teleport the entity to.`

- Methods:

`utils.teleport_entity(ent, coords)`

---

## utils.change_self_model
`@return boolean Returns true if the model change process is initiated successfully.`

- Methods:

`utils.change_self_model(model)`

---

## utils.get_rp_required_for_rank
`@return int The amount of RP needed to reach the specified level.`

- Methods:

`utils.get_rp_required_for_rank(level)`

---

## utils.get_session_players_bitflag
`@return unsigned The bitflag representing the players in the session.`

- Methods:

`utils.get_session_players_bitflag(ignoreLocalPlayer)`

---

## utils.get_ground_z
`@return number The ground Z coordinate at the specified location or 0.0 if the function fails.`

- Methods:

`utils.get_ground_z(x, y, z_hint)`

---

## utils.reverse_joaat
`@return string A string that corresponds to the hash if found in the internal lists; otherwise, returns an empty string.`

- Methods:

`utils.reverse_joaat(hash)`

---

