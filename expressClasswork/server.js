const express = require('express');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/user.routes.js')

app.use(express.static(__dirname+'/dist'))

function Middleware(req, res, next){
    console.log('middleware');
    next();
}
app.use(Middleware);

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/dist/index.html')
})

app.get('/app', (req, res) => {
    res.sendFile('D:/Schoolwork-master/Week4AboutPage/src/index.html')
})

app.get('/*', (req, res) => {
    res.redirect('back')
})

app.listen(PORT);