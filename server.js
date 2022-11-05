const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());

connectDB();

app.get("/", (req,res) => res.send("Hello World!"));

app.use(express.json({ extended: false }));

app.use('/api/user', require('./routes/user.route'));
app.use('/api/payment', require('./routes/payment.route'));
app.use('/api/bus', require('./routes/bus.route'));
app.use('/api/qr', require('./routes/qr.route'));
app.use('/api/timetable', require('./routes/timetable.route'));
app.use('/api/report', require('./routes/report.route'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));