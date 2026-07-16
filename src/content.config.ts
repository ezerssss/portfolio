import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const work = defineCollection({
    loader: file("src/data/work.yaml"),
});

export const collections = { work };
