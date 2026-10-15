import bcrypt from "bcryptjs";
import { connectDB } from "./mongodb";
// ❌ 상단 임포트 제거: import { User } from "@/models/User";

const SALT_ROUNDS = 10;

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
}) {
  // 1. 먼저 DB 연결을 보장합니다.
  await connectDB();

  // 2. 연결이 완료된 후에 안전하게 모델을 가져옵니다.
  const { User } = await import("@/models/User");

  const existing = await User.findOne({ email: input.email });
  if (existing) {
    throw new Error("이미 가입된 이메일입니다.");
  }

  const passwordHash = await bcrypt.hash(input.password, SALT_ROUNDS);

  const user = await User.create({
    name: input.name,
    email: input.email,
    passwordHash,
  });

  return { id: String(user._id), name: user.name, email: user.email };
}
