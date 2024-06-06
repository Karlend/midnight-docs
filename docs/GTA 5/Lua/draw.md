---
slug: /gta/lua/Draw
title: Draw
---

## enum DrawContextColor
```lua
DrawContextColor = {
	COMMON = 0,
	UPPER_LEFT = 1,
	UPPER_RIGHT = 2,
	BOTTOM_LEFT = 3,
	BOTTOM_RIGHT = 4,
}
```

---

## enum DrawContextColor
```lua
DrawList = {
	--- This layer is intended for elements that need to be rendered above all other content.
	--- Use this layer for overlays, tooltips, and other UI components that must remain visible on top of main content.
	FOREGROUND = 0,
	--- This layer is used for background elements, which are drawn first and can be overlaid by other UI components.
	--- Ideal for backgrounds, images, or any foundational visuals that support the main UI elements but should not obscure them.
	BACKGROUND = 1
}
```

---

## enum DrawContextColor
```lua
ImDrawCornerFlags = {
	NONE = 0,
	TOP_LEFT = 1, -- 1 << 0, 0x1
	TOP_RIGHT = 2, -- 1 << 1, 0x2
	BOT_LEFT = 4, -- 1 << 2, 0x4
	BOT_RIGHT = 8, -- 1 << 3, 0x8
	TOP = 3, -- (1 << 0) | (1 << 1), 0x3
	BOT = 12, -- (1 << 2) | (1 << 3), 0xC
	LEFT = 5, -- (1 << 0) | (1 << 2), 0x5
	RIGHT = 10, -- (1 << 1) | (1 << 3), 0xA
	ALL = 15 -- 0xF
}
```

---

## draw.is_ready
`True if drawing is possible.`

- Return:

 | Type    | Description                          |
 | ------- | ------------------------------------ |
 | boolean | Returns True if drawing is possible. |

- Methods:
  - `draw.is_ready()`

---

## draw.get_window_width
`The width of the window in pixels, or 0 if the resolution cannot be retrieved.`

- Return:

 | Type   | Description                                                                    |
 | ------ | ------------------------------------------------------------------------------ |
 | number | The width of the window in pixels, or 0 if the resolution cannot be retrieved. |

- Methods:
  - `draw.get_window_width()`

---

## draw.get_window_height
`The height of the window in pixels, or 0 if the resolution cannot be retrieved.`

- Return:

 | Type   | Description                                                                     |
 | ------ | ------------------------------------------------------------------------------- |
 | number | The height of the window in pixels, or 0 if the resolution cannot be retrieved. |

- Methods:
  - `draw.get_window_height()`

---

## draw.get_screen_width
`The width of the screen in pixels, or 0 if the resolution cannot be retrieved.`

- Return:

 | Type   | Description                                                                    |
 | ------ | ------------------------------------------------------------------------------ |
 | number | The width of the screen in pixels, or 0 if the resolution cannot be retrieved. |

- Methods:
  - `draw.get_screen_width()`

---

## draw.get_screen_height
`The height of the screen in pixels, or 0 if the resolution cannot be retrieved.`

- Return:

 | Type   | Description                                                                     |
 | ------ | ------------------------------------------------------------------------------- |
 | number | The height of the screen in pixels, or 0 if the resolution cannot be retrieved. |

- Methods:
  - `draw.get_screen_height()`

---

## draw.create_texture_from_memory
`Creates a texture from memory buffer`
- Parameters:

 | Name   | Type   | Description                                                                   |
 | ------ | ------ | ----------------------------------------------------------------------------- |
 | buffer | string | The message text to send. If the string is empty, the function returns false. |
 | len    | number | If true, the message is sent as a team message.                               |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | number | A texture handle if successful, or 0 if the texture could not be created.. |

- Methods:
  - `draw.create_texture_from_memory(buffer, len)`

---

## draw.create_texture_from_file
`Creates a texture from a file`

