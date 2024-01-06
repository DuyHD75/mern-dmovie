import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          user: {
               type: Schema.Types.ObjectId
          }
          displayName: {
               type: String,
               require: true
          },
     })
)
