# Handler Slash Commands hecho por ! Cooky.#2312

## Discord Slash Handler para usar la mayor facilidad al crear los eventos y comandos.
---
## ¿Necesitas ayuda? Unete al soporte de discord [Soporte Link](https://discord.gg/dfZaHBwptB)

---
### Nota: Node.js 16.6.0 es la version requerida.
---

## Instalacion

```sh
npm install
```

---
### asegúrese de comprobar la guia: [Slash Commands Guia](https://discordjs.guide/interactions/slash-commands.html#registering-slash-commands)
---
### Debe cambiar el nombre del archivo example_config.json a `config.json` y llena la información que te proporciono aqui abajo.

- config.json
```js
{
    "token": "YOUR_BOT_TOKEN",
    "serverID": "YOUR_SERVER_ID",
    "botID": "YOUR_BOT_ID",
    "log_channel_id": "Channel-id",
    "prefix": "YOUR_PREFIX",
    "autoRoleId": "ROLE ID",
    "ownersID": ["Id_1", "id_2"]
}
```
- Nota: No se requiere la variable prefix en `config.json`, solo lo necesita si desea crear comandos con prefix.

### Si necesita crear más comandos, simplemente cree un nuevo archivo en el archivo de comandos con el siguiente ejemplo en otros comandos.

### Si necesita crear comandos para el prefix, cree un archivo en el archivo de comandos.