- Parameters:

 | Name      | Type   | Description                      |
 | --------- | ------ | -------------------------------- |
 | file_name | string | The path to the texture file.    |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | number | A texture handle if successful, or 0 if the texture could not be created.  |

- Methods:
  - `draw.create_texture_from_file(file_name)`

---

## draw.create_texture_from_base64
`Creates a texture from a base64 encoded string`

- Parameters:

 | Name   | Type   | Description                                         |
 | ------ | ------ | --------------------------------------------------- |
 | base64 | string | The base64 encoded string representing the image data. |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | number | A texture handle if successful, or 0 if the texture could not be created.  |

- Methods:
  - `draw.create_texture_from_base64(base64)`

---

## draw.create_debug_texture
`Creates a debug texture with a checkerboard pattern for quick testing and debugging purposes`

- Parameters:

 | Name   | Type   | Description                                | Default |
 | ------ | ------ | ------------------------------------------ | ------- |
 | width  | number | The width of the texture in pixels.        | 100     |
 | height | number | The height of the texture in pixels.       | 100     |

- Return:

 | Type   | Description                                                                |
 | ------ | -------------------------------------------------------------------------- |
 | number | A texture handle if successful, or 0 if the texture could not be created.  |

- Methods:
  - `draw.create_debug_texture(width, height)`
  - `draw.create_debug_texture()`

---

## draw.release_texture
`Releases a previously created texture`

- Parameters:

 | Name   | Type   | Description                      |
 | ------ | ------ | -------------------------------- |
 | handle | number | The texture handle to release.   |

- Return:

 | Type    | Description                                                      |
 | ------- | ---------------------------------------------------------------- |
 | boolean | True if the texture was successfully released, false otherwise.  |

- Methods:
  - `draw.release_texture(handle)`

---

## draw.texture
`Draws a texture on the screen at the specified coordinates`

- Parameters:

 | Name   | Type   | Description                                           |
 | ------ | ------ | ----------------------------------------------------- |
 | handle | number | The texture handle to draw.                           |
 | x      | number | The x-coordinate on the screen.                       |
 | y      | number | The y-coordinate on the screen.                       |
 | width  | number | The width of the image to draw (optional).            |
 | height | number | The height of the image to draw (optional).           |

- Return:

 | Type    | Description                                                    |
 | ------- | -------------------------------------------------------------- |
 | boolean | True if the texture was successfully drawn, false otherwise.   |

- Methods:
  - `draw.texture(handle, x, y, width, height)`

---

## draw.set_hsv
`Sets the current drawing color using HSV values, with an optional alpha component`

- Parameters:

 | Name   | Type             | Description                                              | Default |
 | ------ | ---------------- | -------------------------------------------------------- | ------- |
 | color  | DrawContextColor | The drawing context color type.                          |         |
 | h      | number           | The hue component of the color (0-1).                    |         |
 | s      | number           | The saturation component of the color (0-1).             |         |
 | v      | number           | The value component of the color (0-1).                  |         |
 | a      | number           | The alpha component of the color (0-1, optional).        | 1       |

- Methods:
  - `draw.set_hsv(color, h, s, v, a)`

---

## draw.set_color
`Sets the current drawing color. This function can be called with different sets of parameters`

- Parameters:

 | Name   | Type             | Description                                                            |
 | ------ | ---------------- | ---------------------------------------------------------------------- |
 | color  | EDrawContextColor | The drawing context color type.                                        |
 | value  | number           | A number encapsulating RGBA components in a single four-byte number.   |
 | r      | number           | The red component of the color (0-1).                                  |
 | g      | number           | The green component of the color (0-1).                                |
 | b      | number           | The blue component of the color (0-1).                                 |
 | a      | number           | The alpha component of the color (0-1, optional for full opacity).     |

- Methods:
  - `draw.set_color(color, value)`
  - `draw.set_color(color, r, g, b, a)`
  - `draw.set_color(color, r, g, b)`

---

## draw.get_colors
`Retrieves the current RGBA color values for a specified drawing context`

