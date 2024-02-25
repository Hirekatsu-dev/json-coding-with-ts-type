# json-coding-with-ts-type

typescript で定義した型の通りに JSON ファイルを編集できるように、JSON スキーマと VSCode の設定を生成します。

## 使い方

`types` 以下に型定義用の ts ファイルを作成します。利用する型の名前とファイル名が同一になるようにします。

`yarn generate` とすると、以下が実行されます。

- `generated_schemas` に JSON スキーマが生成される
- `settings.json` の `json.schemas` が更新される

同じ名前で json ファイルを作成・編集すると、生成した JSON スキーマにしたがってバリデーションされるようになります。
