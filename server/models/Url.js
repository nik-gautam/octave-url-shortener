import { Schema, model } from "mongoose";

const urlSchema = new Schema({
  count: {
    type: Number,
    default: 0
  },
  urlCode: {
    type: String
  },
  shortUrl: {
    type: String,
    required: true
  },
  longUrl: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: new Date().toString()
  }
});

export default model("Url", urlSchema);
