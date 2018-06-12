var month = {'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5, 'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11};

function daysCounter(d, m, y) {  
  var now = new Date(y, month[m], d); 
  var newYear = new Date(y + 1, 0, 0); 
  var msPerDay = 3600 * 24 * 1000; 
  var period = (newYear - now) / msPerDay; 
  process.stdout.write(period);
} 

daysCounter(process.argv[2], process.argv[3], process.argv[4]);


