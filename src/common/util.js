export function loadMore(target, callback) {
    let timer;
    target.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            let {offsetHeight, scrollHeight, scrollTop} = target;
            if (scrollTop + offsetHeight + 20 >= scrollHeight) {
                console.log(111);
                callback();
            }
        }, 30);
    }, false);
}

export function refresh(target,cb) {
    let distance = target.offsetTop;
    function touchStart() {
        let {offsetTop,scrollTop} = target;

        if (scrollTop===0&&offsetTop===distance){
            console.log(222);
        }
    }

    function touchMove() {

    }

    function touchEnd() {
        target.removeEventListener('touchstart');
        target.removeEventListener('touchmove');
    }
    target.addEventListener('touchstart',touchStart,false);
    target.addEventListener('touchmove',touchMove,false);
    target.addEventListener('touchend',touchEnd,false);
}