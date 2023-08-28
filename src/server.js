let express=require ('express'); 

let path= require('path'); 

let app= express() 

app.use(express.static(path.join(__dirname, 'dist', 'index.html')));


app.get('*', (req, res) => { 

res.sendFile(path.join(__dirname, 'dist', 'index.html'));

})

const PORT = process.env.PORT || 9001
console.log('server started on port:',PORT);
app.listen(PORT);