---
slug: /gta/lua/entity
title: Entity
---

# entity

```ebnf
Methods related to entities
```

## Functions

## `entity.spawn_ped`

`Spawn pedestrian.`

### Parameters:

| Name        | Type          | Description                  |
| ----------- | ------------- | ---------------------------- |
| hash        | string/number | Pedestrian hash              |
| position    | Vector3       | Spawn position               |
| on\_spawned | function      | Callback on successful spawn |

### Methods:

* `entity.spawn_ped(hash, position, on_spawned)`
* `entity.spawn_ped(hash, position)`
* `entity.spawn_ped(hash, on_spawned)`
* `entity.spawn_ped(hash)`

### Callbacks:

* `function on_spawned(entity)`

## `entity.spawn_veh`

`Spawn vehicle.`

### Parameters:

| Name        | Type          | Description                  |
| ----------- | ------------- | ---------------------------- |
| hash        | string/number | Vehicle hash                 |
| position    | Vector3       | Spawn position               |
| on\_spawned | function      | Callback on successful spawn |

### Methods:

* `entity.spawn_veh(hash, position, on_spawned)`
* `entity.spawn_veh(hash, position)`
* `entity.spawn_veh(hash, on_spawned)`
* `entity.spawn_veh(hash)`

### Callbacks:

* `function on_spawned(entity)`

## `entity.spawn_cloud_veh`

`Spawn vehicle from cloud list.`

### Parameters:

| Name        | Type     | Description                  |
| ----------- | -------- | ---------------------------- |
| name        | string   | Name of vehicle in menu      |
| position    | Vector3  | Spawn position               |
| on\_spawned | function | Callback on successful spawn |

### Methods:

* `entity.spawn_veh_cloud(name, position, on_spawned)`
* `entity.spawn_veh_cloud(name, position)`
* `entity.spawn_veh_cloud(name, on_spawned)`
* `entity.spawn_veh_cloud(name)`

### Callbacks:

* `function on_spawned(entity)`

## `entity.spawn_obj`

`Spawn object.`

### Parameters:

| Name        | Type          | Description                  |
| ----------- | ------------- | ---------------------------- |
| hash        | string/number | Object hash                  |
| position    | Vector3       | Spawn position               |
| on\_spawned | function      | Callback on successful spawn |

### Methods:

* `entity.spawn_obj(hash, position, on_spawned)`
* `entity.spawn_obj(hash, position)`
* `entity.spawn_obj(hash, on_spawned)`
* `entity.spawn_obj(hash)`

### Callbacks:

* `function on_spawned(entity)`

## `entity.delete`

`Delete object.`

### Parameters:

| Name        | Type     | Description         |
| ----------- | -------- | ------------------- |
| entity      | int      | Entity handle       |
| on\_failed  | function | Callback on fail    |
| on\_deleted | function | Callback on success |

### Methods:

* `entity.delete(entity, on_deleted, on_failed)`
* `entity.delete(entity, on_deleted)`
* `entity.delete(entity)`

### Callbacks:

* `function on_failed(entity)`
* `function on_deleted(entity)`

## `entity.is_controlled`

`To see if we have control over the entity.`

### Parameters:

| Name   | Type | Description   |
| ------ | ---- | ------------- |
| entity | int  | Object handle |

### Return value:

| Name    | Type | Description                                               |
| ------- | ---- | --------------------------------------------------------- |
| success | bool | true if there is control over the entity, false otherwise |

### Methods:

* `entity.is_controlled(entity)`

## `entity.request_control`

`Request controll for object.`

### Parameters:

| Name       | Type     | Description                                                            |
| ---------- | -------- | ---------------------------------------------------------------------- |
| entity     | int      | Object handle                                                          |
| on\_obtain | function | Callback, which will be called if the control is successfully received |
| tag        |          | A script-defined value to be passed to the callback                    |

### Methods:

* `entity.request_control(entity, on_obtain, tag)`
* `entity.request_control(entity, on_obtain)`
* `entity.request_control(entity)`

### Callbacks:

* `function on_obtain(entity, tag)`
* `function on_obtain(entity)`
