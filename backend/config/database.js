const mongoose = require('mongoose');
const connectdb  = async () => {
    try {
        await mongoose.connect('mongodb+srv://marivadasuryacharanchowdary:3FfhT7Qmtyqylygi@usermanagement-instahea.hppg6fg.mongodb.net/appusers?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    console.log("connection successfull");
    } catch (error) {   
        console.log("error");

    }
};
module.exports = connectdb;
