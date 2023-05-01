console.log('working');



const animation = () => {

    // animation starts. 

    const timeline = anime.timeline({
        duration: 900,
        easing: 'easeOutExpo'
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
    }, '-=900')
    const hide = () => {

        // dom manuplation starts here

        const topTitle = document.getElementById('pick')
        topTitle.classList.add("visually-hidden")


        const Title = document.getElementById('pickMost')
        Title.classList.add("visually-hidden")


        const downList = document.getElementById('edit')
        downList.classList.add("visually-hidden")


        document.getElementById('left').style.display = 'none'
        document.getElementById('right').style.display = 'none'


        const centerNonV = document.getElementById('centerNV')
        centerNonV.classList.add("visually-hidden")

        const pNV = document.getElementById('paNV')
        pNV.classList.add("visually-hidden")

        document.getElementById('hideS').style.display = "block"


        const sidecard = () => {
            document.getElementById('hideS').style.display = "none"
            const sideData = document.getElementById('centerV')
            sideData.classList.remove('visually-hidden')


            const spanText = document.getElementById('spanText')
            spanText.classList.add('visually-hidden')
            spanText.style.transition = "all 2s"


            const btnText = document.getElementById('btnText')
            btnText.classList.remove('visually-hidden')


            const imgSpin = () => {
                const load = document.getElementById('kmap')
                load.classList.add('visually-hidden')

                const dateData = document.getElementById('dateData')
                dateData.classList.remove('visually-hidden')
            }
            setTimeout(imgSpin, 500)


            const load = document.getElementById('kmap')
            load.classList.remove('visually-hidden')

            const backG = document.getElementById('backG')
            backG.style.transition = "all 2s ease "
            backG.style.backgroundImage = "url('./back.png')"









            const windoSize = window.innerWidth
            console.log(windoSize);
            if (windoSize > 580) {
                const reset = document.getElementById('reset')
                reset.innerText = 'Choose Base Plan'
            } else {
                const reset = document.getElementById('reset')
                reset.innerText = 'Back'
            }



        }
        setTimeout(sidecard, 1000)


    }
    setTimeout(hide, 400)

    const windoSize = window.innerWidth
    console.log(windoSize);
    if (windoSize > 580) {
        timeline.add({
            targets: '.targetCenter',
            translateX: 320,
            uration: 3000,
        })

        timeline.add({
            targets: '.targetButton',
            translateX: 450,
            uration: 3000,
        }, '-=1000')
    }






}



const handleClick = () => {
    animation()
}

