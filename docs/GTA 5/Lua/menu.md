---
slug: /gta/lua/Menu
title: Menu
---

## enum PopupType
```lua
PopupType = {
	-- Represents a prominent notification. It appears as a rectangle on the right side 
	-- of the screen and is used for important alerts that are less frequent but need 
	-- significant attention.
    BOX = 0,
	
	-- Represents a less obtrusive, single-lined popup notification. It is used for 
	-- frequent but less critical information, appearing as a simple text with a 
	-- background fill.
    LINE = 1
}
```

## enum PageColumn
```lua
PageColumn = {
    --- The first column index.
    FIRST = 1,
    --- The second column index.
    SECOND = 2,
    --- The third column index.
    THIRD = 3,
}
```

## enum GroupRect
```lua
GroupRect = {
    --- Represents the whole block including title and body.
    FULL = 0,
    --- Represents only the title area up to the separator.
    TITLE = 1,
    --- Represents only the content area below the separator.
    BODY = 2,
}
```

## enum Icons
```lua
Icons = {
	INVALID = 0,
	
	FIRST_ICON = 59648,
	LAST_ICON = 59710,
	
	ARROW_DOWN = 59648,
	ARROW_UP = 59649,
	CAR = 59650,
	COLOR_PALETTE = 59651,
	CONTRAST = 59652,
	EXTENSION_PUZZLE = 59653,
	EYE = 59654,
	FISH = 59655,
	FLASH = 59656,
	GRID = 59657,
	HARDWARE_CHIP = 59658,
	LOGO_BUFFER = 59659,
	PEOPLE = 59660,
	PERSON = 59661,
	PLANET = 59662,
	SAVE = 59663,
	SETTINGS = 59664,
	SHIELD = 59665,
	SKULL = 59666,
	SPEEDOMETER = 59667,
	TRASH = 59668,
	WALLET = 59670,
	SEARCH = 59671,
	CANCEL = 59672,
	CLOUD_DOWNLOAD = 59673,
	CLOUD_UPLOAD = 59674,
	CLOUD_DISCONNECTED = 59675,
	CLOUD_SUCCESS = 59676,
	EXCLAMATION_TRIANGLE = 59677,
	SHIELD_SUCCESS = 59678,
	SQUARE_CHECKMARK_SUCCESS = 59679,
	CIRCLE_CANCEL = 59680,
	GAMEPAD = 59681,
	CROSSHAIR = 59682,
	MIDNIGHT_HEADER_LOGO = 59683,
	CHECKMARK_SUCCESS = 59684,
	CANCEL2 = 59685,
	PEN = 59686,
	SHARE = 59687,
	DOWNLOAD = 59688,
	CLOUD = 59689,
	GUN = 59690,
	MOVEMENT = 59691,
	WHEELCHAIR_MOVE = 59692,
	EXCLAMATION_CIRCLE = 59693,
	KEYBOARD = 59694,
	MIDNIGHT_LOGO = 59695,
	THREE_DOTS = 59696,
	REFRESH = 59697,
	PLUS = 59698,
	COPY = 59699,
	FILE = 59700,
	CAR2 = 59701,
	CARD = 59702,
	EARTH = 59703,
	BACKSPACE = 59704,
	KARAMBIT = 59705,
	GRIPDOTS = 59706,
	PORTAL = 59707,
	SPOOFING = 59708,
	UI = 59709,
	ETHERNET = 59710
}
```

## ui.is_opened
`Checks if the UI menu is currently opened.`

- Return

| Type | Description                                                     |
| ---- | --------------------------------------------------------------- |
| bool | Returns true if the UI menu is currently open, false otherwise. |

- Methods
 - `ui.is_opened()`

---

## ui.popup
`Creates a popup window inside the game.`

- Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| title | string    | The title of the popup.   |
| body  | string    | The content of the popup. |
| icon  | Icons     | The icon of the popup.    |
| type  | PopupType | The type of the popup.    |

- Return

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| boolean | Returns true if the popup was successfully created. |

- Methods
  - `ui.popup(title, body, icon, type)`

