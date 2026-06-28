import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import {
  remarkBlockId,
  type RemarkBlockIdOptions,
} from "fumadocs-core/mdx-plugins/remark-block-id";

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const blockIdOptions: RemarkBlockIdOptions = {
  addDataAttribute: "feedback",
};

export default defineConfig({
  plugins: [lastModified()],
  mdxOptions: {
    remarkPlugins: [[remarkBlockId, blockIdOptions]],
    remarkNpmOptions: {
      persist: {
        id: "persist-install",
      },
    },
  },
});
