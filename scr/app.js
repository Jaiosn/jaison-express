const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const JOBS = require('./jobs');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', `${__dirname}/pages`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.get('/',(req,res) =>{
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
    res.render('index', { jobs: JOBS});

})

app.get('/jobs/:id', (req, res) => {
    const id = req.params.id;
    const matchedJob = JOBS.find(job => job.id.toString() === id);
    res.render('job', { job: matchedJob});
})

app,post('/job/:id/appy', (req, res) => {
    res.send("Got applicat")
})
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('server running https://localhost:$(port)');
});
