---
slug: /gta/lua/Native
title: Native
---

## native.invoke
`-- This example calls PLAYER.GET_PLAYER_PED, which returns the ped handle for the given player ID.`

- Methods:

`native.invoke(return_type, id, ...)`

---

## native.is_invoker_ready
`@return boolean True if native functions can be called via the invoker, false otherwise.`

- Methods:

`native.is_invoker_ready()`

---

## native.get_native_name
`print(name) -- Output: GET_PLAYER_PED`

- Methods:

`native.get_native_name(hash)`

---

## native.get_native_name_full
`print(fullName) -- Output: PLAYER::GET_PLAYER_PED`

- Methods:

`native.get_native_name_full(hash)`

---

## native.get_native_namespace
`print(namespace) -- Output: PLAYER`

- Methods:

`native.get_native_namespace(hash)`

---

