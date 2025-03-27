/*
    Campos:
        
        idOrder
        shipDate
        recivedDate

*/

import { Schema, model } from "mongoose";

const reviewsSchema = new Schema(
  {
    idProduct: {
      type: Schema.ObjectId,
      ref:"products"
    },
    idCustomer: {
        type: Schema.ObjectId,
  
        ref:"cutomers"
      },
    date: {
      type: Date,
      require: true
    },
    comment: {
      recivedDate: String,

      
    },
    rating: {
        type: Number,
  
        
      },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("reviews", reviewsSchema);
