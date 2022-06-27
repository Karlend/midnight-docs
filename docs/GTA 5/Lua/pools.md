---
slug: /gta/lua/pools
title: pools
---

# pools

```ebnf
Workspace to work with entity pools
```

## Functions

## `pools.get_all_vehicles`

`Get a list of all vehicles.`

### Return value:

| Name | Type  | Description           |
| ---- | ----- | --------------------- |
| list | table | List of all vehicles. |

### Methods:

* `pools.get_all_vehicles()`

## `pools.get_all_peds`

`Get a list of all peds.`

### Return value:

| Name | Type  | Description       |
| ---- | ----- | ----------------- |
| list | table | List of all peds. |

### Methods:

* `pools.get_all_peds()`

## `pools.get_all_objects`

`Get a list of all objects.`

### Return value:

| Name | Type  | Description          |
| ---- | ----- | -------------------- |
| list | table | List of all objects. |

### Methods:

* `pools.get_all_objects()`

## `pools.get_all_ents`

`Get a list of entities.`

### Return value:

| Name | Type  | Description                                                                                  |
| ---- | ----- | -------------------------------------------------------------------------------------------- |
| list | table | List of all entities (a separate list of entities that do not belong to any entity subtype). |

### Methods:

* `pools.get_all_ents()`

## `pools.get_all_pickups`

`Get a list of all items that can be picked up.`

### Return value:

| Name | Type  | Description                              |
| ---- | ----- | ---------------------------------------- |
| list | table | List of all items that can be picked up. |

### Methods:

* `pools.get_all_pickups()`