---

## ui.get_alpha
`Retrieves the current alpha transparency of the UI.`

- Return

| Type   | Description                   |
| ------ | ----------------------------- |
| number | The alpha transparency value. |

- Methods
 - `ui.get_alpha()`

---

## ui.get_size
`Retrieves the size of the UI layout.`

- Return

| Type   | Description                  |
| ------ | ---------------------------- |
| number | The width of the UI layout.  |
| number | The height of the UI layout. |

- Methods
 - `ui.get_size()`

---

## ui.get_position
`Retrieves the position of the UI layout.`

- Return

| Type   | Description                             |
| ------ | --------------------------------------- |
| number | The x (left) position of the UI layout. |
| number | The y (top) position of the UI layout.  |

- Methods
 - `ui.get_position()`

---

## ui.get_mouse_position
`Retrieves the current mouse position within the UI.`

- Return

| Type   | Description                    |
| ------ | ------------------------------ |
| number | The x coordinate of the mouse. |
| number | The y coordinate of the mouse. |

- Methods
 - `ui.get_mouse_position()`

---

## ui.get_scale
`Retrieves the scale factor of the UI based on the DPI setting.`

- Return

| Type   | Description                 |
| ------ | --------------------------- |
| number | The scale factor of the UI. |

- Methods
 - `ui.get_scale()`

---

## ui.new_page
`Creates a new page in the UI with a specified icon.`

- Parameters

| Name | Type   | Description                       |
| ---- | ------ | --------------------------------- |
| name | string | The name of the new page.         |
| icon | Icons  | The icon to use for the new page. |

- Return

| Type     | Description                                       |
| -------- | ------------------------------------------------- |
| MenuPage | The new page object or nil if the creation fails. |

- Methods
 - `ui.new_page(name, icon)`

---

## ui.new_page
`Creates a new page in the UI without specifying an icon.`

- Parameters

| Name | Type   | Description               |
| ---- | ------ | ------------------------- |
| name | string | The name of the new page. |

- Return

| Type     | Description                                       |
| -------- | ------------------------------------------------- |
| MenuPage | The new page object or nil if the creation fails. |

- Methods
 - `ui.new_page(name)`

---

## ui.get_all_widgets
`Retrieves a table of all MenuWidgets currently available in the UI.`

- Return

| Type              | Description                         |
| ----------------- | ----------------------------------- |
| table[MenuWidget] | A table containing all MenuWidgets. |

- Methods
 - `ui.get_all_widgets()`

---

## ui.get_widget
`Retrieves a specific MenuWidget by its unique identifier.`

- Parameters

| Name | Type   | Description                          |
| ---- | ------ | ------------------------------------ |
| uuid | number | The unique identifier of the widget. |

- Return

| Type       | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| MenuWidget | The widget handle if found, or nil if no widget matches the given UUID. |

- Methods
 - `ui.get_widget(uuid)`

---

## MenuPage:new_subpage
`Creates a new subpage for a given page.`
- Parameters:

 | Name | Type   | Description                  |
 | ---- | ------ | ---------------------------- |
 | name | string | The name of the new subpage. |

- Return:

 | Type        | Description                                          |
 | ----------- | ---------------------------------------------------- |
 | MenuSubPage | The new subpage object or nil if the creation fails. |

- Methods:
  - `MenuPage:new_subpage(name)`

---

## MenuPage:new_group
`If there are already existing tabs, the new group will be added to the first created tab.`
- Parameters:

 | Name | Type        | Description                                |
 | ---- | ----------- | ------------------------------------------ |
 | name | string      | The name of the new group.                 |
 | pos  | PageColumn? | The position of the group within the page. |

- Return:

 | Type      | Description                                                                                         |
 | --------- | --------------------------------------------------------------------------------------------------- |
 | MenuGroup | Returns a MenuGroup object if the group is successfully created. Returns nil if the creation fails. |

- Methods:
  - `MenuPage:new_group(name, pos)`

---

