function button_1()
{
  var number = parseInt(prompt("숫자를 입력하세요"));

  var i = 2;
  if (number == 1) {
    document.write("소수 아니다");
  }
  else {
    while (number % i != 0)
    {
      i++;
    }

  if (number == i)
    document.write("소수다");
  else
    document.write("소수 아니다");
  }
}
