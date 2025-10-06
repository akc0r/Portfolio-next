import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  try {
    const filePath = join(
      process.cwd(),
      "public",
      "Resume_2026.pdf",
    );
    const cvBuffer = await readFile(filePath);
    const cvUint8Array = new Uint8Array(cvBuffer);
    const cvArrayBuffer = cvUint8Array.buffer;

    return new Response(cvArrayBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"Julien_Glin_CV.pdf\"",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Unable to load CV:", error);
    return NextResponse.json({ error: "CV not found." }, { status: 404 });
  }
}
