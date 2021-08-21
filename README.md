## API-FETCH

Um simples package feito com intuito ajudar iniciantes a dar fetch em apis que retornam json.


## Usage:

```javascript
const { get } = require('api-fetch');

(async () => {
const data = await get('https://nekos.life/api/v2/img/neko');
console.log(data) // {"url":"https://cdn.nekos.life/neko/neko230.jpg"}
}) ()
```
