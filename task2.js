let d = +process.argv[2];
let m = process.argv[3];
let y = +process.argv[4];

let month = {'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5, 'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11};

let now = new Date(y, month[m], d);			 
let newYear = new Date(y + 1, 0, 0);

let period = (newYear - now) / (3600 * 24 * 1000);

process.stdout.write(period);
