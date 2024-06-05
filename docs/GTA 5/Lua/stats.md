---
slug: /gta/lua/Stats
title: Stats
---

## stats.exists
`@return boolean True if the stat exists, false otherwise.`

- Methods:

`stats.exists(stat)`

---

## stats.get_stat_type
`@return integer The integer code of the stat type, or -1 if the stat does not exist.`

- Methods:

`stats.get_stat_type(stat)`

---

## stats.get_stat_type_name
`@return string The name of the stat type, or nil if the stat does not exist.`

- Methods:

`stats.get_stat_type_name(stat)`

---

## stats.set_bool
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_bool(stat, value)`

---

## stats.set_u8
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_u8(stat, value)`

---

## stats.set_u16
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_u16(stat, value)`

---

## stats.set_u32
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_u32(stat, value)`

---

## stats.set_u64
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_u64(stat, value)`

---

## stats.set_float
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_float(stat, value)`

---

## stats.set_string
`@return boolean True if the stat was successfully set, false otherwise.`

- Methods:

`stats.set_string(stat, value)`

---

## stats.get_bool
`@return boolean The boolean value of the specified stat, or nil if the stat does not exist or has a different type.`

- Methods:

`stats.get_bool(stat_hash)`

---

## stats.get_u8
`@return integer The unsigned 8-bit integer value of the specified stat, or 0 if the stat does not exist or has a different type.`

- Methods:

`stats.get_u8(stat_hash)`

---

## stats.get_u16
`@return integer The unsigned 16-bit integer value of the specified stat, or 0 if the stat does not exist or has a different type.`

- Methods:

`stats.get_u16(stat_hash)`

---

## stats.get_u32
`@return integer The unsigned 32-bit integer value of the specified stat, or 0 if the stat does not exist or has a different type.`

- Methods:

`stats.get_u32(stat_hash)`

---

## stats.get_u64
`@return integer The unsigned 64-bit integer value of the specified stat, or 0 if the stat does not exist or has a different type.`

- Methods:

`stats.get_u64(stat_hash)`

---

## stats.get_float
`@return float The floating-point value of the specified stat, or 0.0 if the stat does not exist or has a different type.`

- Methods:

`stats.get_float(stat_hash)`

---

## stats.get_string
`@return string The string value of the specified stat, or nil if the stat does not exist or has a different type.`

- Methods:

`stats.get_string(stat_hash)`

---

## stats.is_masked_valid
`@return boolean True if the masked value is valid, false otherwise.`

- Methods:

`stats.is_masked_valid(stat_hash, offset, mask)`

---

## stats.get_masked_int
`@return integer The masked integer value of the specified stat, or 0 if the stat does not exist.`

- Methods:

`stats.get_masked_int(stat_hash, offset, mask)`

---

## stats.set_masked_int
`@return boolean True if the operation was successful, false otherwise.`

- Methods:

`stats.set_masked_int(stat_hash, stat_value, offset, mask)`

---

## stats.get_packed_mask
`--- local packedMask = stats.get_packed_mask(statEnum)`

- Methods:

`stats.get_packed_mask(statEnum)`

---

## stats.get_packed_stat_int
`@return integer The packed integer value for the specified index and character slot.`

- Methods:

`stats.get_packed_stat_int(index, characterSlot)`

---

## stats.get_packed_stat_bool
`@return boolean The packed boolean value for the specified index and character slot.`

- Methods:

`stats.get_packed_stat_bool(index, characterSlot)`

---

## stats.set_packed_stat_int
`@param characterSlot integer The character slot associated with the packed stat.`

- Methods:

`stats.set_packed_stat_int(index, value, characterSlot)`

---

## stats.set_packed_stat_bool
`@param characterSlot integer The character slot associated with the packed stat.`

- Methods:

`stats.set_packed_stat_bool(index, value, characterSlot)`

---

## stats.set_packed_stat_bool
`@param characterSlot integer The character slot associated with the stat.`

- Methods:

`stats.set_packed_stat_bool(index, value, characterSlot)`

---

## stats.set_packed_int_stat_key
`@return hash The hash key for the packed integer stat.`

- Methods:

`stats.set_packed_int_stat_key(index, spStat, charStat, character)`

---

## stats.set_date
`@return boolean True if the date was successfully set, false otherwise.`

- Methods:

`stats.set_date(stat_hash, year, month, day, hour, minute, second, millisecond)`

---

## stats.get_date
`end`

- Methods:

`stats.get_date(stat_hash, lua)`

---

## stats.get_character_index
`@return integer The character index.`

- Methods:

`stats.get_character_index()`

---