- Parameters:

 | Name   | Type             | Description                                   |
 | ------ | ---------------- | --------------------------------------------- |
 | color  | EDrawContextColor | The specific drawing context color to retrieve. |

- Return:

 | Type   | Description                                                    |
 | ------ | -------------------------------------------------------------- |
 | number | Four integers representing the RGBA components of the color.   |

- Example:

```lua
local r, g, b, a = draw.get_colors(DrawContextColor.COMMON)
print("Current common color RGBA: ", r, g, b, a)
```

- Methods:
  - `draw.get_colors(color)`

---

## draw.set_thickness
`Sets the line thickness for drawing operations`

- Parameters:

 | Name   | Type   | Description         |
 | ------ | ------ | ------------------- |
 | value  | number | The thickness to set. |

- Methods:
  - `draw.set_thickness(value)`

---

## draw.get_thickness
`Retrieves the current line thickness used in drawing operations`

- Return:

 | Type   | Description                    |
 | ------ | ------------------------------ |
 | number | The current line thickness.    |

- Methods:
  - `draw.get_thickness()`

---

## draw.set_rounding
`Sets the rounding radius for drawing operations that require rounded corners`

- Parameters:

 | Name   | Type   | Description                  |
 | ------ | ------ | ---------------------------- |
 | value  | number | The rounding radius to set.  |

- Methods:
  - `draw.set_rounding(value)`

---

## draw.get_rounding
`Retrieves the current rounding radius used in drawing operations`

- Return:

 | Type   | Description                     |
 | ------ | ------------------------------- |
 | number | The current rounding radius.    |

- Methods:
  - `draw.get_rounding()`

---

## draw.set_radius
`Sets the radius for drawing operations that involve circular elements`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | value  | number | The radius to set for circles and arcs.     |

- Methods:
  - `draw.set_radius(value)`

---

## draw.get_radius
`Retrieves the current radius used in drawing operations for circles and arcs`

- Return:

 | Type   | Description                 |
 | ------ | --------------------------- |
 | number | The current radius.         |

- Methods:
  - `draw.get_radius()`

---

## draw.set_num_segments
`Sets the number of segments used for drawing rounded elements`

- Parameters:

 | Name   | Type   | Description                              |
 | ------ | ------ | ---------------------------------------- |
 | value  | number | The number of segments to set.          |

- Methods:
  - `draw.set_num_segments(value)`

---

## draw.get_num_segments
`Retrieves the current number of segments used for rounded elements`

- Return:

 | Type   | Description                            |
 | ------ | -------------------------------------- |
 | number | The current number of segments.        |

- Methods:
  - `draw.get_num_segments()`

---

## draw.set_flags
`Sets drawing flags for customizing the behavior of drawing operations. These flags are based on the ImDrawCornerFlags enum`

- Parameters:

 | Name   | Type   | Description                                      |
 | ------ | ------ | ------------------------------------------------ |
 | value  | number | The flags to set, as defined by ImDrawCornerFlags. |

- Methods:
  - `draw.set_flags(value)`

---

## draw.get_flags
`Retrieves the current drawing flags, as defined by the ImDrawCornerFlags enum`

- Return:

 | Type   | Description                |
 | ------ | --------------------------|
 | number | The current flags.        |

- Methods:
  - `draw.get_flags()`

---

## draw.set_min_uv
`Sets the minimum texture coordinate (UV) for texturing operations`

- Parameters:

 | Name   | Type   | Description                  |
 | ------ | ------ | ---------------------------- |
 | value  | number | The minimum UV to set.       |

- Methods:
  - `draw.set_min_uv(value)`

---

## draw.get_min_uv
`Retrieves the current minimum texture coordinate (UV) used in texturing operations`

- Return:

 | Type   | Description                     |
 | ------ | ------------------------------- |
 | number | The current minimum UV.         |

- Methods:
  - `draw.get_min_uv()`

---

## draw.set_max_uv
`Sets the maximum texture coordinate (UV) for texturing operations`

