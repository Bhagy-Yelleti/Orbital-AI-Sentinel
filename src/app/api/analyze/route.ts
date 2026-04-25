import { NextResponse } from "next/server";
import { getAnalysisForPrompt } from "@/lib/mock-data";

export async function POST(request: Request) {
  const body = (await request.json()) as { prompt?: string };
  const prompt = body.prompt?.trim();

  if (!prompt) {
    return NextResponse.json(
      { error: "Prompt is required." },
      { status: 400 }
    );
  }

  const result = getAnalysisForPrompt(prompt);

  return NextResponse.json({
    prompt,
    ...result,
  });
}
