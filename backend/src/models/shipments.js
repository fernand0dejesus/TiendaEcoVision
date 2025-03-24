/*
    Campos:
        
        idOrder
        shipDate
        recivedDate

*/

import { Schema, model } from "mongoose";

const shipmentsSchema = new Schema(
  {
    idOrder: {
      type: Schema.ObjectId,
      require: true,
      ref:"orders"
    },
    shipDate: {
      type: Date,
      requiere: true
    },
    recivedDate: {
      recivedDate: Date,
      require: true,
      
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("shipments", shipmentsSchema);
