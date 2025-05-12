const Content = () => {
    return (
        <main>

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


            <div className="hero bg-base-200 min-h-screen">
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
        </main>
    )
}

export default Content