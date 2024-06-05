---
slug: /gta/lua/FileSystem
title: FileSystem
---

## fs.file_load_bin
`@return userdata|null A pointer to the binary data if successful, or nil if the file could not be loaded.`

- Methods:

`fs.file_load_bin(name)`

---

## fs.file_load_txt
`@return string The content of the file as a string, or an empty string if the file could not be loaded.`

- Methods:

`fs.file_load_txt(name)`

---

## fs.file_free
`@return boolean `True` if the data was successfully freed, `False` otherwise.`

- Methods:

`fs.file_free(data)`

---

## fs.file_write
`@return boolean True if the write operation was successful, false otherwise.`

- Methods:

`fs.file_write(name, text)`

---

## fs.file_append
`@return boolean True if the append operation was successful, false otherwise.`

- Methods:

`fs.file_append(name, text)`

---

## fs.exists
`@return boolean True if the file or directory exists, false otherwise.`

- Methods:

`fs.exists(name)`

---

## fs.file_exists
`@return boolean True if the file exists, false otherwise.`

- Methods:

`fs.file_exists(name)`

---

## fs.directory_exists
`@return boolean True if the directory exists, false otherwise.`

- Methods:

`fs.directory_exists(name)`

---

## fs.create_dir
`@return boolean True if the directory was successfully created, false otherwise.`

- Methods:

`fs.create_dir(name)`

---

## fs.is_file
`@return boolean True if the path is a file, false otherwise.`

- Methods:

`fs.is_file(name)`

---

## fs.is_dir
`@return boolean True if the path is a directory, false otherwise.`

- Methods:

`fs.is_dir(name)`

---

## fs.delete
`@return boolean True if the file or directory was successfully deleted, false otherwise.`

- Methods:

`fs.delete(name)`

---

## fs.get_size
`@return number The size of the file or directory in bytes.`

- Methods:

`fs.get_size(name)`

---

## fs.get_appdata_dir
`@return string The path to the application data directory.`

- Methods:

`fs.get_appdata_dir()`

---

## fs.get_product_dir
`@return string The path to the product directory.`

- Methods:

`fs.get_product_dir()`

---

## fs.get_log_dir
`@return string The path to the product log directory.`

- Methods:

`fs.get_log_dir()`

---

## fs.get_script_dir
`@return string The path to the scripts directory.`

- Methods:

`fs.get_script_dir()`

---

## fs.get_windows_dir
`@return string The path to the Windows directory.`

- Methods:

`fs.get_windows_dir()`

---

## fs.get_game_dir
`@return string The path to the game directory.`

- Methods:

`fs.get_game_dir()`

---

## fs.get_outfit_dir
`@return string The path to the outfit directory.`

- Methods:

`fs.get_outfit_dir()`

---

## fs.get_files
`@return table A list of file paths within the specified directory.`

- Methods:

`fs.get_files(folder, recursive)`

---

## fs.get_directories
`@return table A list of directory paths within the specified directory.`

- Methods:

`fs.get_directories(folder, recursive)`

---

## fs.get_all
`@return table A list of file and directory paths within the specified directory.`

- Methods:

`fs.get_all(folder, recursive)`

---

