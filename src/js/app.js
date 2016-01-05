var tabSwitch = function(active_num) {
    var $trigger = document.querySelectorAll('.button'),
        $target = document.querySelectorAll('.cont'),
        $active,
        length = $trigger.length;
    for (var num = 0; num < length; num++) {
        $target[num].classList.add('none');
        $target[active_num].classList.remove('none');
        $target[active_num].classList.add('active');
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
tabSwitch(0);


