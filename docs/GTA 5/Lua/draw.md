---
slug: /gta/lua/draw
title: draw
---

# draw

```ebnf
Draws function must be used in OnFrame event
```

## Functions

## `draw.get_window_width`

`Get window width in pixels.`

### Return value:

| Name  | Type   | Description                     |
| ----- | ------ | ------------------------------- |
| Width | number | Width of game window in pixels. |

### Methods

* `draw.get_window_width()`

## `draw.get_window_height`

`Get window height in pixels.`

### Return value:

| Name   | Type   | Description                      |
| ------ | ------ | -------------------------------- |
| Height | number | Height of game window in pixels. |

### Methods

* `draw.get_window_height()`

## `draw.get_screen_width`

`Get screen width in pixels.`

### Return value:

| Name  | Type   | Description                |
| ----- | ------ | -------------------------- |
| Width | number | Width of screen in pixels. |

### Methods

* `draw.get_screen_width()`

## `draw.get_screen_height`

`Get screen height in pixels.`

### Return value:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| Height | number | Height of screen in pixels. |

### Methods

* `draw.get_screen_height()`

## `draw.create_texture_from_file`

`Load texture from file.`

### Parameters:

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| file\_name | string | File name   |

### Return value:

| Name   | Type     | Description                           |
| ------ | -------- | ------------------------------------- |
| Object | userdata | Texture handle, 0 if failed to create |

### Methods

* `draw.create_texture_from_file(string file_name)`

## `draw.create_texture_from_memory`

`Load texture from memory.`

### Parameters:

| Name | Type     | Description      |
| ---- | -------- | ---------------- |
| ptr  | userdata | Texture          |
| size | number   | Amount of memory |

### Return value:

| Name   | Type     | Description                           |
| ------ | -------- | ------------------------------------- |
| Object | userdata | Texture handle, 0 if failed to create |

### Methods

* `draw.create_texture_from_memory(ptr, size)`

## `draw.release_texture`

`Release texture from memory.`

### Parameters:

| Name   | Type     | Description    |
| ------ | -------- | -------------- |
| handle | userdata | Texture handle |

### Return value:

| Name    | Type | Description                                       |
| ------- | ---- | ------------------------------------------------- |
| success | bool | true if the texture was released, false otherwise |

### Methods

* `draw.release_texture(handle)`

## Color contexts `ctx_color`
```C
enum EDrawContextColor_
{
    kDrawContextColor_Common = 0,
    kDrawContextColor_UpperLeft = 1,
    kDrawContextColor_UpperRight = 2,
    kDrawContextColor_BottomLeft = 3,
    kDrawContextColor_BottomRight = 4,
};
```

## `draw.set_hsv`

`Set HSV color to draw.`

### Parameters:

| Name      | Type   | Description    |
| --------- | ------ | -------------- |
| ctx_color | int    | Color context. |
| h         | number | Hue.           |
| s         | number | Saturation.    |
| v         | number | Brightness.    |
| a         | number | Alpha.         |

### Methods

* `draw.set_hsv(int ctx_color, number h, number s, number v, number a)`
* `draw.set_hsv(int ctx_color, number h, number s, number v)`

## `draw.set_color`

`Set RGB color to draw.`

### Parameters:

| Name      | Type | Description    |
| --------- | ---- | -------------- |
| ctx_color | int  | Color context. |
| rgba      | int  | Int32 color.   |
| r         | int  | Red.           |
| g         | int  | Green.         |
| b         | int  | Blue.          |
| a         | int  | Alpha.         |

### Methods

* `draw.set_color(int ctx_color, int rgba)`
* `draw.set_color(int ctx_color, int r, int g, int b, int a)`
* `draw.set_color(int ctx_color, int r, int g, int b)`

## `draw.get_color`

`Get color to draw.`

### Parameters:

| Name      | Type | Description    |
| --------- | ---- | -------------- |
| ctx_color | int  | Color context. |

### Return value:

| Name  | Type  | Description            |
| ----- | ----- | ---------------------- |
| color | int32 | Current color to draw. |

### Methods

* `draw.get_color(int ctx_color)`

## `draw.set_thickness`

`Set element thickness.`

### Parameters:

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| thickness | number | Thickness of Draws element. |

### Methods

* `draw.set_thickness(number thickness)`

## `draw.get_thickness`

`Get element thickness.`

### Return value:

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| thickness | number | Thickness of Draws element. |

### Methods

* `draw.get_thickness()`

## `draw.set_rounding`

`Set element rounding.`

### Parameters:

| Name     | Type   | Description                |
| -------- | ------ | -------------------------- |
| rounding | number | Rounding of Draws element. |

