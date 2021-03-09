const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/garage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB is connected !!");
  }
);

const charactersSchema = new mongoose.Schema({
  marque: String,
  modèle: String,
  année: Number,
  create: Date,
});

const characterModel = mongoose.model("cars", charactersSchema);

characterModel.deleteMany({}).then(() => {
  characterModel.create([
    { marque: "Renault", modèle: "Espace", année: 1999, create: new Date()},
    { marque: "Renault", modèle: "Scenic", année: 2004, create:  new Date()},
    { marque: "Peugeot", modèle: "308", année: 2017, create: new Date()},
  ]);
});

// characterModel.findById(mongoose.Types.ObjectId("604636a89c9fce33d83ee696")).then((response) => console.log(response));

// characterModel.updateMany(
//     {
//         modèle: "Espace"
//     },{
//         année: 2000,
//     }
   
// ).then((response) => {
//     console.log(response);
// })
// characterModel.deleteMany({
 
//         marque: "Renault"
//     }
// ).then(response => {
//     console.log(response);
// })

// characterModel.insertMany([ 
//     {marque:"Aston Martin", modèle:"DB9", année: 2010},
//     {marque:"Range Rover", modèle: "Discovery Sport", année: 2017}])  
    
    // characterModel.find({
    //     année: {
    //         $gt: 2005
    //     }
    // }).then((response) => console.log(response)); 
    
    // characterModel.find({ modèle: /o/
    // } ).then((response) => console.log(response)); 