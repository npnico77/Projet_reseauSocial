const mongoose = require('mongoose');

mongoose
.set('strictQuery', true)
.connect(
    'mongodb+srv://'+ process.env.DB_USER_PASS +'@cluster0.3vihhxb.mongodb.net/projet_reseausocial'   
)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));


