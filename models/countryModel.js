import mongoose from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Country name is required"],
      trim: true,
    },
    iso2: {
      type: String, // IN, US, AE
      uppercase: true,
      trim: true,
      index: true,
    },
    currency: {
      type: String, // INR, USD
      uppercase: true,
      trim: true,
    },
    taxType: {
      type: String,
      enum: ["GST", "VAT", "SALES_TAX", "NONE"],
      default: "NONE",
    },
    status: {
      type: Boolean,
      default: true,
      index: true,
    },
    slug: {
      type: String,
      required: true, // "india"
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Country", countrySchema);