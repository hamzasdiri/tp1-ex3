var parent = document.querySelector('.input');
var button = document.querySelector('.btn');
parent.addEventListener('keyup',(e)=>{
    var inputs = document.querySelectorAll('.mb-3 [type=text]');
    
    if(inputs[0].value != '' && inputs[1].value != ''){
        button.removeAttribute("disabled");
    }else{
        button.setAttribute("disabled","true");
    }
});

button.addEventListener('click',(e)=>{
    var ol = document.querySelector('ul');
    var li = document.createElement('li');
    var i = document.createElement(i);
    var name = document.querySelector('#name');
    var content = document.querySelector('#content');


    i.setAttribute("class" ,"fas fa-trash");
    var text = document.createTextNode(name.value + ' : ' + content.value + ' ');
    li.appendChild(text);
    li.appendChild(i);
    li.classList.add("list-group-item");
    ol.appendChild(li);


    i.addEventListener('click',(e)=>{
        ol.removeChild(li);
    });
});