## MenuSubPage:new_group
`Creates a new group within this submenu page.`
- Parameters:

 | Name | Type       | Description                                        |
 | ---- | ---------- | -------------------------------------------------- |
 | name | string     | The name of the new group.                         |
 | pos  | PageColumn | The position of the group within the submenu page. |

- Return:

 | Type      | Description                                                           |
 | --------- | --------------------------------------------------------------------- |
 | MenuGroup | Returns a MenuGroup object if creation was successful, nil otherwise. |

- Methods:
  - `MenuSubPage:new_group(name, pos)`

---

## MenuGroup:is_collapsed
`Returns whether the group is collapsed.`
- Return:

 | Type    | Description                             |
 | ------- | --------------------------------------- |
 | boolean | Returns true if the group is collapsed. |

- Methods:
  - `MenuGroup:is_collapsed()`

---

## MenuGroup:is_collapsible
`Returns whether the group is collapsible.`
- Return:

 | Type    | Description                                 |
 | ------- | ------------------------------------------- |
 | boolean | Returns true if the group can be collapsed. |

- Methods:
  - `MenuGroup:is_collapsible()`

---

## MenuGroup:is_visible
`Returns whether the group is visible (being rendered).`
- Return:

 | Type    | Description                           |
 | ------- | ------------------------------------- |
 | boolean | Returns true if the group is visible. |

- Methods:
  - `MenuGroup:is_visible()`

---

## MenuGroup:set_collapsed
`Sets the group's collapsed state.`
- Parameters:

 | Name  | Type    | Description                                                       |
 | ----- | ------- | ----------------------------------------------------------------- |
 | state | boolean | The state to set, true to collapse the group, false to expand it. |


- Methods:
  - `MenuGroup:set_collapsed(state)`

---

## MenuGroup:set_collapsible
`Sets whether the group can be collapsed.`
- Parameters:

 | Name  | Type    | Description                                                            |
 | ----- | ------- | ---------------------------------------------------------------------- |
 | state | boolean | The state to set, true if the group can be collapsed, false otherwise. |


- Methods:
  - `MenuGroup:set_collapsible(state)`

---

## MenuGroup:set_visible
`Sets the visibility of the group.`
- Parameters:

 | Name  | Type    | Description                                                            |
 | ----- | ------- | ---------------------------------------------------------------------- |
 | state | boolean | The visibility state to set, true to show the group, false to hide it. |


- Methods:
  - `MenuGroup:set_visible(state)`

---

## MenuGroup:new_checkbox
`Creates a new checkbox within this group.`
- Parameters:

 | Name | Type    | Description                                                            |
 | ---- | ------- | ---------------------------------------------------------------------- |
 | name | string  | The name of the checkbox.                                              |
 | init | boolean | The initial state of the checkbox. Defaults to false if not specified. |

- Return:

 | Type       | Description                                           |
 | ---------- | ----------------------------------------------------- |
 | MenuWidget | Returns a checkbox widget if creation was successful. |

- Methods:
  - `MenuGroup:new_checkbox(name, init)`

---

## MenuGroup:new_slider
`Creates a new slider within this group.`
- Parameters:

 | Name  | Type    | Description                                                                      |
 | ----- | ------- | -------------------------------------------------------------------------------- |
 | name  | string  | The name of the slider.                                                          |
 | min   | integer | The minimum value of the slider.                                                 |
 | max   | integer | The maximum value of the slider.                                                 |
 | init  | integer | The initial value of the slider. Defaults to the minimum value if not specified. |
 | scale | integer | The step size of the slider. Defaults to 1 if not specified.                     |

- Return:

 | Type       | Description                                         |
 | ---------- | --------------------------------------------------- |
 | MenuWidget | Returns a slider widget if creation was successful. |

- Methods:
  - `MenuGroup:new_slider(name, min, max, init, scale)`

---

## MenuGroup:new_combo
`This combo box allows for selection from a list of strings provided.`
- Parameters:

 | Name | Type   | Description                                     |
 | ---- | ------ | ----------------------------------------------- |
 | name | string | The name of the combo box.                      |
 | ...  | string | The list of options available in the combo box. |

