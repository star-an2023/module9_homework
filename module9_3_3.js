const inputValue=document.querySelector("#myInput");
const myButton=document.querySelector("#myButton");
let myImage=document.getElementById("answer");
myButton.addEventListener(`click`,()=>{
    const value = document.querySelector('#myInput').value;
    if (value<1 || value>10){ console.log("число вне число вне диапазона от 1 до 10")} // поменять выводить текст ниже
    else{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "https://jsonplaceholder.typicode.com/photos?_page=0&_limit="+value,true);

        xhr.onload = function() {
          const answer=JSON.parse(xhr.response);
          let codHtml="";
          answer.forEach((item) => {
            codHtml+="<img src="+item.url+" alt="+item.title+">";
          });
          myImage.innerHTML=codHtml;
        };
        xhr.send();      
    }
});