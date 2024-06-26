---
slug: /gta/lua/HTTP
title: HTTP
---

## http.create_request
`Creates a new HTTP request.`

- Parameters:

 | Name     | Type              | Description                           |
 | -------- | ----------------- | ------------------------------------- |
 | method   | HttpMethod_t     | Method type (GET, POST, etc.)         |
 | url      | string            | The URL to which the request will be sent. |

- Return:

 | Type         | Description                                                                                         |
 | ------------ | --------------------------------------------------------------------------------------------------- |
 | HttpHandle_t | The handle to the newly created HTTP request.                                                       |

- Methods:
  - `http.create_request(method, url)`

---

## http.send
`Sends a HTTP request.`

- Parameters:

 | Name         | Type              | Description                                |
 | ------------ | ----------------- | ------------------------------------------ |
 | handle       | HttpHandle_t      | The handle to the HTTP request.            |
 | on_response  | function          | The callback function to handle the response. |

- Return:

 | Type     | Description                                                                                  |
 | -------- | -------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the request was successfully sent.                                           |

- Methods:
  - `http.send(handle, on_response)`

---

## http.release
`Releases a HTTP request.`

- Parameters:

 | Name       | Type              | Description                                        |
 | ---------- | ----------------- | -------------------------------------------------- |
 | request    | HttpHandle_t      | The handle to the HTTP request to be released.    |

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the request was successfully released.                                      |

- Methods:
  - `http.release(request)`

---

## http.is_busy
`Checks if the HTTP request is currently being processed.`

- Parameters:

 | Name       | Type              | Description                                         |
 | ---------- | ----------------- | --------------------------------------------------- |
 | request    | HttpHandle_t      | The handle to the HTTP request.                     |

- Return:

 | Type     | Description                                                                                    |
 | -------- | ---------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the request is currently busy (being sent); otherwise, returns false.           |

- Methods:
  - `http.is_busy(request)`

---

## http.set_context
`Sets a context value for the HTTP request.`

- Parameters:

 | Name       | Type              | Description                                         |
 | ---------- | ----------------- | --------------------------------------------------- |
 | request    | HttpHandle_t      | The handle to the HTTP request.                     |
 | value      | number            | The context value to set.                           |

- Return:

 | Type     | Description                                                                                   |
 | -------- | --------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the context value was successfully set.                                      |

- Methods:
  - `http.set_context(request, value)`

---

## http.set_header
`Sets a header value for the HTTP request.`

- Parameters:

 | Name       | Type              | Description                                         |
 | ---------- | ----------------- | --------------------------------------------------- |
 | request    | HttpHandle_t      | The handle to the HTTP request.                     |
 | name       | string            | The name of the header.                             |
 | value      | string            | The value of the header.                            |

- Return:

 | Type     | Description                                                                                   |
 | -------- | ---------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the header was successfully set.                                               |

- Methods:
  - `http.set_header(request, name, value)`

---

## http.set_body
`Sets the body of an HTTP request.`

- Parameters:

 | Name       | Type              | Description                                         |
 | ---------- | ----------------- | --------------------------------------------------- |
 | request    | HttpHandle_t      | The handle to the HTTP request.                     |
 | body       | string            | The data to be sent as the body of the request.     |

- Return:

 | Type     | Description                                                                                   |
 | -------- | ---------------------------------------------------------------------------------------------- |
 | boolean  | Returns true if the body was successfully set, otherwise returns false.                         |

- Methods:
  - `http.set_body(request, body)`

---

## http.get
`Performs an asynchronous HTTP GET request.`

- Parameters:

 | Name          | Type              | Description                                         |
 | ------------- | ----------------- | --------------------------------------------------- |
 | url           | string            | The URL to request.                                 |
 | on_response   | function          | The callback function to handle the response.       |

- Methods:
  - `http.get(url, on_response)`

---

## http.post
`Performs an asynchronous HTTP POST request.`

- Parameters:

 | Name          | Type              | Description                                         |
 | ------------- | ----------------- | --------------------------------------------------- |
 | url           | string            | The URL to send data to.                            |
 | body          | string            | The data to be sent in the body of the POST request.|
 | on_response   | function          | The callback function to handle the response.       |

- Methods:
  - `http.post(url, body, on_response)`

---

## http.head
`Performs an asynchronous HTTP HEAD request.`

- Parameters:

 | Name          | Type              | Description                                         |
 | ------------- | ----------------- | --------------------------------------------------- |
 | url           | string            | The URL to request.                                 |
 | on_response   | function          | The callback function to handle the response.       |

- Methods:
  - `http.head(url, on_response)`
