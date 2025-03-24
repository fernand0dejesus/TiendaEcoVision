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
      require: true,
      ref:"products"
    },
    idCustomer: {
        type: Schema.ObjectId,
        require: true,
        ref:"cutomers"
      },
    date: {
      type: Date,
      requiere: true
    },
    comment: {
      recivedDate: String,
      require: true,
      
    },
    rating: {
        type: Number,
        require: true,
        
      },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("reviews", reviewsSchema);
