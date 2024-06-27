import ical from 'ical-generator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ファイルパスの設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const listPath = path.join(__dirname, '../website/src/data/list.json');
const list = JSON.parse(fs.readFileSync(listPath, 'utf-8'));

const cal = ical({ domain: 'yourdomain.com', name: 'My Calendar' });

list.forEach(item => {
    cal.createEvent({
        start: new Date(item.AppStartDate),
        end: new Date(item.AppEndDate),
        summary: item.Name,
        description: item.Description,
        url: item.URL
    });
});

const publicDir = path.join(__dirname, '../website/public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// iCalデータを文字列として取得し、ファイルに書き込む
fs.writeFileSync(path.join(publicDir, 'calendar.ics'), cal.toString());
