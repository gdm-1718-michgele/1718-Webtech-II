//alle a-elementen op de pagina
//let anchors = document.getElementsByTagName('a');
//let anchors = document.querySelectorAll('a');
//console.log(anchors);

//het eerste a-element op de pagina
//let anchor = document.getElementsByTagName('a')[0];
let anchor = document.querySelector('a');
console.log(anchor);


let bold_Items = document.getElementsByTagName('strong');
let span_Items = document.getElementsByTagName('span');

anchor.addEventListener('mouseover', function(){
  //alle vetgedrukte woorden moeten oranje worden
  highlightElements(bold_Items, 'orange');
  //alle span-elementen paars
  highlightElements(span_Items, 'purple');
  //a-element roze achtergrondkleur
  highlightAnchor(anchor, 'pink');
},false)

function highlightElements(elements, color){
  for(let i=0;i<elements.length;i++){
    elements[i].style.color = color;
  }
}

function highlightAnchor(element, color){
  element.style.backgroundColor = color;
}

anchor.addEventListener('mouseout', function(){
  //alle vetgedrukte woorden moeten oranje worden
  unlightElements(bold_Items, 'black');
  //alle span-elementen paars
  unlightElements(span_Items, 'black');
  //a-element roze achtergrondkleur
  unlightAnchor(anchor, 'beige');
},false)

function unlightElements(elements, color){
  for(let i=0;i<elements.length;i++){
    elements[i].style.color = color;
  }
}

function unlightAnchor(element, color){
  element.style.backgroundColor = color;
}






/*

let anchor = document.getElementsByTagName('a');
console.log(anchor);


//First create a list of all bold items 
var bold_Items;
window.onload = getBold_items();
 
// Collect all <strong> tags
function getBold_items() {
  bold_Items = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight() {
   for (var i=0; i<bold_Items.length; i++){                                                    
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal(){
  for (var i=0; i<bold_Items.length; i++) {
       bold_Items[i].style.color = "black";
  }
}
*/