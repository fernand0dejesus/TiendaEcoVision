/*
    Campos:
        
        idOrder
        shipDate
        recivedDate

*/

import { Schema, model } from "mongoose";

const categoriesSchema = new Schema(
  {
   
    name: {
      type: String,

    },
    description: {
      type: String,

      
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("shipments", categoriesSchema);
