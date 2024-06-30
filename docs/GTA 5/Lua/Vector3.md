---
slug: /gta/lua/Vector3
title: Vector3
---

## Vector3:normalize
`If the vector has zero length, an error is thrown.`

- Methods:
  - `Vector3:normalize()`

---

## Vector3:dot
`Calculates the dot product of this vector with another vector.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | other | Vector3 | The other vector to calculate the dot product with. | 

 - Return:

 | Type   | Description |
 | --- | ---- |
 | number | The dot product of the two vectors.|

- Methods:
  - `Vector3:dot(other)`

---

## Vector3:cross
`Calculates the cross product of this vector with another vector.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | other | Vector3 | The other vector to calculate the cross product with. | 

 - Return:

 | Type   | Description |
 | --- | ---- |
 | Vector3 | A new vector that is the cross product of the two vectors. |

- Methods:
  - `Vector3:cross(other)`

---

## Vector3:get_negated
`Returns a new vector that is the negation of this vector.`

 - Return:

 | Type   | Description |
 | --- | ---- |
 | Vector3 | A new vector where each component is the negation of the corresponding component of this vector. |

- Methods:
  - `Vector3:get_negated()`

---

## Vector3:get_normalized
`Returns a normalized copy of this vector.`

 - Return:

 | Type   | Description |
 | --- | ---- |
 | Vector3 | A new vector that is the normalized version of this vector.|

- Methods:
  - `Vector3:get_normalized()`

---

## Vector3:is_equal_tol
`Checks if this vector is approximately equal to another vector, within a specified tolerance.`


- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
| other | Vector3 | The vector to compare with. |
| tolerance | number | The tolerance within which the vectors are considered equal. |

 - Return:

 | Type   | Description |
 | --- | ---- |
 | boolean | Returns true if the vectors are approximately equal within the given tolerance, otherwise false. |

- Methods:
  - `Vector3:is_equal_tol(other, tolerance)`

---

## Vector3:is_zero
`Determines if the vector is a zero vector.`

 - Return:

 | Type   | Description |
 | --- | ---- |
 | boolean | Returns true if all components of the vector are zero, otherwise false. |

- Methods:
  - `Vector3:is_zero()`

---

## Vector3:length
`Calculates the length (magnitude) of the vector.`

 - Return:

 | Type   | Description |
 | --- | ---- |
| number | The length of the vector. |

- Methods:
  - `Vector3:length()`

---

## Vector3:length_2d
`Calculates the 2D length (magnitude) of the vector ignoring the z component.`

 - Return:

 | Type   | Description |
 | --- | ---- |
 | number | The 2D length of the vector. |

- Methods:
  - `Vector3:length_2d()`

---

## Vector3:length_2d_sqr
`Calculates the squared 2D length of the vector, ignoring the z component.`
`Useful for comparisons where the exact length is not necessary.`

 - Return:

 | Type   | Description |
 | --- | ---- |
 | number | The squared 2D length of the vector. |

- Methods:
  - `Vector3:length_2d_sqr()`

---

## Vector3:length_sqr
`Calculates the squared length of the vector.`
`Useful for comparisons where the exact length is not necessary.`

 - Return:

 | Type   | Description |
 | --- | ---- |
 | number | The squared length of the vector.|

- Methods:
  - `Vector3:length_sqr()`

---

## Vector3:mul
`Multiplies each component of the vector by a scalar.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
| scalar | number | The scalar to multiply with. |

- Methods:
  - `Vector3:mul(scalar)`

---

## Vector3:negate
`Negates each component of the vector.`

- Methods:
  - `Vector3:negate()`

---

## Vector3:random
`Assigns random values to each component of the vector within the specified range.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
| min | number | The minimum value (inclusive) - defaults to -1.0. |
| max | number | The maximum value (inclusive) - defaults to 1.0. |

- Methods:
  - `Vector3:random(min, max)`

---

## Vector3:set
`--- Sets the vector's components to those of another vector.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
| vector | Vector3 | The vector from which to copy the components. |

- Methods:
  - `Vector3:set(vector)`

---

## Vector3:set_unpacked
`Sets the components of the vector to the provided values.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
| x_val | number | The new x value. |
| y_val | number | The new y value. |
| z_val | number | The new z value. |

- Methods:
  - `Vector3:set_unpacked(x_val, y_val, z_val)`

---

## Vector3:sub
`Subtracts another vector from this vector.`
- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | vector | Vector3 | The vector to subtract. |

- Methods:
  - `Vector3:sub(vector)`

---

## Vector3:unpack
`Unpacks the vector's components and returns them as individual values.`
 - Return:

 | Type   | Description |
 | --- | ---- |
 | number, number, number | The x, y, and z components of the vector. |

- Methods:
  - `Vector3:unpack()`

---

## Vector3:within_aabox
`Checks if the vector is within an axis-aligned bounding box defined by two points.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | boxStart | Vector3 | The starting point of the bounding box. |
 | boxEnd | Vector3 | The ending point of the bounding box. |

 - Return:

 | Type   | Description |
 | --- | ---- |
 | boolean | Returns true if the vector is within the bounding box, otherwise false. |

- Methods:
  - `Vector3:within_aabox(boxStart, boxEnd)`

---

## Vector3:zero
`Sets all components of the vector to zero.`

- Methods:
  - `Vector3:zero()`

---

## Vector3:distance
`Calculates the distance to another vector.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | other | Vector3 | The other vector. | 

 - Return:

 | Type   | Description |
 | --- | ---- |
 | number | The squared distance to the other vector. |

- Methods:
  - `Vector3:distance(other)`

---

## Vector3:dist_to_sqr
`Calculates the squared distance to another vector.`

- Parameters:

 | Name | Type | Description |
 | ---  | ---  | ---         |
 | other | Vector3 | The other vector. | 

 - Return:

 | Type   | Description |
 | --- | ---- |
 | number | The squared distance to the other vector. |

- Methods:
  - `Vector3:dist_to_sqr(other)`

---

