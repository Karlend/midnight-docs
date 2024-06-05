---
slug: /gta/lua/World
title: World
---

## entity.delete
`Deletes any entity (object, pedestrian, transport) in the world.`

- Methods:

`entity.delete(handle, on_deleted, on_failed)`

---

## entity.has_control
`Checks if the user has control over the specified entity.`

- Methods:

`entity.has_control(handle)`

---

## entity.request_control
`Requests control of the specified entity asynchronously.`

- Methods:

`entity.request_control(handle, on_obtain, tag)`

---

## pedestrian.spawn
`@overload fun(name: string)`

- Methods:

`pedestrian.spawn(...)`

---

## pedestrian.spawn_random
`Creates a random pedestrian in the game world in front of a specified player.`

- Methods:

`pedestrian.spawn_random(nInFrontOf, bConsciousness)`

---

## pedestrian.possess
`Allows the player to possess and control the specified pedestrian.`

- Methods:

`pedestrian.possess(handle)`

---

## pedestrian.get_random
`Retrieves a random non-player pedestrian from the environment.`

- Methods:

`pedestrian.get_random(ignore_vehicles)`

---

## pedestrian.make_guard
`Transforms the specified pedestrian into a marine bodyguard.`

- Methods:

`pedestrian.make_guard(handle)`

---

## pedestrian.send_assassin
`Sends an assassin after a specified pedestrian or player with parameters for improved combat performance.`

- Methods:

`pedestrian.send_assassin(handle_or_ply, model, weapon, vehicle)`

---

## pedestrian.repair
`Repairs the specified pedestrian.`

- Methods:

`pedestrian.repair(handle)`

---

## vehicle.spawn
`@overload fun(name: string)`

- Methods:

`vehicle.spawn(...)`

---

## vehicle.spawn_preset
`@overload fun(name: string)`

- Methods:

`vehicle.spawn_preset(...)`

---

## vehicle.get_presets
`Retrieves a list of names for cloud-synced vehicle presets.`

- Methods:

`vehicle.get_presets()`

---

## vehicle.repair
`Repairs and cleans the specified vehicle.`

- Methods:

`vehicle.repair(handle)`

---

## vehicle.clean
`Cleans the specified vehicle.`

- Methods:

`vehicle.clean(handle)`

---

## vehicle.ignite
`Ignites the specified vehicle.`

- Methods:

`vehicle.ignite(handle)`

---

## vehicle.extinguish
`Extinguishes fire on the specified vehicle.`

- Methods:

`vehicle.extinguish(handle)`

---

## vehicle.start_engine
`Starts the engine of the specified vehicle.`

- Methods:

`vehicle.start_engine(handle)`

---

## vehicle.stop_engine
`Stops the engine of the specified vehicle.`

- Methods:

`vehicle.stop_engine(handle)`

---

## vehicle.upgrade
`Upgrades a vehicle to a specified upgrade type.`

- Methods:

`vehicle.upgrade(handle, type)`

---

## vehicle.teleport
`Teleports a vehicle to a specified location.`

- Methods:

`vehicle.teleport(handle, pos, tries)`

---

## vehicle.boost
`Boosts a vehicle in a specified direction with a specified power.`

- Methods:

`vehicle.boost(handle, power, dir)`

---

## object.spawn
`@overload fun(name: string)`

- Methods:

`object.spawn(...)`

---

