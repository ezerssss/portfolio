import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const work = defineCollection({
    loader: file("src/data/work.yaml"),
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/blogs" }),
});

export const collections = { work, blog };
