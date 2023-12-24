var productNameInput= document.getElementById("productNameInput")
var producturlInput= document.getElementById("producturlInput")
var table=document.getElementById('table')

var productcontainer;

if(localStorage.getItem('mybook')){
    productcontainer = JSON.parse(localStorage.getItem('mybook'));
    display(productcontainer)
}
else{
    productcontainer = [];
}

function add(){

   

    var product ={
        productNameInput : productNameInput.value,
        producturlInput : producturlInput.value,
    }

  if(productNameInput.value == "" , producturlInput.value == "" ){
     
    alert("Site Name or Url is not valid  follow rules: 1-Site URL must be a valid one 2-Site name must contain at least 3 characters")
  }

  
  else{
    productcontainer.push(product)
    console.log(productcontainer)

    localStorage.setItem('mybook' , JSON.stringify(productcontainer))

    clear()
    display(productcontainer)
}
  }

function clear(){
    productNameInput.value ="";
    producturlInput.value ="";
}


function display(arr){
continer =``
 
for(i=0 ;i <arr.length ;i++){
    continer +=` <tr>
    <td>${[i+1]}</td>
    <td>${ arr[i].productNameInput}</td>
    <td><button class="btn btn-info" onclick="document.location ='${ arr[i].producturlInput}'">Visit</button></td>
    <td><button class="btn btn-danger" onclick="deleteBook(${i})" >Delete</button></td>
    
    </tr>`
}
table.innerHTML =continer;
}

function deleteBook(deleteindex ){
    productcontainer.splice(deleteindex , 1)
    localStorage.setItem('mybook' , JSON.stringify(productcontainer))
    display(productcontainer)
}

function valid(url){
var regexUrl =  /^https[:][w]{3}[.][A-z]{5,10}[.](com|en|eg)$/;


if( regexUrl.test (url)){
    producturlInput.classList.replace('is-invalid' , 'is-valid')
    
    
}
   
else{
    producturlInput.classList.add('is-invalid')
    
}


}

function book(bookName){
var regexName =/^[A-z]{3,10}$/;

  if(regexName.test(bookName)){
    
    productNameInput.classList.replace('is-invalid' , 'is-valid')
   
  }
else{
    productNameInput.classList.add('is-invalid')
    
}


}
