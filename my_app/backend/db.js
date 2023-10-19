const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://Anuj232002:anujay@cluster0.retkwr5.mongodb.net/?retryWrites=true&w=majority";
const mongoURI =
  "mongodb://Anuj232002:anujay@ac-he7tdlv-shard-00-00.retkwr5.mongodb.net:27017,ac-he7tdlv-shard-00-01.retkwr5.mongodb.net:27017,ac-he7tdlv-shard-00-02.retkwr5.mongodb.net:27017/seafood?ssl=true&replicaSet=atlas-j616pk-shard-0&authSource=admin&retryWrites=true&w=majority";
//   // mongoose.set("strictQuery",true)
  const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, resu) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
        const fectched =  await mongoose.connection.db.collection("restrarant");
        fectched.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          else {
            global.restrarant=data;
            
            console.log()
          }
        });
      }
    }
  );
};
module.exports = mongoDB();
