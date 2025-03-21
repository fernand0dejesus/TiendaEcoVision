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
    idProduct: {
      type: Schema.ObjectId,
        require: true,
        ref:"products"
    },
    total: {
      type: Number,
      require: true,
      
    },
    status: {
      type: Boolean,
      require: true,
      
    },
    shipingAdress: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("orders", ordersSchema);
/*idCustomers, idProduct, total, status, shipingAdress
"idCustomers": "ObjectId('67dd959e54b54fcc3510360c')",
"idProduct": "ObjectId('67dd9936a06f39d3247d3898')",
"total": 100.00,
"status": true,
"shippingAddress": "Calle Ejemplo 123, Ciudad, País"*/