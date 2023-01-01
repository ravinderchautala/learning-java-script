const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // if (btn.style.color === 'white') {
        //     this.style.color = 'green';
        // } else {
        //     this.style.color = 'white';
        // }

        // currentTarget
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'green';

        // target
        console.log(e.target);
        e.target.style.color = 'green';
    })
})