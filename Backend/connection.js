const mongoose = require('mongoose');
const uri = "mongodb+srv://khansaleem705413:Y7Rfesnfv8yux7Gp@cluster0.tdcuy7l.mongodb.net/minipro?retryWrites=true&w=majority"

mongoose.connect(uri)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error('err');
});
module.exports=mongoose;
