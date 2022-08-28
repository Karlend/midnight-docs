---
slug: /gta/lua/events
title: events
---

# Events

```ebnf
Callbacks for specific events
```

## `OnInit`
`Called when the Lua script is loaded.`

### Methods:

* `OnInit()`

## `OnDone`
`Called when the Lua script is unloaded.`

### Methods:

* `OnDone()`

## `OnFrame`
`Called every frame.`

### Methods:

* `OnFrame()`

## `OnPlayerJoin`
`Called when a player joins the lobby.`

| Argument | Type   | Description               |
| -------- | ------ | ------------------------- |
| ply      | int    | Connecting player index   |
| name     | string | Player name               |
| ip       | string | Player IP. Can be spoofed |
| host_key | number | Player host key           |

### Methods:

* `OnPlayerJoin(ply)`

## `OnPlayerActive`
`Called when a player joined lobby.`

| Argument | Type | Description            |
| -------- | ---- | ---------------------- |
| ply      | int  | Connected player index |

### Methods:

* `OnPlayerActive(ply)`

## `OnPlayerLeft`
`Called when a player leaves the lobby.`

| Argument | Type | Description                |
| -------- | ---- | -------------------------- |
| ply      | int  | Disconnecting player index |

### Methods:

* `OnPlayerLeft(ply)`

## `OnWeaponReceived`
`Called when a pedestrian or local player receives a weapon.`

| Argument | Type | Description            |
| -------- | ---- | ---------------------- |
| ped      | int  | Pedestrian handle      |
| weapon   | int  | Received weapon handle |
| ammo     | int  | Weapon ammo count      |

### Methods:

* `OnWeaponReceived(ped, weapon, ammo)`

## `OnPlayerJoinByRid`
`Called when a connection to the local player has been made using the RID Joiner or Join Button.`

| Argument | Type | Description                                |
| -------- | ---- | ------------------------------------------ |
| rid      | int  | Connecting player's R\*ID (may be spoofed) |

### Methods:

* `OnPlayerJoinByRid(rid)`

## `OnScriptEvent`
`Called when a Script Event hash is received.`

| Argument | Type  | Description            |
| -------- | ----- | ---------------------- |
| ply      | int   | Player index           |
| event    | int   | Script event hash      |
| args     | table | Script event arguments |

### Return value:

| Type | Description                                           |
| ---- | ----------------------------------------------------- |
| bool | true if script event can be executed, false otherwise |

### Methods:

* `OnScriptEvent(ply, event, args)`

## `OnScriptSend`
`Called when a Script Event hash is sent by local player.`

| Argument  | Type  | Description                   |
| --------- | ----- | ----------------------------- |
| ply\_bits | int   | Player indexes packed in bits |
| event     | int   | Script event hash             |
| args      | table | Script event arguments        |

### Methods:

* `OnScriptSend(ply_bits, event, args)`

## `OnScriptMigrate`
`Called on script host migration`

| Argument    | Type   | Description                   |
| ----------- | ------ | ----------------------------- |
| is_freemode | bool   | Is freemode                   |
| is_you      | bool   | Is new host equal localplayer |
| script_name | string | Script name                   |
| ply         | int    | Player index                  |

### Methods:

* `OnScriptMigrate(is_freemode, is_you, script_name, ply)`

## `OnChatMsg`
`Called when a message appears in the game chat.`

| Argument | Type   | Description                    |
| -------- | ------ | ------------------------------ |
| ply      | int    | Player index of message sender |
| text     | string | Message text                   |

### Methods:

* `OnChatMsg(ply, text)`

## `OnSMS`
`Called on SMS receive.`

| Argument   | Type   | Description                    |
| ---------- | ------ | ------------------------------ |
| ply        | int    | Player index of message sender |
| text       | string | Message text                   |
| rid        | int    | Player Rockstar ID             |
| is\_script | bool   | Is SMS sent via script         |

### Methods:

