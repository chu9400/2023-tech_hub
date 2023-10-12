import Lenis from "@studio-freight/lenis";

const lenis = () => {
    const lenis = new Lenis({
        duration:1,
        easing: (t) => 1 - Math.pow(1 - t, 5),
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
    
}

export default lenis;