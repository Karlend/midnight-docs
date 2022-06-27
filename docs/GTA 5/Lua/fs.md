---
slug: /gta/lua/fs
title: File system
---

# fs

```ebnf
File system to work with files
```

## Functions

## `fs.file_load_bin`

`Load binary file.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name         | Type    | Description                                      |
| ------------ | ------- | ------------------------------------------------ |
| memory\_file | pointer | A pointer to the file memory. nullptr otherwise. |

### Methods:

* `fs.file_load_bin(name)`

## `fs.file_load_txt`

`Get text from file.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name    | Type   | Description   |
| ------- | ------ | ------------- |
| content | string | File Contents |

### Methods:

* `fs.file_load_txt(name)`

## `fs.file_write`

`Clear file and write content to it.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |
| text | string | Content     |

### Return value:

| Name    | Type | Description                                  |
| ------- | ---- | -------------------------------------------- |
| success | bool | true if the entry succeeds, false otherwise. |

### Methods:

* `fs.file_write(name, text)`

## `fs.file_append`

`Write text to a file without deleting existing data.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |
| text | string | Content     |

### Return value:

| Name    | Type | Description                                  |
| ------- | ---- | -------------------------------------------- |
| success | bool | true if the entry succeeds, false otherwise. |

### Methods:

* `fs.file_append(name, text)`

## `fs.file_free`

`Free loaded binary file from memory.`

### Parameters:

| Name | Type     | Description                                     |
| ---- | -------- | ----------------------------------------------- |
| ptr  | userdata | Pointer to the memory of the loaded binary file |

### Return value:

| Name    | Type | Description                                                       |
| ------- | ---- | ----------------------------------------------------------------- |
| success | bool | true if the binary file is released from memory, false otherwise. |

### Methods:

* `fs.file_free(ptr)`

## `fs.exists`

`Check if file or folder exists.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name    | Type | Description                                            |
| ------- | ---- | ------------------------------------------------------ |
| success | bool | true if the file or directory exists, false otherwise. |

### Methods:

* `fs.exists(name)`

## `fs.file_exists`

`Check if file exists.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name    | Type | Description                               |
| ------- | ---- | ----------------------------------------- |
| success | bool | true if the file exists, false otherwise. |

### Methods:

* `fs.file_exists(name)`

## `fs.directory_exists`

`Check if folder exists.`

### Parameters:

| Name | Type   | Description    |
| ---- | ------ | -------------- |
| name | string | Directory name |

### Return value:

| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| success | bool | true if the directory exists, false otherwise. |

### Methods:

* `fs.directory_exists(name)`

## `fs.create_dir`

`Create folder.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Folder name |

### Return value:

| Name    | Type | Description                                                      |
| ------- | ---- | ---------------------------------------------------------------- |
| success | bool | true if the directory was successfully created, false otherwise. |

### Methods:

* `fs.create_dir(name)`

## `fs.is_file`

`Check if object is file.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name    | Type | Description                                    |
| ------- | ---- | ---------------------------------------------- |
| success | bool | true if the object is a file, false otherwise. |

### Methods:

* `fs.is_file(name)`

## `fs.is_dir`

`Check if object is folder.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Folder name |

### Return value:

| Name    | Type | Description                                      |
| ------- | ---- | ------------------------------------------------ |
| success | bool | true if the object is a folder, false otherwise. |

### Methods:

* `fs.is_dir(name)`

## `fs.delete`

`Deleting file or folder.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name    | Type | Description                                                           |
| ------- | ---- | --------------------------------------------------------------------- |
| success | bool | true if the file or folder was successfully deleted, false otherwise. |

### Methods:

* `fs.delete(name)`

## `fs.get_dir_appdata`

`Get path to %appdata%\local.`

### Return value:

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| path | string | The absolute path to the appdata folder. |

### Methods:

* `fs.get_dir_appdata()`

## `fs.get_dir_product`

`Get absolute path to loader.`

### Return value:

| Name | Type   | Description                                  |
| ---- | ------ | -------------------------------------------- |
| path | string | The absolute path to the folder with loader. |

### Methods:

* `fs.get_dir_product()`

## `fs.get_dir_log`

`Get the absolute path to folder with logs.`

### Return value:

| Name | Type   | Description                                |
| ---- | ------ | ------------------------------------------ |
| path | string | The absolute path to the folder with logs. |

### Methods:

* `fs.get_dir_log()`

## `fs.get_dir_script`

`Get the absolute path to the folder where the scripts are stored.`

### Return value:

| Name | Type   | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| path | string | The absolute path to the folder with the scripts. |

### Methods:

* `fs.get_dir_script()`

## `fs.get_dir_windows`

`Get the absolute path to the folder where the operating system is stored.`

### Return value:

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| path | string | The absolute path to the Windows folder. |

### Methods:

* `fs.get_dir_windows()`

## `fs.get_dir_game`

`Get the absolute path to the folder where GTA5.exe is located.`

### Return value:

| Name | Type   | Description                                    |
| ---- | ------ | ---------------------------------------------- |
| path | string | The absolute path to the folder with the game. |

### Methods:

* `fs.get_dir_game()`

## `fs.get_size`

`Get the size of a file or folder in bytes.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | File name   |

### Return value:

| Name | Type  | Description                     |
| ---- | ----- | ------------------------------- |
| size | bites | Size of file or folder in bytes |

### Methods:

* `fs.get_size(name)`

## `fs.get_files`

`Get a list of files in the specified folder.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Folder name |

### Return value:

| Name | Type  | Description    |
| ---- | ----- | -------------- |
| list | table | List of files. |

### Methods:

* `fs.get_files(name)`

## `fs.get_directories`

`Get a list of folders in the specified folder.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Folder name |

### Return value:

| Name | Type  | Description      |
| ---- | ----- | ---------------- |
| list | table | List of folders. |

### Methods:

* `fs.get_directories(name)`

## `fs.get_all`

`Get a list of folders and files in the specified folder.`

### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Folder name |

### Return value:

| Name | Type  | Description                            |
| ---- | ----- | -------------------------------------- |
| list | table | List of folders and files in a folder. |

### Methods:

* `fs.get_all(name)`
