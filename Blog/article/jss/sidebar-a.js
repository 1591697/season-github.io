
const iconArrowdown=document.querySelector('.icon-arrowdown');
const sidebar=document.querySelector('.sidebars');
const body=document.querySelector('.body');
var i=1;
iconArrowdown.addEventListener('click',function(e){
    e.preventDefault();
    if(i===0){
        iconArrowdown.className=' iconfont icon-arrowdown icon-arrowdownaf';
        i++;
        
        sidebar.className='sidebars';
        body.className='body'
       
    }
    else{
    iconArrowdown.className=' iconfont icon-arrowdown icon-arrowdownbe';
    i--;
   

    sidebar.className='sidebarbe';
    body.className='bodys';
    }
   //if else
})






