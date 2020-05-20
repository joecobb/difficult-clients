const express = require('express');
const cors = require('cors');
const app = express();
const port = 5025;
app.use(cors());
app.use(express.json());

app.get('/truthy', (req, res) => {
    res.send({
        status: true
    });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});