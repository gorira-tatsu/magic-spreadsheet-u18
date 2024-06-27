# 魔法のスプレッドシート U18

これは、主に高校生以下を対象としたプログラムをまとめたリポジトリです。

ウェブサイトはこちら：[魔法のスプレッドシート U18](https://gorira-tatsu.github.io/magic-spreadsheet-u18/)

## プログラムの編集方法

[website/src/data/list.json](https://github.com/gorira-tatsu/magic-spreadsheet-u18/blob/main/website/src/data/list.json) を編集してください。データには以下のようなものが含まれます：

| フィールド | 説明 | 例 |
|------------|------|-----|
| Name | プログラムの名前 | Exampleプログラム |
| Target | 対象となる学年 | 高校生 |
| Description | プログラムの簡単な説明 | Exampleプログラムは〇〇を行う高校生に〜 |
| AppStartDate | 応募開始日 | 2021-01-01 |
| AppEndDate | 応募締切日 | 2021-12-31 |
| EventStartDate | イベント開始日 | 2021-01-01 |
| EventEndDate | イベント終了日 | 2021-12-31 |
| Status | プログラムの現在のステータス | Active |
| URL | プログラムの詳細情報へのリンク | http://example.com |

### データ入力例

```json
{
  "Name": "Program_Name",
  "Target" : "高校生",
  "Description": "text description",
  "AppStartDate": "2021-01-01",
  "AppEndDate": "2021-12-31",
  "EventStartDate": "2021-01-01",
  "EventEndDate": "2021-12-31",
  "Status": "Active",
  "URL": "http://example.com"
}