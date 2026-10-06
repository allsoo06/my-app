import { model, models, Schema } from "mongoose";

const noticeSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

// models.Notice가 존재하면 기존 것을 재사용하고, 없으면 새로 모델을 정의합니다.
export const Notice = models.Notice || model("Notice", noticeSchema);
