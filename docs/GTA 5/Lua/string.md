---
slug: /gta/lua/String
title: String
---

## string.joaat
`@return Returns the Joaat hash as an unsigned integer. Returns 0 if the input string is null or empty.`

- Methods:
  - `string.joaat(str)`

---

## string.sjoaat
`@return Returns the signed Joaat hash as an integer. Returns 0 if the input string is null or empty.`

- Methods:
  - `string.sjoaat(str)`

---

## string.smart_joaat
`print("Smart Joaat Hash:", smart_hash)  -- Output will be the number 6703 (hex 0x1A3F converted to decimal)`

- Methods:
  - `string.smart_joaat(str)`

---

## string.smart_sjoaat
`processed (e.g., only whitespace).`

- Methods:
  - `string.smart_sjoaat(str)`

---

## string.trim
`print(trimmed)  -- Output: "Hello world!"`

- Methods:
  - `string.trim(str)`

---

## string.split
`-- Part 4: four`

- Methods:
  - `string.split(str, delim)`

---

## string.capitalize
`print(capitalized)  -- Output: "Hello World, Welcome To Lua Scripting!"`

- Methods:
  - `string.capitalize(str)`

---

## string.contains
`print(contains_lua)  -- Output: false (case-sensitive)`

- Methods:
  - `string.contains(str, substr)`

---

## string.startswith
`print(is_log)  -- Output: false`

- Methods:
  - `string.startswith(str, prefix)`

---

## string.endswith
`print(is_docx)  -- Output: false`

- Methods:
  - `string.endswith(str, suffix)`

---

## string.replace
`print(updated_text)  -- Output: "Hello world, Hi Lua"`

- Methods:
  - `string.replace(str, from, to)`

---

## string.levenshtein_distance
`print("Levenshtein Distance: ", distance)  -- Output: "Levenshtein Distance: 3"`

- Methods:
  - `string.levenshtein_distance(s1, s2)`

---

## string.generate_random_string
`print("Generated ID: ", random_id)  -- Output: "Generated ID: 3Df9jn2Rk1"`

- Methods:
  - `string.generate_random_string(length)`

---

## string.base64_encode
`print("Base64 Encoded: ", encoded)  -- Output: "Base64 Encoded: SGVsbG8gV29ybGQh"`

- Methods:
  - `string.base64_encode(in)`

---

## string.base64_decode
`print("Decoded String: ", decoded)  -- Output: "Decoded String: Hello World!"`

- Methods:
  - `string.base64_decode(in)`

---

## string.base64_validate
`@return Returns true if the string is a valid Base64 encoded string, false otherwise.`

- Methods:
  - `string.base64_validate(data)`

---

## string.soundex
`print(soundex_code)  -- Output: "R163"`

- Methods:
  - `string.soundex(s)`

---

## string.randomize_string
`print(shuffled)  -- Output might be "bcdaef"`

- Methods:
  - `string.randomize_string(str)`

---

## string.normalize_text
`print(normalized_text)  -- Output: "helloworld123"`

- Methods:
  - `string.normalize_text(text)`

---

## string.extract_command_and_arguments
`print("Arg" .. i .. ":", arg)  -- Outputs: "Arg1: arg1", "Arg2: arg2", "Arg3: arg3"`

- Methods:
  - `string.extract_command_and_arguments(input)`

---

## string.censor_words
`print(censored)  -- Output: "hello ****, this is an ******* sentence"`

- Methods:
  - `string.censor_words(text, bannedWords)`

---

## string.auto_complete_command
`print("Suggestion" .. i .. ":", cmd)  -- Outputs: "Suggestion1: start", "Suggestion2: status"`

- Methods:
  - `string.auto_complete_command(partial, commands)`

---

## string.utf8_to_utf16
`print(utf16_string) -- Display the UTF-16 encoded string`

- Methods:
  - `string.utf8_to_utf16(utf8)`

---

## string.utf16_to_utf8
`print(utf8_string) -- Display the UTF-8 encoded string`

- Methods:
  - `string.utf16_to_utf8(utf16)`

---

## string.utf8_to_utf32
`print(utf32_string)  -- Display the UTF-32 encoded string`

- Methods:
  - `string.utf8_to_utf32(utf8)`

---

## string.utf32_to_utf8
`print(utf8_string)  -- Display the UTF-8 encoded string`

- Methods:
  - `string.utf32_to_utf8(utf32)`

---

## string.locale_to_utf8
`print(utf8_string)  -- Output in UTF-8 format`

- Methods:
  - `string.locale_to_utf8(local_string)`

---

## string.utf8_to_locale
`print(local_string)  -- Output in system's local encoding`

- Methods:
  - `string.utf8_to_locale(utf8)`

---

## string.format_number_locale
`print("Formatted Number:", formatted_number)  -- Output will depend on the system's locale`

- Methods:
  - `string.format_number_locale(number)`

---

## string.format_datetime_locale
`print("Formatted Date and Time:", formatted_datetime)  -- Output will depend on the system's locale`

- Methods:
  - `string.format_datetime_locale(time)`

---

## string.to_upper_locale
`print("Uppercased String:", uppercased)  -- Output: "HELLO WORLD!" or other locale-specific form`

- Methods:
  - `string.to_upper_locale(input)`

---

## string.to_lower_locale
`print("Lowercased String:", lowercased)  -- Output: "hello world!" or other locale-specific form`

- Methods:
  - `string.to_lower_locale(input)`

---

## string.uchar
`print(combined)  -- Output: 😃❤`

- Methods:
  - `string.uchar(codepoint)`

---

## string.caesar_encrypt
`print(encrypted)  -- Output: "Khoor, Zruog!"`

- Methods:
  - `string.caesar_encrypt(str, shift)`

---

## string.caesar_decrypt
`print(decrypted)  -- Output: "Hello, World!"`

- Methods:
  - `string.caesar_decrypt(str, shift)`

---

