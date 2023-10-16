import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('dist'));
let relativePath = './dist';
let absolutePath = path.resolve(relativePath);
app.get('*', (req, res) => {
    res.sendFile(`${absolutePath}/index.html`);
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
