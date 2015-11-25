var i = document.querySelectorAll('.button');
var r = document.querySelectorAll('.tabInner');
var o = document.querySelectorAll('.cont');
var oNum = o.length;
//for(var num = 0, length = i.length; num < length; num++){
//    (function(art){
//        i[num].addEventListener("click",function(){
//            r.classList.add('none');
//            //document.querySelectorAll('.tabInner > p')[art].classList.add('block');
//        }, false);
//    })(num);
//}

for(var num = 0, length = i.length; num < length; num++) {
    o[num].classList.add('none');
    (function (art) {
        i[num].addEventListener("click", function () {
            //r.classList.add('none');
            o[art].classList.remove('none');
            console.log(oNum)
        }, false);
    })(num);
}

