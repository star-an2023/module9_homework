const myXMLString=`<list>
<student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser()
const myXMLDOM= parser.parseFromString(myXMLString,"text/xml");


class student {constructor(nameFull,age,prof,lang){
      this.name= nameFull,
      this.age= age,
      this.prof= prof,
      this.lang= lang
      }
};
let listStudent = myXMLDOM.querySelectorAll("student");
let arrStudent = new Array;

for (i=0;i<listStudent.length;i++){
      let nameStudent=listStudent[i].querySelector("name");
      nameFull=nameStudent.querySelector("first").textContent+" "+nameStudent.querySelector("second").textContent;
      myLang=nameStudent.getAttribute("lang");
      myAge=listStudent[i].querySelector("age").textContent;
      myProf=listStudent[i].querySelector("prof").textContent;
      newStudent=new student(nameFull,myAge,myProf,myLang);
      arrStudent.push(newStudent);
}
let list = {list: arrStudent};
console.log(list);
