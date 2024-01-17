let backgroungImg = document.getElementById('backgroungImg');
let pg1text = document.getElementById('pg1text');

window.addEventListener('scroll',() =>{
    let value = window.scrollY

    pg1text.style.marginTop = value * 2.5 + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.querySelector('.btn');
    
    downloadButton.addEventListener('click', function () {
      const resumeUrl = this.getAttribute('href');
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'EvelineChazaRESUME.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

const headLine = new SplitType('h1')
        const myText2 = new SplitType('p', {charClass:'char2'})
        var tl = gsap.timeline({defaults: {ease: "Expo.easeInOut"}})

        tl.from('.char', {
            y: -100,
            stagger: 0.05,
            delay: 1
        })
        .from('.char2', {
            y: -100,
            stagger: 0.05,
            duration: .6
        }, "-=1.2")
        .to('h1,p', {
            y: 130,
            delay: .4,
            duration: 1.4
        })