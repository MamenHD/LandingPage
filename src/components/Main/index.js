const Hero = () => {
    return (
        <header className="relative min-h-screen flex items-center">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(img/hero.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="md:text-7xl text-5xl font-bold motion-scale-in-[0.5] motion-opacity-in-[0%] motion-ease-spring-bouncier">Hadapi Ujian Dengan Mudah</h1>
                        <h1 className="mb-8 md:text-7xl text-5xl font-bold bg-gradient-to-r from-white via-red-300 to-indigo-400 inline-block text-transparent bg-clip-text motion-translate-x-in-[25%] motion-translate-y-in-[0%] motion-duration-[850ms] motion-ease-spring-smooth">Bersama Kami</h1>
                        <p className="md:mb-10 mb-6 md:text-4xl text-xl motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[1000ms] motion-delay-[2ms] motion-delay-[0ms]/translate motion-delay-[0ms]/opacity motion-delay-[0ms]/blur motion-ease-out-cubic">
                            Sinersi & Sivoki Platform Online Course<br/> simulasi ujian realistis dan materi terjamin
                        </p>
                        <a href="#Belajar"><button className="btn btn-soft btn-secondary md:text-3xl md:p-7 md:rounded-2xl text-2xl p-5 rounded-xl motion-translate-x-loop-[0%] motion-translate-y-loop-[100%] motion-duration-[2000ms]/translate motion-ease-spring-bouncier">Mulai Belajar</button></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;