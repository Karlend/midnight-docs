---
slug: /gta/lua/bit
title: bit
---
# bit

```ebnf
Some info bla bla bla
```
### function bit.set
`Sets a bit in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| bit | integer | The bit position to set. |
Return: integer: The new integer value with the bit set.

### function bit.is_set
`Checks if a bit is set in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| bit | integer | The bit position to check. |
Return: boolean: Whether the bit is set.

### function bit.reset
`Resets a bit in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| bit | integer | The bit position to reset. |
Return: integer: The new integer value with the bit reset.

### function bit.toggle
`Toggles a bit in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| bit | integer | The bit position to toggle. |
Return: integer: The new integer value with the bit toggled.

### function bit.clear
`Clears all bits in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The integer value with all bits cleared (0).

### function bit.fill
`Sets all bits in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The integer value with all bits set.

### function bit.count
`Counts set bits in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The count of bits set.

### function bit.invert
`Inverts all bits in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The integer value with all bits inverted.

### function bit.find_first_set
`Finds the first set bit in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The position of the first set bit, or -1 if no bits are set.

### function bit.find_first_reset
`Finds the first reset bit in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The position of the first reset bit.

### function bit.rotate_left
`Rotates the bits of an integer to the left.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| n | integer | The number of positions to rotate. |
Return: integer: The integer value after the bits have been rotated left.

### function bit.rotate_right
`Rotates the bits of an integer to the right.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| n | integer | The number of positions to rotate. |
Return: integer: The integer value after the bits have been rotated right.

### function bit.swap
`Swaps two bits in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
| pos1 | integer | The first bit position. |
| pos2 | integer | The second bit position. |
Return: integer: The integer value after the bits have been swapped.

### function bit.reverse
`Reverses all bits in an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: integer: The integer value with all bits reversed.

### function bit.parity
`Calculates the parity of an integer.`
Parameters:
| Type | Description |
| --- | --- |
| var | integer | The integer value. |
Return: boolean: The parity of the integer (true if even, false if odd).