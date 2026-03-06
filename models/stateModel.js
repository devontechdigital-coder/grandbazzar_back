import mongoose from "mongoose";

const stateSchema = new mongoose.Schema(
  {
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: [true, "State name is required"],
      trim: true,
    },
    code: {
      type: String, // DL, HR, CA, TX
      uppercase: true,
      trim: true,
      index: true,
    },
    status: {
      type: Boolean,
      default: true,
      index: true,
    },
    slug: {
      type: String,
      required: true, // "delhi"
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicates like "Delhi" inside same country
stateSchema.index({ countryId: 1, slug: 1 }, { unique: true });

export default mongoose.model("State", stateSchema);