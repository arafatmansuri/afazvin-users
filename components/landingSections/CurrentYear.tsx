import { connection } from "next/server";

export async function CurrentYear() {
  await connection();
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-xs text-text-inverse/50">
      © {currentYear} Afazvin. All rights reserved.
    </p>
  );
}
