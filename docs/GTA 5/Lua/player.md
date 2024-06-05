---
slug: /gta/lua/Player
title: Player
---

## player_t:get_id
`Returns the entity handle of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The entity handle of the player. |

- Methods:

`player_t:get_id()`

---

## player_t:get_netid
`Returns the network handle of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The network handle (ObjectId) of the player. |

- Methods:

`player_t:get_netid()`

---

## player_t:get_index
`This index ranges from 0 to 31, representing the player's slot in the game.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The index of the player. |

- Methods:

`player_t:get_index()`

---

## player_t:get_entity_ptr
`Returns a pointer to the underlying rage::fwEntity object.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | A pointer to the rage::fwEntity object. |

- Methods:

`player_t:get_entity_ptr()`

---

## player_t:get_netobj_ptr
`Returns a pointer to the underlying rage::netObject.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | A pointer to the rage::netObject. |

- Methods:

`player_t:get_netobj_ptr()`

---

## player_t:get_interior
`Returns the handle of the player's interior.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The handle of the interior in which the player is located. |

- Methods:

`player_t:get_interior()`

---

## player_t:is_on_screen
`Checks if the player is currently rendered on the screen.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is on the screen, false otherwise. |

- Methods:

`player_t:is_on_screen()`

---

## player_t:get_coords
`Retrieves the world coordinates of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z coordinates of the player in the game world. |

- Methods:

`player_t:get_coords()`

---

## player_t:get_screen
`Retrieves the screen coordinates of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number The x and y coordinates of the player on the screen. |

- Methods:

`player_t:get_screen()`

---

## player_t:get_angles
`Retrieves the angles of the player in Euler angles (pitch, yaw, roll).`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The pitch, yaw, and roll angles of the player. |

- Methods:

`player_t:get_angles()`

---

## player_t:get_mins
`Retrieves the minimum bounding coordinates of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The minimum x, y, and z coordinates of the player's bounding box. |

- Methods:

`player_t:get_mins()`

---

## player_t:get_maxs
`Retrieves the maximum bounding coordinates of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The maximum x, y, and z coordinates of the player's bounding box. |

- Methods:

`player_t:get_maxs()`

---

## player_t:get_forward
`Retrieves the forward vector of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z components of the forward vector. |

- Methods:

`player_t:get_forward()`

---

## player_t:get_right
`Retrieves the right vector of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z components of the right vector. |

- Methods:

`player_t:get_right()`

---

## player_t:get_up
`Retrieves the up vector of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z components of the up vector. |

- Methods:

`player_t:get_up()`

---

## player_t:get_heading
`Gets the heading of the player in degrees.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The heading of the player, representing the direction it is facing. |

- Methods:

`player_t:get_heading()`

---

## player_t:get_distance
`Calculates the distance from the local player to the another player.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The distance from the local player to the another player. |

- Methods:

`player_t:get_distance()`

---

## player_t:get_health
`Retrieves the current health of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The current health of the player. |

- Methods:

`player_t:get_health()`

---

## player_t:get_health_max
`Retrieves the maximum health of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The maximum health of the player. |

- Methods:

`player_t:get_health_max()`

---

## player_t:is_alive
`Checks if the player is alive.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is alive, false if dead or the health is zero or below. |

- Methods:

`player_t:is_alive()`

---

## player_t:is_dead
`Checks if the player is dead.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player's health is zero or below, false otherwise. |

- Methods:

`player_t:is_dead()`

---

## player_t:get_index_bit
`The bitmask is calculated as '1 << get_index()'.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The bitmask for the player's index. |

- Methods:

`player_t:get_index_bit()`

---

## player_t:get_vehicle
`Returns 0 if the player is not in any vehicle.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The handle of the vehicle or 0 if the player is not in a vehicle. |

- Methods:

`player_t:get_vehicle()`

---

