---
slug: /gta/lua/Events
title: Events
---

## events.on_player_join
`@param callback fun(ply: player_t):void`

- Methods:

`events.on_player_join(callback)`

---

## events.on_player_left
`@param callback fun(ply: player_t):void`

- Methods:

`events.on_player_left(callback)`

---

## events.on_player_active
`@param callback fun(ply: player_t):void`

- Methods:

`events.on_player_active(callback)`

---

## events.on_player_adding
`@param callback fun(name: string, rid: number):boolean|nil`

- Methods:

`events.on_player_adding(callback)`

---

## events.on_session_join
`@param callback fun():void`

- Methods:

`events.on_session_join(callback)`

---

## events.on_session_left
`@param callback fun():void`

- Methods:

`events.on_session_left(callback)`

---

## events.on_game_state
`@param callback fun(prev_state: number, cur_state: number):void`

- Methods:

`events.on_game_state(callback)`

---

## events.on_spawn
`@param callback fun(is_online: boolean):void`

- Methods:

`events.on_spawn(callback)`

---

## events.on_death
`@param callback fun():void`

- Methods:

`events.on_death(callback)`

---

## events.on_script_started
`@param callback fun(script_name: string):void`

- Methods:

`events.on_script_started(callback)`

---

## events.on_script_stopped
`@param callback fun(script_name: string, reason: number):void`

- Methods:

`events.on_script_stopped(callback)`

---

## events.on_key_state
`@param callback fun(key: string, is_down: boolean):void`

- Methods:

`events.on_key_state(callback)`

---

## events.on_transition_end
`@param callback fun(is_online: boolean):void`

- Methods:

`events.on_transition_end(callback)`

---

## events.on_first_singleplayer_join
`@param callback fun():void`

- Methods:

`events.on_first_singleplayer_join(callback)`

---

## events.on_window_proc
`@param callback fun(hwnd: number, uMsg: number, wParam: number, lParam: number):number|nil`

- Methods:

`events.on_window_proc(callback)`

---

## events.on_player_shot
`@param callback fun(ply: player_t, weapon: number):void`

- Methods:

`events.on_player_shot(callback)`

---

## events.on_modder_detected
`@param callback fun(ply: player_t, flag: number, params: table):void`

- Methods:

`events.on_modder_detected(callback)`

---

## events.on_script_migrate
`@param callback fun(is_freemode: boolean, is_you: boolean, script_name: string, ply: player_t):void`

- Methods:

`events.on_script_migrate(callback)`

---

## events.on_sync_blocked
`@param callback fun(ply: player_t, reason: string, ban_time: number):void`

- Methods:

`events.on_sync_blocked(callback)`

---

## events.on_script_event
`@param callback fun(ply: player_t, hash: number, args: table):void`

- Methods:

`events.on_script_event(callback)`

---

## events.on_session_host_changed
`@param callback fun(ply: player_t):void`

- Methods:

`events.on_session_host_changed(callback)`

---

## events.on_weapon_received
`@param callback fun(ped: number, weapon_hash: number, ammo_count: number):void`

- Methods:

`events.on_weapon_received(callback)`

---

## events.on_chat_msg
`@param callback fun(ply: player_t, text: string):void`

- Methods:

`events.on_chat_msg(callback)`

---

## events.on_frame
`@param callback fun():void`

- Methods:

`events.on_frame(callback)`

---

## events.on_script_tick
`@param callback fun():void`

- Methods:

`events.on_script_tick(callback)`

---

## events.on_vehicle_leave
`@param callback fun(vehicle: number, was_driver: boolean):void`

- Methods:

`events.on_vehicle_leave(callback)`

---

## events.on_vehicle_enter
`@param callback fun(vehicle: number, is_driver: boolean):void`

- Methods:

`events.on_vehicle_enter(callback)`

---

## events.on_build_ui
`@param callback fun():void`

- Methods:

`events.on_build_ui(callback)`

---

## events.on_net_game_event
`@param callback fun(ply: player_t, event_info: {id: number, name: string}, buf: CBitBufferRead):void`

- Methods:

`events.on_net_game_event(callback)`

---

## events.on_player_rid_join
`@param callback fun(rid: number):void`

- Methods:

`events.on_player_rid_join(callback)`

---

## events.on_stop_spectating
`@param callback fun(ply: player_t, ply_target: player_t, is_you: boolean):void`

- Methods:

`events.on_stop_spectating(callback)`

---

## events.on_spectating
`@param callback fun(ply: player_t, ply_target: player_t, is_you: boolean):void`

- Methods:

`events.on_spectating(callback)`

---

## events.on_init
`@param callback fun():void`

- Methods:

`events.on_init(callback)`

---

## events.on_done
`@param callback fun():void`

- Methods:

`events.on_done(callback)`

---

## events.on_sync_can_apply
`@param callback fun(ply: player_t, node: SyncDataNode, ent: entity_t):boolean|nil`

- Methods:

`events.on_sync_can_apply(callback)`

---

## events.on_mouse_click
`@param callback fun(button: MouseButton, region: MouseClickRegion, x: number, y: number): void`

- Methods:

`events.on_mouse_click(callback)`

---

