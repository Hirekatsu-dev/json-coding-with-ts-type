import fs from "fs";
import { createGenerator } from "ts-json-schema-generator";
import { toSnakeCase, toPascalCase, toCamelCase } from "./util";

export function generateSchema(type: string) {
  const config = {
    path: `src/types/${toSnakeCase(type)}.ts`,
    tsConfig: "tsconfig.json",
  };
  const outputPath = `generated_schemas/${toSnakeCase(type)}.json`;
  const schema = createGenerator(config).createSchema(toPascalCase(type));
  const schemaString = JSON.stringify(schema, null, 2);

  fs.writeFileSync(outputPath, schemaString);
}
