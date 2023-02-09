console.log('working');



const animation = () => {
    const timeline = anime.timeline({
        duration: 1000,
        easing: "easeOutExpo"
    });
    timeline.add({
        targets: '.targetleft',
        translateX: 250,
        uration: 3000,

    });
    timeline.add({
        targets: '.targetRight',
        translateX: -250,
        direction: 'reverse',
        uration: 3000,
    }, '-=1000')
    document.getElementById('left').style.display = 'none'
    document.getElementById('right').style.display = 'none'

}



const handleClick = () => {
    // return alert("done")
    animation()
}

