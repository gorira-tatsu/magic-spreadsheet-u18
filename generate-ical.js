const ical = require('ical-generator');
const fs = require('fs');

const data = [
    {
        "Id": 1,
        "Name": "Program_Name",
        "Description": "text description",
        "AppStartDate": "2021-01-01",
        "AppEndDate": "2021-12-31",
        "EventStartDate": "2021-01-01",
        "EventEndDate": "2021-12-31",
        "Status": "Active",
        "URL": "http://example.com"
    }
];

const cal = ical({ domain: 'yourdomain.com', name: 'My Calendar' });

data.forEach(item => {
    cal.createEvent({
        id: item.Id,
        start: new Date(item.EventStartDate),
        end: new Date(item.EventEndDate),
        summary: item.Name,
        description: item.Description,
        url: item.URL
    });
});

if (!fs.existsSync('public')){
    fs.mkdirSync('public');
}

cal.saveSync('public/calendar.ics');
