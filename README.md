# HTML/CSS/JS Study

- since 2018/06/17
- with HUN님

## 1회차 2018.06.17

* HTML basics
    * Tag (h1, h2, p, div, button, input...)
    * Attribute (value, placeholder, onclick, class, id...)
* CSS basics
    * Tag, Class, id
* JS syntax basics
    * if
        * 버튼 누르면 div 나타났다 사라졌다 토글하기
    * while
    * for
        * 구구단
```css
// css basic
p {
    /* color: red; */
}

#hello {
    color: red;
}

#hello2 {
    color: blue;
}

.big {
    font-size: 50px;
}

#mydiv {
    width: 100px;
    height: 100px;
    background-color: pink;
}

.hide {
    display: none;
}
```
```javascript
// 버튼 누르면 div 나타났다 사라졌다 토글하기
let isHide = false;
function clickButton() {
    if (isHide) {
        document.getElementById('mydiv').classList.remove('hide');
        isHide = false;
    }
    else {
        document.getElementById('mydiv').classList.add('hide');
        isHide = true;
    }
}
```
```javascript
// 구구단
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
```

* Assignment
    * [assignment1](https://github.com/JonJee/JavascriptStudy/blob/master/round%201/assignment1.md)
