---
slug: /gta/lua/stats
title: stats
---

# stats

```ebnf
Namespace to work with stats
```

## Functions

## `stats.exists`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.exists(hash)`

### Return value:

| Name   | Type | Description    |
| ------ | ---- | -------------- |
| exists | bool | Is stat exists |

## `stats.get_stat_type`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_stat_type(hash)`

### Return value:

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| StatType\_e | int  | Stat type   |

## `stats.get_stat_type_name`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_stat_type_name(hash)`

### Return value:

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| stat\_type | string | Stat type   |

### Types `StatType_e`
```lua
StatType_e =
{
    NONE = 0,
    INT = 1,
    FLOAT = 2,
    STRING = 3,
    BOOL = 4,
    UINT8 = 5,
    UINT16 = 6,
    UINT32 = 7,
    UINT64 = 8,
    DATE = 20,
    POS = 21,
    TEXTLABEL = 22,
    PACKED = 23,
    USERID = 24,
    PROFILE_SETTING = 25,
    INT64 = 26,
}
```

## `stats.set_bool`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | bool | New stat value |

### Methods

* `stats.set_bool(hash, value)`

## `stats.set_u8`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | int  | New stat value |

### Methods

* `stats.set_u8(hash, value)`

## `stats.set_u16`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | int  | New stat value |

### Methods

* `stats.set_u16(hash, value)`

## `stats.set_u32`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | int  | New stat value |

### Methods

* `stats.set_u32(hash, value)`

## `stats.set_u64`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | int  | New stat value |

### Methods

* `stats.set_u64(hash, value)`

## `stats.set_float`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| hash  | int   | Stat hash      |
| value | float | New stat value |

### Methods

* `stats.set_float(hash, value)`

## `stats.set_string`

### Parameters

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| hash  | int    | Stat hash      |
| value | string | New stat value |

### Methods

* `stats.set_string(hash, value)`

## `stats.get_bool`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_bool(hash)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool | Stat value  |

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool | Stat value  |

## `stats.get_u8`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_u8(hash)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Stat value  |

## `stats.get_u16`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_u16(hash)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Stat value  |

## `stats.get_u32`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_u32(hash)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Stat value  |

## `stats.get_u64`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_u64(hash)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Stat value  |

## `stats.get_float`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_float(hash)`

### Return value:

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| value | number | Stat value  |

## `stats.get_string`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_string(hash)`

### Return value:

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| value | string | Stat value  |

## `stats.is_masked_valid`

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| hash   | int  | Stat hash   |
| offset | int  | Stat offset |
| mask   | int  | Stat mask   |

### Methods

* `stats.is_masked_valid(hash, offset, mask)`

### Return value:

| Name  | Type | Description   |
| ----- | ---- | ------------- |
| valid | bool | Is stat valid |

## `stats.get_masked_int`

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| hash   | int  | Stat hash   |
| offset | int  | Stat offset |
| mask   | int  | Stat mask   |

### Methods

* `stats.get_masked_int(hash, offset, mask)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Stat value  |

## `stats.set_masked_int`

### Methods

* `stats.set_masked_int(value)`

### Parameters

| Name   | Type | Description    |
| ------ | ---- | -------------- |
| hash   | int  | Stat hash      |
| value  | int  | New stat value |
| offset | int  | Stat offset    |
| mask   | int  | Stat mask      |

### Methods

* `stats.set_masked_int(hash, value, offset, mask)`

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |

## `stats.get_packed_mask`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_packed_mask(hash)`

### Return value:

| Name | Type | Description |
| ---- | ---- | ----------- |
| mask | int  | Packed mask |

### Methods

* `stats.get_packed_mask(hash)`

## `stats.get_packed_stat_int`

### Parameters

| Name | Type | Description    |
| ---- | ---- | -------------- |
| hash | int  | Stat hash      |
| slot | int  | Character slot |

### Methods

* `stats.get_packed_stat_int(hash, slot)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Stat value  |

## `stats.get_packed_stat_bool`

### Parameters

| Name | Type | Description    |
| ---- | ---- | -------------- |
| hash | int  | Stat hash      |
| slot | int  | Character slot |

### Methods

* `stats.get_packed_stat_bool(hash, slot)`

### Return value:

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool | Stat value  |


## `stats.set_packed_stat_int`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | int  | New stat value |
| slot  | int  | Character slot |

### Methods

* `stats.set_packed_stat_int(hash, value, slot)`

## `stats.set_packed_stat_bool`

### Parameters

| Name  | Type | Description    |
| ----- | ---- | -------------- |
| hash  | int  | Stat hash      |
| value | bool | New stat value |
| slot  | int  | Character slot |

### Methods

* `stats.set_packed_stat_bool(hash, value, slot)`

## `stats.set_packed_int_stat_key`

### Parameters

| Name      | Type | Description          |
| --------- | ---- | -------------------- |
| index     | int  | Stat index           |
| sp_stat   | bool | Is singleplayer stat |
| char_stat | bool | Is character stat    |
| slot      | int  | Character slot       |

### Methods

* `stats.set_packed_int_stat_key(index, sp_stat, char_stat, slot)`

### Return value:

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Unknown     |

## `stats.get_date`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_date(hash)`

### Return value:

| Name | Type  | Description         |
| ---- | ----- | ------------------- |
| date | table | Lua table with date |

## `stats.get_date`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | int  | Stat hash   |

### Methods

* `stats.get_date(hash)`

### Return value:

| Name | Type  | Description         |
| ---- | ----- | ------------------- |
| date | table | Lua table with date |

## `stats.set_date`

### Parameters

| Name        | Type | Description            |
| ----------- | ---- | ---------------------- |
| hash        | int  | Stat hash              |
| year        | int  | New date - year        |
| month       | int  | New date - month       |
| day         | int  | New date - day         |
| hour        | int  | New date - hour        |
| minute      | int  | New date - minute      |
| second      | int  | New date - second      |
| millisecond | int  | New date - millisecond |

### Methods

* `stats.set_date(hash, year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0)`

### Return value:

| Name    | Type | Description             |
| ------- | ---- | ----------------------- |
| success | bool | Is operation successful |
