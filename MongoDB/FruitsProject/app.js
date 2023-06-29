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
  name: {
    type: String,
    required: [true, "Please check your data entry: name not specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

//creating model
const Fruit = mongoose.model("Fruit", fruitSchema);

// ***********  CREATING DATA  ************************************
//
const fruit = new Fruit({
  name: "Peach",
  rating: 6,
  review: "Good but are betters.",
});

/*const orange = new Fruit({
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

//storing data*/
//fruit.save();

// **************   FIND DATA  ************************************************

Fruit.insertMany([kiwi, orange, banana])
  .then(function () {
    console.log("Succesfully saved all the fruits to fruitsDB");
  })
  .catch(function (err) {
    console.log(err);
  });

// **************   FIND DATA  ************************************************

Fruit.find({})
  .then(function (fruits) {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

// ********************* UPDATE ***********************************************************************

/*Fruit.updateOne({_id: "649dbae63170761a293863b3" }, {name: "Grapes"})
  .then(function () {
    console.log('Updated')
  })
  .catch(function (err) {
    console.log(err);
  });*/

// ********************* DELETE ***********************************************************************
/*Fruit.deleteOne({ _id: "649dbaa7631e377bf5c9ddd4" })
  .then(function () {
    console.log("Deleted");
  })
  .catch(function (err) {
    console.log(err);
  });

Fruit.deleteMany({ name: "Apple" })
  .then(function () {
    console.log("All records were deleted");
  })
  .catch(function (err) {
    console.log(err);
  });*/

// ********************* EXERCISE PEOPLE  ***********************************************************************
//
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
