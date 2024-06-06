---
slug: /gta/lua/Entity
title: Entity
---

## fwEntity:get_id
`Returns the handle of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The handle of the entity. |

- Methods:
  - `fwEntity:get_id()`

---

## fwEntity:is_valid
`Validates the entity object.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is considered valid, false otherwise. |

- Methods:
  - `fwEntity:is_valid()`

---

## fwEntity:get_netid
`Returns the network handle of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The network handle (ObjectId) of the entity. |

- Methods:
  - `fwEntity:get_netid()`

---

## fwEntity:get_entity_ptr
`Returns a pointer to the underlying rage::fwEntity object.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | A pointer to the rage::fwEntity object. |

- Methods:
  - `fwEntity:get_entity_ptr()`

---

## fwEntity:get_netobj_ptr
`Returns a pointer to the underlying rage::netObject.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | A pointer to the rage::netObject. |

- Methods:
  - `fwEntity:get_netobj_ptr()`

---

## fwEntity:get_interior
`Returns the handle of the entity's interior.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The handle of the interior in which the entity is located. |

- Methods:
  - `fwEntity:get_interior()`

---

## fwEntity:is_on_screen
`Checks if the entity is currently rendered on the screen.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is on the screen, false otherwise. |

- Methods:
  - `fwEntity:is_on_screen()`

---

## fwEntity:get_coords
`Retrieves the world coordinates of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z coordinates of the entity in the game world. |

- Methods:
  - `fwEntity:get_coords()`

---

## fwEntity:get_screen
`Retrieves the screen coordinates of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number The x and y coordinates of the entity on the screen. |

- Methods:
  - `fwEntity:get_screen()`

---

## fwEntity:get_angles
`Retrieves the angles of the entity in Euler angles (pitch, yaw, roll).`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The pitch, yaw, and roll angles of the entity. |

- Methods:
  - `fwEntity:get_angles()`

---

## fwEntity:get_mins
`Retrieves the minimum bounding coordinates of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The minimum x, y, and z coordinates of the entity's bounding box. |

- Methods:
  - `fwEntity:get_mins()`

---

## fwEntity:get_maxs
`Retrieves the maximum bounding coordinates of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The maximum x, y, and z coordinates of the entity's bounding box. |

- Methods:
  - `fwEntity:get_maxs()`

---

## fwEntity:get_forward
`Retrieves the forward vector of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z components of the forward vector. |

- Methods:
  - `fwEntity:get_forward()`

---

## fwEntity:get_right
`Retrieves the right vector of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z components of the right vector. |

- Methods:
  - `fwEntity:get_right()`

---

## fwEntity:get_up
`Retrieves the up vector of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number, | number, number The x, y, and z components of the up vector. |

- Methods:
  - `fwEntity:get_up()`

---

## fwEntity:get_heading
`Gets the heading of the entity in degrees.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The heading of the entity, representing the direction it is facing. |

- Methods:
  - `fwEntity:get_heading()`

---

## fwEntity:get_distance
`Calculates the distance from the local player to the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | The distance from the local player to the entity. |

- Methods:
  - `fwEntity:get_distance()`

---

## fwEntity:get_health
`Retrieves the current health of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The current health of the entity. |

- Methods:
  - `fwEntity:get_health()`

---

## fwEntity:get_health_max
`Retrieves the maximum health of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The maximum health of the entity. |

- Methods:
  - `fwEntity:get_health_max()`

---

## fwEntity:is_alive
`Checks if the entity is alive.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is alive, false if dead or the health is zero or below. |

- Methods:
  - `fwEntity:is_alive()`

---

## fwEntity:is_dead
`Checks if the entity is dead.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity's health is zero or below, false otherwise. |

- Methods:
  - `fwEntity:is_dead()`

---

## fwEntity:is_broken
`An object is considered broken if it is damaged and not visible due to its damaged state.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is broken, false otherwise. |

- Methods:
  - `fwEntity:is_broken()`

---

## fwEntity:is_player
`Checks if the entity is a player.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is a player, false otherwise. |

- Methods:
  - `fwEntity:is_player()`

---

## fwEntity:is_object
`Checks if the entity is a type of object.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is an object, false otherwise. |

- Methods:
  - `fwEntity:is_object()`

---

## fwEntity:is_pedestrian
`Checks if the entity is a type of pedestrian.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is a pedestrian, false otherwise. |

- Methods:
  - `fwEntity:is_pedestrian()`

---

## fwEntity:is_vehicle
`Checks if the entity is a type of vehicle.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is a vehicle, false otherwise. |

- Methods:
  - `fwEntity:is_vehicle()`

---

## fwEntity:is_building
`Checks if the entity is a type of building.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is a building, false otherwise. |

- Methods:
  - `fwEntity:is_building()`

---

## fwEntity:is_interior
`Checks if the entity is part of an interior (MLO).`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is an interior, false otherwise. |

- Methods:
  - `fwEntity:is_interior()`

---

