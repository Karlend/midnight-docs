---
slug: /gta/lua/menu
title: menu
---

# menu

```ebnf
Methods to work with menu
```

## Functions

## `menu.add_page`

### Parameters

| Name | Type   | Description    |
| ---- | ------ | -------------- |
| name | string | Page name      |
| icon | int    | Page icon enum |

### Return value

| Type | Description |
| ---- | ----------- |
| page | Page object |

### Methods

* `menu.add_page(name, icon)`

## `menu.add_mono_block`

### Parameters

| Name     | Type   | Description         |
| -------- | ------ | ------------------- |
| page     | page   | Page object         |
| name     | string | Block name          |
| position | int    | Block position enum |

### Return value

| Type  | Description  |
| ----- | ------------ |
| block | Block object |

### Methods

* `menu.add_mono_block(page, name, position)`

## `menu.add_checkbox`

### Parameters

| Name     | Type     | Description      |
| -------- | -------- | ---------------- |
| block    | block    | Block object     |
| name     | string   | Element name     |
| callback | function | Element callback |

### Return value

| Type     | Description      |
| -------- | ---------------- |
| checkbox | Checkbox element |

### Methods

* `menu.add_checkbox(block, name, callback)`
* `menu.add_checkbox(block, name)`

## `menu.add_combo`

### Parameters

| Name     | Type     | Description      |
| -------- | -------- | ---------------- |
| block    | block    | Block object     |
| name     | string   | Element name     |
| list     | table    | Combo list       |
| callback | function | Element callback |

### Return value

| Type  | Description   |
| ----- | ------------- |
| combo | Combo element |

### Methods

* `menu.add_combo(block, name, list, callback)`
* `menu.add_combo(block, name, list)`

## `menu.add_combo_ex`

### Parameters

| Name          | Type     | Description                                          |
| ------------- | -------- | ---------------------------------------------------- |
| block         | block    | Block object                                         |
| name          | string   | Element name                                         |
| name_getter   | function | Function with returned name of list element by index |
| amount_getter | function | Function with returned amount of list                |
| callback      | function | Element callback                                     |

### Return value

| Type  | Description   |
| ----- | ------------- |
| combo | Combo element |

### Methods

* `menu.add_combo_ex(block, name, name_getter, amount_getter, callback)`
* `menu.add_combo_ex(block, name, name_getter, amount_getter)`

## `menu.add_button`

### Parameters

| Name     | Type     | Description      |
| -------- | -------- | ---------------- |
| block    | block    | Block object     |
| name     | string   | Element name     |
| callback | function | Element callback |

### Return value

| Type   | Description    |
| ------ | -------------- |
| button | Button element |

### Methods

* `menu.add_button(block, name, callback)`

## `menu.add_input_text`

### Parameters

| Name     | Type     | Description      |
| -------- | -------- | ---------------- |
| block    | block    | Block object     |
| name     | string   | Element name     |
| length   | int      | Max text length  |
| callback | function | Element callback |

### Return value

| Type  | Description   |
| ----- | ------------- |
| input | Input element |

### Methods

* `menu.add_input_text(block, name, length, callback)`
* `menu.add_input_text(block, name, length)`

## `menu.add_text`

### Parameters

| Name  | Type   | Description  |
| ----- | ------ | ------------ |
| block | block  | Block object |
| text  | string | Element text |

### Return value

| Type | Description  |
| ---- | ------------ |
| text | Text element |

### Methods

* `menu.add_text(block, text)`

## `menu.add_dynamic_text`

### Parameters

| Name        | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| block       | block    | Block object                  |
| text_getter | function | Function with returned string |

### Return value

| Type | Description  |
| ---- | ------------ |
| text | Text element |

### Methods

* `menu.add_dynamic_text(block, text_getter)`

## Data types