- Return:

 | Type       | Description                                            |
 | ---------- | ------------------------------------------------------ |
 | MenuWidget | Returns a combo box widget if creation was successful. |

- Methods:
  - `MenuGroup:new_combo(name, ...)`

---

## MenuGroup:new_text
`The text content is fixed and defined upon creation.`
- Parameters:

 | Name | Type   | Description                                       |
 | ---- | ------ | ------------------------------------------------- |
 | text | string | The static text content to display in the widget. |

- Return:

 | Type       | Description                                       |
 | ---------- | ------------------------------------------------- |
 | MenuWidget | Returns a text widget if creation was successful. |

- Methods:
  - `MenuGroup:new_text(text)`

---

## MenuGroup:new_text
`The text content can change dynamically based on a Lua function.`
- Parameters:

 | Name     | Type     | Description                                        |
 | -------- | -------- | -------------------------------------------------- |
 | callback | function | A Lua function that returns the string to display. |

- Return:

 | Type       | Description                                       |
 | ---------- | ------------------------------------------------- |
 | MenuWidget | Returns a text widget if creation was successful. |

- Methods:
  - `MenuGroup:new_text(callback)`

---

## MenuGroup:new_button
`If no callback is provided, the button performs no action on click.`
- Parameters:

 | Name     | Type      | Description                                                        |
 | -------- | --------- | ------------------------------------------------------------------ |
 | name     | string    | The name of the button.                                            |
 | callback | function? | An optional Lua function that executes when the button is clicked. |

- Return:

 | Type       | Description                                                        |
 | ---------- | ------------------------------------------------------------------ |
 | MenuWidget | Returns a button widget if creation was successful, nil if failed. |

- Methods:
  - `MenuGroup:new_button(name, callback)`

---

## MenuGroup:new_table_list
`This allows for real-time updates and interactions based on the table's data.`
- Parameters:

 | Name      | Type   | Description                                                                                                                                     |
 | --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
 | name      | string | The name of the new list widget.                                                                                                                |
 | ref_table | table  | The reference table containing elements that populate the list initially. Any changes to this table will dynamically update the list's content. |

- Return:

 | Type     | Description                                                                 |
 | -------- | --------------------------------------------------------------------------- |
 | MenuList | Returns the new list as a MenuList object, which can be further configured. |

- Methods:
  - `MenuGroup:new_table_list(name, ref_table)`

---

## MenuGroup:new_list
`This function initializes a list where items can be dynamically added or removed after its creation.`
- Parameters:

 | Name | Type   | Description                              |
 | ---- | ------ | ---------------------------------------- |
 | name | string | The name of the new dynamic list widget. |

- Return:

 | Type     | Description                                                                         |
 | -------- | ----------------------------------------------------------------------------------- |
 | MenuList | Returns the new dynamic list as a MenuList object, which can be further configured. |

- Methods:
  - `MenuGroup:new_list(name)`

---

## MenuGroup:new_input
`The input field can include an initial value and a hint that appears when the field is empty.`
- Parameters:

 | Name | Type    | Description                                                          |
 | ---- | ------- | -------------------------------------------------------------------- |
 | name | string  | The name of the input field.                                         |
 | hint | string? | Optional hint text that appears in the input field when it is empty. |
 | init | string? | Initial text to populate the input field with.                       |

- Return:

 | Type       | Description                                               |
 | ---------- | --------------------------------------------------------- |
 | MenuWidget | Returns an input field widget if creation was successful. |

- Methods:
  - `MenuGroup:new_input(name, hint, init)`

---

## MenuGroup:new_separator
`This function adds a simple line to visually distinguish between sections of the UI.`
- Return:

 | Type       | Description                                            |
 | ---------- | ------------------------------------------------------ |
 | MenuWidget | Returns a separator widget if creation was successful. |

- Methods:
  - `MenuGroup:new_separator()`

---

