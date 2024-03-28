---
---

코드 블럭의 style을 확인하기 위한 페이지입니다.

## C언어
```c
#include <stdio.h>
#include <Windows.h>
 
void main()
{
    char c;
    char buffer[100] = { 0 };
    char buffer2[100] = { 0 };
    int count = 0;
    int count2 = 0;
 
    printf("Enter a string want to be acronym : ");
    while (1)
    {
        for (; (c = getchar()) != '\n';)
        {
            buffer[count] = c;
            count++;
        }
        break;
    }
 
    count = 0;
 
    while (buffer[count] != '\0')   
    {
        if (isalpha(buffer[count]))     // buffer 값을 늘려가다가 알파벳을 발견하면
        {
            if (islower(buffer[count]))   // buffer2에 대문자 값을 입력한다
            {
                buffer2[count2] = toupper(buffer[count]);
                count2++;
            }
            else
            {
                buffer2[count2] = buffer[count];
                count2++;
            }
            for (; !isspace(buffer[count]);)  // 다음 공백이 나올 때까지 count를 증가시킨다
            {
                count++;
                if (buffer[count] == '\0')    // buffer의 끝부분에 도달하면 루프 탈출
                    break;
            }
        }
        count++;
    }
 
    printf("Acronym String is : \"%s\"\n", buffer2);
 
}
```


## Java

```java
package com.kh.chap03_class.model.vo;

public class Person {
	// 필드 선언
	private String id;
	private String pwd;
	private String name;
	private int age;
	private char gender;
	private String phone; // 010-1111-2222
	private String email;

	// setter 메소드 (7개)
	public void setId(String id) {
		this.id = id;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	// getter 메소드 (7개)

	public String getId() {
		return id;
	}

	public String getPwd() {
		return pwd;
	}

	public String getName() {
		return name;
	}

	public int getAge() {
		return age;
	}

	public char getGender() {
		return gender;
	}

	public String getPhone() {
		return phone;
	}

	public String getEmail() {
		return email;
	}
	
	// 정보를 출력해주는 information 메소드
	public String information() {
		return "Id : " + id + ", Pwd : " + pwd + ", Name : " + name+ ", Age : " + age + ", Gender : " + gender + ", Phone : " + phone + ", email : " + email;
	}

}
```

## Javascript

```javascript
var numbers1 = [10, 30, 50, 70, 90];
var numbers2 = new Array(20, 40, 60, 80, 100);

var mixedArr = ['a', 1, 'b', 2, new Date(), "today"];
var objArr = [
  {
    "id" : 20192010,
    "name" : "HongGilDong",
    "dept" : "Software"
  },
  {
    "id" : 20192011,
    "name" : "KimSanrang",
    "dept" : "Business Management"
  },
  {
    "id" : 20192012,
    "name" : "KangDongSu",
    "dept" : "Computer Engineering"
  }
];

console.log(numbers1);
console.log(numbers2);
console.log(mixedArr);
console.log(objArr[2].name, objArr[2].dept);
```


## Html

```html
<!doctype html>
<html>

  <head>
    <title>JS Hello World</title>
  </head>

  <body>

    <script>
      var name = prompt('Input your name!!');
      document.write('Welcome ' + name);

    </script>
  </body>

</html>
```

## css

```css
::selection { 
	color: red;
	background: yellow;
}

.content::first-letter { 
	color: #ff0000;
	font-size: xx-large;
}

.content::first-line { 
	color: #0000ff;
	font-variant: small-caps;
}

.name {
	background-color: red;
}
```


## console

```console
sudo apt install tcl tcl-dev tk tk-dev
sudo apt install flex
sudo apt install bison
```

## bash
```bash
# Old misc/Makefile:
CFLAGS=-Wall -O1 -g
LCFLAGS=-O1

# New misc/Makefile:
CFLAGS=-Wall -O1 -g -fcommon
LCFLAGS=-O1 -fcommon

# pipe 쪽도 마찬가지 설정해준다.
```
