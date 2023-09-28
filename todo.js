window.addEventListener('load', () => {
var intake = document.getElementById("intake");
var list = document.getElementById("list");
intake.addEventListener("keypress", function(event){
if(event.key === "Enter"){
var input=intake.value;
if(input==''){
alert("don't have TASKS...?");
}
else{
const task = document.createElement('div');
task.classList.add('task');

const a = document.createElement('div');
a.classList.add('a');
a.innerHTML=input;
intake.value='';
const b = document.createElement('div');
b.classList.add('b');

const done = document.createElement('button'); 
done.classList.add('done');
const remove = document.createElement('button');
remove.classList.add('remove');

remove.innerHTML="REMOVE";
done.innerHTML="DONE"; 


task.appendChild(a);
task.appendChild(b);
b.appendChild(done);
b.appendChild(remove);
list.appendChild(task);


remove.addEventListener('click',(e)=>{
    list.removeChild(task);
})
done.addEventListener('click',(e)=>{
    b.removeChild(done);
    task.style.backgroundColor="rgba(93, 255, 18,0.6)";
    a.style.textDecoration="line-through";
    task.style.boxShadow=" 2px 2px 5px black";
});
};
};
});
});