## player_t:get_model
`Gets the model hash of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The model hash of the player. |

- Methods:

`player_t:get_model()`

---

## player_t:is_active
`A player is considered active if they are currently connected and have a pedestrian entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is active, false otherwise. |

- Methods:

`player_t:is_active()`

---

## player_t:is_valid
`Performs several checks to ensure the player's data structures are properly initialized and valid.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is considered valid, false otherwise. |

- Methods:

`player_t:is_valid()`

---

## player_t:get_playerinfo_ptr
`Returns a pointer to the CPlayerInfo object.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | A pointer to the CPlayerInfo object. |

- Methods:

`player_t:get_playerinfo_ptr()`

---

## player_t:is_animal
`Checks if the player is an animal.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is an animal, false otherwise. |

- Methods:

`player_t:is_animal()`

---

## player_t:is_driver
`Checks if the player is the driver of a vehicle.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is currently driving a vehicle, false otherwise. |

- Methods:

`player_t:is_driver()`

---

## player_t:get_armor
`Retrieves the current armor value of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The current armor value of the player. |

- Methods:

`player_t:get_armor()`

---

## player_t:get_name
`Retrieves the name of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the player. |

- Methods:

`player_t:get_name()`

---

## player_t:is_blocked
`Checks if the player is sync blocked.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is blocked. |

- Methods:

`player_t:is_blocked()`

---

## player_t:is_modder
`Checks if the player is marked as a modder.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is marked as a modder. |

- Methods:

`player_t:is_modder()`

---

## player_t:is_local
`Checks if this is the local player.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if this is the local player. |

- Methods:

`player_t:is_local()`

---

## player_t:is_session_host
`Checks if the player is the session host.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is the session host. |

- Methods:

`player_t:is_session_host()`

---

## player_t:is_script_host
`Checks if the player is the script host.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is the script host. |

- Methods:

`player_t:is_script_host()`

---

## player_t:is_godmode
`Checks if the player is in godmode.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in godmode. |

- Methods:

`player_t:is_godmode()`

---

## player_t:is_friend
`Checks if the player is added as a friend.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is a friend. |

- Methods:

`player_t:is_friend()`

---

## player_t:is_marked_as_cheater
`Checks if the player is marked as a cheater.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is marked as a cheater. |

- Methods:

`player_t:is_marked_as_cheater()`

---

## player_t:is_marked_as_admin
`it is more likely that a modder has tampered with their player information to appear as such.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is marked as an admin (potentially a Rockstar employee), otherwise returns false. |

- Methods:

`player_t:is_marked_as_admin()`

---

## player:is_admin
`This method ensures that the player is indeed a Rockstar employee and not just a modder with tampered credentials.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is confirmed as a genuine Rockstar administrator, otherwise returns false. |

- Methods:

`player:is_admin()`

---

## player_t:is_in_interior
`Checks if the player is currently inside an interior.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in an interior. |

- Methods:

`player_t:is_in_interior()`

---

## player_t:is_in_vehicle
`Checks if the player is currently inside a vehicle.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in a vehicle. |

- Methods:

`player_t:is_in_vehicle()`

---

## player_t:is_next_host
`Checks if the player is slated to be the next session host.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is slated to be the next host. |

- Methods:

`player_t:is_next_host()`

---

## player_t:is_falling
`Checks if the player is currently in a falling animation.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is falling. |

- Methods:

`player_t:is_falling()`

---

## player_t:is_swimming
`Checks if the player is swimming on the surface of the water.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is swimming. |

- Methods:

`player_t:is_swimming()`

---

## player_t:is_underwater
`Checks if the player is submerged underwater.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is underwater. |

- Methods:

`player_t:is_underwater()`

---

## player_t:is_shooting
`Checks if the player is currently firing their weapon.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is shooting. |

- Methods:

`player_t:is_shooting()`

---

## player_t:is_aiming
`Checks if the player is aiming their weapon.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is aiming. |

- Methods:

