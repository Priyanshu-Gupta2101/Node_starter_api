const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin", "MasterAdmin"],
      default: "User",
    },
    photo: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    isEmailVerified: { type: Boolean, default: false },
    emailVerificationCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
