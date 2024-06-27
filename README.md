# 魔法のスプレッドシート U18

これは、主に高校生以下を対象としたプログラムをまとめたリポジトリです。

ウェブサイトはこちら：[魔法のスプレッドシート U18](https://gorira-tatsu.github.io/magic-spreadsheet-u18/)

## プログラムの編集方法

`website/src/content/data`配下に`<西暦>-<プロジェクトの名前>.json`でJSONファイルを格納してください。記入の例は以下の通りです。

| フィールド | 説明 | 例 |
|------------|------|-----|
| Name | プログラムの名前 | 未踏ジュニア |
| Target | 対象となる学年、層 | 2024-04-01時点で17歳以下の個人および、これらの年齢で構成されたグループ (最大4人) |
| Description | プログラムの簡単な説明 | 独創的なアイデア、卓越した技術を持つ 17 歳以下の小中高生や高専生などを支援するプログラム |
| AppStartDate | 応募開始日(YYYY-MM-DDのISO8601準拠) | 2024-03-10 |
| AppEndDate | 応募締切日(YYYY-MM-DDのISO8601準拠) | 2024-04-06 |
| EventStartDate | イベント開始日(YYYY-MM-DDのISO8601準拠) | 2024-06-01 |
| EventEndDate | イベント終了日(YYYY-MM-DDのISO8601準拠) | 2024-11-31 |
| Status | プログラムの現在のステータス(Open or Closed) | Closed |
| URL | プログラムの詳細情報へのリンク | https://jr.mitou.org/ |

### データ入力例

```2024-未踏ジュニア.json
{
  "Name": "未踏ジュニア",
  "Target": "2024-04-01時点で17歳以下の個人および、これらの年齢で構成されたグループ (最大4人)",
  "Description": "独創的なアイデア、卓越した技術を持つ 17 歳以下の小中高生や高専生などを支援するプログラム",
  "AppStartDate": "2024-03-10",
  "AppEndDate": "2024-04-06",
  "EventStartDate": "2024-06-01",
  "EventEndDate": "2024-11-31",
  "Status": "Closed",
  "URL" : "https://jr.mitou.org/"
}
```

```2024-SecHack365.json
{
  "Name": "SecHack365",
  "Target": "日本国内に居住する25歳以下の方（1999年4月2日以降に生まれた方）",
  "Description": "NICTをはじめ、大学や企業など様々な分野で活躍する研究開発・セキュリティのスペシャリスト からなる専門家集団（トレーナー）の助言を得ながら、サイバーセキュリティの課題解決に資する 実践的な研究・開発に取り組みます。",
  "AppStartDate": "2024-04-16",
  "AppEndDate": "2024-05-07",
  "EventStartDate": "2024-06-03",
  "EventEndDate": "2024-03-09",
  "Status": "Closed",
  "URL" : "https://sechack365.nict.go.jp/"
}
```