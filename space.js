function loadingAnimation(){
    gsap.from(".cosmos",{
        y:100,
        scale: .1,
        delay: .7,
        duration:1,
        stagger:.9
    
    })}
function loadingAnimation2(){
        gsap.from(".cosmosInfo",{
            y:100,
            opacity:0,
            delay:1.7,
            duration:1,
            stagger:1,
            
        
        })}
gsap.from('.galaxy h1',{
    opacity:0,
    y: 100,
    duration:.9,
    scrollTrigger: {
        trigger: '.galaxy h1',
        start: 'top 60%',
        
        scroller: 'body',
    }
})
gsap.from(".galaxyImg",{
    scale:0,
    duration:.5,
    delay:.5,
    scrollTrigger: '.galaxyImg'
})
gsap.from(".galaxy article",{
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: '.galaxy article'
})
gsap.from('.blackHole h1',{
    opacity:0,
    y: 100,
    duration:.9,
    scrollTrigger: {
        trigger: '.blackHole h1',
        start: 'top 60%',
        
        scroller: 'body',
    }
})
gsap.from(".blackHoleImg",{
    scale:0,
    duration:.5,
    delay:.5,
    scrollTrigger: '.blackHoleImg'
})
gsap.from(".blackHole article",{
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: '.blackHole article'
})
loadingAnimation()

loadingAnimation2()
        
