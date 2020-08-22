setInterval(() => {
    setTimeout(() => {
        document.querySelector('.cursor').innerHTML = ' |'
    }, 500)
    document.querySelector('.cursor').innerHTML = ''
}, 1000)