## fwEntity:is_physical
`Checks if the entity is a physical object, which includes objects, pedestrians, or vehicles.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is physical, false otherwise. |

- Methods:
  - `fwEntity:is_physical()`

---

## fwEntity:is_pickup
`Checks if the entity is a pickup.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is pickup, false otherwise. |

- Methods:
  - `fwEntity:is_pickup()`

---

## fwEntity:is_door
`Checks if the entity is a door.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is door, false otherwise. |

- Methods:
  - `fwEntity:is_door()`

---

## fwEntity:is_weapon
`Checks if the entity is a weapon.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is weapon, false otherwise. |

- Methods:
  - `fwEntity:is_weapon()`

---

## fwEntity:get_model
`Gets the model hash of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | integer | The model hash of the entity. |

- Methods:
  - `fwEntity:get_model()`

---

## fwEntity:get_entity_script_type
`Retrieves the script type of the entity as defined in the ScriptEntityType enum.`
- Return:

 | Type | Description |
 | --- | --- |
 | ScriptEntityType | The script type of the entity. |

- Methods:
  - `fwEntity:get_entity_script_type()`

---

## fwEntity:get_basic_flag
`Retrieves a basic entity flag.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | EntityFlagsBasic | The flag to check. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the flag is set, false otherwise. |

- Methods:
  - `fwEntity:get_basic_flag(flag)`

---

## fwEntity:set_basic_flag
`Sets a basic entity flag.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | EntityFlagsBasic | The flag to set. |


- Methods:
  - `fwEntity:set_basic_flag(flag)`

---

## fwEntity:get_flag
`Retrieves a specific entity flag.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | EntityFlags | The flag to check. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the flag is set, false otherwise. |

- Methods:
  - `fwEntity:get_flag(flag)`

---

## fwEntity:set_flag
`Sets or clears a specific entity flag.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | EntityFlags | The flag to set or clear. |
 | value | boolean | The value to set (true to set the flag, false to clear it). |


- Methods:
  - `fwEntity:set_flag(flag, value)`

---

## fwEntity:get_physical_flag
`Retrieves a physical flag for the entity.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | PhysicalFlags | The flag to check. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the flag is set, false otherwise. |

- Methods:
  - `fwEntity:get_physical_flag(flag)`

---

## fwEntity:set_physical_flag
`Sets or clears a physical flag for the entity.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | PhysicalFlags | The flag to set or clear. |
 | value | boolean | The value to set (true to set the flag, false to clear it). |


- Methods:
  - `fwEntity:set_physical_flag(flag, value)`

---

## fwEntity:get_object_flag
`Retrieves an object flag for the entity. Only applicable to object entities (i.e. pickups).`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | ObjectFlags | The flag to check. |

- Return:

 | Type | Description |
 | --- | --- |
 | ObjectFlags | Returns true if the flag is set, false otherwise. |

- Methods:
  - `fwEntity:get_object_flag(flag)`

---

## fwEntity:set_object_flag
`Sets or clears an object flag for the entity. Only applicable to object entities (i.e. pickups).`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | flag | ObjectFlags | The flag to set or clear. |
 | value | boolean | The value to set (true to set the flag, false to clear it). |


- Methods:
  - `fwEntity:set_object_flag(flag, value)`

---

## fwEntity:get_status
`Retrieves the current status of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | EntityStatus | The current status of the entity. |

- Methods:
  - `fwEntity:get_status()`

---

## fwEntity:get_frozen_by_interior
`Checks if the entity has been frozen by an interior.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is frozen by an interior, false otherwise. |

- Methods:
  - `fwEntity:get_frozen_by_interior()`

---

## fwEntity:get_frozen
`Checks if the entity's updates are currently frozen.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is frozen, false otherwise. |

- Methods:
  - `fwEntity:get_frozen()`

---

## fwEntity:get_checked_for_dead
`Checks if the entity's dead/alive state has been checked this frame.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if checked, false otherwise. |

- Methods:
  - `fwEntity:get_checked_for_dead()`

---

## fwEntity:get_is_golf_ball
`Checks if the entity is marked as a golf ball.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is a golf ball, false otherwise. |

- Methods:
  - `fwEntity:get_is_golf_ball()`

---

## fwEntity:get_force_pre_physics_anim_update
`Checks if the entity should always update its animation pre physics regardless of visibility.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity requires forced pre-physics animation update, false otherwise. |

- Methods:
  - `fwEntity:get_force_pre_physics_anim_update()`

---

## fwEntity:get_is_breakable_glass
`Checks if the entity is breakable glass.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is breakable glass, false otherwise. |

- Methods:
  - `fwEntity:get_is_breakable_glass()`

---

## fwEntity:get_is_out_of_map
`Checks if the entity is out of the game map bounds.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is out of map, false otherwise. |

- Methods:
  - `fwEntity:get_is_out_of_map()`

---

## fwEntity:get_override_physics_bounds
`Checks if the entity has overridden physics bounds.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the physics bounds are overridden, false otherwise. |

