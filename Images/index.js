
// Set of characters for password generation
const onlyCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const noNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdLength; // user input for password length is stored here
let password = ""; //password generated is stored here
let copyText1 = "";
let copyText2 = "";
let numbersNil = true;
let specialCharacters = true;
// accessing the DOM file 
const passwordOne = document.getElementById("password1-El");
const passwordTwo = document.getElementById("password2-El");
const passwordGenerator = document.getElementById("password-geneator");

// function to call password generator twice
passwordGenerator.addEventListener("click", function ()
{   
    let result = passwordGen(pwdLength);
    passwordOne.textContent = result;
    
    password ="";
    result = passwordGen(pwdLength);
    passwordTwo.textContent = result;
    
    password = "";
});

// Password geneartor

function passwordGen(y)
{
        for(let i = 0; i < y; i++)
        {
            
            if(!numbersNil && specialCharacters){
                let random = Math.floor(Math.random()*noNumbers.length);
                password += noNumbers[random];
                console.log("nonumbers")

            }
            else if (!specialCharacters && numbersNil){
                 let random = Math.floor(Math.random()*noSymbols.length);
                 password += noSymbols[random];
                 console.log("nospecial")
            }
            else if(!numbersNil && !specialCharacters){
                let random = Math.floor(Math.random()*onlyCharacters.length);
                password += onlyCharacters[random];
                console.log("nospecial and Nonumbers")
            }
            else{
                let random = Math.floor(Math.random()*characters.length);
                password += characters[random];
                console.log("All")

            }

        }
    return password;
}

// Geeting user input for the length of the password

const message = document.querySelector('#message');
const result = document.querySelector('#result');
message.addEventListener('input', function () 
{
     pwdLength = Number(this.value);
     if (pwdLength < 6)
    {   
        window.alert("the number entered is less than 6, The system will automatically assign 6 as paswordlength");
        pwdLength = 6;
        message.value = 6;
        
    }   
    if (pwdLength > 15)
    {
        window.alert("the number entered is greater than 15, The system will automatically assign 15 as paswordlength");
        pwdLength = 15;
        message.value = 15;
    }
  
});

// Copy to Clipboard function

const copyButton = document.querySelector('#password1-El'); 
const copyButton2 = document.querySelector('#password2-El');

copyButton.addEventListener('click', function () { 
   textCopy("password1-El")
}); 

copyButton2.addEventListener('click', function () { 
    textCopy("password2-El")
 }); 


function textCopy(y){
    const textToCopy = document.getElementById(y).innerHTML; 
    navigator.clipboard.writeText(textToCopy)  
    .then(() => {  
        console.log('Text copied to clipboard');  
    })  
    .catch((err) => {  
        console.error('Failed to copy text: ', err);  
    }); 
} 
    
// const copyContent = async () => {  
//     const text = document.getElementById('password1-El').innerHTML; 
   
//     try {  
//         await navigator.clipboard.writeText(text);  
//         console.log(text) 
//         console.log('Content copied to clipboard');  
//     } catch (err) {  
//         console.error('Failed to copy: ', err);  
//     }  
// }  
// const copyContent1 = async () => {  
    
//     const text = document.getElementById('password2-El').innerHTML;  
//     try {  
//         await navigator.clipboard.writeText(text); 
//         console.log(text) 
//         console.log('Content copied to clipboard');  
//     } catch (err) {  
//         console.error('Failed to copy: ', err);  
//     }  
// }
// Toggle function
const numberBtn = document.getElementById("myBtn");
const specialBtn = document.getElementById("myBtn1");

numberBtn.addEventListener("click", function (){
    tgl("myBtn")
});

specialBtn.addEventListener("click", function (){
    tgl("myBtn1")
});


function tgl(x)
{
const t = document.getElementById(x);
if(t.value=="ON"){
      t.value="OFF";
      if(x === "myBtn")
      {
      numbersNil = false;
    }else{
        specialCharacters = false;
    }
      
    }
else if(t.value=="OFF")
    {
      t.value="ON";
      if(x === "myBtn")
      {
      numbersNil = true;
    }else{
        specialCharacters = true;
    }
        
    }

}
// function tgl1()
// {
// var t = document.getElementById("myBtn1");
// if(t.value=="ON"){
//       t.value="OFF";
//       specialCharacters = false;
      
//     }
// else if(t.value=="OFF")
//     {
//       t.value="ON";
//       specialCharacters = true;
        
//     }

// }
