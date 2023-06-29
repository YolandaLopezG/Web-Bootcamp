const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

//Mogoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/fruitsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`CONNECTED TO MONGO!`);
  })
  .catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
  });

//creating fruit schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

//creating model
const Fruit = mongoose.model("Fruit", fruitSchema);

//creating documents (data)
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

const orange = new Fruit({
  name: "Orange",
  rating: 7,
  review: "Bad memories.",
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 5,
  review: "Too expensive.",
});

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Good flavor.",
});

/*Fruit.insertMany([kiwi, orange, banana])
  .then(function () {
    console.log("Succesfully saved all the fruits to fruitsDB");
  })
  .catch(function (err) {
    console.log(err);
  });

//storing data
fruit.save();*/

 Fruit.find({})
  .then(function (fruits) {
    console.log(fruits);
  })
  .catch(function (err) {
    console.log(err);
  });


// ********************************************************************************************
// EXERCISE
/*//Creating Person schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//creating person model
const Person = mongoose.model("Person", personSchema);

//insert data
const person = new Person({
  name: "John",
  age: 37,
});

person.save();*/

// ********************************************************************************************
