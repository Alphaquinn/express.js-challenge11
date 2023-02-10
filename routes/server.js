const express= require('express');
const htmlRoutes = require('.routes/htmlRoutes');
const apiRoutes = require('.routes/apiRoutes');
const PORT = process.env.PORT || 3010;
const app = express();





app.use('/',htmlRoutes);
app.use('/api',apiRoutes);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.listen(PORT,()=>console.log("listening to port 3010 "));