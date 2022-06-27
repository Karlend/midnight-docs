---
slug: /gta/lua/player
title: player
---

# player

```ebnf
Workspace to work with players
```

## Functions

## `player.bits_to_players`

### Parameters

| Name | Type | Description                   |
| ---- | ---- | ----------------------------- |
| bits | int  | Player indexes packed in bits |

### Return value

| Type  | Description             |
| ----- | ----------------------- |
| pairs | Array of player indexes |

### Methods:

* `player.bits_to_players(bits)`

## `player.id`

### Return value

| Type | Description                   |
| ---- | ----------------------------- |
| int  | Entity handle of local player |

### Methods:

* `player.id()`

## `player.index`

### Return value

| Type | Description                  |
| ---- | ---------------------------- |
| int  | Player index of local player |

### Methods:

* `player.index()`

## `player.ban`

### Parameters

| Name          | Type   | Description  |
| ------------- | ------ | ------------ |
| player\_index | int    | Target index |
| time          | int    | Ban time     |
| reason        | string | Ban reason   |

### Methods:

* `player.ban(player_index, time, reason)`

## `player.is_banned`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description      |
| ---- | ---------------- |
| bool | Is player banned |

### Methods:

* `player.is_banned(player_index)`

## `player.unban`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Methods:

* `player.unban(player_index)`

## `player.get_entity_handle`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description   |
| ---- | ------------- |
| int  | Player ped id |

### Methods:

* `player.get_entity_handle(player_index)`

## `player.get_network_handle`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type  | Description    |
| ----- | -------------- |
| table | Network handle |

### Methods:

* `player.get_network_handle(player_index)`

## `player.get_interior_handle`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description  |
| ---- | ------------ |
| int  | Intrerior id |

### Methods:

* `player.get_interior_handle(player_index)`

## `player.get_vehicle_handle`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Vehicle id  |

### Methods:

* `player.get_vehicle_handle(player_index)`

## `player.get_net_id`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Network id  |

### Methods:

* `player.get_net_id(player_index)`

## `player.get_vehicle_net_id`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description           |
| ---- | --------------------- |
| int  | Network id of vehicle |

### Methods:

* `player.get_vehicle_net_id(player_index)`

## `player.get_dimentions`

### Parameters

| Name          | Type    | Description  |
| ------------- | ------- | ------------ |
| player\_index | int     | Target index |
| mins          | Vector3 | None given   |
| maxs          | Vector3 | None given   |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods:

* `player.get_dimentions(player_index, mins, maxs)`

## `player.get_coordinates`

### Parameters

| Name          | Type    | Description  |
| ------------- | ------- | ------------ |
| player\_index | int     | Target index |
| position      | Vector3 | Var to write |

### Return value

| Type | Description            |
| ---- | ---------------------- |
| bool | Successfully wrote var |

### Methods:

* `player.get_coordinates(player_index, position)`

## `player.get_angles`

### Parameters

| Name          | Type    | Description  |
| ------------- | ------- | ------------ |
| player\_index | int     | Target index |
| angles        | Vector3 | Var to write |

### Return value

| Type | Description            |
| ---- | ---------------------- |
| bool | Successfully wrote var |

### Methods:

* `player.get_angles(player_index, angles)`

## `player.get_health`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description      |
| ---- | ---------------- |
| int  | Amount of health |

### Methods:

* `player.get_health(player_index)`

## `player.get_max_health`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description          |
| ---- | -------------------- |
| int  | Amount of max health |

### Methods:

* `player.get_max_health(player_index)`

## `player.get_armor`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description     |
| ---- | --------------- |
| int  | Amount of armor |

### Methods:

* `player.get_armor(int player_index)`

## `player.get_max_armor`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description         |
| ---- | ------------------- |
| int  | Amount of max armor |

### Methods:

* `player.get_max_armor(player_index)`

## `player.get_model`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Model hash  |

### Methods:

* `player.get_model(player_index)`

## `player.get_weapon`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Weapon hash |

### Methods:

* `player.get_weapon(player_index)`

## `player.is_valid`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description             |
| ---- | ----------------------- |
| bool | Whether player is valid |

### Methods:

