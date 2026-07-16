import type { GitHubRepo } from "../types/github";

export async function GET() {
    const username = "ezerssss";
    const url = `https://api.github.com/users/${username}/repos`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub API.");
    }

    const data = (await response.json()) as GitHubRepo[];

    // Descending order (Most recent first)
    const sorted = data.toSorted((a, b) =>
        b.created_at.localeCompare(a.created_at),
    );

    return new Response(JSON.stringify(sorted));
}
