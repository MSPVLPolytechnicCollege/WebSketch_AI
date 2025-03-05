const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());


const login = mongoose.Schema({
    email: { type: String },
    username: { type: String , },
    password: { type: String }
});

const recents = mongoose.Schema({
    userid: { type: String },
    recents: { type: String }
});


const userHistory = mongoose.model('userHistory', recents);
const loginDetails = mongoose.model('loginDetails', login);

function dbConnect() {
    try {
        mongoose.connect('mongodb+srv://baskar:Baskar0227@cluster1.iqr9c.mongodb.net/<your-database-name>?retryWrites=true&w=majority');
        console.log("Database connected successfully");
    } catch (err) {
        console.log("ErrorMessage", err.message);
    }
}

dbConnect();

var userId="";

app.post('/pushData', async (req, res) => {
    try {
        const data = req.body;
        const userData = new loginDetails({
            email: data.email,
            username: data.username,
            password: data.password
        });
        const result = await userData.save();
        userId=result._id;
        console.log("Data inserted");
    } catch (err) {
        console.log("Data not inserted:", err.message);
    }
});

app.post('/recents', async (req, res) => {
    try {
        const data = req.body;
        const historyData = new userHistory({
            userid:userId,
            recents: data.recents
        });
        await historyData.save();
        console.log("Recent Data inserted");
    } catch (err) {
        console.log("Recent Data not inserted:", err.message);
    }
});

app.get('/fetchData', async (req, res) => {
    try {
        const matchData = await loginDetails.find();
        matchData.forEach(item => {
                userId=item._id; 
        });
        console.log("Data Fetched");
        res.json(matchData); 
    } catch (err) {
        console.log("Data not Fetched:", err.message);
    }
});

app.get('/admin', async (req, res) => {
    try {
        const admin = await loginDetails.find();
        res.json(admin);
    } catch (err) {
        console.log("Data not Fetched:", err.message);
    }
});



app.listen(5500, () => {
    console.log("Server connected on port 5500");
});