### Methods

* `draw.set_rounding(number rounding)`

## `draw.get_rounding`

`Get element rounding.`

### Return value:

| Name     | Type   | Description                |
| -------- | ------ | -------------------------- |
| rounding | number | Rounding of Draws element. |

### Methods

* `draw.get_rounding()`

## `draw.set_radius`

`Set element radius.`

### Parameters:

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| radius | number | Radius of Draws element. |

### Methods

* `draw.set_radius(number radius)`

## `draw.get_radius`

`Get element radius.`

### Return value:

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| radius | number | Radius of Draws element. |

### Methods

* `draw.get_radius()`

## `draw.set_num_segments`

`Set element amount of segments.`

### Parameters:

| Name         | Type | Description                       |
| ------------ | ---- | --------------------------------- |
| num_segments | int  | Amount of Draws element segments. |

### Methods

* `draw.set_num_segments(int num_segments)`

## `draw.get_num_segments`

`Get element amount of segments.`

### Return value:

| Name         | Type | Description                       |
| ------------ | ---- | --------------------------------- |
| num_segments | int  | Amount of Draws element segments. |

### Methods

* `draw.get_num_segments()`

## `draw.set_flags`

`Set element flags.`

### Parameters:

| Name  | Type | Description             |
| ----- | ---- | ----------------------- |
| flags | int  | Flags of Draws element. |

### Methods

* `draw.set_flags(int flags)`

## `draw.get_flags`

`Get element flags.`

### Return value:

| Name  | Type | Description             |
| ----- | ---- | ----------------------- |
| flags | int  | Flags of Draws element. |

### Methods

* `draw.get_flags()`

## `draw.set_min_uv`

`Set element min_uv.`

### Parameters:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| min_uv | number | Minimal uv of draw element. |

### Methods

* `draw.set_min_uv(number min_uv)`

## `draw.get_min_uv`

`Get element min_uv.`

### Return value:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| min_uv | number | Minimal uv of draw element. |

### Methods

* `draw.get_min_uv()`

## `draw.set_max_uv`

`Set element max_uv.`

### Parameters:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| max_uv | number | Maximal uv of draw element. |

### Methods

* `draw.set_max_uv(number max_uv)`

## `draw.get_max_uv`

`Get element max_uv.`

### Return value:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| max_uv | number | Maximal uv of draw element. |

### Methods

* `draw.get_max_uv()`

## `draw.line`

`Draws line.`

### Parameters:

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| x1   | number | Starting point position along the X axis |
| y1   | number | Starting point position along the Y axis |
| x2   | number | Ending point position along the X axis   |
| y2   | number | Ending point position along the Y axis   |

### Methods

* `draw.line(number x1, number y1, number x2, number y2)`

## `draw.create_font`

`Creates font.`

### Parameters:

| Name      | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| font_name | string | Name of font ( filename without ttf ) |
| font_size | number | Height of font                        |  |

### Methods

* `draw.create_font(string font_name, number font_size)`
* `draw.create_font(string font_name)`

### Return value:

| Name | Type   | Description   |
| ---- | ------ | ------------- |
| font | ImFont | Created font. |

## `draw.set_font`

`Set font to draw.`

### Parameters:

| Name | Type   | Description   |
| ---- | ------ | ------------- |
| font | ImFont | Created font. |

### Methods

* `draw.set_font(font)`

## `draw.text`

`Draws text.`

### Parameters:

| Name | Type   | Description                 |
| ---- | ------ | --------------------------- |
| x    | number | Text position on the X-axis |
| y    | number | Text position on the Y axis |
| text | string | Text                        |

### Methods

* `draw.text(number x, number y, string text)`

## `draw.get_text_size`

`Get text size.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string | Text        |

### Methods

* `draw.get_text_size(string text)`

### Return value:

| Name | Type    | Description         |
| ---- | ------- | ------------------- |
| size | Vector2 | Size of given text. |

## `draw.get_text_size_x`

`Get text width.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string | Text        |

### Methods

* `draw.get_text_size_x(string text)`

### Return value:

| Name  | Type   | Description          |
| ----- | ------ | -------------------- |
| width | number | Width of given text. |

## `draw.get_text_size_y`

