export function loadMore(target, callback) {
    let timer;
    target.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            let {offsetHeight, scrollHeight, scrollTop} = target;
            if (scrollTop + offsetHeight + 20 >= scrollHeight) {
                callback();
            }
        }, 30);
    }, false);
}

export function refresh(target, cb) {
    let distance = target.offsetTop;//默认content不动时的位置
    let startY;
    let move;

    function touchMove(e) {
        console.log("move");
        //根据手指的位移，改变scrollTop的值
        move = e.touches[0].pageY - startY;
        if (move > 0) {
            console.log(move);
            move = Math.min(move, 80);//设置拉动的最大距离
            target.style.top = move + distance + 'px';
        } else {//如果是向上拉，解除事件监听
            target.removeEventListener('touchmove', touchMove);
            target.removeEventListener('touchend', touchEnd);
        }
    }

    function touchEnd() {
        if (move < 80) return target.style.top = 0;//如果没有拉到下拉刷新的位置，直接滚回去；
        let timer = setInterval(() => {
            move -= 2;
            if (move <= 0) {
                clearInterval(timer);
                cb();
            }
            target.style.top = move + distance + 'px';
        }, 8);
        target.removeEventListener('touchmove', touchMove);
        target.removeEventListener('touchend', touchEnd);
    }

    function touchStart(e) {
        startY = e.touches[0].pageY;
        console.log(startY);
        let {offsetTop, scrollTop} = target;

        if (scrollTop === 0 && offsetTop === distance) {
            target.addEventListener('touchmove', touchMove);
            target.addEventListener('touchend', touchEnd);
        }
    }

    target.addEventListener('touchstart', touchStart, false);

}