```lua
local menu_color =
{
	Text,
	TextDisabled,
	WindowBg,
	ChildBg,
	PopupBg,
	Border,
	BorderShadow,
	FrameBg,
	FrameBgHovered,
	FrameBgActive,
	TitleBg,
	TitleBgActive,
	TitleBgCollapsed,
	MenuBarBg,
	ScrollbarBg,
	ScrollbarGrab,
	ScrollbarGrabHovered,
	ScrollbarGrabActive,
	CheckMark,
	SliderGrab,
	SliderGrabActive,
	Button,
	ButtonHovered,
	ButtonActive,
	Header,
	HeaderHovered,
	HeaderActive,
	Separator,
	SeparatorHovered,
	SeparatorActive,
	ResizeGrip,
	ResizeGripHovered,
	ResizeGripActive,
	Tab,
	TabHovered,
	TabActive,
	TabUnfocused,
	TabUnfocusedActive,
	PlotLines,
	PlotLinesHovered,
	PlotHistogram,
	PlotHistogramHovered,
	TableHeaderBg,
	TableBorderStrong,
	TableBorderLight,
	TableRowBg,
	TableRowBgAlt,
	TextSelectedBg,
	DragDropTarget,
	NavHighlight,
	NavWindowingHighlight,
	NavWindowingDimBg,
	ModalWindowDimBg,
}
```

```lua
local menu_widget_color =
{
	Text,
	ScrollbarGrab,
	ScrollbarGrabHovered,
	ScrollbarGrabActive,
	PopupBg,
	Header,
	HeaderHovered,

	Icons,
	TitleName,

	TagsBlocked,
	TagsModder,
	TagsCheater,
	TagsAdmin,
	TagsLocal,
	TagsSessionHost,
	TagsScriptHost,
	TagsGodmode,
	TagsFriend,
	TagsInterior,

	NotifyRect,
	NotifyRectLine,
	NotifyIcon,
	NotifyText,
	NotifyTextShadow,

	NotifyDefault,
	NotifySuccess,
	NotifyWarning,
	NotifyImportant,
	NotifyFatal,
}
```

## Functions

## `menu.set_color`

### Parameters

| Name  | Type        | Description   | Optinal |
| ----- | ----------- | ------------- | ------- |
| color | menu\_color | Menu category |         |
| r     | int         | Color Red     |         |
| g     | int         | Color Green   |         |
| b     | int         | Color Blue    |         |
| a     | int         | Color Alpha   | +       |
| rgb   | Vector3     | Color RGB     |
| rgba  | Vector4     | Color RGBA    |

### Methods

* `menu.set_color(color, r, g, b, a)`
* `menu.set_color(color, rgb)`
* `menu.set_color(color, rgba)`

## `menu.set_widget_color`

### Parameters

| Name  | Type                | Description          | Optinal |
| ----- | ------------------- | -------------------- | ------- |
| color | menu\_widget\_color | Menu widget category |         |
| r     | int                 | Color Red            |         |
| g     | int                 | Color Green          |         |
| b     | int                 | Color Blue           |         |
| a     | int                 | Color Alpha          | +       |
| rgb   | Vector3             | Color RGB            |         |
| rgba  | Vector4             | Color RGBA           |         |

### Methods

* `menu.set_widget_color(color, r, g, b, a)`
* `menu.set_widget_color(color, rgb)`
* `menu.set_widget_color(color, rgba)`

## `menu.backup_styles`

### Return value

| Type | Description |
| ---- | ----------- |
| bool | Success     |

### Methods

* `menu.backup_styles()`

## `menu.restore_styles`

### Return value

| Type | Description |
| ---- | ----------- |
| bool | Success     |

### Methods

* `menu.restore_styles()`

## `menu.get_color`

### Parameters

| Name  | Type        | Description   |
| ----- | ----------- | ------------- |
| color | menu\_color | Menu category |

### Return value

| Type    | Description |
| ------- | ----------- |
| Vector4 | Color RGBA  |

### Methods

* `menu.get_color(color)`

## `menu.get_widget_color`

### Parameters

| Name   | Type                | Description          |
| ------ | ------------------- | -------------------- |
| widget | menu\_widget\_color | Menu widget category |

### Return value

| Type    | Description |
| ------- | ----------- |
| Vector4 | Color RGBA  |

### Methods

* `menu.get_widget_color(widget)`

## `menu.set_alpha`

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  | Color Alpha |

### Methods

* `menu.set_alpha(value)`

## `menu.get_alpha`

### Return value

| Type | Description |
| ---- | ----------- |
| int  | Color Alpha |

### Methods

* `menu.get_alpha()`

## `menu.set_first_item_padding`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| value | float | Padding amount |

### Methods

* `menu.set_first_item_padding(value)`

## `menu.get_first_item_padding`

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Padding amount |

### Methods

* `menu.get_first_item_padding()`

## `menu.set_window_rounding`

### Parameters

| Name  | Type  | Description     |
| ----- | ----- | --------------- |
| value | float | Rounding amount |