## MenuGroup:new_hotkey
`Creates a hotkey widget within this group.`
- Parameters:

 | Name        | Type     | Description                                          |
 | ----------- | -------- | ---------------------------------------------------- |
 | name        | string   | The name of the hotkey widget.                       |
 | default_key | integer? | The default key code to be set in the hotkey widget. |

- Return:

 | Type       | Description                                         |
 | ---------- | --------------------------------------------------- |
 | MenuWidget | Returns a hotkey widget if creation was successful. |

- Methods:
  - `MenuGroup:new_hotkey(name, default_key)`

---

## MenuGroup:new_hasher
`This widget allows users to input text and automatically generates a hash of the input.`
- Parameters:

 | Name | Type    | Description                                                                    |
 | ---- | ------- | ------------------------------------------------------------------------------ |
 | name | string  | The name of the hasher widget.                                                 |
 | hint | string? | An optional hint text that appears in the hasher input field when it is empty. |

- Return:

 | Type       | Description                                         |
 | ---------- | --------------------------------------------------- |
 | MenuWidget | Returns a hasher widget if creation was successful. |

- Methods:
  - `MenuGroup:new_hasher(name, hint)`

---

## MenuGroup:set_visibility_callback
`If an invalid value or type is returned by the callback, or if an error occurs in the callback, visibility defaults to false.`
- Parameters:

 | Name     | Type     | Description                                                 |
 | -------- | -------- | ----------------------------------------------------------- |
 | callback | function | A Lua function that determines the visibility of the group. |

- Return:

 | Type      | Description                      |
 | --------- | -------------------------------- |
 | MenuGroup | Returns the group object itself. |

- Methods:
  - `MenuGroup:set_visibility_callback(callback)`

---

## MenuGroup:get_min
`Retrieves the minimum drawing position of the specified groupbox region.`

- Methods:
  - `MenuGroup:get_min(rect)`

---

## MenuGroup:get_max
`Retrieves the maximum drawing position of the specified groupbox region.`

- Methods:
  - `MenuGroup:get_max(rect)`

---

## MenuGroup:get_arrow_pos
`Retrieves the position of the arrow in the groupbox.`

- Methods:
  - `MenuGroup:get_arrow_pos()`

---

## MenuWidget:get
`Retrieves the current value of a widget.`
- Return:

 | Type | Description                              |
 | ---- | ---------------------------------------- |
 | any  | Returns the current value of the widget. |

- Methods:
  - `MenuWidget:get()`

---

## MenuWidget:set
`Sets a new value to a widget.`
- Parameters:

 | Name  | Type | Description                     |
 | ----- | ---- | ------------------------------- |
 | value | any  | The value to set to the widget. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set(value)`

---

## MenuWidget:get_parent
`Returns the parent of the widget.`
- Return:

 | Type      | Description                             |
 | --------- | --------------------------------------- |
 | MenuGroup | Returns the parent group of the widget. |

- Methods:
  - `MenuWidget:get_parent()`

---

## MenuWidget:get_type
`Retrieves the type name of the widget.`
- Return:

 | Type   | Description                          |
 | ------ | ------------------------------------ |
 | string | Returns the type name of the widget. |

- Methods:
  - `MenuWidget:get_type()`

---

## MenuWidget:is_enabled
`Checks if the widget is enabled.`
- Return:

 | Type    | Description                                             |
 | ------- | ------------------------------------------------------- |
 | boolean | Returns true if the widget is enabled, false otherwise. |

- Methods:
  - `MenuWidget:is_enabled()`

---

## MenuWidget:set_enabled
`Sets the enabled state of the widget.`
- Parameters:

 | Name  | Type    | Description               |
 | ----- | ------- | ------------------------- |
 | value | boolean | The enabled state to set. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_enabled(value)`

---

## MenuWidget:is_visible
`Checks if the widget is visible.`
- Return:

 | Type    | Description                                             |
 | ------- | ------------------------------------------------------- |
 | boolean | Returns true if the widget is visible, false otherwise. |

- Methods:
  - `MenuWidget:is_visible()`

---

