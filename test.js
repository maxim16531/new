const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) => {
    response.send('Hello from Express!')
})
app.get('/abc', function(req, res) {
    res.sendFile('views/index.html', {root: __dirname })
});

app.get('/test', (request, response) => {
    response.send('<table id="myTable" border=2px> <tr> <td>1</td><td>2</td> </tr><tr> <td>3</td> <td> 4</td </tr></table>')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
		
    }
    console.log(`server is listening on ${port}`)
})