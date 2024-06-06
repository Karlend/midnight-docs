---
slug: /gta/lua/Tunables
title: Tunables
---

## tunables.ready
`Returns true if there are tunables available, false otherwise.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if tunables are available; otherwise, returns false. |

- Methods:
  - `tunables.ready()`

---

## tunables.get_int
`Allows specifying a request key, which can be either a tunable name or a tunable hash, and an optional default value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |
 | default | integer? | Optional default value to return if the tunable is not found. |

- Return:

 | Type | Description |
 | --- | --- |
 | integer | Returns the integer value of the tunable if found; otherwise, returns the default value or 0 if no default is provided. |

- Methods:
  - `tunables.get_int(request, default)`

---

## tunables.get_float
`Allows specifying a request key, which can be either a tunable name or a tunable hash, and an optional default value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |
 | default | number? | Optional default value to return if the tunable is not found. |

- Return:

 | Type | Description |
 | --- | --- |
 | number | Returns the float value of the tunable if found; otherwise, returns the default value or 0.0 if no default is provided. |

- Methods:
  - `tunables.get_float(request, default)`

---

## tunables.get_bool
`Allows specifying a request key, which can be either a tunable name or a tunable hash, and an optional default value.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |
 | default | boolean? | Optional default value to return if the tunable is not found. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns the boolean value of the tunable if found (true if non-zero); otherwise, returns the default value or false if no default is provided. |

- Methods:
  - `tunables.get_bool(request, default)`

---

## tunables.set_int
`Allows specifying a request key, which can be either a tunable name or a tunable hash, and the value to set.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |
 | value | integer | The integer value to set for the tunable. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the value was successfully set; otherwise, returns false. |

- Methods:
  - `tunables.set_int(request, value)`

---

## tunables.set_float
`Allows specifying a request key, which can be either a tunable name or a tunable hash, and the value to set.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |
 | value | number | The float value to set for the tunable. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the value was successfully set; otherwise, returns false. |

- Methods:
  - `tunables.set_float(request, value)`

---

## tunables.set_bool
`Allows specifying a request key, which can be either a tunable name or a tunable hash, and the value to set.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |
 | value | boolean | The boolean value to set for the tunable. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the value was successfully set; otherwise, returns false. |

- Methods:
  - `tunables.set_bool(request, value)`

---

## tunables.get_all
`Each entry in the table maps a hash key to its corresponding offset.`
- Return:

 | Type | Description |
 | --- | --- |
 | table | Returns a table where each key is a hash and the value is the corresponding offset. |

- Methods:
  - `tunables.get_all()`

---

## tunable
`If the specified key does not match any tunable, returns nil.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | request | string|number | The request key, which can be either a tunable name or a tunable hash. |

- Return:

 | Type | Description |
 | --- | --- |
 | ScrVar|nil | Returns a ScrVar object representing the tunable if found; otherwise, returns nil. |

- Methods:
  - `tunable(request)`

---

