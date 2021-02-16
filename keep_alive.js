const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('❃D✯U✯R✯G✯E✯S✯H❃ ❃I✯S❃ ❃O✯N✯L✯I✯N✯E❃'));

app.listen(port, () => console.log(`❃D✯U✯R✯G✯E✯S✯H❃ ❃I✯S❃ ❃L✯I✯S✯T✯E✯N✯I✯N✯G❃ to http://localhost:${port}`));
