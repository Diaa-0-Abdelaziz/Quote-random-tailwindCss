var content = document.getElementById("content")
var quoteContent = document.getElementById("quote-content")
var quoteAuthor = document.getElementById("quote-author")
content.style.cssText= "display:none"
var list = [];
function show(){
    content.style.cssText= "display:block"
    var randomNumber = Math.trunc(Math.random() * 10);
    
    if(!list.includes(randomNumber))
    {
        list.push(randomNumber)
        console.log(randomNumber)
        if(randomNumber == 0){
            quoteContent.innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
            quoteAuthor.innerHTML = "Albert Einstein";
        }else if (randomNumber == 1){
            quoteContent.innerHTML = "“So many books, so little time.”";
            quoteAuthor.innerHTML = "Frank Zappa";
        }else if (randomNumber == 2){
            quoteContent.innerHTML = "“A room without books is like a body without a soul.”";
            quoteAuthor.innerHTML = "Marcus Tullius Cicero";
        }else if (randomNumber == 3){
            quoteContent.innerHTML = "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
            quoteAuthor.innerHTML = "Bernard M. Baruch";
        }else if (randomNumber == 4){
            quoteContent.innerHTML = "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”";
            quoteAuthor.innerHTML = "William W. Purkey";
        }else if (randomNumber == 5){
            quoteContent.innerHTML = "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”";
            quoteAuthor.innerHTML = "Dr. Seuss";
        }else if (randomNumber == 6){
            quoteContent.innerHTML = "“You only live once, but if you do it right, once is enough.”";
            quoteAuthor.innerHTML = " Mae West";
        }else if (randomNumber == 7){
            quoteContent.innerHTML = "“Be the change that you wish to see in the world.”";
            quoteAuthor.innerHTML = " Mahatma Gandhi";
        }else if (randomNumber == 8){
            quoteContent.innerHTML = "“In three words I can sum up everything I've learned about life: it goes on.”";
            quoteAuthor.innerHTML = "Robert Frost";
        }else if (randomNumber == 9){
            quoteContent.innerHTML = "“  فاهمين ونايمين 😂 يا بشمهندسة”";
            quoteAuthor.innerHTML = "ENG \\ Diaa Abdelaziz";
        }
       
    } else if(list.includes(randomNumber)){
        show();       
        
    } 
    if (list.length == 10){
        list.splice(0, 2)
    }

}