`Get text height.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string | Text        |

### Methods

* `draw.get_text_size_y(string text)`

### Return value:

| Name   | Type   | Description           |
| ------ | ------ | --------------------- |
| height | number | Height of given text. |

## `draw.rect`

`Draws rectangle.`

### Parameters:

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| x1   | number | Start position on the X-axis |
| y1   | number | Start position on the X-axis |
| x2   | number | End position on the X-axis   |
| y2   | number | End position on the Y-axis   |

### Methods

* `draw.rect(number x1, number y1, number x2, number y2)`

## `draw.rect_filled`

`Draws filled rectangle.`

### Parameters:

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| x1   | number | Start position on the X-axis |
| y1   | number | Start position on the X-axis |
| x2   | number | End position on the X-axis   |
| y2   | number | End position on the Y-axis   |

### Methods

* `draw.rect_filled(number x1, number y1, number x2, number y2)`

## `draw.rect_filled_multi_color`

`Draws multicolored filled rect.`

### Parameters:

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| x1   | number | Start position on the X-axis |
| y1   | number | Start position on the X-axis |
| x2   | number | End position on the X-axis   |
| y2   | number | End position on the Y-axis   |

### Methods

* `draw.draw.rect_filled_multi_color(number x1, number y1, number x2, number y2)`

## `draw.quad`

`Draws quadrangle.`

### Parameters:

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| x1   | number | Position 1 on the X-axis |
| y1   | number | Position 1 on the Y-axis |
| x2   | number | Position 2 on the X-axis |
| y2   | number | Position 2 on the Y-axis |
| x3   | number | Position 3 on the X-axis |
| y3   | number | Position 3 on the Y-axis |
| x4   | number | Position 4 on the X-axis |
| y4   | number | Position 5 on the Y-axis |

### Methods

* `draw.quad(number x1, number y1, number x2, number y2, number x3, number y3, number x4, number y4)`

## `draw.quad_filled`

`Draws filled quadrangle.`

### Parameters:

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| x1   | number | Position 1 on the X-axis |
| y1   | number | Position 1 on the Y-axis |
| x2   | number | Position 2 on the X-axis |
| y2   | number | Position 2 on the Y-axis |
| x3   | number | Position 3 on the X-axis |
| y3   | number | Position 3 on the Y-axis |
| x4   | number | Position 4 on the X-axis |
| y4   | number | Position 5 on the Y-axis |

### Methods

* `draw.quad_filled(number x1, number y1, number x2, number y2, number x3, number y3, number x4, number y4)`

## `draw.triangle`

`Draws triangle`

### Parameters:

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| x1   | number | Position 1 on the X-axis |
| y1   | number | Position 1 on the Y-axis |
| x2   | number | Position 2 on the X-axis |
| y2   | number | Position 2 on the Y-axis |
| x3   | number | Position 3 on the X-axis |
| y3   | number | Position 3 on the Y-axis |

### Methods

* `draw.triangle(number x1, number y1, number x2, number y2, x3, y3)`

## `draw.triangle_filled`

`Draws filled triangle`

### Parameters:

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| x1   | number | Position 1 on the X-axis |
| y1   | number | Position 1 on the Y-axis |
| x2   | number | Position 2 on the X-axis |
| y2   | number | Position 2 on the Y-axis |
| x3   | number | Position 3 on the X-axis |
| y3   | number | Position 3 on the Y-axis |

### Methods

* `draw.triangle_filled(number x1, number y1, number x2, number y2, x3, y3)`

## `draw.circle`

`Draws circle`

### Parameters:

| Name      | Type   | Description        |
| --------- | ------ | ------------------ |
| center\_x | number | Center-x of circle |
| center\_y | number | Center-y of circle |

### Methods

* `draw.circle(number center_x, number center_y)`

## `draw.circle_filled`

`Draws filled circle`

### Parameters:

| Name      | Type   | Description        |
| --------- | ------ | ------------------ |
| center\_x | number | Center-x of circle |
| center\_y | number | Center-y of circle |

### Methods

* `draw.circle_filled(number center_x, number center_y)`

## `draw.ngon`

`Draws ngon`

### Parameters:

| Name      | Type   | Description        |
| --------- | ------ | ------------------ |
| center\_x | number | Center-x of circle |
| center\_y | number | Center-y of circle |

### Methods

* `draw.ngon(number center_x, number center_y`

## `draw.ngon_filled`

`Draws filled ngon`

### Parameters:

| Name      | Type   | Description        |
| --------- | ------ | ------------------ |
| center\_x | number | Center-x of circle |
| center\_y | number | Center-y of circle |

### Methods

* `draw.ngon_filled(number center_x, number center_y)`

## `draw.texture`

`Draws loaded texture.`

### Parameters:

| Name   | Type     | Description    |
| ------ | -------- | -------------- |
| x      | number   |                |
| y      | number   |                |
| width  | number   |                |
| height | number   |                |
| handle | userdata | Texture handle |

### Methods

* `draw.texture(handle, number x, number y)`
* `draw.texture(handle, number x, number y, number width, number height)`
