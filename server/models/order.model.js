const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",     
      required: true
    },

    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  
      required: true
    },

    total_price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);