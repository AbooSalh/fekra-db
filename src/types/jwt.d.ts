// src/types/jwt.d.ts
import { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  id: number;
  email: string;
  role: string;
}
