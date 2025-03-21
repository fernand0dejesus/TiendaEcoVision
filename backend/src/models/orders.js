/*
    Campos:
        nombre
        descripcion
        precio
        stock
*/
import { Schema, model } from "mongoose";

const ordersSchema = new Schema(
  {
    idCustomers: {
        type: Schema.ObjectId,
        require: true,
        ref:"customers"
    },
    desciption: {
      type: String,
      
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    stock: {
      type: Number,
      require: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("orders", ordersSchema);
