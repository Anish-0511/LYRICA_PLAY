const mongoose = require("mongoose");

//  Connect using Render Environment Variable
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Database cannot be Connected");
    console.log(err);
});

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Collection
const collection = mongoose.model("users", Loginschema);

module.exports = collection;