- Methods:
  - `fwEntity:get_override_physics_bounds()`

---

## fwEntity:get_has_moved_since_last_pre_render
`Checks if the entity has moved since the last pre-render update.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity has moved since the last pre-render, false otherwise. |

- Methods:
  - `fwEntity:get_has_moved_since_last_pre_render()`

---

## fwEntity:get_use_extended_bounding_box
`Checks if the entity uses an extended bounding box.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity uses an extended bounding box, false otherwise. |

- Methods:
  - `fwEntity:get_use_extended_bounding_box()`

---

## fwEntity:get_is_straddling_portal
`Checks if the entity is straddling a portal.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the entity is straddling a portal, false otherwise. |

- Methods:
  - `fwEntity:get_is_straddling_portal()`

---

## fwEntity:get_pop_type
`Retrieves the current population type of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | PopType | The current population type of the entity. |

- Methods:
  - `fwEntity:get_pop_type()`

---

## fwEntity:get_pop_type_prev
`Retrieves the previous population type of the entity.`
- Return:

 | Type | Description |
 | --- | --- |
 | PopType | The previous population type of the entity. |

- Methods:
  - `fwEntity:get_pop_type_prev()`

---

## fwEntity:set_status
`Sets the current status of the entity.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | status | eEntityStatus | The status to set for the entity. |


- Methods:
  - `fwEntity:set_status(status)`

---

## fwEntity:set_frozen_by_interior
`Sets whether the entity is frozen by an interior.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | frozen | boolean | True to freeze the entity by an interior, false to unfreeze. |


- Methods:
  - `fwEntity:set_frozen_by_interior(frozen)`

---

## fwEntity:set_frozen
`Sets whether the entity's updates are currently frozen.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | frozen | boolean | True to freeze the entity, false to unfreeze. |


- Methods:
  - `fwEntity:set_frozen(frozen)`

---

## fwEntity:set_checked_for_dead
`Sets whether the entity's dead/alive state has been checked this frame.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | checked | boolean | True to mark as checked, false otherwise. |


- Methods:
  - `fwEntity:set_checked_for_dead(checked)`

---

## fwEntity:set_is_golf_ball
`Sets whether the entity is marked as a golf ball.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | isGolfBall | boolean | True to mark the entity as a golf ball, false otherwise. |


- Methods:
  - `fwEntity:set_is_golf_ball(isGolfBall)`

---

## fwEntity:set_force_pre_physics_anim_update
`Sets whether the entity should always update its animation pre physics regardless of visibility.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | force | boolean | True to force pre-physics animation updates, false to allow normal behavior. |


- Methods:
  - `fwEntity:set_force_pre_physics_anim_update(force)`

---

## fwEntity:set_is_breakable_glass
`Sets whether the entity is breakable glass.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | isBreakable | boolean | True if the entity is breakable glass, false otherwise. |


- Methods:
  - `fwEntity:set_is_breakable_glass(isBreakable)`

---

## fwEntity:set_is_out_of_map
`Sets whether the entity is considered to be out of the game map bounds.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | isOutOfMap | boolean | True to mark the entity as out of map, false otherwise. |


- Methods:
  - `fwEntity:set_is_out_of_map(isOutOfMap)`

---

## fwEntity:set_override_physics_bounds
`Sets whether the entity has overridden physics bounds.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | override | boolean | True to override physics bounds, false to use default bounds. |


- Methods:
  - `fwEntity:set_override_physics_bounds(override)`

---

## fwEntity:set_has_moved_since_last_pre_render
`Sets whether the entity has moved since the last pre-render update.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | hasMoved | boolean | True if the entity has moved since the last pre-render, false otherwise. |


- Methods:
  - `fwEntity:set_has_moved_since_last_pre_render(hasMoved)`

---

## fwEntity:set_use_extended_bounding_box
`Sets whether the entity uses an extended bounding box.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | useExtended | boolean | True to use an extended bounding box, false to use the standard box. |


- Methods:
  - `fwEntity:set_use_extended_bounding_box(useExtended)`

---

## fwEntity:set_is_straddling_portal
`Sets whether the entity is straddling a portal.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | isStraddling | boolean | True if the entity is straddling a portal, false otherwise. |


- Methods:
  - `fwEntity:set_is_straddling_portal(isStraddling)`

---

## fwEntity:set_pop_type
`Sets the current population type of the entity.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | popType | PopType | The population type to set for the entity. |


- Methods:
  - `fwEntity:set_pop_type(popType)`

---

## fwEntity:set_pop_type_prev
`Sets the previous population type of the entity.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | popTypePrev | PopType | The previous population type to set for the entity. |


- Methods:
  - `fwEntity:set_pop_type_prev(popTypePrev)`

---

## ent
`unknown`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | number | Entity | handle. |

- Return:

 | Type | Description |
 | --- | --- |
 | fwEntity | Engine entiny object. |

- Methods:
  - `ent(handle)`

---