### Methods

* `menu.set_window_rounding(value)`

## `menu.get_window_rounding`

### Return value

| Type  | Description     |
| ----- | --------------- |
| float | Rounding amount |

### Methods

* `menu.get_window_rounding()`

## `menu.set_window_border_size`

### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float | Border size |

### Methods

* `menu.set_window_border_size(value)`

## `menu.get_window_border_size`

### Return value

| Type  | Description |
| ----- | ----------- |
| float | Border size |

### Methods

* `menu.get_window_border_size()`

## `menu.set_child_rounding`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| value | float | Child rounding |

### Methods

* `menu.set_child_rounding(value)`

## `menu.get_child_rounding`

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Child rounding |

### Methods

* `menu.get_child_rounding()`

## `menu.set_child_border_size`

### Parameters

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | float | Child border size |

### Methods

* `menu.set_child_border_size(value)`

## `menu.get_child_border_size`

### Return value

| Type  | Description       |
| ----- | ----------------- |
| float | Child border size |

### Methods

* `menu.get_child_border_size()`

## `menu.set_popup_rounding`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| value | float | Popup rounding |

### Methods

* `menu.set_popup_rounding(value)`

## `menu.get_popup_rounding`

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Popup rounding |

### Methods

* `menu.get_popup_rounding()`

## `menu.set_popup_border_size`

### Parameters

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | float | Popup border size |

### Methods

* `menu.set_popup_border_size(value)`

## `menu.get_popup_border_size`

### Return value

| Type  | Description       |
| ----- | ----------------- |
| float | Popup border size |

### Methods

* `menu.get_popup_border_size()`

## `menu.set_frame_rounding`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| value | float | Frame rounding |

### Methods

* `menu.set_frame_rounding(value)`

## `menu.get_frame_rounding`

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Frame rounding |

### Methods

* `menu.get_frame_rounding()`

## `menu.set_frame_border_size`

### Parameters

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | float | Frame border size |

### Methods

* `menu.set_frame_border_size(value)`

## `menu.get_frame_border_size`

### Return value

| Type  | Description       |
| ----- | ----------------- |
| float | Frame border size |

### Methods

* `menu.get_frame_border_size()`

## `menu.set_indent_spacing`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| value | float | Indent spacing |

### Methods

* `menu.set_indent_spacing(value)`

## `menu.get_indent_spacing`

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Indent spacing |

### Methods

* `menu.get_indent_spacing()`

## `menu.set_column_min_spacing`

### Parameters

| Name  | Type  | Description            |
| ----- | ----- | ---------------------- |
| value | float | Column minimal spacing |

### Methods

* `menu.set_column_min_spacing(value)`

## `menu.get_column_min_spacing`

### Return value

| Type  | Description            |
| ----- | ---------------------- |
| float | Column minimal spacing |

### Methods

* `menu.get_column_min_spacing()`

## `menu.set_scrollbar_size`

### Parameters

| Name  | Type  | Description    |
| ----- | ----- | -------------- |
| value | float | Scrollbar size |

### Methods

* `menu.set_scrollbar_size(value)`

## `menu.get_scrollbar_size`

### Return value

| Type  | Description    |
| ----- | -------------- |
| float | Scrollbar size |

### Methods

* `menu.get_scrollbar_size()`

## `menu.set_scrollbar_rounding`

### Parameters

| Name  | Type  | Description        |
| ----- | ----- | ------------------ |
| value | float | Scrollbar rounding |

### Methods

* `menu.set_scrollbar_rounding(value)`

## `menu.get_scrollbar_rounding`

### Return value:

| Type  | Description        |
| ----- | ------------------ |
| float | Scrollbar rounding |

### Methods

* `menu.get_scrollbar_rounding()`

## `menu.set_grab_min_size`

### Parameters

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | float | Grab minimal size |

### Methods

* `menu.set_grab_min_size(value)`

## `menu.get_grab_min_size`

### Return value

| Type  | Description       |
| ----- | ----------------- |
| float | Grab minimal size |

### Methods

* `menu.get_grab_min_size()`

## `menu.set_grab_rounding`

### Parameters

| Name  | Type  | Description   |
| ----- | ----- | ------------- |
| value | float | Grab rounding |

### Methods

* `menu.set_grab_rounding(value)`

## `menu.get_grab_rounding`

### Return value

| Type  | Description   |
| ----- | ------------- |
| float | Grab rounding |

