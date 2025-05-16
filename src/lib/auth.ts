import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export interface DecodedToken {
  id: number;
  role: string;
  email: string;
}

export async function verifyToken(token: string): Promise<DecodedToken | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export function generateToken(payload: DecodedToken): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}
