---
slug: /gta/lua/Global
title: Global
---

## i2f
`Converts an integer to a floating-point number.`

- Parameters:

 | Name  | Type    | Description                   |
 | ----- | ------- | ----------------------------- |
 | value | integer | The integer value to convert. |

- Return:

 | Type   | Description                                                                       |
 | ------ | --------------------------------------------------------------------------------- |
 | number | The floating-point number obtained from the binary representation of the integer. |

- Methods:
  - `i2f(value)`

---

## f2i
`Converts a floating-point number to an integer.`

- Parameters:

 | Name  | Type   | Description                           |
 | ----- | ------ | ------------------------------------- |
 | value | number | The floating-point number to convert. |

- Return:

 | Type    | Description                                                                       |
 | ------- | --------------------------------------------------------------------------------- |
 | integer | The integer obtained from the binary representation of the floating-point number. |

- Methods:
  - `f2i(value)`

---

## s2f
`Converts a string to a floating-point number.`

- Parameters:

 | Name  | Type   | Description                            |
 | ----- | ------ | -------------------------------------- |
 | value | string | The string representation of a number. |

- Return:

 | Type   | Description                                                                                 |
 | ------ | ------------------------------------------------------------------------------------------- |
 | number | The floating-point number represented by the string or `NaN` if conversion is not possible. |

- Methods:
  - `s2f(value)`

---

## str
`Converts a pointer to a string into the actual string content.`

- Parameters:

 | Name    | Type   | Description                                              |
 | ------- | ------ | -------------------------------------------------------- |
 | pointer | number | The integer representation of the pointer to the string. |

- Return:

 | Type   | Description                                                                                    |
 | ------ | ---------------------------------------------------------------------------------------------- |
 | string | The string content at the pointer location. Returns an empty string if the pointer is invalid. |

- Methods:
  - `str(pointer)`

---

## SCRIPT_NAME_ABSOLUTE
`Returns the absolute path of the Lua script file.`

- Return:

 | Type   | Description                           |
 | ------ | ------------------------------------- |
 | string | The absolute file path of the script. |

- Methods:
  - `local absPath = SCRIPT_NAME_ABSOLUTE`

---

## SCRIPT_NAME_FULL
`Returns the full name of the Lua script file including its extension.`

- Return:

 | Type   | Description                       |
 | ------ | --------------------------------- |
 | string | The full name of the script file. |

- Methods:
  - `local fullName = SCRIPT_NAME_FULL`

---

## SCRIPT_NAME
`Returns the base name of the Lua script file, excluding its file extension.`

- Return:

 | Type   | Description                                        |
 | ------ | -------------------------------------------------- |
 | string | The name of the script file without the extension. |

- Methods:
  - `local name = SCRIPT_NAME`