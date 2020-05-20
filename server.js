const express = require('express');
const app = express();
const port = 5025;
app.use(cors());
app.use(json());

app.get('/truthy', (req, res) => {
    res.send({
        status: false
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});