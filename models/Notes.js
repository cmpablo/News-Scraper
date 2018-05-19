var mongoose = require("mongoose");

// save a reference to the schema constructor
var Schema = mongoose.Schema;

// create a new NoteSchema object
// this is similar to a Sequelize model
var NoteSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// this creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// export the Note model
module.exports = Note;