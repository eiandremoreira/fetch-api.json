## fetch-api.json

Um simples package feito com intuito ajudar iniciantes a dar fetch em apis que retornam json.


## Exemplo:

```javascript
const { get } = require('api-fetch');
get('https://nekos.life/api/v2/img/neko').then(data => console.log(data)) // {"url":"https://cdn.nekos.life/neko/neko230.jpg"}
```
