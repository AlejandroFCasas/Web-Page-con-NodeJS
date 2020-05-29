/*const express = require('express');
const app = express();
const path = require ('path')


app.set ('port', 5000);
app.set('views', path.join(__dirname,'views'));
app.engine ('html',require('ejs').renderFile);//a todos los html renderizarlos en ejs
app.set ('view engine', 'ejs');


//routes
app.use (require('./routes'));
//app.use (require('./routes/index'));
//static files
app.use(express.static(path.join(__dirname,'public'))); 



//listening the server
app.listen(app.get('port'), () => {
    console.log('server:', app.get ('port'));
});
*/
const express = require('express');
const app = express();

app.use(express.json());



app.get('/', (req,res) => {
    res.send('Welcome to Daily Code Buffer in Heroku Auto Deployment!!');
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));