`player_t:is_aiming()`

---

## player_t:is_drive_unreleased_vehicle
`Checks if the player is driving a vehicle that is not yet legally obtainable in the game.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is driving an unreleased vehicle. |

- Methods:

`player_t:is_drive_unreleased_vehicle()`

---

## player_t:is_use_modded_weapon
`Checks if the player is using a weapon that is modded and not legally obtainable in the game.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is using a modded weapon. |

- Methods:

`player_t:is_use_modded_weapon()`

---

## player_t:is_use_modded_vehicle
`Checks if the player is using a vehicle that is modded and not legally obtainable in the game.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is using a modded vehicle. |

- Methods:

`player_t:is_use_modded_vehicle()`

---

## player_t:is_use_super_drive
`Checks if the player's vehicle is exceeding the maximum legitimate speed values.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is using super drive capabilities. |

- Methods:

`player_t:is_use_super_drive()`

---

## player_t:is_use_godmode_vehicle
`Checks if the player's vehicle is currently in a godmode state, meaning it cannot be destroyed.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player's vehicle is using godmode. |

- Methods:

`player_t:is_use_godmode_vehicle()`

---

## player_t:has_flag_force_host
`Checks if the player has unusual or mismatched host key values.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the force host flag. |

- Methods:

`player_t:has_flag_force_host()`

---

## player_t:has_flag_money_drop
`Checks if the player has spawned money in-game.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the money drop flag. |

- Methods:

`player_t:has_flag_money_drop()`

---

## player_t:has_flag_update_fxn
`Checks if the player's client has reported use of unauthorized products.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the update function flag. |

- Methods:

`player_t:has_flag_update_fxn()`

---

## player_t:has_flag_crcs_mismatch
`Checks if there is a memory modification mismatch in the player's game client.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the CRCs mismatch flag. |

- Methods:

`player_t:has_flag_crcs_mismatch()`

---

## player_t:has_flag_malformed_script
`Checks if the player has sent a script event classified as malicious.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the malformed script flag. |

- Methods:

`player_t:has_flag_malformed_script()`

---

## player_t:has_flag_super_jump
`Checks if the player is using modifications to jump unusually high.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the super jump flag. |

- Methods:

`player_t:has_flag_super_jump()`

---

## player_t:has_flag_wrong_model
`Checks if the player is using a model that cannot be normally set for players.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the wrong model flag. |

- Methods:

`player_t:has_flag_wrong_model()`

---

## player_t:has_flag_censor_bypass
`Checks if the player has bypassed content censors.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the censor bypass flag. |

- Methods:

`player_t:has_flag_censor_bypass()`

---

## player_t:has_flag_malformed_armor
`Checks if the player's armor values are incorrect or manipulated.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the malformed armor flag. |

- Methods:

`player_t:has_flag_malformed_armor()`

---

## player_t:has_flag_network_kick
`Checks if the player has attempted to kick other players from the lobby.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the network kick flag. |

- Methods:

`player_t:has_flag_network_kick()`

---

## player_t:has_flag_crash_attempt
`Checks if the player has attempted to crash the game for other players.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has the crash attempt flag. |

- Methods:

`player_t:has_flag_crash_attempt()`

---

## player_t:get_game_stats
`Returns a table containing various game statistics such as RP, GlobalRP, Rank, KdRatio, etc.`
- Return:

 | Type | Description |
 | --- | --- |
 | table | The table of game statistics. |

- Methods:

`player_t:get_game_stats()`

---

## player_t:get_ceo_meta
`- language (integer): Language setting of the player within the CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | table | The table of CEO metadata. |

- Methods:

`player_t:get_ceo_meta()`

---

## player_t:is_in_ceo
`Checks if the player is part of a CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in a CEO organization. |

- Methods:

`player_t:is_in_ceo()`

---

