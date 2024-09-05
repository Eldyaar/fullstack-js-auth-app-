const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const createError = require('./utils/appError');

const app = express();

// 1) MIDDLEWARES
app.use(cors());
app.use(express.json());


// 2) ROUTE
app.use('/api/auth', authRouter);

app.get('/error-test', (req, res, next) => {
   next(new createError('Test error!', 500));
});

// 3) MONGO DB CONNECTION
mongoose.set('strictQuery', false);

mongoose
   .connect('mongodb+srv://thedolbekov2:KPZvdOzG2xDn6Po3@cluster0.lgdqj.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0')
   .then(() => console.log('Connected to MongoDB!'))
   .catch((error) => console.log('Failed to connect to MongoDB: ', error));

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
   err.statusCode = err.statusCode || 500;
   err.status = err.status || "error";

   res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
   });
});


// 5) SERVER
const PORT = 3000;
app.listen(PORT, () => {
   console.log(`App running on ${PORT}`);
});