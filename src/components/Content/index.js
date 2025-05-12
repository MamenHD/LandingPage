const Content = () => {
    return (
        <main>
            {/* Hero Section */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="img/main.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-7xl font-bold pb-4 pe-5">Pembelajaran Terbaik</h1>
                        <div className="space-y-3 mb-5">
                            <div className="flex items-center text-2xl">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                <span>Latihan soal berkualitas</span>
                            </div>
                            <div className="flex items-center text-2xl">
                                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                <span>Pembahasan mendalam</span>
                            </div>
                            <div className="flex items-center text-2xl">
                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                <span>Simulasi ujian realistis</span>
                            </div>
                        </div>
                        <button className="btn btn-primary">Mulai Belajar</button>
                    </div>
                </div>
            </div>

            {/* Stats Section - Now centered between hero and content */}
            <div className="flex justify-center my-8">
                <div className="stats shadow w-full max-w-4xl">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Materi</div>
                        <div className="stat-value">1K+</div>
                        <div className="stat-desc">Terupdate</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Pengguna</div>
                        <div className="stat-value">5,000</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Pengguna Baru</div>
                        <div className="stat-value">2,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div>
                <h1 className="text-center p-7 md:text-4xl text-2xl divider"><b>Platform Belajar Nyaman</b></h1>
            </div>

            <div className="flex w-full flex-col md:flex-row pe-4 px-4 pb-8 indicator items-center justify-center">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="divider md:divider-horizontal">OR</div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-4xl px-4 py-7"><b>Pertanyaan Umum</b></h1>

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