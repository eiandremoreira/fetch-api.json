## fetch-api.json

Um simples módulo feito com intuito ajudar iniciantes a fazer requisições em APIs e sites, sem complicações.

Requer Node.js v14 ou uma vers

---

## Instalação:

```shell
npm install api-fetch
yarn add api-fetch
pnpm add api-fetch
```

---

### Exemplo:

```javascript
const { get } = require('api-fetch');
get('https://nekos.life/api/v2/img/neko').then(data => console.log(data)) // {"url":"https://cdn.nekos.life/neko/neko230.jpg"}
```

---

#### Avançado:

- Requisição em um site que retorna um texto ou obter o HTML de algum site.
```javascript
const { get } = require('api-fetch');
get('https://pastebin.com/raw/iNau6zJZ', 'text').then(data => console.log(data)) // PasteBin API Check
```

- Requisição em um site que retorna uma imagem
```javascript
const { get } = require('api-fetch');
get('https://cdn.nekos.life/neko/neko230.jpg', 'buffer').then(data => console.log(data)) // < Buffer abcdef >
```


- Requisição em um site que retorna JSON porém requer requisições POST
```javascript
const { get } = require('api-fetch');
get('https://example.org/', 'json', 'POST').then(data => console.log(data)) // PasteBin API Check
```
