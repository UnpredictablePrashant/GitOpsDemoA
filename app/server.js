const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (_, res) => res.send(`Hello GitOps! Commit: ${process.env.COMMIT_SHA || 'local'}`));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
