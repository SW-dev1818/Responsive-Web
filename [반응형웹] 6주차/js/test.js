var num = 123456;
var result = 0;
var temp = num;
var count = 0;

while (true) {
  temp /= 10;
  if (temp >= 1) {
    count++;
  } else {
    break;
  }

  while (count >= 0) {
    i = Math.pow(10, count);
    result += num % 10 * i;
    num = Math.floor(num/10);
    count--;
  }

  document.write("결과는 " + result);
}
