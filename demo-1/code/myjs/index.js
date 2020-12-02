// 轮播图
var next = document.querySelector('.btn-next'),
    pre = document.querySelector('.btn-pre'),
    lunImages = document.querySelectorAll('.lun>img')
    lunBox = document.querySelector('.lun')
    dotBox = document.querySelector('.dots');

var index = 0;
var timer = null;

for(var i=0; i<lunImages.length; i++){
    var dot = document.createElement('span')
    dot.className = 'dot';
    dot.setAttribute('data-id',i)
    dotBox.appendChild(dot);
}
var dots = document.querySelectorAll('.dot');
dots[index].className = 'dot dot-art'

autoPlay();
next.addEventListener('click',nextImage)
pre.addEventListener('click', preImage)
dotBox.addEventListener('click',function(e){
    index = e.target.getAttribute('data-id');
    lun();
})
lunBox.addEventListener('mouseover', function(){
    clearInterval(timer)
})
lunBox.addEventListener('mouseleave', function(){
    autoPlay();
})

function lun(){
    for(var i=0; i<lunImages.length; i++){
        lunImages[i].className = ''
        dots[i].className = 'dot'
    }
    lunImages[index].className = 'art'
    dots[index].className = 'dot dot-art'
}
function nextImage(){
    index++;
    if(index >= lunImages.length){
        index = 0;
    }
    lun()
}
function preImage(){
    index--;
    if(index <= 0){
        index = lunImages.length-1;
    }
    lun()
}
function setTimer(){
}
function autoPlay(){
    timer = setInterval(function(){
        nextImage();
    },2000)
}

// 商品类型切换

var productTypeBox = document.querySelectorAll('.products-title .right');
for(var i=0; i<productTypeBox.length; i++){
    productTypeBox[i].addEventListener('click',function(e){
        if(e.target.className !== 'product-type'){
            return;
        }
        var typeList = this.querySelectorAll('.product-type')
        for(var i=0; i<typeList.length; i++){
            typeList[i].className = 'product-type';
        }
        e.target.className = 'product-type item';
    })
}