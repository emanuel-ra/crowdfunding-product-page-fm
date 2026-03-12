const paths = {
    heroMobile: './image-hero-mobile.jpg',
    heroDesktop: './image-hero-desktop.jpg',
}
export function Hero() {    
    return (
        <section className="hero bg-[url('./image-hero-mobile.jpg')] md:bg-[url('./image-hero-desktop.jpg')] md:min-h-[600px] bg-cover bg-center">
        </section>
    )
}