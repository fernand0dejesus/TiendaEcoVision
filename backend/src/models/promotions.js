/*
    Campos:
        nombre
        descripcion
        precio
        stock
*/

import { Schema, model } from "mongoose";

const categoriesSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    desciption: {
      type: String,
    },
    idProduct: {
        type: Schema.ObjectId,
          require: true,
          ref:"Products",
  },
  idCategorie: {
    type: Schema.ObjectId,
      require: true,
      ref:"categories",
  },
  discountPercentage:{
    type: String,

},
startDate:{
type: Date,
},


},
  {timestamps: true,
    strict: false,}
    
  
);

export default model("Promotions", categoriesSchema);