## player_t:is_ceo_banned
`Checks if the player is banned from CEO activities.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is banned from CEO activities. |

- Methods:

`player_t:is_ceo_banned()`

---

## player_t:is_ceo_boss
`Checks if the player is the boss of a CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is the CEO boss. |

- Methods:

`player_t:is_ceo_boss()`

---

## player_t:get_ceo_ban_time
`Retrieves the time remaining on the player's CEO ban.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The time remaining on the CEO ban in seconds. |

- Methods:

`player_t:get_ceo_ban_time()`

---

## player_t:get_ceo_role
`Retrieves the player's role within the CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | Numeric identifier of the player's CEO role. |

- Methods:

`player_t:get_ceo_role()`

---

## player_t:get_ceo_name
`Retrieves the name of the CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the CEO organization. |

- Methods:

`player_t:get_ceo_name()`

---

## player_t:get_ceo_owner
`Retrieves the index of the CEO owner.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The index of the CEO owner. |

- Methods:

`player_t:get_ceo_owner()`

---

## player_t:get_ceo_owner_name
`Retrieves the name of the CEO owner.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the CEO owner. |

- Methods:

`player_t:get_ceo_owner_name()`

---

## player_t:get_ceo_clubhouse_name
`Retrieves the name of the Motorcycle Club associated with the CEO.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the Motorcycle Club. |

- Methods:

`player_t:get_ceo_clubhouse_name()`

---

## player_t:get_ceo_gang_name
`Retrieves the name of the SecuroServ gang associated with the CEO.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the SecuroServ gang. |

- Methods:

`player_t:get_ceo_gang_name()`

---

## player_t:get_ceo_members_total
`Retrieves the total number of members in the CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The total number of members. |

- Methods:

`player_t:get_ceo_members_total()`

---

## player_t:get_ceo_language
`Retrieves the language setting of the CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The language setting as a numeric code. |

- Methods:

`player_t:get_ceo_language()`

---

## player_t:get_ceo_last_called_vehicle_name
`Retrieves the name of the last vehicle called by the CEO.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the last called vehicle. |

- Methods:

`player_t:get_ceo_last_called_vehicle_name()`

---

## player_t:get_ceo_last_called_vehicle
`Retrieves the hash of the last vehicle called by the CEO.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The hash of the last vehicle called. |

- Methods:

`player_t:get_ceo_last_called_vehicle()`

---

## player_t:get_ceo_members
`Retrieves a list of members in the CEO organization.`
- Return:

 | Type | Description |
 | --- | --- |
 | table | A table containing the player instances of each member. |

- Methods:

`player_t:get_ceo_members()`

---

## player_t:is_player_a_member_of_players_ceo
`This function can accept a player object or a player index as the second argument.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | target | player_t|integer | The target player or the target player's index. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the target player is a member of the current player's CEO organization. |

- Methods:

`player_t:is_player_a_member_of_players_ceo(target)`

---

## player_t:get_outfit
`}`
- Return:

 | Type | Description |
 | --- | --- |
 | table | A table containing arrays for variations and props with detailed info about each item. |

- Methods:

`player_t:get_outfit()`

---

## player_t:get_rockstar_id
`Retrieves the Rockstar ID of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The Rockstar ID of the player. |

- Methods:

`player_t:get_rockstar_id()`

---

## player_t:kick
`Attempts to kick the player from the lobby.`

- Methods:

`player_t:kick()`

---

## player_t:crash
`Attempts to crash the player's game.`

- Methods:

`player_t:crash()`

---

## player_t:sync_block
`Blocks all synchronization with the player.`

- Methods:

`player_t:sync_block()`

---

## player_t:sync_unblock
`Unblocks synchronization with the player, if it was previously blocked.`

- Methods:

`player_t:sync_unblock()`

---

