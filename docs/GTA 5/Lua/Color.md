---
slug: /gta/lua/Color
title: Color
---


## Color:set_hsv
`Sets the color based on HSV model.`
- Parameters:

 | Name | Type   | Description                       |
 | ---- | ------ | --------------------------------- |
 | h    | number | Hue component (0-255).            |
 | s    | number | Saturation component (0-255).     |
 | v    | number | Value component (0-255).          |
 | a?   | number | Optional alpha component (0-255). |


- Methods:
  - `Color:set_hsv(h, s, v, a)`

---

## Color:set_hsl
`Sets the color based on HSL model.`
- Parameters:

 | Name | Type   | Description                       |
 | ---- | ------ | --------------------------------- |
 | h    | number | Hue component (0-255).            |
 | s    | number | Saturation component (0-255).     |
 | l    | number | Lightness component (0-255).      |
 | a?   | number | Optional alpha component (0-255). |


- Methods:
  - `Color:set_hsl(h, s, l, a)`

---

## Color:set_rgb
`Sets the color based on RGB model.`
- Parameters:

 | Name | Type   | Description               |
 | ---- | ------ | ------------------------- |
 | r    | number | Red component.            |
 | g    | number | Green component.          |
 | b    | number | Blue component.           |
 | a?   | number | Optional alpha component. |


- Methods:
  - `Color:set_rgb(r, g, b, a)`

---

## Color:get_hsv
`Retrieves the HSV representation of the color.`
- Return:

 | Type  | Description                                                                    |
 | ----- | ------------------------------------------------------------------------------ |
 | tuple | Returns a tuple (h, s, v, a) where all values are integers in the range 0-255. |

- Methods:
  - `Color:get_hsv()`

---

## Color:get_hsl
`Retrieves the HSL representation of the color.`
- Return:

 | Type  | Description                                                                    |
 | ----- | ------------------------------------------------------------------------------ |
 | tuple | Returns a tuple (h, s, l, a) where all values are integers in the range 0-255. |

- Methods:
  - `Color:get_hsl()`

---

## Color:format
`Placeholders are '%r', '%g', '%b', '%a' for the red, green, blue, and alpha components respectively.`
- Parameters:

 | Name   | Type   | Description                                               |
 | ------ | ------ | --------------------------------------------------------- |
 | format | string | The format string with placeholders for color components. |

- Return:

 | Type   | Description                                                                                   |
 | ------ | --------------------------------------------------------------------------------------------- |
 | string | Returns the formatted string with placeholders replaced by the actual color component values. |

- Methods:
  - `Color:format(format)`

---

## Color:blend
`Blends this color with another color based on alpha values.`
- Parameters:

 | Name  | Type  | Description                    |
 | ----- | ----- | ------------------------------ |
 | other | Color | The other color to blend with. |

- Return:

 | Type    | Description                                              |
 | ------- | -------------------------------------------------------- |
 | boolean | Returns true always, indicating the blend was performed. |

- Methods:
  - `Color:blend(other)`

---

## Color:mix
`Mixes this color with another color based on a given ratio.`
- Parameters:

 | Name  | Type   | Description                                                                                     |
 | ----- | ------ | ----------------------------------------------------------------------------------------------- |
 | other | Color  | The other color to mix with.                                                                    |
 | t     | number | The mix ratio from 0.0 to 1.0, where 0.0 is fully this color, and 1.0 is fully the other color. |

- Return:

 | Type    | Description                                                                    |
 | ------- | ------------------------------------------------------------------------------ |
 | boolean | Returns false if t is out of bounds (not between 0.0 and 1.0), true otherwise. |

- Methods:
  - `Color:mix(other, t)`

---

## Color:lighten
`Lightens the color by a given intensity.`
- Parameters:

 | Name      | Type   | Description                                                |
 | --------- | ------ | ---------------------------------------------------------- |
 | intensity | number | The intensity to lighten the color, range from 0.0 to 1.0. |

- Return:

 | Type    | Description                                                                            |
 | ------- | -------------------------------------------------------------------------------------- |
 | boolean | Returns false if intensity is out of bounds (not between 0.0 and 1.0), true otherwise. |

- Methods:
  - `Color:lighten(intensity)`

---

## Color:darken
`Darkens the color by a given intensity.`
- Parameters:

 | Name      | Type   | Description                                               |
 | --------- | ------ | --------------------------------------------------------- |
 | intensity | number | The intensity to darken the color, range from 0.0 to 1.0. |

- Return:

 | Type    | Description                                                                            |
 | ------- | -------------------------------------------------------------------------------------- |
 | boolean | Returns false if intensity is out of bounds (not between 0.0 and 1.0), true otherwise. |

- Methods:
  - `Color:darken(intensity)`

---

## Color:invert
`Inverts the color.`
- Return:

 | Type    | Description                                             |
 | ------- | ------------------------------------------------------- |
 | boolean | Returns true always, indicating the color was inverted. |

- Methods:
  - `Color:invert()`

---

## Color:gamma
`Adjusts the gamma of the color.`
- Parameters:

 | Name  | Type   | Description                               |
 | ----- | ------ | ----------------------------------------- |
 | gamma | number | The gamma value to use; must be positive. |


- Methods:
  - `Color:gamma(gamma)`

---

## Color:grayscale
`Converts the color to grayscale.`

- Methods:
  - `Color:grayscale()`

---

## Color:sepia
`Applies a sepia tone to the color.`

- Methods:
  - `Color:sepia()`

---

## Color:distance
`Calculates the Euclidean distance between this color and another color.`
- Parameters:

 | Name  | Type  | Description                                     |
 | ----- | ----- | ----------------------------------------------- |
 | other | Color | The other color to calculate the distance from. |

- Return:

 | Type   | Description                                    |
 | ------ | ---------------------------------------------- |
 | number | The Euclidean distance between the two colors. |

- Methods:
  - `Color:distance(other)`

---

## Color
`Creates a new color instance.`

- Overloads:
  1. `fun(): Color Creates an empty color with default values.`
  2. `fun(r: number, g: number, b: number): Color Creates a color using RGB values (0-255).`
  3. `fun(r: number, g: number, b: number, a: number): Color Creates a color using RGBA values (0-255), including alpha.`
  4. `fun(rgba: number): Color Creates a color from a single uint32 value representing RGBA.`
  5. `fun(hex: string): Color Creates a color from a hexadecimal string (e.g., "FF0033" or "#FF0033").`

- Parameters:

 | Name  | Type  | Description                                     |
 | ----- | ----- | ----------------------------------------------- |
 | r? | number | The red component of the color (0-255). |
 | g? | number | The green component of the color (0-255). |
 | b? | number | The blue component of the color (0-255). |
 | a? | number | The alpha component of the color (0-255). |
 | rgba? | number | A uint32 number representing the color in RGBA format. |
 | hex? | string | A string representing the color in hexadecimal format. |

- Return:

 | Type         | Description                                           |
 | ------------ | ----------------------------------------------------- |
 | col_instance | A new instance of a Color object. |

- Methods:
  - `Color()`

---

