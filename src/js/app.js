var tabSwitch = function() {
    var $trigger = document.querySelectorAll('.button');
    var $target = document.querySelectorAll('.cont');
    var $active;
    for (var num = 0, length = $trigger.length; num < length; num++) {
        $target[num].classList.add('none');
        $target[0].classList.remove('none');
        $target[0].classList.add('active');
        (function (index) {
            $trigger[num].addEventListener("click", function(){
                $active = document.querySelector('.active');
                $active.classList.add('none');
                $active.classList.remove('active');
                $target[index].classList.add('active');
                $target[index].classList.remove('none');
            });
        })(num);
    }
};

tabSwitch();


