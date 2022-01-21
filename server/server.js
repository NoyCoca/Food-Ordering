const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080
const express = require('express');
const cors = require('cors');
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


app.listen(PORT, ()=> console.log(`Server stared on port ${PORT}`))
