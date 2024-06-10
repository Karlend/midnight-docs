---
slug: /gta/lua/Native
title: Native
---

## enum NativeReturnType
```lua
NativeReturnType = {
    NONE = 0,
    BOOL = 1,
    INT = 2,
    FLOAT = 3,
    STRING = 4,
    VECTOR3 = 5
}
```

## native.invoke
`Invokes a game native function using its hash.`
`This function is a wrapper for calling in-game script functions.`

- Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| return_type  | NativeReturnType | The title of the popup.   |
| id   | integer | The content of the popup. |

- Return

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| any  | The result of the native function call. The type of the result depends on the `return_type`. |

- Methods:
  - `native.invoke(return_type, id, ...)`

---

## native.is_invoker_ready
`Checks if the native function invoker is ready for calling script functions.`

- Return

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| boolean  | True if native functions can be called via the invoker, false otherwise. |


- Methods:
  - `native.is_invoker_ready()`

---

## native.get_native_name
`Retrieves the simple name of a native function based on its hash.`
`This function returns only the function name without namespace or any additional qualifiers.`
- Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| hash | integer | The hash identifier of the native function. |

- Return

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| string  | The simple name of the native function if found, empty string otherwise. |

- Methods:
  - `native.get_native_name(hash)`

---

## native.get_native_name_full
`Retrieves the full name of a native function based on its hash.`
`This function returns the fully qualified name including any namespaces and additional qualifiers.`

- Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| hash | integer | The hash identifier of the native function. |

- Return

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| string | The full name of the native function if found, empty string otherwise. |

- Methods:
  - `native.get_native_name_full(hash)`

---

## native.get_native_namespace
`print(namespace) -- Output: PLAYER`

- Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| hash | integer | The hash identifier of the native function. |

- Return

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| string | The namespace of the native function if found, empty string otherwise. |

- Methods:
  - `native.get_native_namespace(hash)`

---

