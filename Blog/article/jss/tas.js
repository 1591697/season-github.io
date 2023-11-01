const icontasks=document.querySelector('.icon-tasks');
const limit=document.querySelector('.limit')
// alert(11)
var i=1;
icontasks.addEventListener('click',function(){
if(i===1){
limit.style.display='block'
i--;
}
else{
    limit.style.display='none'
    i++;
}
})