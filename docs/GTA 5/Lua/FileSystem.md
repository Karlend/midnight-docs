---
slug: /gta/lua/FileSystem
title: FileSystem
---

## fs.file_load_bin
`Loads a binary file into memory.`

- Parameters:

 | Name | Type   | Description                  |
 | ---- | ------ | ---------------------------- |
 | name | string | The path to the binary file. |

- Return:

 | Type           | Description                                                                           |
 | -------------- | ------------------------------------------------------------------------------------- |
 | userdata\|null | A pointer to the binary data if successful, or `nil` if the file could not be loaded. |

- Methods:
  - `fs.file_load_bin(name)`

---

## fs.file_load_txt
`Loads a text file as a string.`

- Parameters:

 | Name | Type   | Description                |
 | ---- | ------ | -------------------------- |
 | name | string | The path to the text file. |

- Return:

 | Type   | Description                                                                              |
 | ------ | ---------------------------------------------------------------------------------------- |
 | string | The content of the file as a string, or an empty string if the file could not be loaded. |

- Methods:
  - `fs.file_load_txt(name)`

---

## fs.file_free
`Frees the memory allocated for a binary or text file.`

- Parameters:

 | Name | Type             | Description                                            |
 | ---- | ---------------- | ------------------------------------------------------ |
 | data | userdata\|string | The pointer to the binary data that needs to be freed. |

- Return:

 | Type    | Description                                                   |
 | ------- | ------------------------------------------------------------- |
 | boolean | `True` if the data was successfully freed, `False` otherwise. |

- Methods:
  - `fs.file_free(data)`

---

## fs.file_write
`Writes text to a file, overwriting any existing content.`

- Parameters:

 | Name | Type   | Description                    |
 | ---- | ------ | ------------------------------ |
 | name | string | The path to the file.          |
 | text | string | The text to write to the file. |

- Return:

 | Type    | Description                                                      |
 | ------- | ---------------------------------------------------------------- |
 | boolean | `True` if the write operation was successful, `False` otherwise. |

- Methods:
  - `fs.file_write(name, text)`

---

## fs.file_append
`Appends text to the end of a file.`

- Parameters:

 | Name | Type   | Description                     |
 | ---- | ------ | ------------------------------- |
 | name | string | The path to the file.           |
 | text | string | The text to append to the file. |

- Return:

 | Type    | Description                                                       |
 | ------- | ----------------------------------------------------------------- |
 | boolean | `True` if the append operation was successful, `False` otherwise. |

- Methods:
  - `fs.file_append(name, text)`

---

## fs.exists
`Checks if a file or directory exists.`

- Parameters:

 | Name | Type   | Description                        |
 | ---- | ------ | ---------------------------------- |
 | name | string | The path to the file or directory. |

- Return:

 | Type    | Description                                                |
 | ------- | ---------------------------------------------------------- |
 | boolean | `True` if the file or directory exists, `False` otherwise. |

- Methods:
  - `fs.exists(name)`

---

## fs.file_exists
`Checks specifically if a file exists.`

- Parameters:

 | Name | Type   | Description           |
 | ---- | ------ | --------------------- |
 | name | string | The path to the file. |

- Return:

 | Type    | Description                                   |
 | ------- | --------------------------------------------- |
 | boolean | `True` if the file exists, `False` otherwise. |

- Methods:
  - `fs.file_exists(name)`

---

## fs.directory_exists
`Checks specifically if a directory exists.`

- Parameters:

 | Name | Type   | Description                |
 | ---- | ------ | -------------------------- |
 | name | string | The path to the directory. |

- Return:

 | Type    | Description                                        |
 | ------- | -------------------------------------------------- |
 | boolean | `True` if the directory exists, `False` otherwise. |

- Methods:
  - `fs.directory_exists(name)`

---

## fs.create_dir
`Creates a directory at the specified path.`

- Parameters:

 | Name | Type   | Description                                     |
 | ---- | ------ | ----------------------------------------------- |
 | name | string | The path where the directory should be created. |

- Return:

 | Type    | Description                                                          |
 | ------- | -------------------------------------------------------------------- |
 | boolean | `True` if the directory was successfully created, `False` otherwise. |

- Methods:
  - `fs.create_dir(name)`

---

## fs.is_file
`Checks if the specified path is a file.`

- Parameters:

 | Name | Type   | Description        |
 | ---- | ------ | ------------------ |
 | name | string | The path to check. |

- Return:

 | Type    | Description                                      |
 | ------- | ------------------------------------------------ |
 | boolean | `True` if the path is a file, `False` otherwise. |

- Methods:
  - `fs.is_file(name)`

---

## fs.is_dir
`Checks if the specified path is a directory.`

- Parameters:

 | Name | Type   | Description        |
 | ---- | ------ | ------------------ |
 | name | string | The path to check. |

- Return:

 | Type    | Description                                           |
 | ------- | ----------------------------------------------------- |
 | boolean | `True` if the path is a directory, `False` otherwise. |

- Methods:
  - `fs.is_dir(name)`

---

## fs.delete
`Deletes a file or directory at the specified path.`

- Parameters:

 | Name | Type   | Description                                  |
 | ---- | ------ | -------------------------------------------- |
 | name | string | The path to the file or directory to delete. |

- Return:

 | Type    | Description                                                                  |
 | ------- | ---------------------------------------------------------------------------- |
 | boolean | `True` if the file or directory was successfully deleted, `False` otherwise. |

- Methods:
  - `fs.delete(name)`

---

## fs.get_size
`Gets the size of a file or directory.`

- Parameters:

 | Name | Type   | Description                        |
 | ---- | ------ | ---------------------------------- |
 | name | string | The path to the file or directory. |

- Return:

 | Type   | Description                                 |
 | ------ | ------------------------------------------- |
 | number | The size of the file or directory in bytes. |

- Methods:
  - `fs.get_size(name)`

---

## fs.get_appdata_dir
`Returns the directory path for the application data.`

- Return:

 | Type   | Description                                 |
 | ------ | ------------------------------------------- |
 | string | The path to the application data directory. |

- Methods:
  - `fs.get_appdata_dir()`

---

## fs.get_product_dir
`Returns the directory path for the product-specific files.`

- Return:

 | Type   | Description                        |
 | ------ | ---------------------------------- |
 | string | The path to the product directory. |

- Methods:
  - `fs.get_product_dir()`

---

## fs.get_log_dir
`Returns the directory path for product logs.`