## player_t:is_sync_blocked
`Checks if synchronization with the player is currently blocked.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if synchronization is blocked, false otherwise. |

- Methods:

`player_t:is_sync_blocked()`

---

## player_t:get_clan_meta
`}`
- Return:

 | Type | Description |
 | --- | --- |
 | table | The table of clan metadata. |

- Methods:

`player_t:get_clan_meta()`

---

## player_t:get_clan_member_id
`Retrieves the clan member ID of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The clan member ID of the player. |

- Methods:

`player_t:get_clan_member_id()`

---

## player_t:get_clan_id
`Retrieves the unique identifier of the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The clan ID. |

- Methods:

`player_t:get_clan_id()`

---

## player_t:get_clan_color
`Retrieves the color code of the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The color code of the clan. |

- Methods:

`player_t:get_clan_color()`

---

## player_t:get_clan_member_count
`Retrieves the total number of members in the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The total number of clan members. |

- Methods:

`player_t:get_clan_member_count()`

---

## player_t:get_clan_created_time
`Retrieves the creation time of the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The creation time of the clan. |

- Methods:

`player_t:get_clan_created_time()`

---

## player_t:is_system_clan
`Checks if the player's clan is a system-managed clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if it is a system clan. |

- Methods:

`player_t:is_system_clan()`

---

## player_t:is_clan_open
`Checks if the player's clan is open for new members.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the clan is open. |

- Methods:

`player_t:is_clan_open()`

---

## player_t:get_clan_name
`Retrieves the name of the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The name of the clan. |

- Methods:

`player_t:get_clan_name()`

---

## player_t:get_clan_tag
`Retrieves the tag of the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The clan tag. |

- Methods:

`player_t:get_clan_tag()`

---

## player_t:get_clan_motto
`Retrieves the motto of the player's clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The clan motto. |

- Methods:

`player_t:get_clan_motto()`

---

## player_t:get_clan_rank_name
`Retrieves the rank name of the player within the clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | The clan rank name. |

- Methods:

`player_t:get_clan_rank_name()`

---

## player_t:get_clan_rank_order
`Retrieves the order of the player's rank within the clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The rank order. |

- Methods:

`player_t:get_clan_rank_order()`

---

## player_t:get_clan_rank_flags
`Retrieves the flags associated with the player's rank within the clan.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The rank flags. |

- Methods:

`player_t:get_clan_rank_flags()`

---

## player_t:get_max_armor
`Retrieves the maximum armor capacity of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The maximum armor value. |

- Methods:

`player_t:get_max_armor()`

---

## player_t:get_relay_ip
`Retrieves the relay IP address of the player as a table of bytes or nil if unavailable.`
- Return:

 | Type | Description |
 | --- | --- |
 | table|nil | A table containing 4 bytes of the IP address or nil if the IP could not be retrieved. |

- Methods:

`player_t:get_relay_ip()`

---

## player_t:get_relay_port
`Retrieves the relay port of the player or 0 if unavailable.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The relay port number or 0 if the port could not be retrieved. |

- Methods:

`player_t:get_relay_port()`

---

## player_t:get_public_ip
`Retrieves the public IP address of the player as a table of bytes or nil if unavailable.`
- Return:

 | Type | Description |
 | --- | --- |
 | table|nil | A table containing 4 bytes of the IP address or nil if the IP could not be retrieved. |

- Methods:

`player_t:get_public_ip()`

---

## player_t:get_public_port
`Retrieves the public port of the player or 0 if unavailable.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The public port number or 0 if the port could not be retrieved. |

- Methods:

`player_t:get_public_port()`

---

## player_t:get_private_ip
`Retrieves the private IP address of the player as a table of bytes or nil if unavailable.`
- Return:

 | Type | Description |
 | --- | --- |
 | table|nil | A table containing 4 bytes of the IP address or nil if the IP could not be retrieved. |

- Methods:

`player_t:get_private_ip()`

---

## player_t:get_private_port
`Retrieves the private port of the player or 0 if unavailable.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The private port number or 0 if the port could not be retrieved. |

