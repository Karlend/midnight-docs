---
slug: /gta/lua/classes/pointer
title: Pointer
---

# Pointer

```ebnf
This is a list of all available methods for all pointers
```
For a list of possible members see [memory](../memory.md)

## `Pointer:set`
`Sets the pointer to be managed by the class`

### Parameters
| Name      | Type       | Description                                                  |
| --------- | ---------- | ------------------------------------------------------------ |
| pAddr     | pointer??? | A pointer to be managed                                      |
| bIsScript | boolean    | A boolean indicating whether the pointer belongs to a script |

### Methods:

* `Pointer:set(pAddr, bIsScript)`
* `Pointer:set(pAddr)`

## `Pointer:get`
`Gets the pointer managed by the class`

### Return value

| Type       | Description               |
| ---------- | ------------------------- |
| pointer??? | The pointer being managed |

### Methods:

* `Pointer:get()`

## `Pointer:is_valid`
`Checks whether the class is managing a valid pointer`

### Return value

| Type    | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| boolean | A boolean indicating whether the class is managing a valid pointer. |

### Methods:

* `Pointer:is_valid()`

## `Pointer:check_s8`
`Checks if the signed 8-bit integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nValue  | int8 | The signed 8-bit integer to check              |
| nOffset | int  | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_s8(nValue)`
* `Pointer:check_s8(nValue, nOffset)`

## `Pointer:check_s16`
`Checks if the signed 16-bit integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | int16 | The signed 16-bit integer to check             |
| nOffset | int   | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_s16(nValue)`
* `Pointer:check_s16(nValue, nOffset)`

## `Pointer:check_s24`
`Checks if the 24-bit signed integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | int32 | The 24-bit signed integer to check             |
| nOffset | int   | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_s24(nValue)`
* `Pointer:check_s24(nValue, nOffset)`

## `Pointer:check_s32`
`Checks if the 32-bit signed integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | int32 | The 32-bit signed integer to check             |
| nOffset | int   | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_s32(nValue)`
* `Pointer:check_s32(nValue, nOffset)`

## `Pointer:check_s64`
`Checks if the 64-bit signed integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | int64 | The 64-bit signed integer to check             |
| nOffset | int   | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_s64(nValue)`
* `Pointer:check_s64(nValue, nOffset)`

## `Pointer:check_u8`
`Checks if the 8-bit unsigned integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | uint8 | The 8-bit unsigned integer to check            |
| nOffset | int   | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_u8(nValue)`
* `Pointer:check_u8(nValue, nOffset)`

## `Pointer:check_u16`
`Checks if the 16-bit unsigned integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type   | Description                                    |
| ------- | ------ | ---------------------------------------------- |
| nValue  | uint16 | The 16-bit unsigned integer to check           |
| nOffset | int    | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_u16(nValue)`
* `Pointer:check_u16(nValue, nOffset)`

## `Pointer:check_u24`
`Checks if the 24-bit unsigned integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type   | Description                                    |
| ------- | ------ | ---------------------------------------------- |
| nValue  | uint32 | The 24-bit unsigned integer to check           |
| nOffset | int    | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_u24(nValue)`
* `Pointer:check_u24(nValue, nOffset)`

## `Pointer:check_u32`
`Checks if the 32-bit unsigned integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type   | Description                                    |
| ------- | ------ | ---------------------------------------------- |
| nValue  | uint32 | The 32-bit unsigned integer to check           |
| nOffset | int    | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_u32(nValue)`
* `Pointer:check_u32(nValue, nOffset)`

## `Pointer:check_u64`
`Checks if the unsigned 64-bit integer at the managed pointer matches a given value.`

### Parameters

| Name    | Type   | Description                                    |
| ------- | ------ | ---------------------------------------------- |
| nValue  | uint64 | The unsigned 64-bit integer to check           |
| nOffset | int    | The offset from the managed pointer (optional) |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:check_u64(nValue)`
* `Pointer:check_u64(nValue, nOffset)`

## `Pointer:check_string`
`Checks if the null-terminated string at the managed pointer matches a given value.`

### Parameters

| Name      | Type        | Description                                                            |
| --------- | ----------- | ---------------------------------------------------------------------- |
| pValue    | const char* | A pointer to a null-terminated string to check                         |
| nLen      | size_t      | The length of the string to compare                                    |
| bCaseSens | boolean     | Indicates whether the comparison is case-sensitive or case-insensitive |

### Return value

| Type    | Description                                                     |
| ------- | --------------------------------------------------------------- |
| boolean | A boolean indicating whether the string matches the given value |

### Methods:

* `Pointer:check_string(pValue)`
* `Pointer:check_string(pValue, nLen)`
* `Pointer:check_string(pValue, nLen, bCaseSens)`

## `Pointer:write_s8`
`Writes an 8-bit signed integer value to the managed pointer.`

### Parameters

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| nValue  | int8_t | The 8-bit signed integer value to write |
| nOffset | int    | The offset from the managed pointer     |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:write_s8(nValue)`
* `Pointer:write_s8(nValue, nOffset)`

## `Pointer:write_s16`
`Writes a 16-bit signed integer value to the managed pointer.`

### Parameters

