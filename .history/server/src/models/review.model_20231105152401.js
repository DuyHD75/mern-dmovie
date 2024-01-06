import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          user: {
               type: Schema.Types.ObjectId,
               ref: "User", 
               require: true
          }
          displayName: {
               type: String,
               require: true
          },
          co: {
               type: String,
               require: true
          },
     })
)
