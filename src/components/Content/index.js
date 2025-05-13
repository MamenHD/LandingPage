const Content = () => {
    return (
        <main>
            {/* Hero Section */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse m-10">
                    <img
                        src="img/main.jpg"
                        className="md:max-w-sm rounded-lg shadow-2xl motion-rotate-loop-[6deg] motion-duration-[1000ms] motion-ease-spring-bounciest "
                    />
                    <div>
                        <h1 className="md:text-7xl text-5xl font-bold pb-4 pe-5 motion-scale-in-[1.5] motion-opacity-in-[0%] motion-delay-[3ms] motion-delay-[0ms]/scale motion-delay-[0ms]/opacity motion-ease-spring-bouncier">Pembelajaran Terbaik</h1>
                        <div className="space-y-3 mb-5">
                            <div className="flex items-center text-2xl motion-translate-x-in-[25%] motion-translate-y-in-[0%] motion-duration-[1000ms] motion-delay-[2ms] motion-delay-[0ms]/translate">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 "></div>
                                <span>Latihan soal berkualitas</span>
                            </div>
                            <div className="flex items-center text-2xl motion-translate-x-in-[25%] motion-translate-y-in-[0%] motion-duration-[1300ms] motion-delay-[3ms] motion-delay-[0ms]/translate">
                                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                <span>Pembahasan mendalam</span>
                            </div>
                            <div className="flex items-center text-2xl motion-translate-x-in-[25%] motion-translate-y-in-[0%] motion-duration-[1500ms] motion-delay-[4ms] motion-delay-[0ms]/translate">
                                <div className="w-2 h-2 bg-accent rounded-full mr-3 "></div>
                                <span>Simulasi ujian realistis</span>
                            </div>
                        </div>
                        <a href="#Belajar"><button className="btn btn-outline btn-info motion-translate-x-in-[25%] motion-translate-y-in-[0%] motion-duration-[1000ms] motion-delay-[2ms] motion-delay-[0ms]/translate">Mulai Belajar</button></a>
                    </div>
                </div>
            </div>

            {/* Stats Section - Responsive */}
            <div className="flex justify-center my-4 md:my-8 px-2">
                <div className="stats stats-vertical md:stats-horizontal shadow w-full max-w-4xl">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 md:h-8 md:w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title text-sm md:text-base">Materi</div>
                        <div className="stat-value text-2xl md:text-3xl">1K+</div>
                        <div className="stat-desc text-xs md:text-sm">Terupdate</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 md:h-8 md:w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title text-sm md:text-base">Pengguna</div>
                        <div className="stat-value text-2xl md:text-3xl">5,000</div>
                        <div className="stat-desc text-xs md:text-sm">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 md:h-8 md:w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title text-sm md:text-base">Pengguna Baru</div>
                        <div className="stat-value text-2xl md:text-3xl">2,200</div>
                        <div className="stat-desc text-xs md:text-sm">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div>
                <h1 className="text-center p-7 md:text-4xl text-2xl"><b>Platform Belajar Nyaman</b></h1>
            </div>

            <div className="flex w-full flex-col md:flex-row pe-4 px-4 pb-8 indicator items-center justify-center" id="Belajar">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="img/siners.png"
                            alt="Sinersi" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-4">SinersiMobile</h2>
                        <p>Platform latihan UJI KOMPETENSI NERS Terbaik di Indonesia<br/> Pelatihan NERS terbaik dengan materi terupdate dari tim AIPNI buat kamu KOMPETEN di UKOMNAS</p>
                        <div className="card-actions">
                            <a href="https://sinersimobile.id"><button className="btn btn-info mt-5">Kunjungi</button></a>
                        </div>
                    </div>
                </div>
                <div className="divider md:divider-horizontal">Atau</div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="img/sivoki.png"
                            alt="Sivoki" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-4">SivokiMobile</h2>
                        <p>Platform Latihan Keperawatan Dengan Simulasi UKOMNAS <br/>Terdiri dari 800+ soal soal terupdate dan simulasi soal Try Out layaknya UKOM yang dibuat oleh tim AIPViKI</p>
                        <div className="card-actions justify-end">
                            <a href="https://sivokimobile.id"><button className="btn btn-info mt-5">Kunjungi</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-12 px-4 text-center md:mx-50 mx-4 md:me-50 me-4 mb-5 rounded-2xl">
                <div className="max-w-4xl mx-auto">
                    <div className="text-sm uppercase font-bold tracking-wider mb-2">Upgrade Pengetahuanmu</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Bersama Sinersi & Sivoki</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-secondary motion-scale-loop-[1.25] motion-duration-[1000ms] motion-ease-in-out">Gabung Sekarang</button>
                    </div>
                    <p className="text-lg max-w-2xl mx-auto">
                        Platform pembelajaran ners dan keperawatan lengkap dan terjamin.
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-4xl px-4 py-7 text-center"><b>Pertanyaan Umum</b></h1>

                <div className="m-4 mb-7">
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Sistem langganan bagaimana?</div>
                        <div className="collapse-content text-sm">Untuk Langganan kita menerapkan masa aktif sampai 3 bulan.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Untuk cara pembayaran bagaimana?</div>
                        <div className="collapse-content text-sm">Untuk pembayaran bisa melalui Qris atau transfer bank.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Apakah Materinya terjamin?</div>
                        <div className="collapse-content text-sm">Materi dari kami sudah pasti terjamin oleh para ahli.</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content