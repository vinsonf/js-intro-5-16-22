// simple server

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', function(req, res) {
    res.send(`
        <h1>Hello World</h1>
        input a question: <input type="text" id="question">
        <button id="submit">Submit</button>
        <script> 
            const submit = document.getElementById('submit');
            submit.addEventListener('click', function(){
                const question = document.getElementById('question').value;
                fetch('/question', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({question})
                }).then(function(res){
                    return res.json();
                }).then(res => {
                    console.log(res);
                })
            });
        </script>
    `);
    console.log('someone is visiting the homepage');
});

app.post('/question', (req, res) => {
    console.log('question', req.body);
    res.json({answer: 'thanks for the question'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})