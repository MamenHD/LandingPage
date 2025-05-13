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
                        <h1 className="md:text-7xl text-5xl font-bold ">Hadapi Ujian Dengan Mudah</h1>
                        <h1 className="mb-8 md:text-7xl text-5xl font-bold bg-gradient-to-r from-white via-red-300 to-indigo-400 inline-block text-transparent bg-clip-text">Bersama Kami</h1>
                        <p className="md:mb-10 mb-6 md:text-4xl text-xl">
                            Sinersi & Sivoki Platform Online Course<br/> simulasi ujian realistis dan materi terjamin
                        </p>
                        <a href="#Belajar"><button className="btn btn-soft btn-secondary md:text-3xl md:p-7 md:rounded-2xl text-2xl p-5 rounded-xl">Mulai Belajar</button></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;