## MenuWidget:set_visible
`Sets the visibility of the widget.`
- Parameters:

 | Name  | Type    | Description                  |
 | ----- | ------- | ---------------------------- |
 | value | boolean | The visibility state to set. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_visible(value)`

---

## MenuWidget:set_color_picker
`Attaches a color picker to the widget that modifies the referenced color.`
- Parameters:

 | Name  | Type  | Description                                                         |
 | ----- | ----- | ------------------------------------------------------------------- |
 | color | Color | The color object whose values will be modified by the color picker. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_color_picker(color)`

---

## MenuWidget:set_hint
`Attaches a hint text to the widget.`
- Parameters:

 | Name | Type   | Description               |
 | ---- | ------ | ------------------------- |
 | text | string | The hint text to display. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_hint(text)`

---

## MenuWidget:set_visibility_callback
`end)`
- Parameters:

 | Name     | Type      | Description                                                                                         |
 | -------- | --------- | --------------------------------------------------------------------------------------------------- |
 | callback | function? | The function to determine visibility. Returns bool (true to draw the widget, false to not draw it). |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_visibility_callback(callback)`

---

## MenuWidget:set_enabled_callback
`end)`
- Parameters:

 | Name     | Type      | Description                                                                                       |
 | -------- | --------- | ------------------------------------------------------------------------------------------------- |
 | callback | function? | The function to determine if the widget is enabled. Returns bool (true if enabled, false if not). |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_enabled_callback(callback)`

---

## MenuWidget:set_label_callback
`end)`
- Parameters:

 | Name     | Type      | Description                                              |
 | -------- | --------- | -------------------------------------------------------- |
 | callback | function? | The function to generate the label text. Returns string. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_label_callback(callback)`

---

## MenuWidget:set_hovered_callback
`end)`
- Parameters:

 | Name     | Type      | Description                                                                               |
 | -------- | --------- | ----------------------------------------------------------------------------------------- |
 | callback | function? | The callback to be invoked. Takes coordinates x and y as parameters (number x, number y). |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_hovered_callback(callback)`

---

## MenuWidget:set_data_callback
`end)`
- Parameters:

 | Name     | Type      | Description                                                                                 |
 | -------- | --------- | ------------------------------------------------------------------------------------------- |
 | callback | function? | The function to manage widget data. It should return a pointer to the data (returns void*). |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_data_callback(callback)`

---

## MenuWidget:set_on_changed_callback
`end)`
- Parameters:

 | Name     | Type      | Description                                                                               |
 | -------- | --------- | ----------------------------------------------------------------------------------------- |
 | callback | function? | The function to execute upon data change. Sends the new data value as the first argument. |

- Return:

 | Type       | Description                                    |
 | ---------- | ---------------------------------------------- |
 | MenuWidget | Returns the widget itself for method chaining. |

- Methods:
  - `MenuWidget:set_on_changed_callback(callback)`

---

## MenuWidget:get_uuid
`Example result: 609258681`

- Methods:
  - `MenuWidget:get_uuid()`

---

## MenuWidget:get_label
`Example result: 'Godmode'`

- Methods:
  - `MenuWidget:get_label()`

---

## MenuWidget:get_deep_label
`Example result: 'Self > MAIN > Modifiers > Godmode'`

- Methods:
  - `MenuWidget:get_deep_label()`

---

## MenuWidget:get_min
`Retrieves the minimum drawing position of the widget.`

- Methods:
  - `MenuWidget:get_min()`

---

## MenuWidget:get_max
`Retrieves the maximum drawing position of the widget.`

- Methods:
  - `MenuWidget:get_max()`

---

## MenuList:set_getter_callback
`Sets a getter callback for the list, which defines how each list item is represented as a text label.`
- Parameters:

 | Name     | Type      | Description                                                           |
 | -------- | --------- | --------------------------------------------------------------------- |
 | callback | fun(item: | number):string The function to generate the label text for each item. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_getter_callback(callback)`

---

## MenuList:set_counter_callback
`Sets a counter callback for the list, which defines the number of items in the list.`
- Parameters:

 | Name     | Type         | Description                                                  |
 | -------- | ------------ | ------------------------------------------------------------ |
 | callback | fun():number | The function to count the total number of items in the list. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_counter_callback(callback)`

