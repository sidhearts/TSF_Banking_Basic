const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Siddharth", email: "siddharth@gmail.com", Balance: 500, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 8945632145, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ."
    }, {
        username: "xyz singh", email: "xyz.sing@gmail.com", Balance: 600, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 7894123541, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    }, {
        username: "ars sharma", email: "ars@gmail.com", Balance: 700, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 5534648313, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "abc stf", email: "abc@gmail.com", Balance: 100, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 5445111222, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam."
    },
    {
        username: "sample name", email: "sample@gmail.com", Balance: 200, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 7845121311, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "user name", email: "user@gmail.com", Balance: 5000, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 7454112222, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "test name", email: "test@gmail.com", Balance: 5090, avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", contact: 1122336655, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam."
    }]);
};

v();