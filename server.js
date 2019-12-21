const express = require('express')

const app = express();

app.use(express.json());

const db = config.get('mongoURI');

mongooose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/profile', require('./Routes/api/profile'));
app.use('api/workouts', require('./Routes/api/workouts'))

const port = process.env.PORT || 4444;

app.listen(port, () => console.log(`server running on port ${port}`));