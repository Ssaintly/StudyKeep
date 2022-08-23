import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/notes.js';

const app = express();



app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());

app.use('/notes ', postRoutes); 


const CONNECTION_URL = 'mongodb+srv://Orihime:1149981@cluster0.tvlj8.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server running succesfully')) )
    .catch(()=> console.log(error.message));

// mongoose.set('useFindAndModify', false);