const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const db = require('./DB');
const userRouter = require('./routers/userRouter');
const foodTypeRouter = require('./routers/foodTypeRouter')

db.on('error', () => {
    console.log('Connection error');
}); 

app.use('/api/user', userRouter)
app.use('/api/food', foodTypeRouter)

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log(`Server stared on port ${PORT}`))
