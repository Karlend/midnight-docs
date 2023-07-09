---
slug: /gta/lua/memory
title: memory
---

# memory

```ebnf
Methods to work with game memory
```

## `memory.scan`
`Function that scans memory in a specific DLL for a particular signature`

### Parameters

| Name         | Type    | Description                                                          |
| ------------ | ------- | -------------------------------------------------------------------- |
| module\_name | string  | The name of the DLL in which to perform the scan                     |
| signature    | string  | The signature to search for                                          |
| offset       | number  | The offset to add to the found signatures                            |
| only\_one    | boolean | Whether to stop searching after finding the first matching signature |

### Return value

| Type  | Description       |
| ----- | ----------------- |
| table | Table of pointers |

### Methods

* `memory.scan(module_name, signature, offset, only_one)`
* `memory.scan(module_name, signature, offset)`
* `memory.scan(module_name, signature)`

## `memory.scan_script`
`Function that scans the memory of script code blocks or specific scripts for a particular signature`

### Parameters

| Name         | Type    | Description                                                          |
| ------------ | ------- | -------------------------------------------------------------------- |
| code\_blocks | table   | An array of pointers to the code blocks to scan                      |
| code\_size   | number  | The size of program code                                             |
| script\_name | string  | The name of the script to scan (f.e. freemode)                       |
| signature    | string  | The signature to search for                                          |
| offset       | number  | The offset to add to the found signatures                            |
| only\_one    | boolean | Whether to stop searching after finding the first matching signature |

### Return value

| Type    | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| pointer | The address where the signature was found, or 0 if the signature was not foundz |

### Methods

* `memory.scan_script(code_blocks, code_size, signature, offset, only_one)`
* `memory.scan_script(code_blocks, code_size, signature, offset)`
* `memory.scan_script(code_blocks, code_size, signature)`
* `memory.scan_script(script_name, signature, offset, only_one)`
* `memory.scan_script(script_name, signature, offset)`
* `memory.scan_script(script_name, signature)`

## `memory.scan_tuneable`
`Function that attempts to find the global offset for a specific tuneable. Script must be loaded in order for this function to work. Make sure to fully connect to the game before using this function`

### Parameters

| Name  | Type   | Description                            |
| ----- | ------ | -------------------------------------- |
| hHash | number | The hash of the tuneable to search for |
| sName | string | The name of the tuneable to search for |

### Return value

| Type   | Description                                                                         |
| ------ | ----------------------------------------------------------------------------------- |
| number | The global offset where the tuneable was found, or 0 if the tuneable was not found. |

### Methods

* `memory.scan_tuneable(hHash)`
* `memory.scan_tuneable(sName)`

## `memory.alloc`
`Function allocates memory of the size given as a parameter and initializes it to zero`

### Parameters

| Name      | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| nSize   | number | The size of the memory to allocate.     |

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc(nSize)`

## `memory.alloc_u8`
`Function allocates memory of size 1 byte and initializes it to zero`

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc_u8()`
## `memory.alloc_u16`
`Function allocates memory of size 2 bytes and initializes it to zero`

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc_u16()`

## `memory.alloc_u24`
`Function allocates memory of size 3 bytes and initializes it to zero`

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc_u24()`

## `memory.alloc_u32`
`Function allocates memory of size 4 bytes and initializes it to zero`

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc_u32()`

## `memory.alloc_u64`
`Function allocates memory of size 8 bytes and initializes it to zero`

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc_u64()`

## `memory.alloc_s8`
`Function that allocates 1 byte of memory (char)`

### Return value
| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods
* `memory.alloc_s8()`

## `memory.alloc_s16`
`Function that allocates 2 bytes of memory (short)`

### Return value
| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods
* `memory.alloc_s16()`

## `memory.alloc_s24`
`Function that allocates 3 bytes of memory`

### Return value
| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods
* `memory.alloc_s24()`

## `memory.alloc_s32`
`Function that allocates 4 bytes of memory (integer)`

### Return value
| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods
* `memory.alloc_s32()`

## `memory.alloc_s64`
`Function that allocates 8 bytes of memory (long long)`

### Return value
| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods
* `memory.alloc_s64()`

## `memory.alloc_vector`
`Function allocates memory of size either 24 or 12 bytes based on the boolean parameter passed, and initializes it to zero`

### Parameters

| Name         | Type    | Description                                                          |
| ------------ | ------- | -------------------------------------------------------------------- |
| is8Aligned   | boolean | Value to determine if the allocated memory should be 8-byte aligned or not. (default = true) |

### Return value

| Type    | Description                |
| ------- | -------------------------- |
| pointer | Pointer to the allocated memory. |

### Methods

* `memory.alloc_vector(is8Aligned)`
* `memory.alloc_vector()`