| Name    | Type    | Description                              |
| ------- | ------- | ---------------------------------------- |
| nValue  | int16_t | The 16-bit signed integer value to write |
| nOffset | int     | The offset from the managed pointer      |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:write_s16(nValue)`
* `Pointer:write_s16(nValue, nOffset)`

## `Pointer:write_s24`
`Writes a 24-bit signed integer value to the managed pointer.`

### Parameters

| Name    | Type    | Description                              |
| ------- | ------- | ---------------------------------------- |
| nValue  | int32_t | The 24-bit signed integer value to write |
| nOffset | int     | The offset from the managed pointer      |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:write_s24(nValue)`
* `Pointer:write_s24(nValue, nOffset)`

## `Pointer:write_s32`
`Writes a 32-bit signed integer value to the managed pointer.`

### Parameters

| Name    | Type    | Description                              |
| ------- | ------- | ---------------------------------------- |
| nValue  | int32_t | The 32-bit signed integer value to write |
| nOffset | int     | The offset from the managed pointer      |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:write_s32(nValue)`
* `Pointer:write_s32(nValue, nOffset)`

## `Pointer:write_s64`
`Writes a 64-bit signed integer value to the managed pointer.`

### Parameters

| Name    | Type    | Description                              |
| ------- | ------- | ---------------------------------------- |
| nValue  | int64_t | The 64-bit signed integer value to write |
| nOffset | int     | The offset from the managed pointer      |

### Return value

| Type    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| boolean | A boolean indicating whether the value matches the given value |

### Methods:

* `Pointer:write_s64(nValue)`
* `Pointer:write_s64(nValue, nOffset)`

## `Pointer:write_u8`
Writes an 8-bit unsigned integer value to the managed pointer.

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nValue  | u8   | An 8-bit unsigned integer value to write.      |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type    | Description                                              |
| ------- | -------------------------------------------------------- |
| boolean | A boolean indicating the success of the write operation. |

### Methods:
* `Pointer:write_u8(nValue)`
* `Pointer:write_u8(nValue, nOffset)`

## `Pointer:write_u16`
`Writes a 16-bit unsigned integer value to the managed pointer.`

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nValue  | u16  | A 16-bit unsigned integer value to write.      |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type    | Description                                              |
| ------- | -------------------------------------------------------- |
| boolean | A boolean indicating the success of the write operation. |

### Methods:
* `Pointer:write_u16(nValue)`
* `Pointer:write_u16(nValue, nOffset)`

## `Pointer:read_s8`
`Reads an 8-bit signed integer value from the managed pointer.`

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type | Description                                                            |
| ---- | ---------------------------------------------------------------------- |
| s8   | An 8-bit signed integer value read from the managed pointer or offset. |

### Methods:
* `Pointer:read_s8()`
* `Pointer:read_s8(nOffset)`

## `Pointer:read_u32`
`Reads a 32-bit unsigned integer value from the managed pointer.`

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| u32  | A 32-bit unsigned integer value read from the managed pointer or offset. |

### Methods:
* `Pointer:read_u32()`
* `Pointer:read_u32(nOffset)`

## `Pointer:read_u64`
`Reads a 64-bit unsigned integer value from the managed pointer.`

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| u64  | A 64-bit unsigned integer value read from the managed pointer or offset. |

### Methods:
* `Pointer:read_u64()`
* `Pointer:read_u64(nOffset)`

## `Pointer:write_float`
`Writes a floating-point value to the managed pointer.`

### Parameters
| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | float | A floating-point value to write.               |
| nOffset | int   | An offset from the managed pointer (optional). |

### Return value
| Type    | Description                                              |
| ------- | -------------------------------------------------------- |
| boolean | A boolean indicating the success of the write operation. |

### Methods:
* `Pointer:write_float(nValue)`
* `Pointer:write_float(nValue, nOffset)`

## `Pointer:read_float`
`Reads a floating-point value from the managed pointer.`

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type  | Description                                                     |
| ----- | --------------------------------------------------------------- |
| float | A floating-point value read from the managed pointer or offset. |

### Methods:
* `Pointer:read_float()`
* `Pointer:read_float(nOffset)`

## `Pointer:check_float`
`Checks if the floating-point value at the managed pointer matches a given value.`

### Parameters
| Name    | Type  | Description                                    |
| ------- | ----- | ---------------------------------------------- |
| nValue  | float | A floating-point value to check against.       |
| nOffset | int   | An offset from the managed pointer (optional). |

### Return value
| Type    | Description                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------- |
| boolean | A boolean indicating whether the value at the managed pointer (or offset) matches the given value. |

### Methods:
* `Pointer:check_float(nValue)`
* `Pointer:check_float(nValue, nOffset)`

## `Pointer:read_string`
`Reads a null-terminated string from the managed pointer.`

### Parameters
| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| nOffset | int  | An offset from the managed pointer (optional). |

### Return value
| Type   | Description                                       |
| ------ | ------------------------------------------------- |
| string | A string read from the managed pointer or offset. |

### Methods:
* `Pointer:read_string()`
* `Pointer:read_string(nOffset)`

## `Pointer:read_vector`
`Reads a Vector3 object from the managed pointer.`

### Parameters
| Name       | Type    | Description                                                                          |
| ---------- | ------- | ------------------------------------------------------------------------------------ |
| is8Aligned | boolean | A boolean indicating whether the read operation should be 8-byte aligned (optional). |
| nOffset    | int     | An offset from the managed pointer (optional).                                       |

### Return value
| Type    | Description                                               |
| ------- | --------------------------------------------------------- |
| Vector3 | A Vector3 object read from the managed pointer or offset. |

### Methods:
* `Pointer:read_vector()`
* `Pointer:read_vector(is8Aligned)`
* `Pointer:read_vector(is8Aligned, nOffset)`
