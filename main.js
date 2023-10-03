let letters="abcdefghijklmnopqrstuvwxyz";
let letterArray=Array.from(letters);
let letterContiner=document.querySelector('.letters');

//create a letters
letterArray.forEach((letter) => {
    let span = document.createElement("span");
    let theLetter=document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className="letter-box";
    letterContiner.appendChild(span);


});

//object of words and category
 let word={
    programming:["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["Prestige","Inception","Parasite","Interstellar","Whiplash","Memento","Coco","Up"],
    people:["Albert Enistein","Hitchcock","Alexander","Cleoppatra","Mahatma Ghandi"],
    countries:["Syria","palestine","Yemen","Egypt","Bahrain","Qatar"],
  

 }
 //get random property

 let allkeys=Object.keys(word);
 let randomPropNumber=Math.floor(Math.random()*allkeys.length);
 let randomPropName=allkeys[randomPropNumber];
 let randomPropValue=word[randomPropName];

 
 let randomValueNumber=Math.floor(Math.random()*randomPropValue.length);
 let randomValueName=randomPropValue[randomValueNumber];


//set category info
document.querySelector('.game-info .category span').innerHTML=randomPropName;


//letter guess continer 
let letterGuessContiner=document.querySelector(".letters-guess");
let lettersAndSpace=Array.from(randomValueName);

lettersAndSpace.forEach((letter)=> {
    let emtyspan = document.createElement("span");
    //if letter is space
    if(letter===' '){
        emtyspan.className='with-space'
    }
    letterGuessContiner.appendChild(emtyspan);

}

)

//slect all span in guess 
let guessSpan=document.querySelectorAll('.letters-guess span')
  //set woring Atempts
  let  woringAtempts=0;
  //slect the draw element
  let theDraw=document.querySelector(".hangman-draw")
//Handle clicking on letters
document.addEventListener("click",(event) => {
let thestate=false;

    if(event.target.className==='letter-box'){
//set the choised states

        event.target.classList.add('clicked');
        let theclickedletter=event.target.innerHTML.toLowerCase();
        let thechoiseword=Array.from(randomValueName.toLowerCase());


      
        thechoiseword.forEach((wordletter,wordindex) => {
            // if the clicked letter Equel to one chosen word letter
            if(theclickedletter===wordletter){
                thestate=true;
             //loop in guess span
             guessSpan.forEach((span,spanindex) => {
                if(spanindex===wordindex){
                    span.innerHTML=wordletter
                }
             })

            }
        });
        //out site the loop
        if(thestate!==true){
            //incrise woring Atempts
            woringAtempts++;
            theDraw.classList.add(`woring-${woringAtempts}`);
            // document.getElementById('Fail').play();
            if(woringAtempts===8){
                endGame();
                letterContiner.classList.add("finshed")
            }
        }
        else{
            // document.getElementById('Success').play()

        }
        

    }
    
});


function endGame(){
    let div=document.createElement('div');
    let text=document.createTextNode(`Game Over,The Word Is ${randomValueName}`);
    div.appendChild(text);
    div.className='popup';
    document.body.appendChild(div);
    let divpopup=document.getElementsByClassName('.popup')
    document.addEventListener("click",() => {
        div.style.display="none";
        location.reload()
    })

}
