import mongoose, { Schema } from "mongoose";


export default mongoose.model(
     "Review",
     mongoose.Schema({
          user: {
               type: Schema.Types.ObjectId,
               ref: "User",
               require: true
          },
          content: {
               type: String,
               require: true
          },
          media: {
               type: String,
               require: true
          },
     })
)
