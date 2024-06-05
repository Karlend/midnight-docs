---
slug: /gta/lua/UDP
title: UDP
---

## UDPSocket:open
`Opens a UDP socket on the specified port. If no port is specified, the socket is bound to a random port.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | port | number? | Optional port number to bind the socket. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | True if the socket was successfully opened, false otherwise. |

- Methods:

`UDPSocket:open(port)`

---

## UDPSocket:close
`Closes the UDP socket.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | True if the socket was successfully closed, false otherwise. |

- Methods:

`UDPSocket:close()`

---

## UDPSocket:is_opened
`Checks if the UDP socket is currently open and available.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | True if the socket is open, false otherwise. |

- Methods:

`UDPSocket:is_opened()`

---

## UDPSocket:get_port
`Retrieves the port number to which the socket is bound.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | Port number of the socket. |

- Methods:

`UDPSocket:get_port()`

---

## UDPSocket:get_ip
`Retrieves the IP address associated with the socket.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | IP address of the socket. |

- Methods:

`UDPSocket:get_ip()`

---

## UDPSocket:get_addr
`Retrieves the complete address (IP and port) of the socket.`
- Return:

 | Type | Description |
 | --- | --- |
 | string | Address of the socket in the format "ip:port". |

- Methods:

`UDPSocket:get_addr()`

---

## UDPSocket:send
`Sends data to the specified address.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | address | string | The destination address in the format "ip:port". |
 | data | string | The data to send. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | True if the data was sent successfully, false otherwise. |

- Methods:

`UDPSocket:send(address, data)`

---

## UDPSocket:recv
`Receives data from the socket. This is a blocking call unless the socket is non-blocking.`
- Return:

 | Type | Description |
 | --- | --- |
 | table | Data received, returned as an array of bytes. |

- Methods:

`UDPSocket:recv()`

---

## UDPSocket:has_incoming
`Checks if there is incoming data on the socket.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | True if there is incoming data, false otherwise. |

- Methods:

`UDPSocket:has_incoming()`

---

## UDPSocket:get_incoming_size
`Gets the size of the incoming data available on the socket.`
- Return:

 | Type | Description |
 | --- | --- |
 | number | Size of the available data in bytes. |

- Methods:

`UDPSocket:get_incoming_size()`

---

## udp_client
`Creates a new UDP socket. This function can be called with or without specifying a port number.`

- Methods:

`udp_client(port)`

---

