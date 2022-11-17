---
slug: /gta/lua/thread
title: thread
---

# thread

```ebnf
Threads are used to run code in script ticks
```

## Functions

## `thread.create`

### Parameters

| Name     | Type     | Description       |
| -------- | -------- | ----------------- |
| callback | function | Callback function |

### Methods:

* `thread.create(callback)`

## `wait`
#### `Can be called only inside thread.create callback`
### Parameters

| Name     | Type     | Description       |
| -------- | -------- | ----------------- |
| ms | int | Time to wait |

### Methods:

* `wait(ms)`

## Examples

### Simple thread with wait function

```lua
thread.create(function()
	local veh = player.get_vehicle_handle(player.index())
	ENTITY.SET_ENTITY_COLLISION(veh, false, true)
	wait(1000)
	if ENTITY.IS_AN_ENTITY(veh) then
		ENTITY.SET_ENTITY_COLLISION(veh, true, true)
	end
end)
```

### Loop example

```lua
local page = menu.add_page("My page", 5)
local my_block = menu.add_mono_block(page, "My block", 0)
menu.add_checkbox(my_block, "Restore health", function(self)
	thread.create(function()
		while self:get() do
			local id = player.id()
			local max_hp = ENTITY.GET_ENTITY_MAX_HEALTH(id)
			ENTITY.SET_ENTITY_HEALTH(id, max_hp, 0)
			wait(100)
		end
	end)
end)
```