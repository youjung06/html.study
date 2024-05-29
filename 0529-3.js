const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener("click" , dat );
 
const $footer = document.querySelector("footer");
$footer.addEventListener("click" , bo );

function dat(){
 $popup.style.display='none';
}

function bo(){
 $popup.style.display='block';
}

//메뉴에서 '서브메뉴1-2'를 클릭하면 바탕이 빨간색이 된다]
const $subMenu12 = document.querySelector("nav li:first-child a:last-child");

function red() {
   $subMenu12.style.background = 'red';
}

//서브메뉴2-4 를 클릭하면 배경색이 파랑색이 된다.
const $subMenu24 =document.querySelector('#blue');

 $subMenu24.addEventListener("click", blue);

function blue() {
     $subMenu24.style.background= 'blue';
}

//서브메뉴4-1을 클릭하면 글자색이 빨강색 된다.onclick
const $sm41 = document.querySelector('#sm41');

function tr() {
    $sm41.style.color = 'green';
    $sm41.style.textDecoration = 'none';
}

$popup.addEventListener("click",pink);
function pink() {
    $popup.style.background= 'pink';
}
 