---

## MenuList:set_click_callback
`Sets a click callback for the list, which defines the action taken when an item is clicked.`
- Parameters:

 | Name     | Type      | Description                                              |
 | -------- | --------- | -------------------------------------------------------- |
 | callback | fun(item: | number) The function to execute when an item is clicked. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_click_callback(callback)`

---

## MenuList:set_selected_callback
`Sets a selected callback for the list, which checks if the specified item is selected.`
- Parameters:

 | Name     | Type      | Description                                                    |
 | -------- | --------- | -------------------------------------------------------------- |
 | callback | fun(item: | number):bool The function to determine if an item is selected. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_selected_callback(callback)`

---

## MenuList:set_hovered_callback
`Sets a hovered callback for the list, which defines the action taken when an item is hovered over.`
- Parameters:

 | Name     | Type      | Description                                                                                          |
 | -------- | --------- | ---------------------------------------------------------------------------------------------------- |
 | callback | fun(item: | number, caption: string, x: number, y: number) The function to execute when an item is hovered over. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_hovered_callback(callback)`

---

## MenuList:set_sizes
`Sets the dimensions of the list.`
- Parameters:

 | Name   | Type   | Description             |
 | ------ | ------ | ----------------------- |
 | width  | number | The width of the list.  |
 | height | number | The height of the list. |


- Methods:
  - `MenuList:set_sizes(width, height)`

---

## MenuList:set_use_search_bar
`Enables or disables the use of a search bar within the list.`
- Parameters:

 | Name | Type | Description                  |
 | ---- | ---- | ---------------------------- |
 | use  | bool | Whether to use a search bar. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_use_search_bar(use)`

---

## MenuList:set_search_bar_text
`Sets the placeholder text for the search bar in the list, if one is used.`
- Parameters:

 | Name | Type   | Description                              |
 | ---- | ------ | ---------------------------------------- |
 | text | string | The placeholder text for the search bar. |

- Return:

 | Type     | Description                                  |
 | -------- | -------------------------------------------- |
 | MenuList | Returns the list itself for method chaining. |

- Methods:
  - `MenuList:set_search_bar_text(text)`

---

## MenuList:is_item_selected
`Checks if a specific item is selected in the list.`
- Parameters:

 | Name | Type   | Description                     |
 | ---- | ------ | ------------------------------- |
 | item | number | The index of the item to check. |

- Return:

 | Type    | Description                                            |
 | ------- | ------------------------------------------------------ |
 | boolean | Returns true if the item is selected, false otherwise. |

- Methods:
  - `MenuList:is_item_selected(item)`

---

## MenuList:get_selected_items
`Retrieves the indices of all selected items in the list.`
- Return:

 | Type  | Description                                                   |
 | ----- | ------------------------------------------------------------- |
 | table | Returns a table containing the indices of all selected items. |

- Methods:
  - `MenuList:get_selected_items()`

---

## MenuList:get_selected_items_lines
`This function constructs a table containing the text for each selected item in the list. If no items are selected or an error occurs, it returns an empty table.`
- Return:

 | Type  | Description                                                                                                                 |
 | ----- | --------------------------------------------------------------------------------------------------------------------------- |
 | table | Returns a table with the texts of the selected items. Each entry in the table corresponds to the text of one selected item. |

- Methods:
  - `MenuList:get_selected_items_lines()`

---

## MenuList:get_item_text
`This function gets the text of the item at the specified index. If the item does not exist or an error occurs, it returns an empty string.`
- Parameters:

 | Name | Type   | Description                                            |
 | ---- | ------ | ------------------------------------------------------ |
 | item | number | The index of the item from which to retrieve the text. |

- Return:

 | Type   | Description                                                                                |
 | ------ | ------------------------------------------------------------------------------------------ |
 | string | Returns the text of the specified item. If the item is not found, returns an empty string. |

- Methods:
  - `MenuList:get_item_text(item)`

---

