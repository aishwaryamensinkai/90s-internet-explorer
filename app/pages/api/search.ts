import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;

  if (!q || typeof q !== "string") {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await fetch(
      `https://api.duckduckgo.com/?q=${encodeURIComponent(
        q
      )}&format=json&pretty=1`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
