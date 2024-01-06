import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          user: {
               type: Schema.Types.ObjectId
               ref: "User", 
               re
          }
          displayName: {
               type: String,
               require: true
          },
     })
)
