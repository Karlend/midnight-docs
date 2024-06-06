---
slug: /gta/lua/Pickups
title: Pickups
---

## pickups.is_money_detected_hash
`Checks if the given pickup type is likely to trigger a pickup spawn block and possibly activate anti-cheat systems.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | pickupType | number | The type of the pickup to check (PICKUP_TYPE values can be used here). |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | True if the pickup type may cause a spawn block and trigger anti-cheat systems, false otherwise. |

- Methods:
  - `pickups.is_money_detected_hash(pickupType)`

---

## pickups.find_group_by_hash
`Finds a pickup group by its hash.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | hashHash | PICKUP_TYPE | The hash of the pickup group. |

- Return:

 | Type | Description |
 | --- | --- |
 | pickup_group_t|nil | The pickup group if found; nil otherwise. |

- Methods:
  - `pickups.find_group_by_hash(hashHash)`

---

## pickups.find_group_by_model
`Finds a pickup group by its model hash.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | modelHash | Hash | The model hash of the pickup group. |

- Return:

 | Type | Description |
 | --- | --- |
 | pickup_group_t|nil | The pickup group if found; nil otherwise. |

- Methods:
  - `pickups.find_group_by_model(modelHash)`

---

## pickups.find_pickup_by_hash
`Finds a pickup type by its hash.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | pickupHash | PICKUP_TYPE | The hash of the pickup type. |

- Return:

 | Type | Description |
 | --- | --- |
 | pickup_type_t|nil | The pickup type if found; nil otherwise. |

- Methods:
  - `pickups.find_pickup_by_hash(pickupHash)`

---

## pickups.find_pickup_by_model
`Finds a pickup type by its model hash.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | modelHash | Hash | The model hash of the pickup type. |

- Return:

 | Type | Description |
 | --- | --- |
 | pickup_type_t|nil | The pickup type if found; nil otherwise. |

- Methods:
  - `pickups.find_pickup_by_model(modelHash)`

---

## pickups.spawn
`@return number The handle of the spawned pickup.`

- Methods:
  - `pickups.spawn(pickup, pos, amount)`

---

## pickups.spawn_for_player
`@overload fun(pickup: PICKUP_TYPE, modelHash: Hash, player: number|player_t, amount: integer): number`

- Methods:
  - `pickups.spawn_for_player(pickup, modelHash, player, amount)`

---

## pickups.spawn_group
`@return table A Lua table containing the spawned pickups.`

- Methods:
  - `pickups.spawn_group(group, pos, amount, despawnTime)`

---

## pickups.spawn_health
`@return number The handle of the spawned pickup.`

- Methods:
  - `pickups.spawn_health(player, despawnTime)`

---

## pickups.spawn_armor
`@return number The handle of the spawned pickup.`

- Methods:
  - `pickups.spawn_armor(player, despawnTime)`

---

## pickups.spawn_weapons
`@return table A Lua table containing the spawned pickups.`

- Methods:
  - `pickups.spawn_weapons(player, despawnTime)`

---

## pickups.spawn_ammo
`@return table A Lua table containing the spawned pickups.`

- Methods:
  - `pickups.spawn_ammo(player, despawnTime)`

---

## pickups.spawn_ex
`@return number The handle of the spawned pickup.`

- Methods:
  - `pickups.spawn_ex(hPickup, hModel, pos, amount, flags, despawnTime, forceModel)`

---

