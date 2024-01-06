import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          user: {
               
          }
          displayName: {
               type: String,
               require: true
          },
     })
)
