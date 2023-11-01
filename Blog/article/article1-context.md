#判断浏览进度方法
######代码如下
    window.addEventListener('scroll', updateProgressBar);  
    
    function updateProgressBar() {
    var windowHeight = window.innerHeight;
    var pageHeight = document.body.scrollHeight;
    var scrollPosition = window.scrollY;
    var progress = (scrollPosition / (pageHeight - windowHeight)) * 100;
    var jindu=document.querySelector('.jindu')
    jindu.innerHTML=`已近阅读 ${progress.toFixed(0)}%`
    }

1. window.addEventListener('scroll', updateProgressBar); 
意思是页面滑动的时候自动触发的监听事件，
2. innerHeight是页面的可读高度
3. scrollHeight是元素的高度，包括由于溢出导致的不可见的内容
4. scrollY文档相对于当前浏览器视口的滚动的距离
5. 