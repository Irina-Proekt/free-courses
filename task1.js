function numeralConvertion(i, a, b) {
a = parseInt(i, a);
b = a.toString(b);
return b;
}

process.stdout.write(numeralConvertion(process.argv[2], process.argv[3], process.argv[4]));
