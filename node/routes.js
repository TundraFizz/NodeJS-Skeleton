var app = require("../server.js");

// This is the main page users go to when they visit your website
app.get("/", function(req, res){
  var string = "A string from the server.";
  var people = [
    {name: "Adam", age: 10},
    {name: "Bob",  age: 12},
    {name: "Carl", age: 15}
  ];

  res.render("index.ejs", {
    people: people,
    string: string
  });
});

// This is the page known as page2
app.get("/page2", function(req, res){
  var variables = {
    string: "This is a sentence of words, also known as a string",
    array: [0, 1, 2, 3, 4],
    object: {alex: "male", bob: "male", caitlin: "female", danny: "male", emily: "female"}
  };

  res.render("page2.ejs", variables);
});

// If a user goes to any other page
app.use(function (req, res){
  res.render("404.ejs");
});