- Methods:

`player_t:get_private_port()`

---

## player_t:get_relay_addr
`This function can omit the port based on the optional boolean parameter.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | include_port | boolean | Optional, if false, the port is not included in the returned string. |

- Return:

 | Type | Description |
 | --- | --- |
 | string | The relay IP address and port in the format "IP:Port" or just "IP". |

- Methods:

`player_t:get_relay_addr(include_port)`

---

## player_t:get_public_addr
`This function can omit the port based on the optional boolean parameter.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | include_port | boolean | Optional, if false, the port is not included in the returned string. |

- Return:

 | Type | Description |
 | --- | --- |
 | string | The public IP address and port in the format "IP:Port" or just "IP". |

- Methods:

`player_t:get_public_addr(include_port)`

---

## player_t:get_private_addr
`This function can omit the port based on the optional boolean parameter.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | include_port | boolean | Optional, if false, the port is not included in the returned string. |

- Return:

 | Type | Description |
 | --- | --- |
 | string | The private IP address and port in the format "IP:Port" or just "IP". |

- Methods:

`player_t:get_private_addr(include_port)`

---

## player_t:outfit_copy
`The destination player must be the local player.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | dest | player_t | The destination player who will receive the outfit. Must be the local player. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns false if the destination player is not local or if the destination player is the same as the source. |

- Methods:

`player_t:outfit_copy(dest)`

---

## player_t:outfit_save
`Saves the current player's outfit to a file on disk in the outfits folder as a JSON file.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | filename | string | The name of the file to save the outfit to. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns false if unable to gather the outfit information for saving. |

- Methods:

`player_t:outfit_save(filename)`

---

## player_t:outfit_load
`Loads an outfit for the player from a JSON file on disk.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | filepath | string | The path to the JSON file containing the outfit information. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns false if the player is not local or the file does not exist. |

- Methods:

`player_t:outfit_load(filepath)`

---

## player_t:get_cxn_id
`Retrieves the connection ID of the player's remote machine.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The connection ID associated with the player. |

- Methods:

`player_t:get_cxn_id()`

---

## player_t:get_endpoint_id
`Retrieves the endpoint ID of the player's remote machine.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The endpoint ID associated with the player. |

- Methods:

`player_t:get_endpoint_id()`

---

## player_t:get_active_id
`Retrieves the index of this network player in the player manager's active list.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The active index of the player. |

- Methods:

`player_t:get_active_id()`

---

## player_t:get_peer_player_index
`Retrieves the index of this player on the controlling machine.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The index of the player on the remote machine. |

- Methods:

`player_t:get_peer_player_index()`

---

## player_t:get_time_added
`Retrieves the time the player was added to the game, based on network synced time.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The network synced time when the player was added. |

- Methods:

`player_t:get_time_added()`

---

## player_t:get_team
`Retrieves the team ID associated with the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The player's team ID. |

- Methods:

`player_t:get_team()`

---

## player_t:get_voice_channel
`Retrieves the voice channel ID assigned to the player. Returns -1 if no channel is assigned.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The voice channel ID or -1 if no channel is assigned. |

- Methods:

`player_t:get_voice_channel()`

---

## player_t:get_sizeof_net_array
`Retrieves the total size of all network array handler data managed by this player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The total size of network array data. |

- Methods:

`player_t:get_sizeof_net_array()`

---

## player_t:is_leaving
`Checks if the player is leaving the session.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is leaving the session, false otherwise. |

- Methods:

`player_t:is_leaving()`

---

## player_t:is_player_otr
`Checks if the player is currently Off The Radar (OTR).`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is OTR, otherwise returns false. |

- Methods:

`player_t:is_player_otr()`

---

## player_t:has_bounty_mark
`Checks if the player has a bounty mark.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player has a bounty mark, otherwise returns false. |

- Methods:

`player_t:has_bounty_mark()`

---

