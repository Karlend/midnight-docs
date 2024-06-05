---
slug: /gta/lua/Global
title: Global
---

## i2f
`Note: This function uses a binary reinterpretation of the integer value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | integer | The integer value to convert. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | The floating-point number obtained from the binary representation of the integer. |

- Methods:

`i2f(value)`

---

## f2i
`Note: This function uses a binary reinterpretation of the floating-point value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | number | The floating-point number to convert. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | The integer obtained from the binary representation of the floating-point number. |

- Methods:

`f2i(value)`

---

## s2f
`Returns NaN if the string is not a valid numeric representation.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | value | string | The string representation of a number. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | The floating-point number represented by the string or NaN if conversion is not possible. |

- Methods:

`s2f(value)`

---

## str
`@return string The string content at the pointer location. Returns an empty string if the pointer is invalid.`

- Methods:

`str(pointer)`

---