- Parameters:

 | Name   | Type   | Description                  |
 | ------ | ------ | ---------------------------- |
 | value  | number | The maximum UV to set.       |

- Methods:
  - `draw.set_max_uv(value)`

---

## draw.get_max_uv
`Retrieves the current maximum texture coordinate (UV) used in texturing operations`

- Return:

 | Type   | Description                     |
 | ------ | ------------------------------- |
 | number | The current maximum UV.         |

- Methods:
  - `draw.get_max_uv()`

---

## draw.create_font
`Queues a font for loading and invokes a callback when the font is successfully loaded`

- Overloads:
  1. `draw.create_font(font_name, font_size, on_requested)`
  2. `draw.create_font(font_name, on_requested)`

- Parameters:

 | Name        | Type               | Description                                                  | Default |
 | ----------- | ------------------ | ------------------------------------------------------------ | ------- |
 | font_name   | string             | The name of the font file. If the path is not specified, searches in the product directory and system fonts. |         |
 | font_size   | number             | The size of the font.                                        | 14      |
 | on_requested| fun(font: ImFont*) | The callback function that is invoked when the font is loaded. Receives an ImFont pointer as an argument. |         |

- Return:

 | Type     | Description                                              |
 | -------- | -------------------------------------------------------- |
 | boolean  | True if the font is successfully queued for loading, false if there is an error. |

- Methods:
  - `draw.create_font(font_name, font_size, on_requested)`
  - `draw.create_font(font_name, on_requested)`

---

## draw.set_font
`Sets the current font for drawing operations`

- Parameters:

 | Name   | Type      | Description                      |
 | ------ | --------- | -------------------------------- |
 | font   | ImFont*   | The font to set for drawing.     |

- Methods:
  - `draw.set_font(font)`

---

## draw.get_text_size
`Calculates the size of the given text using the current font`

- Parameters:

 | Name   | Type   | Description               |
 | ------ | ------ | -------------------------|
 | text   | string | The text for which to calculate the size. |

- Return:

 | Type     | Description                           |
 | -------- | ------------------------------------- |
 | number   | The width of the text in pixels.      |
 | number   | The height of the text in pixels.     |

- Methods:
  - `draw.get_text_size(text)`

---

## draw.get_text_size_x
`Calculates the width of the given text using the current font`

- Parameters:

 | Name   | Type   | Description               |
 | ------ | ------ | -------------------------|
 | text   | string | The text for which to calculate the width. |

- Return:

 | Type     | Description                           |
 | -------- | ------------------------------------- |
 | number   | The width of the text in pixels.      |

- Methods:
  - `draw.get_text_size_x(text)`

---

## draw.get_text_size_y
`Calculates the height of the given text using the current font`

- Parameters:

 | Name   | Type   | Description               |
 | ------ | ------ | -------------------------|
 | text   | string | The text for which to calculate the height. |

- Return:

 | Type     | Description                           |
 | -------- | ------------------------------------- |
 | number   | The height of the text in pixels.     |

- Methods:
  - `draw.get_text_size_y(text)`

---

## draw.line
`Draws a line between two points`

- Parameters:

 | Name   | Type   | Description                         |
 | ------ | ------ | ----------------------------------- |
 | x1     | number | The x-coordinate of the first point.|
 | y1     | number | The y-coordinate of the first point.|
 | x2     | number | The x-coordinate of the second point.|
 | y2     | number | The y-coordinate of the second point.|

- Methods:
  - `draw.line(x1, y1, x2, y2)`

---

## draw.text
`Draws text at a specified location`

- Parameters:

 | Name   | Type   | Description                       |
 | ------ | ------ | --------------------------------- |
 | x      | number | The x-coordinate where the text starts. |
 | y      | number | The y-coordinate where the text starts. |
 | text   | string | The text to draw.                 |

- Methods:
  - `draw.text(x, y, text)`

---

## draw.rect
`Draws an unfilled rectangle`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the opposite corner.   |
 | y2     | number | The y-coordinate of the opposite corner.   |