### Methods

* `menu.get_grab_rounding()`

## `menu.set_log_slider_deadzone`

### Parameters

| Name  | Type  | Description     |
| ----- | ----- | --------------- |
| value | float | Slider deadzone |

### Methods

* `menu.set_log_slider_deadzone(value)`

## `menu.get_log_slider_deadzone`

### Return value

| Type  | Description     |
| ----- | --------------- |
| float | Slider deadzone |

### Methods

* `menu.get_log_slider_deadzone()`

## `menu.set_tab_rounding`

### Parameters

| Name  | Type  | Description  |
| ----- | ----- | ------------ |
| value | float | Tab rounding |

### Methods

* `menu.set_tab_rounding(value)`

## `menu.get_tab_rounding`

### Return value

| Type  | Description  |
| ----- | ------------ |
| float | Tab rounding |

### Methods

* `menu.get_tab_rounding()`

## `menu.set_tab_border_size`

### Parameters

| Name  | Type  | Description     |
| ----- | ----- | --------------- |
| value | float | Tab border size |

### Methods

* `menu.set_tab_border_size(value)`

## `menu.get_tab_border_size`

### Return value

| Type  | Description     |
| ----- | --------------- |
| float | Tab border size |

### Methods

* `menu.get_tab_border_size()`

## `menu.set_tab_min_width_for_close_button`

### Parameters

| Name  | Type  | Description                        |
| ----- | ----- | ---------------------------------- |
| value | float | Tab minimal width for close button |

### Methods

* `menu.set_tab_min_width_for_close_button(value)`

## `menu.get_tab_min_width_for_close_button`

### Return value

| Type  | Description                        |
| ----- | ---------------------------------- |
| float | Tab minimal width for close button |

### Methods

* `menu.get_tab_min_width_for_close_button()`

## `menu.set_mouse_cursor_scale`

### Parameters

| Name  | Type  | Description        |
| ----- | ----- | ------------------ |
| value | float | Mouse cursor scale |

### Methods

* `menu.set_mouse_cursor_scale(value)`

## `menu.get_mouse_cursor_scale`

### Return value

| Type  | Description        |
| ----- | ------------------ |
| float | Mouse cursor scale |

### Methods

* `menu.get_mouse_cursor_scale()`

## `menu.set_curve_tesselation_tol`

### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float | None given  |

### Methods

* `menu.set_curve_tesselation_tol(value)`

## `menu.get_curve_tesselation_tol`

### Return value

| Type  | Description |
| ----- | ----------- |
| float | None given  |

### Methods

* `menu.get_curve_tesselation_tol()`

## `menu.set_circle_tessellation_max_error`

### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float | None given  |

### Methods

* `menu.set_circle_tessellation_max_error(value)`

## `menu.get_circle_tessellation_max_error`

### Return value

| Type  | Description |
| ----- | ----------- |
| float | None given  |

### Methods

* `menu.get_circle_tessellation_max_error()`

## `menu.set_window_padding`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_window_padding(value)`

## `menu.get_window_padding`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_window_padding(output)`

## `menu.set_window_min_size`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_window_min_size(value)`

## `menu.get_window_min_size`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_window_min_size(output)`

## `menu.set_window_title_align`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_window_title_align(value)`

## `menu.get_window_title_align`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_window_title_align(output)`

## `menu.set_frame_padding`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_frame_padding(value)`

## `menu.get_frame_padding`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_frame_padding(output)`

## `menu.set_item_spacing`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_item_spacing(value)`

## `menu.get_item_spacing`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_item_spacing(output)`

## `menu.set_item_inner_spacing`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_item_inner_spacing(value)`

## `menu.get_item_inner_spacing`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_item_inner_spacing(output)`

## `menu.set_cell_padding`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_cell_padding(value)`

## `menu.get_cell_padding`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_cell_padding(output)`

## `menu.set_touch_extra_padding`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_touch_extra_padding(value)`

## `menu.get_touch_extra_padding`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_touch_extra_padding(output)`

## `menu.set_button_text_align`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_button_text_align(value)`

## `menu.get_button_text_align`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_button_text_align(output)`

## `menu.set_selectable_text_align`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_selectable_text_align(value)`

## `menu.get_selectable_text_align`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_selectable_text_align(output)`

## `menu.set_display_window_padding`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_display_window_padding(value)`

## `menu.get_display_window_padding`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_display_window_padding(output)`

