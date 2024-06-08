---
slug: /gta/lua/World
title: World
---

## enum VehicleUpgradeMethod
```lua
VehicleUpgradeMethod = {
    STOCK = 0,
    BASE = 1,
    POWER = 2,
    MAX = 3,
    RANDOM = 4,
}
```

## enum VehicleUpgradeMethod
```lua
VehicleBoostDir = {
    FORWARD = 0,
    RIGHT = 1,
    BACK = 2,
    LEFT = 3,
    UP = 4,
    DOWN = 5
}
```

## entity.delete
`Deletes any entity (object, pedestrian, transport) in the world.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle  | integer | The integer handle of the entity to delete. |
 | on_deleted? | fun(handle: integer) | Callback function that is called when the entity is successfully deleted. The 'handle' is the same as the one passed to function. |
 | on_failed? | fun(handle: integer) | Callback function that is called when the deletion fails. The 'handle' is the same as the one passed to function. |

- Methods:
  - `entity.delete(handle, on_deleted, on_failed)`

---

## entity.has_control
`Checks if the user has control over the specified entity.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle  | integer | The integer handle of the entity to check control. |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | boolean | Returns true if the user has control over the entity, or if the game is in singleplayer mode; false otherwise. |

- Methods:
  - `entity.has_control(handle)`

---

## entity.request_control
`Requests control of the specified entity asynchronously.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The integer handle of the entity for which control is being requested. |
 | on_obtain? | fun(handle: integer, tag?: integer) | Optional callback function called upon successful control acquisition. The 'handle' is the entity handle, and 'tag' is an optional additional parameter that can be used to assist in identifying the entity whose request was obtained. |
 | tag? | integer | An optional integer tag that can be passed to the callback function to help identify the entity whose control was requested.|

- Methods:
  - `entity.request_control(handle, on_obtain, tag)`

---

## pedestrian.spawn
`Spawns a pedestrian at specified coordinates or near the local player if no position is provided.`

<!-- TODO: format me -->

- Methods:
  - `pedestrian.spawn(...)`

---

## pedestrian.spawn_random
`Creates a random pedestrian in the game world in front of a specified player.`

<!-- This function spawns a random pedestrian using a random model available in the game.
-- The pedestrian is spawned 5 meters in front of the specified player and can be made networkable
-- for visibility in multiplayer mode. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | nInFrontOf? | integer | The identifier of the player in front of whom the pedestrian will be created. If not specified or -1, the function automatically uses the identifier of the local player. |
 | bConsciousness? | boolean | A flag indicating whether the pedestrian should be conscious. If true, the pedestrian will start wandering with standard behavior. If false or not specified, the pedestrian is created without any assigned tasks. |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | integer | Returns the identifier of the created pedestrian on success, or 0 if the creation fails. |

- Methods:
  - `pedestrian.spawn_random(nInFrontOf, bConsciousness)`

---

## pedestrian.possess
`Allows the player to possess and control the specified pedestrian.`
<!-- -- This function makes the player take control of the pedestrian identified by the given handle. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the pedestrian to be possessed. |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | boolean | Returns true if the player successfully possesses the pedestrian, false otherwise. |

- Methods:
  - `pedestrian.possess(handle)`

---

## pedestrian.get_random
`Retrieves a random non-player pedestrian from the environment.`
<!-- This function selects a random pedestrian, with an option to ignore those in or near vehicles. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | ignore_vehicles? | boolean  | Optionally specifies whether to ignore pedestrians in or near vehicles. If true, pedestrians in or near vehicles will not be considered. If false or not specified, all pedestrians are considered. |

- Return:

 | Type   | Description |
 | --- | ---- |
 | integer | Returns the handle of the randomly selected pedestrian, or 0 if no suitable pedestrian is found. |

- Methods:
  - `pedestrian.get_random(ignore_vehicles)`

---

## pedestrian.make_guard
`Transforms the specified pedestrian into a marine bodyguard.`
<!-- Enhances the pedestrian's abilities for improved combat performance. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the pedestrian to be transformed. |

- Return:

 | Type   | Description |
 | --- | ---- |
 | boolean | Returns true if the transformation was successful, false otherwise. |

- Methods:
  - `pedestrian.make_guard(handle)`

---

## pedestrian.send_assassin
`Sends an assassin after a specified pedestrian or player with parameters for improved combat performance.`
`Note: All parameters except the target are optional. Defaults apply where not specified.`

<!-- The assassin will attempt to kill the target. -->

- Overloads:
  1. `pedestrian.send_assassin(handle, model?, weapon?, vehicle?)`
  2. `pedestrian.send_assassin(ply, model?, weapon?, vehicle?)`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle |number | player_t The target pedestrian or player identifier.|
 | model? | integer | The hash of the assassin's model. | <!-- string.joaat('s_m_y_swat_01') -->
 | weapon? | integer | The hash of the assassin's weapon. | <!-- string.joaat('WEAPON_ASSAULTRIFLE') -->
 | vehicle? | integer | The hash of the vehicle for the assassin. If specified, determines the assassin's approach: driving if in the driver's seat, waiting if in the passenger's seat. | <!-- 0 -->

- Return:

 | Type   | Description |
 | --- | ---- |
 |integer | Returns the handle of the spawned assassin on success, or 0 if an error occurred. |

- Methods:
  - `pedestrian.send_assassin(handle_or_ply, model, weapon, vehicle)`

---

## pedestrian.repair
`Repairs the specified pedestrian.`
<!-- This function must be called within a fiber context; otherwise, it will cease operation and return false.
The function restores the pedestrian to a healthy state, resurrecting them if dead and healing injuries. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the pedestrian to be repaired. |

- Return:

 | Type   | Description |
 | --- | ---- |
 | boolean | Returns true if the pedestrian was successfully repaired, false if called outside of a script thread or if the operation failed. |

- Methods:
  - `pedestrian.repair(handle)`

---

## vehicle.spawn
`@overload fun(name: string)`

<!-- TODO: format me -->

- Methods:
  - `vehicle.spawn(...)`

---

## vehicle.spawn_preset
`@overload fun(name: string)`

<!-- TODO: format me -->

- Methods:
  - `vehicle.spawn_preset(...)`

---

## vehicle.get_presets
`Retrieves a list of names for cloud-synced vehicle presets.`

- Return:

 | Type   | Description |
 | --- | ---- |
 | table[string] | A table of strings, each representing the name of a cloud-synced vehicle that can be spawned. |

- Methods:
  - `vehicle.get_presets()`

---

## vehicle.repair
`Repairs and cleans the specified vehicle.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to repair and clean. |