* `player.is_valid(player_index)`

## `player.is_animal`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description              |
| ---- | ------------------------ |
| bool | Whether player is animal |

### Methods:

* `player.is_animal(player_index)`

## `player.is_alive`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description             |
| ---- | ----------------------- |
| bool | Whether player is alive |

### Methods:

* `player.is_alive(player_index)`

## `player.is_friend`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description              |
| ---- | ------------------------ |
| bool | Whether player is friend |

### Methods:

* `player.is_friend(player_index)`

## `player.is_modder`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description              |
| ---- | ------------------------ |
| bool | Whether player is modder |

### Methods:

* `player.is_modder(player_index)`

## `player.is_connected`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description                 |
| ---- | --------------------------- |
| bool | Whether player is connected |

### Methods:

* `player.is_connected(player_index)`

## `player.is_on_screen`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description                              |
| ---- | ---------------------------------------- |
| bool | true if player is drawn, false otherwise |

### Methods:

* `player.is_on_screen(player_index)`

## `player.is_in_cutscene`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description                   |
| ---- | ----------------------------- |
| bool | Whether player is in cutscene |

### Methods:

* `player.is_in_cutscene(player_index)`

## `player.is_cheater`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description                        |
| ---- | ---------------------------------- |
| bool | Whether player is cheater (R* tag) |

### Methods:

* `player.is_cheater(player_index)`

## `player.is_rockstar_dev`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description                    |
| ---- | ------------------------------ |
| bool | Whether player is rockstar dev |

### Methods:

* `player.is_rockstar_dev(player_index)`

## `player.get_heading`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Player heading |

### Methods:

* `player.get_heading(player_index)`

## `player.get_distance`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type  | Description        |
| ----- | ------------------ |
| float | Distance to player |

### Methods:

* `player.get_distance(player_index)`

## `player.get_index`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description  |
| ---- | ------------ |
| int  | Player index |

### Methods:

* `player.get_index(player_index)`

## `player.get_bit_index`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Bit index   |

### Methods:

* `player.get_bit_index(player_index)`

## `player.get_join_time`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Join time   |

### Methods:

* `player.get_join_time(player_index)`

## `player.get_modder_flags`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Moder flags |

### Methods:

* `player.get_modder_flags(player_index)`

## `player.is_local`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type | Description                     |
| ---- | ------------------------------- |
| bool | true if local, false otherwise. |

### Methods:

* `player.is_local(player_index)`

## `player.get_name`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type   | Description               |
| ------ | ------------------------- |
| string | `?` if name isn't avaible |

### Methods:

* `player.get_name(player_index)`

## `player.get_script_host`

`Get Player index, which is a script host.`

### Return value:

| Name          | Type | Description                |
| ------------- | ---- | -------------------------- |
| player\_index | int  | Index of script host or -1 |

### Methods:

* `player.get_script_host()`

## `player.get_session_host`

`Get the Player index, which is the host of the session.`

### Return value:

| Name          | Type | Description         |
| ------------- | ---- | ------------------- |
| player\_index | int  | Index of host or -1 |

### Methods:

* `player.get_session_host()`

## `player.set_modder_flag`

`Set modder flag.`

### Parameters:

| Name | Type | Description    |
| ---- | ---- | -------------- |
| ply  | int  | Player index   |
| flag | int  | Modder flag ID |

### Methods:

* `player.set_modder_flag(ply, flag)`

## `player.remove_modder_flag`

`Remove modder flag.`

### Parameters:

| Name | Type | Description    |
| ---- | ---- | -------------- |
| ply  | int  | Player index   |
| flag | int  | Modder flag ID |

### Methods:

* `player.remove_modder_flag(ply, flag)`

## `player.get_rid`

`Get player RockstarID.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name         | Type | Description                                |
| ------------ | ---- | ------------------------------------------ |
| rockstar\_id | int  | RockstarID of player, 0 if couldn't get it |

### Methods:

* `player.get_rid(ply)`

## `player.send_sms`

`Send SMS to a player.`

### Parameters:

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| ply  | int    | Player index |
| text | string | Message text |

### Return value:

| Name    | Type | Description                                                 |
| ------- | ---- | ----------------------------------------------------------- |
| success | bool | true if the message was successfully sent, false otherwise. |

### Methods:

* `player.send_sms(ply, text)`

## `player.is_spectating`

`Determines if a player is spectating someone.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name    | Type | Description                                                |
| ------- | ---- | ---------------------------------------------------------- |
| success | bool | true if the player is spectating someone, false otherwise. |

