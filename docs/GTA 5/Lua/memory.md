---
slug: /gta/lua/Memory
title: Memory
---

## memory.scan_tuneable
`local t = memory.scan_tuneable("XMAS2015_VEHICLE") -- @1.67: 12883`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | hashOrName | integer|string | The hash value or the name of the tuneable to search for. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | The global offset where the tuneable was found, or 0 if the tuneable was not found. |

- Methods:

`memory.scan_tuneable(hashOrName)`

---

## memory.scan_function
`end`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | script | string | The name of the script in which to search for the function. |
 | signatureOrOffset | string|number | The signature of the function to find or the offset of the function in the script. |

- Return:

 | Type | Description |
 | --- | --- |
 | userdata | The found function as a `ScrFunction` object. If no function is found, the returned object's `is_found` method will return `false`. |

- Methods:

`memory.scan_function(script, signatureOrOffset)`

---

## memory.alloc
`Allocates memory of specified size and initializes it to zero.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | size | number? | The size of the memory to allocate. |

- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc(size)`

---

## memory.alloc_u8
`Allocates 1 byte of memory (unsigned char) and initializes it to zero.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc_u8()`

---

## memory.alloc_u16
`Allocates 2 bytes of memory (unsigned short) and initializes it to zero.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc_u16()`

---

## memory.alloc_u24
`Allocates 3 bytes of memory and initializes it to zero.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc_u24()`

---

## memory.alloc_u32
`Allocates 4 bytes of memory (unsigned integer) and initializes it to zero.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc_u32()`

---

## memory.alloc_u64
`Allocates 8 bytes of memory (unsigned long long) and initializes it to zero.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc_u64()`

---

## memory.alloc_vector
`The function allocates memory of size either 24 bytes (if 8-byte aligned) or 12 bytes (if not aligned) and initializes it to zero.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | is8Aligned | boolean? | A boolean value to determine if the allocated memory should be 8-byte aligned (default is true). |

- Return:

 | Type | Description |
 | --- | --- |
 | userdata | Pointer to the allocated memory. |

- Methods:

`memory.alloc_vector(is8Aligned)`

---

## memory.free
`Frees memory that was allocated by any of the alloc functions.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | ptr | userdata | Pointer to the memory to free. |


- Methods:

`memory.free(ptr)`

---

## ScrFunction:__call
`@return The result of the script function call.`

- Methods:

`ScrFunction:__call(...)`

---

## ScrFunction:is_found
`@return boolean True if the function is found, false otherwise.`

- Methods:

`ScrFunction:is_found()`

---

## ScrFunction:is_callable
`@return boolean True if the function can be called, false otherwise.`

- Methods:

`ScrFunction:is_callable()`

---

## CMemHandle:set
`This method assigns a new pointer to the memory handle.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | pointer | userdata | A pointer to be managed. |


- Methods:

`CMemHandle:set(pointer)`

---

## CMemHandle:get
`This method retrieves the current pointer being managed.`
- Return:

 | Type | Description |
 | --- | --- |
 | userdata | The pointer being managed. |

- Methods:

`CMemHandle:get()`

---

## CMemHandle:is_valid
`This method verifies if the managed pointer is valid (not null).`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the class is managing a valid pointer. |

- Methods:

`CMemHandle:is_valid()`

---

## CMemHandle:add
`This method creates a new instance of CMemHandle with an adjusted memory address by adding the specified offset.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number | The offset to be added to the current memory address. |

- Return:

 | Type | Description |
 | --- | --- |
 | CMemHandle | A new instance of the class with the adjusted memory address. |

- Methods:

`CMemHandle:add(offset)`

---

## CMemHandle:sub
`This method creates a new instance of CMemHandle with an adjusted memory address by subtracting the specified offset.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number | The offset to be subtracted from the current memory address. |

- Return:

 | Type | Description |
 | --- | --- |
 | CMemHandle | A new instance of the class with the adjusted memory address. |

- Methods:

`CMemHandle:sub(offset)`

---

## CMemHandle:rip
`This method creates a new instance of CMemHandle with an adjusted memory address. If the adjusted address is invalid, it is reset in the new instance.`
- Return:

 | Type | Description |
 | --- | --- |
 | CMemHandle | A new instance of the class with the adjusted memory address. |

- Methods:

`CMemHandle:rip()`

---

## CMemHandle:check_s8
`Checks if the signed 8-bit integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A signed 8-bit integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_s8(value, offset)`

---

## CMemHandle:check_s16
`Checks if the signed 16-bit integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A signed 16-bit integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_s16(value, offset)`

---

## CMemHandle:check_s24
`Checks if the 24-bit signed integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 24-bit signed integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_s24(value, offset)`

---

## CMemHandle:check_s32
`Checks if the 32-bit signed integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 32-bit signed integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_s32(value, offset)`

---

## CMemHandle:check_s64
`Checks if the 64-bit signed integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 64-bit signed integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_s64(value, offset)`

---

## CMemHandle:check_u8
`Checks if the 8-bit unsigned integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | An 8-bit unsigned integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_u8(value, offset)`

---

## CMemHandle:check_u16
`Checks if the 16-bit unsigned integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 16-bit unsigned integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_u16(value, offset)`

---

## CMemHandle:check_u24
`Checks if the 24-bit unsigned integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 24-bit unsigned integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_u24(value, offset)`

---

## CMemHandle:check_u32
`Checks if the 32-bit unsigned integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 32-bit unsigned integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_u32(value, offset)`

---

## CMemHandle:check_u64
`Checks if the unsigned 64-bit integer at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | An unsigned 64-bit integer to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_u64(value, offset)`

---

## CMemHandle:check_string
`Checks if the null-terminated string at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | string | A pointer to a null-terminated string to check against. |
 | length | number? | The length of the string to compare. |
 | caseSensitive | boolean? | Indicates whether the comparison should be case-sensitive or not. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the string at the managed pointer matches the given value. |

