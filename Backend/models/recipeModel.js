const { Schema, model, Types } = require("../connection");

const mySchema = new Schema({
  title: String,
  type: String,
  category: String,
  description: String,
  ingredients: { type: Array, default: [] },
  user: {type : Types.ObjectId, ref: 'user'},
  createdAt: Date,
});
module.exports = model("recipies", mySchema);
