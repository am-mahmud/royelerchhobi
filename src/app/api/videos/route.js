// src/app/api/videos/route.js

export async function GET() {
  try {
    const res = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UC_v1UPT8P3y7hXNeXVS17qA",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error("Failed to fetch feed");

    const xml = await res.text();
    return new Response(xml, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}