Method: function bit.set
Description: Sets a bit in an integer.
Parameters:
  var (integer): The integer value.
  bit (integer): The bit position to set.
Return: integer: The new integer value with the bit set.

Method: function bit.is_set
Description: Checks if a bit is set in an integer.
Parameters:
  var (integer): The integer value.
  bit (integer): The bit position to check.
Return: boolean: Whether the bit is set.

Method: function bit.reset
Description: Resets a bit in an integer.
Parameters:
  var (integer): The integer value.
  bit (integer): The bit position to reset.
Return: integer: The new integer value with the bit reset.

Method: function bit.toggle
Description: Toggles a bit in an integer.
Parameters:
  var (integer): The integer value.
  bit (integer): The bit position to toggle.
Return: integer: The new integer value with the bit toggled.

Method: function bit.clear
Description: Clears all bits in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The integer value with all bits cleared (0).

Method: function bit.fill
Description: Sets all bits in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The integer value with all bits set.

Method: function bit.count
Description: Counts set bits in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The count of bits set.

Method: function bit.invert
Description: Inverts all bits in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The integer value with all bits inverted.

Method: function bit.find_first_set
Description: Finds the first set bit in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The position of the first set bit, or -1 if no bits are set.

Method: function bit.find_first_reset
Description: Finds the first reset bit in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The position of the first reset bit.

Method: function bit.rotate_left
Description: Rotates the bits of an integer to the left.
Parameters:
  var (integer): The integer value.
  n (integer): The number of positions to rotate.
Return: integer: The integer value after the bits have been rotated left.

Method: function bit.rotate_right
Description: Rotates the bits of an integer to the right.
Parameters:
  var (integer): The integer value.
  n (integer): The number of positions to rotate.
Return: integer: The integer value after the bits have been rotated right.

Method: function bit.swap
Description: Swaps two bits in an integer.
Parameters:
  var (integer): The integer value.
  pos1 (integer): The first bit position.
  pos2 (integer): The second bit position.
Return: integer: The integer value after the bits have been swapped.

Method: function bit.reverse
Description: Reverses all bits in an integer.
Parameters:
  var (integer): The integer value.
Return: integer: The integer value with all bits reversed.

Method: function bit.parity
Description: Calculates the parity of an integer.
Parameters:
  var (integer): The integer value.
Return: boolean: The parity of the integer (true if even, false if odd).