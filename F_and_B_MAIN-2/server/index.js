import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import productRoutes from './routes/products.js';
import userRouter from "./routes/user.js";
import dealRoutes from './routes/deals.js';
import dealNotifications from './routes/notifications.js';
import tradeRoutes from './routes/trade.js';
import transactionRoutes from './routes/transaction.js';
import orderRoutes from './routes/orders.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/products', productRoutes);
app.use("/user", userRouter);
app.use('/deals', dealRoutes);
app.use('/tradeSubmission', tradeRoutes);
app.use('/notifications', dealNotifications);
app.use('/transaction', transactionRoutes);
app.use('/orders', orderRoutes);

const CONNECTION_URL = 'mongodb+srv://admin:s12345678@cluster0.huxfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);