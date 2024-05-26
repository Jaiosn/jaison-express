const express = require('express');
const path = require('path');

const app = express();

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'pages/index.html'));

})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('server running on https://localhost:$(port)');
});