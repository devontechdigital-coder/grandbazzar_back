import mongoose from "mongoose";

const taxRuleSchema = new mongoose.Schema(
  {
    // Location
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
      index: true,
    },
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      default: null,
      index: true,
    },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      default: null,
      index: true,
    },

    // Optional (if you want areas)
    areaId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      index: true,
    },
    areaSlug: {
      type: String,
      default: null,
      lowercase: true,
      trim: true,
      index: true,
    },

    // ✅ Category
    // If null => this rule applies to ALL categories (fallback)
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      default: null,
      index: true,
    },

    taxType: {
      type: String,
      enum: ["GST", "VAT", "SALES_TAX", "NONE"],
      default: "NONE",
    },

    rate: {
      type: Number, // 18 means 18%
      required: true,
      min: 0,
    },

    isInclusive: { type: Boolean, default: false },

    effectiveFrom: { type: Date, default: null, index: true },
    effectiveTo: { type: Date, default: null, index: true },

    status: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

// Fast matching indexes
taxRuleSchema.index({
  countryId: 1,
  stateId: 1,
  cityId: 1,
  areaId: 1,
  categoryId: 1,
  status: 1,
});

export default mongoose.model("TaxRule", taxRuleSchema);