- Methods:
  - `vehicle.repair(handle)`

---

## vehicle.clean
`Cleans the specified vehicle.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to clean. |

- Methods:
  - `vehicle.clean(handle)`

---

## vehicle.ignite
`Ignites the specified vehicle.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to ignite. |

- Methods:
  - `vehicle.ignite(handle)`

---

## vehicle.extinguish
`Extinguishes fire on the specified vehicle.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to extinguish. |

- Methods:
  - `vehicle.extinguish(handle)`

---

## vehicle.start_engine
`Starts the engine of the specified vehicle.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle whose engine is to be started. |

- Methods:
  - `vehicle.start_engine(handle)`

---

## vehicle.stop_engine
`Stops the engine of the specified vehicle.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle whose engine is to be stopped. |

- Methods:
  - `vehicle.stop_engine(handle)`

---

## vehicle.upgrade
`Upgrades a vehicle to a specified upgrade type.`
<!-- This function upgrades a vehicle based on the specified upgrade type. If no type is specified, it defaults to the maximum upgrade level. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to upgrade. |
 | type? | VehicleUpgradeMethod | The type of upgrade to apply. | <!-- VehicleUpgradeMethod.MAX -->

- Methods:
  - `vehicle.upgrade(handle, type)`

---

## vehicle.teleport
`Teleports a vehicle to a specified location.`
 <!-- This function attempts to teleport a vehicle to the given coordinates. If multiple attempts are specified, the function should be called within a fiber context to handle retries properly. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to teleport. |
 | pos | table | A table with 'x', 'y', and 'z' fields representing the destination coordinates. |
 | tries? | integer | (default: 1) The number of attempts to teleport the vehicle. If more than one attempt is needed, the function must be run within a fiber to manage multiple attempts. |

- Methods:
  - `vehicle.teleport(handle, pos, tries)`

---

## vehicle.boost
`Boosts a vehicle in a specified direction with a specified power.`
<!-- This function applies a force to the vehicle to accelerate it in a chosen direction.
If no direction is specified, the boost is applied forward by default. -->

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | handle | integer | The handle of the vehicle to boost. |
 | power? | number | The magnitude of the boost force to apply. | <!-- 1000.0 -->
 | dir? | VehBoostDir | The direction in which to apply the boost. | <!-- VehBoostDir.FORWARD -->

- Methods:
  - `vehicle.boost(handle, power, dir)`

---

## object.spawn
`Spawns an object at specified coordinates or at the default location near the local player if no position is provided.`

<!-- TODO: format me -->

- Methods:
  - `object.spawn(...)`

---

