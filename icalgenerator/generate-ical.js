import ical from 'ical-generator';
import fs from 'fs';


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const listPath = path.join(__dirname, '../website/src/data/list.json');
const list = JSON.parse(fs.readFileSync(listPath, 'utf-8'));

const cal = ical({ domain: 'yourdomain.com', name: 'My Calendar' });

list.forEach(item => {
    cal.createEvent({
        id: item.Id,
        start: new Date(item.EventStartDate),
        end: new Date(item.EventEndDate),
        summary: item.Name,
        description: item.Description,
        url: item.URL
    });
});

const publicDir = path.join(__dirname, '../website/public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

cal.saveSync(path.join(publicDir, 'calendar.ics'));
