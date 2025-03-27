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
      ref:"orders"
    },
    shipDate: {
      type: Date,

    },
    recivedDate: {
      recivedDate: Date,

      
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("shipments", shipmentsSchema);
