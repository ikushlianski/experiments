import fs from "node:fs/promises";

import {
  Document,
  MetadataMode,
  VectorStoreIndex,
} from "llamaindex";

async function main() {
  console.log(process.env.OPENAI_API_KEY);

  const path = "ctv.txt";

  const news = await fs.readFile(path, "utf-8");

  // Create Document object with essay
  const document = new Document({ text: news, id_: path });

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments([document]);

  // Query the index
  const queryEngine = index.asQueryEngine();
  const { response, sourceNodes } = await queryEngine.query({
    query: "Что думает Беляев О России?",
  });

  // Output response with sources
  console.log(response);

  if (sourceNodes) {
    sourceNodes.forEach((source, index) => {
      console.log(
        `\n${index}: Score: ${source.score} - ${source.node.getContent(MetadataMode.NONE).substring(0, 50)}...\n`,
      );
    });
  }
}

main().catch(console.error);