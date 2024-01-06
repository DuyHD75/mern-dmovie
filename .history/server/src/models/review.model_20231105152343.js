import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          user: {
               type: Schema.Types.ObjectId
               ref: "User"
          }
          displayName: {
               type: String,
               require: true
          },
     })
)
