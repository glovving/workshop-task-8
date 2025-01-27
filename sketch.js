let search_bar;
let search_button;

//adding font
let my_font;

//user input word
let search_val = '';
// the displayed definition
let display_val = '';


function preload(){

  //setting up search bar and search button
  search_bar = createInput();
  search_button = createButton("search");

  //loading font
  my_font = loadFont('L.C._Smith_5_typewriter.ttf');
  

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //search bar and button positions
  let bar_x = windowWidth/2  - (windowWidth / 3)/2;
  let bar_y = windowHeight - (windowHeight/8) * 7;

  search_bar.position(bar_x, bar_y);
  search_bar.size(windowWidth/3, 20);

  search_button.position(bar_x, bar_y + 20 + 10);

  //calling search function;
  search_button.mousePressed(() =>{
    display_val = '';
    search();
  })


}

function draw() {
  background(230, 221, 202);
  textFont(my_font);
  textAlign(CENTER)
  textSize(windowHeight/30);
  text('Dictionary', windowWidth/2, windowHeight - (windowHeight/8) * 7 - 30)
 

  if(display_val.length>0){
    textSize(windowWidth/50);
    textFont(my_font);
    
    textWrap(WORD);
    
    
    let textWidthLimit = (windowWidth/3) ;
    text(display_val,  windowWidth/2 - (windowWidth / 3)/2, windowHeight - (windowHeight/8) * 6, textWidthLimit);
  }
  
  }
  


async function dictionary(word){
  let temp_word = word;
  let dict_data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${temp_word}`);
  let j_data = await dict_data.json();

  
  let def = j_data[0].meanings[0].definitions[0].definition;

  if(def.length>0){
  display_val += `${temp_word}: ${def}`;}


}

function search(){
  search_val = search_bar.value();
  search_bar.value('');

  if (search_val.length > 0){
    dictionary(search_val);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}