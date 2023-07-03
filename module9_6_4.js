const inputValue=document.querySelector("#myInput");
const inputValue2=document.querySelector("#myInput2");
const myButton=document.querySelector("#myButton");
let myImage=document.getElementById("answer");

const useRequest = (value,value2) => {
  return fetch('https://jsonplaceholder.typicode.com/'+value+'/'+value2)
    .then((response) => {
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

myButton.addEventListener(`click`, async ()=>{
    const value = Number(document.querySelector('#myInput').value);
    const value2 = Number(document.querySelector('#myInput2').value);   
    if(!isNaN(value) && !isNaN(value2)){
      if (value<100 || value>300 || value2<100 || value2>300){ console.log("одно из чисел вне диапазона от 100 до 300")} // поменять выводить текст ниже
      else{
        let answer = await useRequest(value,value2);
       
         let codHtml="";
         answer.forEach((item) => {
            codHtml+="<img src="+item.url+" alt="+item.title+">";
          });
          myImage.innerHTML=codHtml;
        };
    
     }
    else {console.log("одно из чисел вне диапазона от 100 до 300")} 
    } 
);