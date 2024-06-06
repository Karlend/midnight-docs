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
`@return number The dot product of the two vectors.`

- Methods:
  - `Vector3:dot(other)`

---

## Vector3:cross
`@return Vector3 A new vector that is the cross product of the two vectors.`

- Methods:
  - `Vector3:cross(other)`

---

## Vector3:get_negated
`@return Vector3 A new vector where each component is the negation of the corresponding component of this vector.`

- Methods:
  - `Vector3:get_negated()`

---

## Vector3:get_normalized
`@return Vector3 A new vector that is the normalized version of this vector.`

- Methods:
  - `Vector3:get_normalized()`

---

## Vector3:is_equal_tol
`@return boolean Returns true if the vectors are approximately equal within the given tolerance, otherwise false.`

- Methods:
  - `Vector3:is_equal_tol(other, tolerance)`

---

## Vector3:is_zero
`@return boolean Returns true if all components of the vector are zero, otherwise false.`

- Methods:
  - `Vector3:is_zero()`

---

## Vector3:length
`@return number The length of the vector.`

- Methods:
  - `Vector3:length()`

---

## Vector3:length_2d
`@return number The 2D length of the vector.`

- Methods:
  - `Vector3:length_2d()`

---

## Vector3:length_2d_sqr
`@return number The squared 2D length of the vector.`

- Methods:
  - `Vector3:length_2d_sqr()`

---

## Vector3:length_sqr
`@return number The squared length of the vector.`

- Methods:
  - `Vector3:length_sqr()`

---

## Vector3:mul
`@param scalar number The scalar to multiply with.`

- Methods:
  - `Vector3:mul(scalar)`

---

## Vector3:negate
`Negates each component of the vector.`

- Methods:
  - `Vector3:negate()`

---

## Vector3:random
`@param max number The maximum value (inclusive) - defaults to 1.0.`

- Methods:
  - `Vector3:random(min, max)`

---

## Vector3:set
`@param vector Vector3 The vector from which to copy the components.`

- Methods:
  - `Vector3:set(vector)`

---

## Vector3:set_unpacked
`@param z_val number The new z value.`

- Methods:
  - `Vector3:set_unpacked(x_val, y_val, z_val)`

---

## Vector3:sub
`@param vector Vector3 The vector to subtract.`

- Methods:
  - `Vector3:sub(vector)`

---

## Vector3:unpack
`@return number, number, number The x, y, and z components of the vector.`

- Methods:
  - `Vector3:unpack()`

---

## Vector3:within_aabox
`@return boolean Returns true if the vector is within the bounding box, otherwise false.`

- Methods:
  - `Vector3:within_aabox(boxStart, boxEnd)`

---

## Vector3:zero
`Sets all components of the vector to zero.`

- Methods:
  - `Vector3:zero()`

---

## Vector3:distance
`@return number The distance between the two vectors.`

- Methods:
  - `Vector3:distance(other)`

---

## Vector3:dist_to_sqr
`@return number The squared distance to the other vector.`

- Methods:
  - `Vector3:dist_to_sqr(other)`

---