### Methods:

* `player.is_spectating(ply)`

## `player.get_spectating`

`Determines the Player index that the specified player is spectating.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name          | Type | Description                                           |
| ------------- | ---- | ----------------------------------------------------- |
| player\_index | int  | The index of the player being spectate, -1 otherwise. |

### Methods:

* `player.get_spectating(ply)`

## `player.is_god`

`Determines if the player has godmode enabled.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name    | Type | Description                                              |
| ------- | ---- | -------------------------------------------------------- |
| success | bool | true if the player has godmode enabled, false otherwise. |

### Methods:

* `player.is_god(ply)`

## `player.is_script_host`

`Determines if the player is a script host.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name    | Type | Description                                           |
| ------- | ---- | ----------------------------------------------------- |
| success | bool | true if the player is a script host, false otherwise. |

### Methods:

* `player.is_script_host(ply)`

## `player.is_session_host`

`Determines whether a player is the host of a session.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name    | Type | Description                                            |
| ------- | ---- | ------------------------------------------------------ |
| success | bool | true if the player is a session host, false otherwise. |

### Methods:

* `player.is_session_host(ply)`

## `player.get_host_key`

`Returns player host key.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name     | Type | Description      |
| -------- | ---- | ---------------- |
| host_key | int  | Player host key. |

### Methods:

* `player.get_host_key(ply)`

## `player.is_next_host`

`Returns if player is next host.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name         | Type | Description          |
| ------------ | ---- | -------------------- |
| is_next_host | bool | Is player next host. |

### Methods:

* `player.is_next_host(ply)`

## `player.get_host_priority`

`Returns player host priority.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name     | Type | Description           |
| -------- | ---- | --------------------- |
| host_key | int  | Player host priority. |

### Methods:

* `player.get_host_priority(ply)`

## `player.get_hosts_queue`

`Returns host queue.`

### Return value:

| Name       | Type  | Description                        |
| ---------- | ----- | ---------------------------------- |
| host queue | table | Sorted table by players' host key. |

### Methods:

* `player.get_hosts_queue()`

## `player.is_in_interior`

`Determines whether the player is in the interior.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name    | Type | Description                                             |
| ------- | ---- | ------------------------------------------------------- |
| success | bool | true if the player is in the interior, false otherwise. |

### Methods:

* `player.is_in_interior(ply)`

## `player.is_in_vehicle`

`Determines whether the player is in the vehicle.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name    | Type | Description                                       |
| ------- | ---- | ------------------------------------------------- |
| success | bool | true if the player is in the TC, false otherwise. |

### Methods:

* `player.is_in_vehicle(ply)`

## `player.get_client`

`Returns client from which player launched game.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name   | Type   | Description                       |
| ------ | ------ | --------------------------------- |
| client | string | Client player launched game from. |

### Methods:

* `player.get_client(ply)`

## `player.get_ip`

`Returns player ip address as table.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name | Type  | Description                           |
| ---- | ----- | ------------------------------------- |
| ip   | table | Player ip address ( can be spoofed ). |

### Methods:

* `player.get_ip(ply)`

## `player.get_ip_string`

`Returns player ip address.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name | Type   | Description                           |
| ---- | ------ | ------------------------------------- |
| ip   | string | Player ip address ( can be spoofed ). |

### Methods:

* `player.get_ip_string(ply)`

## `player.get_resolved_ip`

`Returns resolved player ip address as table.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name | Type  | Description                                             |
| ---- | ----- | ------------------------------------------------------- |
| ip   | table | Player ip address. Zeroes if ip isn't spoofed/resolved. |

### Methods:

* `player.get_resolved_ip(ply)`

## `player.get_resolved_ip_string`

`Returns player ip address.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value:

| Name | Type   | Description                                              |
| ---- | ------ | -------------------------------------------------------- |
| ip   | string | Player ip address. 0.0.0.0 if ip isn't spoofed/resolved. |

### Methods:

* `player.get_resolved_ip_string(ply)`

## `player.teleport_to_island`

`Send invite to island.`

### Parameters:

| Name      | Type | Description                              |
| --------- | ---- | ---------------------------------------- |
| ply       | int  | Player index                             |
| is_invite | bool | Should send invite instead of force send |

### Methods:

* `player.teleport_to_island(ply, is_invite)`

## `player.teleport_to_interior`

`Send player to interior.`

### Parameters:

| Name        | Type | Description  |
| ----------- | ---- | ------------ |
| ply         | int  | Player index |
| interior_id | int  | Interior id  |

### Methods:

* `player.teleport_to_interior(ply, interior_id)`

## `player.teleport_to_mission`

`Send player to mission.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.teleport_to_mission(ply)`

## `player.teleport_to_cutscene`

`Send player to cutscene.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.teleport_to_cutscene(ply)`

## `player.ceo_kick`

`Kick player from organization.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.ceo_kick(ply)`

## `player.ceo_ban`

`Ban player from creating organization.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.ceo_ban(ply)`

## `player.vehicle_destroy`

`Destroy player vehicle.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.vehicle_destroy(ply)`

## `player.vehicle_kick`

`Kick player from vehicle.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.vehicle_kick(ply)`

## `player.vehicle_disown`

`Disown player personal vehicle.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.vehicle_disown(ply)`

## `player.vehicle_emp`

`EMP player's current vehicle.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.vehicle_emp(ply)`

## `player.clear_wanted_level`

`Clear player's wanted levle.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.clear_wanted_level(ply)`

## `player.cops_blind_eye`

`Let cops ignore a player for a minute.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.cops_blind_eye(ply)`

## `player.off_the_radar`

`Hide a player from the radar for a minute.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.off_the_radar(ply)`

## `player.set_bounty`

`Set bounty on player.`

### Parameters:

| Name    | Type | Description  |
| ------- | ---- | ------------ |
| ply     | int  | Player index |
| bounty  | int  | Price        |
| is_anon | bool | Anonymously  |

### Methods:

* `player.set_bounty(ply, bounty, is_anon)`

## `player.force_cam`

`Center player's camera.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.force_cam(ply)`

## `player.kick`

`Host/vote kick a player.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.kick(ply)`

## `player.kick_brute`

`Kick a player with script events.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.kick_brute(ply)`

## `player.kick_idm`

`Kick a player with IDM kick.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.kick_idm(ply)`

## `player.crash_himiko_active`

`Check if himiko crash is active.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value

| Type | Description     |
| ---- | --------------- |
| bool | Is crash active |

### Methods:

* `player.crash_himiko_active(ply)`

## `player.crash_himiko_start`

`Start himiko crash on player.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.crash_himiko_start(ply)`

## `player.crash_himiko_stop`

`Stop himiko crash on player.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.crash_himiko_stop(ply)`

## `player.crash_izuku_active`

`Check if izuku crash is active.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Return value

| Type | Description     |
| ---- | --------------- |
| bool | Is crash active |

### Methods:

* `player.crash_izuku_active(ply)`

## `player.crash_izuku_start`

`Start izuku crash on player.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.crash_izuku_start(ply)`

## `player.crash_izuku_stop`

`Stop izuku crash on player.`

### Parameters:

| Name | Type | Description  |
| ---- | ---- | ------------ |
| ply  | int  | Player index |

### Methods:

* `player.crash_izuku_stop(ply)`

## `player.outfit_save`

`Save player's outfit.`

### Parameters:

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| ply  | int    | Player index |
| name | string | Outfit name  |

### Methods:

* `player.outfit_save(ply, name)`

## `player.outfit_load`

`Load saved outfit.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Outfit name |

### Methods:

* `player.outfit_load(name)`

## `player.get_ceo_info`

### Parameters

| Name          | Type | Description  |
| ------------- | ---- | ------------ |
| player\_index | int  | Target index |

### Return value

| Type  | Description    |
| ----- | -------------- |
| table | CEO info table |