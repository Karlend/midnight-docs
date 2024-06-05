---
slug: /gta/lua/Draw
title: Draw
---

## draw.is_ready
`@return boolean True if drawing is possible.`

- Methods:

`draw.is_ready()`

---

## draw.get_window_width
`@return number The width of the window in pixels, or 0 if the resolution cannot be retrieved.`

- Methods:

`draw.get_window_width()`

---

## draw.get_window_height
`@return number The height of the window in pixels, or 0 if the resolution cannot be retrieved.`

- Methods:

`draw.get_window_height()`

---

## draw.get_screen_width
`@return number The width of the screen in pixels, or 0 if the resolution cannot be retrieved.`

- Methods:

`draw.get_screen_width()`

---

## draw.get_screen_height
`@return number The height of the screen in pixels, or 0 if the resolution cannot be retrieved.`

- Methods:

`draw.get_screen_height()`

---

## draw.create_texture_from_memory
`@return number A texture handle if successful, or 0 if the texture could not be created.`

- Methods:

`draw.create_texture_from_memory(buffer, len)`

---

## draw.create_texture_from_file
`@return number A texture handle if successful, or 0 if the texture could not be created.`

- Methods:

`draw.create_texture_from_file(file_name)`

---

## draw.create_texture_from_base64
`@return number A texture handle if successful, or 0 if the texture could not be created.`

- Methods:

`draw.create_texture_from_base64(base64)`

---

## draw.create_debug_texture
`@return number A texture handle if successful, or 0 if the texture could not be created.`

- Methods:

`draw.create_debug_texture(width, height)`

---

## draw.release_texture
`@return boolean True if the texture was successfully released, false otherwise.`

- Methods:

`draw.release_texture(handle)`

---

## draw.texture
`@return boolean True if the texture was successfully drawn, false otherwise.`

- Methods:

`draw.texture(handle, x, y, width, height)`

---

## draw.set_hsv
`@param a number? The alpha component of the color (0-1).`

- Methods:

`draw.set_hsv(color, h, s, v, a)`

---

## draw.set_color
`@overload fun(color: EDrawContextColor, r: number, g: number, b: number)`

- Methods:

`draw.set_color(color, ...)`

---

## draw.get_colors
`print("Current common color RGBA: ", r, g, b, a)`

- Methods:

`draw.get_colors(color)`

---

## draw.set_thickness
`@param value number The thickness to set.`

- Methods:

`draw.set_thickness(value)`

---

## draw.get_thickness
`@return number The current line thickness.`

- Methods:

`draw.get_thickness()`

---

## draw.set_rounding
`@param value number The rounding radius to set.`

- Methods:

`draw.set_rounding(value)`

---

## draw.get_rounding
`@return number The current rounding radius.`

- Methods:

`draw.get_rounding()`

---

## draw.set_radius
`@param value number The radius to set for circles and arcs.`

- Methods:

`draw.set_radius(value)`

---

## draw.get_radius
`@return number The current radius.`

- Methods:

`draw.get_radius()`

---

## draw.set_num_segments
`@param value number The number of segments to set.`

- Methods:

`draw.set_num_segments(value)`

---

## draw.get_num_segments
`@return number The current number of segments.`

- Methods:

`draw.get_num_segments()`

---

## draw.set_flags
`@param value number The flags to set, as defined by ImDrawCornerFlags.`

- Methods:

`draw.set_flags(value)`

---

## draw.get_flags
`@return number The current flags.`

- Methods:

`draw.get_flags()`

---

## draw.set_min_uv
`@param value number The minimum UV to set.`

- Methods:

`draw.set_min_uv(value)`

---

## draw.get_min_uv
`@return number The current minimum UV.`

- Methods:

`draw.get_min_uv()`

---

## draw.set_max_uv
`@param value number The maximum UV to set.`

- Methods:

`draw.set_max_uv(value)`

---

## draw.get_max_uv
`@return number The current maximum UV.`

- Methods:

`draw.get_max_uv()`

---

## draw.create_font
`@return boolean True if the font is successfully queued for loading, false if there is an error.`

- Methods:

`draw.create_font(font_name, font_size, on_requested)`

---

## draw.set_font
`@param font ImFont* The font to set for drawing.`

- Methods:

`draw.set_font(font)`

---

## draw.get_text_size
`@return number, number The width and height of the text in pixels, respectively.`

- Methods:

`draw.get_text_size(text)`

---

## draw.get_text_size_x
`@return number The width of the text in pixels.`

- Methods:

`draw.get_text_size_x(text)`

---

## draw.get_text_size_y
`@return number The height of the text in pixels.`

- Methods:

`draw.get_text_size_y(text)`

---

## draw.line
`@param y2 number The y-coordinate of the second point.`

- Methods:

`draw.line(x1, y1, x2, y2)`

---

## draw.text
`@param text string The text to draw.`

- Methods:

`draw.text(x, y, text)`

---

## draw.rect
`@param y2 number The y-coordinate of the opposite corner.`

- Methods:

`draw.rect(x1, y1, x2, y2)`

---

## draw.rect_filled
`@param y2 number The y-coordinate of the opposite corner.`

- Methods:

`draw.rect_filled(x1, y1, x2, y2)`

---

## draw.rect_filled_multi_color
`@param y2 number The y-coordinate of the opposite corner.`

- Methods:

`draw.rect_filled_multi_color(x1, y1, x2, y2)`

---

## draw.quad
`@param y4 number The y-coordinate of the fourth corner.`

- Methods:

`draw.quad(x1, y1, x2, y2, x3, y3, x4, y4)`

---

## draw.quad_filled
`@param y4 number The y-coordinate of the fourth corner.`

- Methods:

`draw.quad_filled(x1, y1, x2, y2, x3, y3, x4, y4)`

---

## draw.triangle
`@param y3 number The y-coordinate of the third corner.`

- Methods:

`draw.triangle(x1, y1, x2, y2, x3, y3)`

---

## draw.triangle_filled
`@param y3 number The y-coordinate of the third corner.`

- Methods:

`draw.triangle_filled(x1, y1, x2, y2, x3, y3)`

---

## draw.circle
`@param y number The y-coordinate of the circle's center.`

- Methods:

`draw.circle(x, y)`

---

## draw.circle_filled
`@param y number The y-coordinate of the circle's center.`

- Methods:

`draw.circle_filled(x, y)`

---

## draw.set_draw_list
`@return DrawList The previous DrawList that was set.`

- Methods:

`draw.set_draw_list(list)`

---

## draw.get_draw_list
`@return DrawList The current draw list.`

- Methods:

`draw.get_draw_list()`

---

