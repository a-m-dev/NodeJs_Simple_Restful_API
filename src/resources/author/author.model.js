import mongoose from "mongoose";

const authorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

authorSchema.index(
  {
    name: 1,
    email: 1
  },
  { unique: true }
);

module.exports = {
  model: mongoose.model("Author", authorSchema),
  propGeneral: ["name", "email"]
};