## `menu.set_display_safe_area_padding`

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Vector2 | None given  |

### Methods

* `menu.set_display_safe_area_padding(value)`

## `menu.get_display_safe_area_padding`

### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| output | Vector2 | None given  |

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_display_safe_area_padding(output)`

## `menu.set_anti_aliased_lines`

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool | None given  |

### Methods

* `menu.set_anti_aliased_lines(value)`

## `menu.get_anti_aliased_lines`

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_anti_aliased_lines()`

## `menu.set_anti_aliased_lines_use_tex`

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool | None given  |

### Methods

* `menu.set_anti_aliased_lines_use_tex(value)`

## `menu.get_anti_aliased_lines_use_tex`

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_anti_aliased_lines_use_tex()`

## `menu.set_anti_aliased_fill`

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool | None given  |

### Methods

* `menu.set_anti_aliased_fill(value)`

## `menu.get_anti_aliased_fill`

### Return value

| Type | Description |
| ---- | ----------- |
| bool | None given  |

### Methods

* `menu.get_anti_aliased_fill()`

## `menu.is_menu_opened`

`Check if the menu is open.`

### Return value:

| Name    | Type | Description                                |
| ------- | ---- | ------------------------------------------ |
| success | bool | true if the menu is open, false otherwise. |

### Methods

* `menu.is_menu_opened()`

## `menu.get_main_menu_size`

`Get menu size.`

### Return value:

| Name | Type    | Description |
| ---- | ------- | ----------- |
| size | Vector2 | Menu size   |

### Methods

* `menu.get_main_menu_size()`

## `menu.get_main_menu_size_x`

`Get menu width.`

### Return value:

| Name  | Type  | Description         |
| ----- | ----- | ------------------- |
| Width | float | Width of main menu. |

### Methods

* `menu.get_main_menu_size_x()`

## `menu.get_main_menu_size_y`

`Get menu height.`

### Return value:

| Name   | Type  | Description          |
| ------ | ----- | -------------------- |
| Height | float | Height of main menu. |

### Methods

* `menu.get_main_menu_size_y()`

## `menu.get_main_menu_pos`

`Get menu position.`

### Return value:

| Name     | Type    | Description                |
| -------- | ------- | -------------------------- |
| position | Vector2 | Returns main menu position |

### Methods

* `menu.get_main_menu_pos()`

## `menu.get_main_menu_pos_x`

`Get the menu position by X coordinate.`

### Return value:

| Name     | Type  | Description                                                       |
| -------- | ----- | ----------------------------------------------------------------- |
| Position | float | Window position by X coordinate relative to the main game window. |

### Methods

* `menu.get_main_menu_pos_x()`

## `menu.get_main_menu_pos_y`

`Get the menu position by Y coordinate.`

### Return value:

| Name     | Type  | Description                                                       |
| -------- | ----- | ----------------------------------------------------------------- |
| Position | float | Window position by Y coordinate relative to the main game window. |

### Methods

* `menu.get_main_menu_pos_y()`

## `menu.is_input_active`

`Is menu input active.`

### Return value:

| Name   | Type | Description           |
| ------ | ---- | --------------------- |
| active | bool | Is menu input active. |

### Methods

* `menu.is_input_active()`

## Examples

### Simple page

```lua
local page = menu.add_page("My page", 5)
local my_block = menu.add_mono_block(page, "My block", 0)
menu.add_dynamic_text(my_block, function(self)
	local index = player.index()
	return "Local player name: " .. player.get_name(index)
end)
```

### Player selection

```lua
local page = menu.add_page("My page", 5)
local left = menu.add_mono_block(page, "Player selection", 0)
local right = menu.add_mono_block(page, "Interaction", 0)
local dyn_combo	= menu.add_combo_ex(left, "Player",
	function(self, index)
		local player_index = index - 1
		return player_index	.. ". "	.. player.get_name(player_index)
	end, function()
		return 32
	end, function(self, index)
		local player_index = index - 1
		print("Changed selection to " .. index .. " | Player index: " .. player_index .. " | Name: " .. player.get_name(player_index))
	end
)
menu.add_button(right, "Kick", function()
	local player_index = dyn_combo:get_long() - 1
	if not player.is_valid(player_index) then
		print("Invalid player index")
		return
	end
	print("Kicking player " .. player_index .. " | Name: " .. player.get_name(player_index))
	player.kick(player_index)
end)
```
