# Assignment 1

* 2018/06/17

## example screen shot
![a1_1](https://github.com/JonJee/javascriptstudy/blob/master/round%201/img/assignment1_1.png)

예제 스크린샷 1


![a1_2](https://github.com/JonJee/javascriptstudy/blob/master/round%201/img/assignment1_2.png)

예제 스크린샷 2

## Spec
* HTML **15점**
    * 텍스트필드 두 개와 버튼 두 개가 있어야 합니다. (모두 input 태그 사용) **5점**
    * 텍스트필드의 사이즈는 10입니다. (input의 size 속성 사용) **5점**
    * 텍스트필드 밑에 `result: `라는 라벨이 있습니다. (p 태그와 span 태그 사용할 것) **5점**
* CSS **10점**
    * 텍스트필드 두 개가 배경색상이 달라야 합니다. (background-color 사용) **5점**
    * 텍스트필드와 버튼은 테두리가 없고 폰트 크기가 20px입니다. (border, font-size 사용) **5점**
    * 최대한 스크린샷과 비슷해야 합니다.
* JS **75점**
    * 두 텍스트필드에 숫자를 채운 후 `+` 버튼을 누르면 `result: 더한 값`이 나와야 하고 `-` 버튼을 누르면 `result: 왼쪽에서 오른쪽을 뺀 값`이 나와야 합니다. **40점**
    * 텍스트필드 둘 중 하나라도 빈 칸이 있거나 숫자가 아닌 값이 있으면 올바른 값이 아니라는 경고창이 띄워져야 합니다. **20점**
    * 위 경고창이 띄워진 후에 두 텍스트필드를 빈 칸으로 초기화시켜야 합니다. **15점**

> hint1 - `id`가 `input1`인 텍스트필드 요소에서 값을 얻고 싶으면 `document.getElementById('input1').value`와 같이 사용할 수 있습니다.

> hint2 - `String` 자료형을 `Number` 자료형으로 변환시키려면 `parseInt` 함수를 써야합니다.

> hint3 - 숫자가 아닌 자료형을 `Number`로 `parseInt`하면 `NaN`이 나오는데 `isNaN`이라는 함수를 통해 `NaN`인지 아닌지 비교할 수 있습니다.
