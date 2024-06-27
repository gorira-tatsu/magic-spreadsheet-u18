import ical from 'ical-generator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ファイルパスの設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../website/src/content/data');
const publicDir = path.join(__dirname, '../website/public');

// カレンダーの初期化
const cal = ical({ domain: 'yourdomain.com', name: 'My Calendar' });

// データディレクトリ内のすべてのJSONファイルを読み込む
fs.readdirSync(dataDir).forEach(file => {
    if (path.extname(file) === '.json') {
        const filePath = path.join(dataDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        // イベントの作成
        cal.createEvent({
            start: new Date(data.AppStartDate),
            end: new Date(data.AppEndDate),
            summary: data.Name,
            description: data.Description,
            url: data.URL
        });
    }
});

// 公開ディレクトリが存在しない場合は作成
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// iCalデータを文字列として取得し、ファイルに書き込む
fs.writeFileSync(path.join(publicDir, 'calendar.ics'), cal.toString());