import fs from "fs";
import { generateSchema } from "./generate_schema";
import { parse, stringify, assign } from "comment-json";

function definedTypes() {
  const fileNames = fs
    .readdirSync("src/types", {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .filter((name) => name.endsWith(".ts"));

  return fileNames.map((fileName) => fileName.split(".")[0]);
}

function updateVSCodeSettings(schemas: object[]) {
  const filePath = ".vscode/settings.json";
  const settingsString = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

  const settings = parse(settingsString);
  const updatedSettings = assign(settings, {
    "json.schemas": schemas,
  });
  fs.writeFileSync(filePath, stringify(updatedSettings, null, 2));
}

function main() {
  const types = definedTypes();

  // json schema を生成する
  types.forEach((t) => generateSchema(t));

  // settings.json を更新する
  const jsonSchemas = types.map((t) => ({
    fileMatch: [`json/${t}.json`],
    url: `./generated_schemas/${t}.json`,
  }));

  updateVSCodeSettings(jsonSchemas);
}

main();
