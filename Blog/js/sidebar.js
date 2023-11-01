
const iconArrowdown=document.querySelector('.icon-arrowdown');
const sidebar=document.querySelector('.sidebar');
// alert(11)
var i=1;
iconArrowdown.addEventListener('click',function(e){
    e.preventDefault();
    if(i===0){
        iconArrowdown.className=' iconfont icon-arrowdown icon-arrowdownaf';
        i++;

        sidebar.className='sidebar';
       
    }
    else{
    iconArrowdown.className=' iconfont icon-arrowdown icon-arrowdownbe';
    i--;
   

    sidebar.className='sidebarbe';
    }
   //if else
})


