const numberPage=document.querySelector("#numberPage");
const limit=document.querySelector("#limit");
const myButton=document.querySelector("#myButton");
let myImage=document.getElementById("answer");

const useRequest = (numberPageValue,limitValue) => {
  return fetch('https://jsonplaceholder.typicode.com/photos?_page='+numberPageValue+'&_limit='+limitValue)
    .then((response) => {
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

document.addEventListener('DOMContentLoaded',()=>{
  let codStorage=localStorage.getItem("skillTest");
  if(typeof codStorage ==="string"){
    myImage.innerHTML=codStorage;
  }
});

myButton.addEventListener(`click`, async ()=>{
    const numberPageValue = Number(document.querySelector('#numberPage').value);
    const limitValue = Number(document.querySelector('#limit').value);   
    if(!isNaN(numberPageValue) && !isNaN(limitValue)){
      if (numberPageValue<1 || numberPageValue>10){ console.log("Номер страницы вне диапазона от 1 до 10")} 
      else if (limitValue<1 || limitValue>10){ console.log("Лимит вне диапазона от 1 до 10")}
            else{
              let answer = await useRequest(numberPageValue,limitValue);
       
              let codHtml="";
              answer.forEach((item) => {
              codHtml+="<img src="+item.url+" alt="+item.title+">";
               });
              myImage.innerHTML=codHtml;
              localStorage.setItem("skillTest",codHtml);
              };
     }   
    else {console.log("ошибка один из параметров не число")} 
} 
);