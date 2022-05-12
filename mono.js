const navBar = document.getElementsByClassName('navbar')

window.addEventListener('scroll', () => {
    if (scrollY > 20){
        navBar.classlist.add('active')
    }else {
        navBar.classlist.remove('active')
    }
})