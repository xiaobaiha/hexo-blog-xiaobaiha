const path = require('path');
const fs = require('fs');
const mdPath = "../source/_posts/";

const formatDate = date => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const initialTemplate = (title, date, tags) => `---
title: ${title}
date: ${formatDate(date)}
tags: ${tags.join(',')}
---`;

const title = process.argv[2];
const tags = process.argv[3]? process.argv.slice(3) :[];
const fileName = path.join(__dirname, mdPath, title +'.md');

fs.writeFileSync(fileName, initialTemplate(title, new Date(), tags));
