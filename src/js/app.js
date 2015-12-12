var i = document.querySelectorAll('.button');
var o = document.querySelectorAll('.cont');
//var a = document.querySelectorAll('active');


for(var num = 0, length = i.length; num < length; num++) {
    o[num].classList.add('none');
    o[0].classList.remove('none');
    o[0].classList.add('active');
    (function (art) {
        i[num].addEventListener("click", function () {
            //a.classList.remove('active');
            //a.classList.add('none');
            //o[0].classList.remove('active');
            o[0].classList.add('none');
            o[1].classList.add('none');
            o[2].classList.add('none');
            o[art].classList.remove('none');
            o[art].classList.add('active');
        }, false);
    })(num);
}

