import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          displayName: {
               type: String,
               require: true
          },
     })
)
