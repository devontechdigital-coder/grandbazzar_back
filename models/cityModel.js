import mongoose from "mongoose";

const areaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
      trim: true,
    },
    pincode: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { _id: true }
);

const citySchema = new mongoose.Schema(
  {
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
      index: true,
    },

    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: [true, "City name is required"],
      trim: true,
    },

    zipcode: {
      type: String,
      trim: true,
      index: true,
    },

    lat: Number,
    lng: Number,

    status: {
      type: Boolean,
      default: true,
      index: true,
    },

    // ✅ Areas under city
    areas: [areaSchema],

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  { timestamps: true }
);

citySchema.index({ stateId: 1, slug: 1 }, { unique: true });

export default mongoose.model("City", citySchema);