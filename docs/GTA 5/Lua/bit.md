---
slug: /gta/lua/bit
title: bit
---

# bit

```ebnf
bla bla bla
```
### bit.set
`Sets a bit in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | bit | integer | The bit position to set. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The new integer value with the bit set. |

- Methods:
`bit.set(var, bit)`

### bit.is_set
`Checks if a bit is set in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | bit | integer | The bit position to check. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Whether the bit is set. |

- Methods:
`bit.is_set(var, bit)`

### bit.reset
`Resets a bit in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | bit | integer | The bit position to reset. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The new integer value with the bit reset. |

- Methods:
`bit.reset(var, bit)`

### bit.toggle
`Toggles a bit in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | bit | integer | The bit position to toggle. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The new integer value with the bit toggled. |

- Methods:
`bit.toggle(var, bit)`

### bit.clear
`Clears all bits in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value with all bits cleared (0). |

- Methods:
`bit.clear(var)`

### bit.fill
`Sets all bits in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value with all bits set. |

- Methods:
`bit.fill(var)`

### bit.count
`Counts set bits in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The count of bits set. |

- Methods:
`bit.count(var)`

### bit.invert
`Inverts all bits in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value with all bits inverted. |

- Methods:
`bit.invert(var)`

### bit.find_first_set
`Finds the first set bit in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The position of the first set bit, or -1 if no bits are set. |

- Methods:
`bit.find_first_set(var)`

### bit.find_first_reset
`Finds the first reset bit in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The position of the first reset bit. |

- Methods:
`bit.find_first_reset(var)`

### bit.rotate_left
`Rotates the bits of an integer to the left.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | n | integer | The number of positions to rotate. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value after the bits have been rotated left. |

- Methods:
`bit.rotate_left(var, n)`

### bit.rotate_right
`Rotates the bits of an integer to the right.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | n | integer | The number of positions to rotate. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value after the bits have been rotated right. |

- Methods:
`bit.rotate_right(var, n)`

### bit.swap
`Swaps two bits in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |
 | pos1 | integer | The first bit position. |
 | pos2 | integer | The second bit position. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value after the bits have been swapped. |

- Methods:
`bit.swap(var, pos1, pos2)`

### bit.reverse
`Reverses all bits in an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer value with all bits reversed. |

- Methods:
`bit.reverse(var)`

### bit.parity
`Calculates the parity of an integer.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | var | integer | The integer value. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | The parity of the integer (true if even, false if odd). |

- Methods:
`bit.parity(var)`