## player_t:get_bounty_value
`Retrieves the bounty value on the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | Returns the bounty value on the player. |

- Methods:

`player_t:get_bounty_value()`

---

## player_t:get_respawn_state
`Retrieves the respawn state of the player.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | Returns the current respawn state of the player. |

- Methods:

`player_t:get_respawn_state()`

---

## player_t:is_player_connected
`Checks if the player is currently connected to the session.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is connected, otherwise returns false. |

- Methods:

`player_t:is_player_connected()`

---

## player_t:is_player_in_my_interior
`Checks if the player is in the same interior as the calling player.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in the same interior, otherwise returns false. |

- Methods:

`player_t:is_player_in_my_interior()`

---

## player_t:is_player_typing
`Checks if the player is currently typing a chat message.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is typing a chat message, otherwise returns false. |

- Methods:

`player_t:is_player_typing()`

---

## player_t:is_player_in_pause
`Checks if the player is currently in a pause state.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in pause state, otherwise returns false. |

- Methods:

`player_t:is_player_in_pause()`

---

## player_t:is_player_in_passive
`Checks if the player is currently in a passive state.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in passive state, otherwise returns false. |

- Methods:

`player_t:is_player_in_passive()`

---

## player_t:is_player_in_cutscene
`Checks if the player is currently participating in a cutscene.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in a cutscene, otherwise returns false. |

- Methods:

`player_t:is_player_in_cutscene()`

---

## player_t:is_player_in_interior_transfering
`Checks if the player is currently transferring between interiors.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is in the process of interior transferring, otherwise returns false. |

- Methods:

`player_t:is_player_in_interior_transfering()`

---

## player_t:has_vpn
`Checks if the player is currently using a VPN.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the player is using a VPN, otherwise returns false. |

- Methods:

`player_t:has_vpn()`

---

## players.get_from_entity
`the player in the player's world, specifically the CPed class.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | number|fwEntity | Handle | or entity object. |

- Return:

 | Type | Description |
 | --- | --- |
 | player_t|nil | Player menu object, or nil if no player could be found. |

- Methods:

`players.get_from_entity(handle_or_ptr)`

---

## players.get
`unknown`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | number|string | Player | index or name. |

- Return:

 | Type | Description |
 | --- | --- |
 | player_t|nil | Player menu object, or nil if no player could be found. |

- Methods:

`players.get(index_or_name)`

---

## players.get_random
`Gets a random player in the session.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | ignore_me? | boolean | Ignore the local player. |
 | ignore_friends? | boolean | Ignore friends. |

- Return:

 | Type | Description |
 | --- | --- |
 | player_t|nil | Random player in the session meeting the criteria, or nil if no player could be found. |

- Methods:

`players.get_random(ignore_me, ignore_friends)`

---

## players.get_all
`@return table[player_t] - A table of player objects.`

- Methods:

`players.get_all(sort, reverse_order)`

---

## players.me
`unknown`
- Return:

 | Type | Description |
 | --- | --- |
 | player_t|nil | Player menu object for local player or nil or failed to extract. |

- Methods:

`players.me()`

---

## players.id
`unknown`
- Return:

 | Type | Description |
 | --- | --- |
 | number | Local player index. |

- Methods:

`players.id()`

---

## players.get_script_host
`@return player_t | nil: The player object that is the host for the script 'freemode', or 'nil' if no host is found.`

- Methods:

`players.get_script_host(...)`

---

## players.get_host
`Retrieves the session host player object.`

- Methods:

`players.get_host()`

---

## players.get_next_host
`Retrieves the next session host player object.`

- Methods:

`players.get_next_host()`

---

## players.get_hosts_queue
`@return table[player_t] A table of player_t objects representing players in the hosting queue.`

- Methods:

`players.get_hosts_queue()`

---

## player
`@return player_t|nil Player menu object, or nil if no player could be found.`

- Methods:

`player(index_or_name)`

---

