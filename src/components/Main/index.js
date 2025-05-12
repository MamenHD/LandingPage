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
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Fokus pada Persiapan Ujian</h1>
                        <p className="mb-5">
                            Sukses Ujian Ners & Keperawatan Lebih Mudah dengan Sinersi & Sivoki!
                            Tryout berkualitas, pembahasan lengkap, dan simulasi ujian terbaik. Siapkan dirimu sekarang!
                        </p>
                        <button className="btn btn-primary">Mulai Belajar</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;