- Methods:
  - `draw.rect(x1, y1, x2, y2)`

---

## draw.rect_filled
`Draws a filled rectangle`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the opposite corner.   |
 | y2     | number | The y-coordinate of the opposite corner.   |

- Methods:
  - `draw.rect_filled(x1, y1, x2, y2)`

---

## draw.rect_filled_multi_color
`Draws a filled rectangle with multiple colors`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the opposite corner.   |
 | y2     | number | The y-coordinate of the opposite corner.   |

- Methods:
  - `draw.rect_filled_multi_color(x1, y1, x2, y2)`

---

## draw.quad
`Draws an unfilled quadrilateral`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the second corner.     |
 | y2     | number | The y-coordinate of the second corner.     |
 | x3     | number | The x-coordinate of the third corner.      |
 | y3     | number | The y-coordinate of the third corner.      |
 | x4     | number | The x-coordinate of the fourth corner.     |
 | y4     | number | The y-coordinate of the fourth corner.     |

- Methods:
  - `draw.quad(x1, y1, x2, y2, x3, y3, x4, y4)`

---

## draw.quad_filled
`Draws a filled quadrilateral`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the second corner.     |
 | y2     | number | The y-coordinate of the second corner.     |
 | x3     | number | The x-coordinate of the third corner.      |
 | y3     | number | The y-coordinate of the third corner.      |
 | x4     | number | The x-coordinate of the fourth corner.     |
 | y4     | number | The y-coordinate of the fourth corner.     |

- Methods:
  - `draw.quad_filled(x1, y1, x2, y2, x3, y3, x4, y4)`

---

## draw.triangle
`Draws an unfilled triangle`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the second corner.     |
 | y2     | number | The y-coordinate of the second corner.     |
 | x3     | number | The x-coordinate of the third corner.      |
 | y3     | number | The y-coordinate of the third corner.      |

- Methods:
  - `draw.triangle(x1, y1, x2, y2, x3, y3)`

---

## draw.triangle_filled
`Draws a filled triangle`

- Parameters:

 | Name   | Type   | Description                                 |
 | ------ | ------ | ------------------------------------------- |
 | x1     | number | The x-coordinate of the first corner.      |
 | y1     | number | The y-coordinate of the first corner.      |
 | x2     | number | The x-coordinate of the second corner.     |
 | y2     | number | The y-coordinate of the second corner.     |
 | x3     | number | The x-coordinate of the third corner.      |
 | y3     | number | The y-coordinate of the third corner.      |

- Methods:
  - `draw.triangle_filled(x1, y1, x2, y2, x3, y3)`

---

## draw.circle
`Draws an unfilled circle at a specified location`

- Parameters:

 | Name   | Type   | Description                         |
 | ------ | ------ | ----------------------------------- |
 | x      | number | The x-coordinate of the circle's center.|
 | y      | number | The y-coordinate of the circle's center.|

- Methods:
  - `draw.circle(x, y)`

---

## draw.circle_filled
`Draws a filled circle at a specified location`

- Parameters:

 | Name   | Type   | Description                         |
 | ------ | ------ | ----------------------------------- |
 | x      | number | The x-coordinate of the circle's center.|
 | y      | number | The y-coordinate of the circle's center.|

- Methods:
  - `draw.circle_filled(x, y)`

---

## draw.set_draw_list
`Sets the current draw list for drawing elements`

- Parameters:

 | Name   | Type     | Description                         |
 | ------ | -------- | ----------------------------------- |
 | list   | DrawList | The draw list to be set.            |

- Return:

 | Type     | Description                                 |
 | -------- | ------------------------------------------- |
 | DrawList | The previous DrawList that was set.         |

- Methods:
  - `draw.set_draw_list(list)`

---

## draw.get_draw_list
`Retrieves the current draw list for drawing elements`

- Return:

 | Type     | Description                     |
 | -------- | ------------------------------- |
 | DrawList | The current draw list.         |

- Methods:
  - `draw.get_draw_list()`

---