- Methods:

`CMemHandle:check_string(value, length, caseSensitive)`

---

## CMemHandle:write_s8
`Writes an 8-bit signed integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | An 8-bit signed integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_s8(value, offset)`

---

## CMemHandle:write_s16
`Writes a 16-bit signed integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 16-bit signed integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_s16(value, offset)`

---

## CMemHandle:write_s24
`Writes a 24-bit signed integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 24-bit signed integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_s24(value, offset)`

---

## CMemHandle:write_s32
`Writes a 32-bit signed integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 32-bit signed integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_s32(value, offset)`

---

## CMemHandle:write_s64
`Writes a 64-bit signed integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 64-bit signed integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_s64(value, offset)`

---

## CMemHandle:write_u8
`Writes an 8-bit unsigned integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | An 8-bit unsigned integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_u8(value, offset)`

---

## CMemHandle:write_u16
`Writes a 16-bit unsigned integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 16-bit unsigned integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_u16(value, offset)`

---

## CMemHandle:write_u24
`Writes a 24-bit unsigned integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 24-bit unsigned integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_u24(value, offset)`

---

## CMemHandle:write_u32
`Writes a 32-bit unsigned integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 32-bit unsigned integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_u32(value, offset)`

---

## CMemHandle:write_u64
`Writes a 64-bit unsigned integer value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A 64-bit unsigned integer value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_u64(value, offset)`

---

## CMemHandle:write_string
`Writes a null-terminated string to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | string | A null-terminated string to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_string(value, offset)`

---

## CMemHandle:write_vector
`Writes a Vector3 object to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | vector | userdata | A Vector3 object to write. |
 | is8Aligned | boolean | Indicates whether the write operation should be 8-byte aligned. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_vector(vector, is8Aligned, offset)`

---

## CMemHandle:read_s8
`Reads an 8-bit signed integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | An 8-bit signed integer value read. |

- Methods:

`CMemHandle:read_s8(offset)`

---

## CMemHandle:read_s16
`Reads a 16-bit signed integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 16-bit signed integer value read. |

- Methods:

`CMemHandle:read_s16(offset)`

---

## CMemHandle:read_s24
`Reads a 24-bit signed integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 24-bit signed integer value read. |

- Methods:

`CMemHandle:read_s24(offset)`

---

## CMemHandle:read_s32
`Reads a 32-bit signed integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 32-bit signed integer value read. |

- Methods:

`CMemHandle:read_s32(offset)`

---

## CMemHandle:read_s64
`Reads a 64-bit signed integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 64-bit signed integer value read. |

- Methods:

`CMemHandle:read_s64(offset)`

---

## CMemHandle:read_u8
`Reads an 8-bit unsigned integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | An 8-bit unsigned integer value read. |

- Methods:

`CMemHandle:read_u8(offset)`

---

## CMemHandle:read_u16
`Reads a 16-bit unsigned integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 16-bit unsigned integer value read. |

- Methods:

`CMemHandle:read_u16(offset)`

---

## CMemHandle:read_u24
`Reads a 24-bit unsigned integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 24-bit unsigned integer value read. |

- Methods:

`CMemHandle:read_u24(offset)`

---

## CMemHandle:read_u32
`Reads a 32-bit unsigned integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 32-bit unsigned integer value read. |

- Methods:

`CMemHandle:read_u32(offset)`

---

## CMemHandle:read_u64
`Reads a 64-bit unsigned integer value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A 64-bit unsigned integer value read. |

- Methods:

`CMemHandle:read_u64(offset)`

---

## CMemHandle:write_float
`Writes a floating-point value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A floating-point value to write. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_float(value, offset)`

---

## CMemHandle:read_float
`Reads a floating-point value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | A floating-point value read. |

- Methods:

`CMemHandle:read_float(offset)`

---

## CMemHandle:check_float
`Checks if the floating-point value at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | A floating-point value to check against. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given value. |

- Methods:

`CMemHandle:check_float(value, offset)`

---

## CMemHandle:read_string
`Reads a null-terminated string from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | string | A string read from the managed pointer or the offset. |

- Methods:

`CMemHandle:read_string(offset)`

---

## CMemHandle:read_vector
`Reads a Vector3 object from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | is8Aligned | boolean | Indicates whether the read operation should be 8-byte aligned. |
 | offset | number? | An offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | userdata | A Vector3 object read from the managed pointer or the offset. |

- Methods:

`CMemHandle:read_vector(is8Aligned, offset)`

---

## CMemHandle:read_bool
`Reads a boolean value from the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean value read from the pointer. |

- Methods:

`CMemHandle:read_bool(offset)`

---

## CMemHandle:write_bool
`Writes a boolean value to the managed pointer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | boolean | The boolean value to write. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating the success of the write operation. |

- Methods:

`CMemHandle:write_bool(value, offset)`

---

## CMemHandle:check_bool
`Checks if the boolean value at the managed pointer matches a given value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | boolean | A boolean value to check against. |
 | offset | number? | An optional offset from the managed pointer. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | A boolean indicating whether the value matches the given boolean. |

- Methods:

`CMemHandle:check_bool(value, offset)`

---

