function showMy(){
var field = document.createElement("fieldset");
field.setAttribute("class","hide");
field.setAttribute("id","letter-form");
field.innerHTML;
/* <fieldset id="letter-form" class="hide"> */

/* <h2>Отправить письмо <span id="close" title="Закрыть">&times;</span></h2> */
var h = document.createElement("h2"); 
var span = document.createElement ("span");
span.id = "close";
span.title = "Закрыть";
span.innerHTML = '&times;';
h.innerHTML = 'Отправить письмо';

//create a form
var f = document.createElement("form");
f.setAttribute('method',"post");
//f.setAttribute('action',"submit.php");

//create a label for element input
var l = document.createElement("label");                
                     
//create a input element
var p = document.createElement("p"); 
l.htmlFor = "user-name";
p.innerHTML=l.innerHTML="Кому"; 
var i = document.createElement("input");
i.type = "text";
i.name = "user-name";
i.id = "user-name";
i.value = "";
/*  <p><label for="user-name">Кому</label>
                <input type="text" id="user-name" name="user-name" value=""></p> */

//create a e email
var p1 = document.createElement("p");
l.htmlFor = "user-email";
p1.innerHTML=l.innerHTML="E-mail"; 
var e = document.createElement("input");
e.type = "email";
e.id = "user-email";
e.name = "user-email";
e.value = "";
/* <p><label for="user-email">Email</label>
                <input type="email" id="user-email" name="user-email" value=""></p> */


//create a us user-subject
var p2 = document.createElement("p");
l.htmlFor = "user-subj";
p2.innerHTML=l.innerHTML="Тема"; 
var us = document.createElement("input");
us.type = "text";
us.id = "user-subj";
us.name = "user-subj";
us.value = "Важное сообщение";
/*  <p><label for="user-subj">Тема</label>
                <input type="text" id="user-subj" name="user-subj" value="Важное сообщение"></p> */


//create a um user-message
var p3 = document.createElement("p");
l.htmlFor = "user-message";
p3.innerHTML=l.innerHTML="Сообщение"; 
var um = document.createElement("textarea");
um.rows = "5";
um.id = "user-message";
um.name = "user-message";
um.value = "";
/* <p><label for="user-message">Сообщение</label>
                <textarea id="user-message" name="user-message" value="" rows="5"></textarea></p> */

//create a button
var p4 = document.createElement("p");
l.htmlFor = "send-btn";
//p4.innerHTML=l.innerHTML="&nbsp;"; 
var s = document.createElement("input");
s.type = "submit";
s.id = "send-btn";
s.name = "send-btn";
s.value = "Отправить";
/* <p><label for="send-btn">&nbsp;</label>
                <input type="submit" id="send-btn" name="send-btn" value="Отправить"></p> */

// add all elements to the form
field.appendChild(h);
field.appendChild(span);
field.appendChild(f);
f.appendChild(p);
f.appendChild(i);
f.appendChild(p1);
f.appendChild(e);
f.appendChild(p2);
f.appendChild(us);
f.appendChild(p3);
f.appendChild(um);
f.appendChild(p4);
f.appendChild(s);

// add the form inside the body
document.getElementsByTagName('body')[0].appendChild(field); //pure javascript
}     
 
    tr = document.querySelectorAll("#letter tr");
function over (){
    this.style.background = "lime";
}
function out (){
    this.style.background = "";
}
function choose (){
    this.style.background = "#b432f4";   
}    
   
for(var i=1, len=tr.length; i<len; i++){
    tr[i].onmouseover = over;
    tr[i].onmouseout = out;
    tr[i].onclick = choose;
}

    var table = document.getElementById("letter"); 
    var envelope = document.querySelectorAll("#letter td .fa-envelope");
    
    var tds = table.getElementsByTagName("td"); //возвращает массив всех <td>

onload = function() { //вывожу форму при нахатии на конкретный <td>
    for ( var i = 0; i < tds.length; i++ )
        tds[i].onclick = getVal;
}
function getVal(e) { //получаю значение из выбранного <td> и записываю его в форму
    showMy();     
    var event = e.target;        
    formName = document.getElementById("user-name");
    formEmail = document.getElementById("user-email");   

    var tr = event.parentNode.parentNode,  
         name = tr.getElementsByTagName("td")[1].innerHTML,
         email = tr.getElementsByTagName("td")[2].innerHTML;
   
    formName.value = name;
    formEmail.value = email;   
  
}  
function showForm(event){
  showMy();
  letterForm = document.getElementById("letter-form");
  letterForm.classList.toggle("hide");
  letterForm.style.left = event.pageX-80+"px"; 

  function closeForm(){
    letterForm.classList.toggle("hide");     
  }
  close = document.getElementById("close");
  close.addEventListener("click", closeForm);

}

for (var j=0, env = envelope.length; j<env; j++){      
  envelope[j].addEventListener("click", showForm);
}
/* function closeForm(){
  letterForm.classList.toggle("hide");
   
} */
//close.addEventListener("click", closeForm);





