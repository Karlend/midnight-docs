---
slug: /gta/lua/Chat
title: Chat
---

## chat.send
`Sends a message to the chat. If 'target' is specified (not -1), sends the message only to that player.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | text | string | The message text to send. If the string is empty, the function returns false. |
 | is_team | boolean | If true, the message is sent as a team message. |
 | target? | integer | The optional target player ID to send the message to. Default is -1, which means send to all. |

- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the message was successfully sent, false if the text was empty. |

- Methods:

`chat.send(text, is_team, target)`

---

## chat.is_open
`Checks if the chat is currently open.`
- Return:

 | Type | Description |
 | --- | --- |
 | boolean | Returns true if the chat is open, false otherwise. |

- Methods:

`chat.is_open()`

---

## chat.close
`Closes the chat if it is currently open.`

- Methods:

`chat.close()`

---

## chat.open
`Opens the chat interface. This function can open either the team chat or the global chat, based on the provided boolean parameter.`
- Parameters:

 | Name | Type | Description |
 | --- | --- | --- |
 | is_team | boolean? | Specifies whether to open the team chat or the global chat. If not specified, defaults to opening the global chat (false). |


- Methods:

`chat.open(is_team)`

---

