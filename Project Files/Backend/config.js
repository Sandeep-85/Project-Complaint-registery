const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://siddarthaporal:Siddu2425poral@cluster0.lrn7ndl.mongodb.net/details?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch(err => {
  console.error("Connection error:", err);
});
