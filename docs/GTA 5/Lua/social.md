---
slug: /gta/lua/Social
title: Social
---

## social.is_player_online
`- `result`: The session token.`

- Methods:

`social.is_player_online(rockstar_id_or_name, on_response)`

---

## social.is_ready
`@return boolean Returns true if the social system is ready, enabling further interaction with 'account' and 'geoloc' modules.`

- Methods:

`social.is_ready()`

---

## geoloc.get_region_code
`@return integer The region code if available, otherwise 0.`

- Methods:

`geoloc.get_region_code()`

---

## geoloc.get_longitude
`@return number The longitude if available, otherwise 0.0.`

- Methods:

`geoloc.get_longitude()`

---

## geoloc.get_latitude
`@return number The latitude if available, otherwise 0.0.`

- Methods:

`geoloc.get_latitude()`

---

## geoloc.get_is_secure
`@return boolean Returns true if secure relays are being used, false otherwise.`

- Methods:

`geoloc.get_is_secure()`

---

## geoloc.get_country_code
`@return string The country code if available, otherwise an empty string.`

- Methods:

`geoloc.get_country_code()`

---

## account.get_age
`@return integer The age if available, otherwise 0.`

- Methods:

`account.get_age()`

---

## account.get_avatar_url
`@return string The URL to the avatar image if available, otherwise an empty string.`

- Methods:

`account.get_avatar_url()`

---

## account.get_country_code
`@return string The country code if available, otherwise an empty string.`

- Methods:

`account.get_country_code()`

---

## account.get_dob
`@return string The DOB if available, otherwise an empty string.`

- Methods:

`account.get_dob()`

---

## account.get_is_approx_dob
`@return boolean Returns true if the DOB is approximate, false otherwise.`

- Methods:

`account.get_is_approx_dob()`

---

## account.get_language_code
`@return string The language code if available, otherwise an empty string.`

- Methods:

`account.get_language_code()`

---

## account.get_phone
`@return string The phone number if available, otherwise an empty string.`

- Methods:

`account.get_phone()`

---

## account.get_rockstar_id
`@return integer The Rockstar ID if available, otherwise 0.`

- Methods:

`account.get_rockstar_id()`

---

## account.get_zip_code
`@return string The ZIP code if available, otherwise an empty string.`

- Methods:

`account.get_zip_code()`

---

## account.get_nickname
`@return string The nickname if available, otherwise an empty string.`

- Methods:

`account.get_nickname()`

---