* `OnSMS(ply, text, rid, is_script)`

## `OnNetworkEvent`
`Called when a Network Event is received.`

| Argument | Type           | Description                                                  |
| -------- | -------------- | ------------------------------------------------------------ |
| ply      | int            | Player index                                                 |
| event    | event\_info\_t | A structure containing a hash of the event name and its name |
| buf      | LuaBuffer      | Network event payload                                        |

### Return value:

| Type | Description                                            |
| ---- | ------------------------------------------------------ |
| bool | true if network event can be executed, false otherwise |

### Methods:

* `OnNetworkEvent(ply, event, buf)`

## `OnSpectating`
`Called when a player in a session is spectating another player.`

| Argument  | Type | Description                      |
| --------- | ---- | -------------------------------- |
| spectator | int  | Player index of spectator        |
| target    | int  | Player index of observer         |
| is\_you   | bool | true if target is a local player |

### Methods:

* `OnSpectating(spectator, target, is_you)`

## `OnStopSpectating`
`Called when some player in the session has stopped spectating another player.`

| Argument  | Type | Description                      |
| --------- | ---- | -------------------------------- |
| spectator | int  | Player index of spectator        |
| target    | int  | Player index of observer         |
| is\_you   | bool | true if target is a local player |

### Methods:

* `OnStopSpectating(spectator, target, is_you)`

## `OnFeatureStart`
`Called when Feature is activated.`

### Methods:

* `OnFeatureStart()`

## `OnFeatureStop`
`Called when Feature stops.`

### Methods:

* `OnFeatureStop()`

## `OnFeatureTick`
`Called every script tick.`

### Methods:

* `OnFeatureTick()`

## `OnScriptStopped`
`Called when the game script terminates.`

| Argument | Type   | Description        |
| -------- | ------ | ------------------ |
| name     | string | Script name        |
| reason   | int    | Termination reason |

### Reasons

```lua
local reasons = { -- can give nil in case of unknown
	[0] = "Native",
	[1] = "Main Exit",
	[2] = "Crash"
}
```

### Methods:

* `OnScriptStopped(name, reason)`

## `OnScriptStarted`
`Called when the game script starts.`

| Argument    | Type     | Description      |
| ----------- | -------- | ---------------- |
| name        | string   | Script name      |
| args        | LuaArray | Script arguments |
| stack\_size | int      | Stack size       |

### Methods:

* `OnScriptStarted(name, args, stack_size)`

## `OnGameState`
`Called every time the GameState value changes.`

| Argument   | Type | Description              |
| ---------- | ---- | ------------------------ |
| state\_old | int  | Previous GameState value |
| state\_new | int  | New GameState value      |

### Methods:

* `OnGameState(state_old, state_new)`

## void OnKeyPressed(key, down)
`Called every time a key or mouse button is pressed.`

| Argument | Type | Description                          |
| -------- | ---- | ------------------------------------ |
| key      | int  | Virtual key index                    |
| down     | bool | true if key pressed, false otherwise |

### Methods:

* `OnKeyPressed(key, down)`

## `OnPrepareTreeNode`
`Called before sending the sync tree to the session.`

| Argument | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| node     | void\* | netSyncNodeBase pointer         |
| name     | string | Tree name, i.e. CSectorDataNode |
| hash     | int    | Tree name hash, i.e. 2329527195 |

| Type | Description                                        |
| ---- | -------------------------------------------------- |
| bool | true if node pointer was modifier, false otherwise |

### Methods:

* `OnPrepareTreeNode(node, name, hash)`

## `OnDirectXResizeBuffers`
`Called when the IDXGISwapChain::ResizeBuffers method is called.`

### Methods:

* `OnDirectXResizeBuffers()`

## `OnDirectXPresent`
`Called when the IDXGISwapChain::Present method is called.`

### Methods:

* `OnDirectXPresent()`

## `OnWindowProc`
`Called when the WindowProc callback is called.`

