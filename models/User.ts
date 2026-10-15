import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

// 구조분해 할당(models, model)을 쓰지 않고 mongoose 객체에서 직접 가져옵니다.
export const User = mongoose.models.User || mongoose.model("User", userSchema);