| Argument | Type | Description                    |
| -------- | ---- | ------------------------------ |
| hwnd     | int  | A handle to the window         |
| msg      | int  | The message                    |
| wparam   | int  | Additional message information |
| lparam   | int  | Additional message information |

### Methods:

* `OnWindowProc(hwnd, msg, wparam, lparam)`

## `OnTransitionEnd`
`Called when the cutscene ends (single player) and at the moment the camera lands from the sky (online).`

| Argument        | Type | Description                                                                   |
| --------------- | ---- | ----------------------------------------------------------------------------- |
| is\_multiplayer | bool | If true, then the event was triggered online, false - in a single player game |

### Methods:

* `OnTransitionEnd(is_multiplayer)`

## `OnFirstSingleplayerJoin`
`Called upon first entering a single player game.`

### Methods:

* `OnFirstSingleplayerJoin()`

## `OnModderDetected`
`Called when a modder is detected in the session.`

| Argument | Type          | Description  |
| -------- | ------------- | ------------ |
| ply      | int           | Player index |
| reason   | modder\_flags | Modder flag  |

### Modder flags
```lua
modder_flags =
{
    spoofed_rid = bit.lshift(1, 0),
    force_host = bit.lshift(1, 1),
    money_drop = bit.lshift(1, 2),
    update_fxn = bit.lshift(1, 3),
    crc_mismatch = bit.lshift(1, 4),
    malformed_script = bit.lshift(1, 5),
    super_jump = bit.lshift(1, 6), -- Not implemented yet
    wrong_model = bit.lshift(1, 7),
    spoofed_ip = bit.lshift(1, 8),
    censor_bypass = bit.lshift(1, 9),
}
```

### Methods:

* `OnModderDetected(ply, reason)`

## `OnVehicleEnter`
`Called when the local player has entered the vehicle.`

| Argument | Type | Description            |
| -------- | ---- | ---------------------- |
| veh      | int  | Entered vehicle handle |

### Methods:

* `OnVehicleEnter(veh)`

## `OnVehicleLeave`
`Called when the local player has leaved the vehicle.`

| Argument | Type | Description           |
| -------- | ---- | --------------------- |
| veh      | int  | Leaved vehicle handle |

### Methods:

* `OnVehicleLeave(veh)`

## `OnSessionJoin`
`Called when the local player has joined session.`

### Methods:

* `OnSessionJoin()`

## `OnSessionLeft`
`Called when the local player has left session.`

### Methods:

* `OnSessionLeft()`

## `OnSpawn`
`Called when the local player has spawned.`

| Argument  | Type | Description                                          |
| --------- | ---- | ---------------------------------------------------- |
| is_online | bool | Whether spawned in online session or in singleplayer |

### Methods:

* `OnSpawn(is_online)`

## `OnWarningScreen`
`Called before showing warning screen.`

| Argument         | Type   | Description            |
| ---------------- | ------ | ---------------------- |
| script_thread    | string | Script thread          |
| entryHeader      | string | Warning message header |
| entryLine1       | string | Line 1 of text         |
| entryLine2       | string | Line 2 of text         |
| instructionalKey | string | Instructional key      |

### Return value:

| Type | Description                   |
| ---- | ----------------------------- |
| bool | false to prevent from showing |

### Methods:

* `OnWarningScreen(script_thread, entryHeader, entryLine1, entryLine2, instructionalKey)`

## `OnSyncBlocked`
`Called after protection blocked sync.`

| Argument | Type   | Description             |
| -------- | ------ | ----------------------- |
| ply      | int    | Player index            |
| reason   | string | Reason of blocking sync |
| ban_time | int    | Ban time in seconds     |

### Methods:

* `OnSyncBlocked(player, reason, ban_time)`

## `OnSessionHostChanged`
`Called after session host change.`

| Argument | Type | Description  |
| -------- | ---- | ------------ |
| ply      | int  | Player index |

### Methods:

* `OnSessionHostChanged(player)`