"use client";

import AOS from 'aos';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    initial: "A",
    rating: 5,
    comment: "Materi yang disediakan sangat lengkap dan mudah dipahami. Simulasi ujiannya mirip banget dengan ujian sebenarnya. Berkat ini saya bisa lulus UKOM dengan nilai memuaskan!"
  },
  {
    id: 2,
    name: "Siti Rahayu",
    initial: "S",
    rating: 5,
    comment: "Aplikasinya sangat membantu dalam persiapan ujian. Soal-soalnya update dan pembahasannya jelas. Fitur catatan digitalnya juga sangat berguna untuk belajar."
  },
  {
    id: 3,
    name: "Dewi Anggraeni",
    initial: "D",
    rating: 5,
    comment: "Sangat worth it untuk harganya! Saya bisa belajar kapan saja dan di mana saja. Hanya saja terkadang server agak lambat saat peak time, tapi secara keseluruhan sangat membantu."
  },
  {
    id: 4,
    name: "Budi Santoso",
    initial: "B",
    rating: 5,
    comment: "Pembelajaran menjadi lebih terstruktur dengan platform ini. Saya bisa memantau perkembangan belajar saya melalui fitur statistik yang disediakan."
  },
  {
    id: 5,
    name: "Rina Wijaya",
    initial: "R",
    rating: 5,
    comment: "Tim support sangat responsif. Ketika saya mengalami kesulitan, mereka dengan cepat membantu menyelesaikan masalah saya."
  },
  {
    id: 6,
    name: "Faisal Abdullah",
    initial: "F",
    rating: 5,
    comment: "Soal-soal tryout sangat membantu dalam persiapan ujian. Pembahasan yang diberikan sangat detail dan mudah dimengerti."
  },
  {
    id: 7,
    name: "Maya Sari",
    initial: "M",
    rating: 5,
    comment: "UI/UX-nya sangat user friendly. Saya tidak kesulitan dalam mengoperasikan aplikasi ini meskipun tidak terlalu paham teknologi."
  },
  {
    id: 8,
    name: "Hendra Kurniawan",
    initial: "H",
    rating: 5,
    comment: "Harga sangat terjangkau untuk kualitas yang diberikan. Saya merekomendasikan platform ini ke semua teman sekelas saya."
  },
  {
    id: 9,
    name: "Linda Permata",
    initial: "L",
    rating: 5,
    comment: "Belajar menjadi lebih menyenangkan dengan fitur gamification-nya. Saya termotivasi untuk terus meningkatkan skor saya."
  }
];

const Content = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <main className="bg-gradient-to-b from-blue-50 to-white">
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

            {/* Hero Section */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6 lg:gap-12 px-4">
                    <img
                        src="img/main.jpg"
                        className="w-full md:max-w-lg rounded-lg shadow-2xl"
                        data-aos="fade-up"
                        alt="Siswa Belajar"
                    />
                    <div data-aos="fade-right" className="text-center lg:text-left px-2">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            <span className="text-blue-600">Hadapi Ujian</span><br />
                            <span className="text-gray-800">Dengan Mudah</span><br />
                            <span className="text-blue-400">Bersama Kami</span>
                        </h1>
                        <p className="py-4 md:py-6 text-base md:text-lg">
                            Platform kursus online Sinersi & Sivoki menyediakan simulasi ujian realistis
                            dan materi pembelajaran terjamin untuk membantu kesuksesan akademik Anda.
                        </p>
                        <a href='#belajar'><button className="btn btn-primary px-6 py-2 md:px-8 md:py-3 text-base md:text-lg">
                            Mulai Belajar Sekarang
                        </button></a>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">
                    Mengapa Memilih Kami?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="card bg-white shadow-xl p-4 md:p-6" data-aos="flip-up">
                        <div className="text-blue-500 text-3xl md:text-4xl mb-3 md:mb-4">📚</div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Materi Lengkap</h3>
                        <p className="text-sm md:text-base">Kurikulum terupdate mencakup semua topik ujian dengan pembahasan mendalam.</p>
                    </div>

                    <div className="card bg-white shadow-xl p-4 md:p-6" data-aos="flip-up" data-aos-delay="200">
                        <div className="text-blue-500 text-3xl md:text-4xl mb-3 md:mb-4">✍️</div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Latihan Soal</h3>
                        <p className="text-sm md:text-base">Bank soal berkualitas tinggi dengan variasi pertanyaan mirip ujian sebenarnya.</p>
                    </div>

                    <div className="card bg-white shadow-xl p-4 md:p-6" data-aos="flip-up" data-aos-delay="400">
                        <div className="text-blue-500 text-3xl md:text-4xl mb-3 md:mb-4">⏱️</div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Simulasi Ujian</h3>
                        <p className="text-sm md:text-base">Pengalaman ujian realistis dengan timer dan penilaian otomatis.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-50 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">
                        Ulasan Pengguna
                    </h2>

                    <div data-aos="fade-up">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                            className="pb-12" // Add padding for pagination
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="card bg-white shadow-lg p-6 h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="avatar mr-4">
                                                <div className="w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 text-xl">{testimonial.initial}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{testimonial.name}</h4>
                                                <div className="rating rating-sm">
                                                    {[...Array(5)].map((_, i) => (
                                                        <input
                                                            key={i}
                                                            type="radio"
                                                            name={`rating-${testimonial.id}`}
                                                            className="mask mask-star"
                                                            checked={i < testimonial.rating}
                                                            readOnly
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            "{testimonial.comment}"
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Our Platforms */}
            <div className="bg-blue-400 text-white py-12 md:py-16" id='belajar'>
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">
                        Platform Kami
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
                        <div className="card bg-white text-gray-800 w-full max-w-sm md:max-w-md" data-aos="fade-down-right">
                            <figure className="px-6 md:px-10 pt-6 md:pt-10">
                                <img src="img/siners.png" alt="Sinersi" className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body items-center text-center p-4 md:p-6">
                                <h2 className="card-title text-lg md:text-xl">SinersiMobile</h2>
                                <p className="text-sm md:text-base">Platform latihan UJI KOMPETENSI NERS terbaik di Indonesia dengan materi terupdate dari tim AIPNI.</p>
                                <div className="card-actions mt-3 md:mt-4">
                                    <a href="https://sinersimobile.id" className="btn btn-primary btn-sm md:btn-md">Kunjungi</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-lg md:text-xl font-bold my-3 md:my-4" data-aos="fade-up">ATAU</div>

                        <div className="card bg-white text-gray-800 w-full max-w-sm md:max-w-md" data-aos="fade-up-right">
                            <figure className="px-6 md:px-10 pt-6 md:pt-10">
                                <img src="img/sivoki.png" alt="Sivoki" className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body items-center text-center p-4 md:p-6">
                                <h2 className="card-title text-lg md:text-xl">SivokiMobile</h2>
                                <p className="text-sm md:text-base">Platform latihan keperawatan dengan simulasi UKOMNAS dan 800+ soal terupdate dari tim AIPViKI.</p>
                                <div className="card-actions mt-3 md:mt-4">
                                    <a href="https://sivokimobile.id" className="btn btn-primary btn-sm md:btn-md">Kunjungi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="stats stats-vertical md:stats-horizontal shadow w-full" data-aos="zoom-in">
                    <div className="stat">
                        <div className="stat-title">Materi Pembelajaran</div>
                        <div className="stat-value text-blue-600">1K+</div>
                        <div className="stat-desc">Terupdate secara berkala</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Pengguna Aktif</div>
                        <div className="stat-value text-blue-600">5,000+</div>
                        <div className="stat-desc">Peserta bergabung</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Tingkat Kelulusan</div>
                        <div className="stat-value text-blue-600">92%</div>
                        <div className="stat-desc">Berhasil lulus ujian</div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">
                    Pertanyaan yang Sering Diajukan
                </h2>

                <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
                    <div className="collapse collapse-plus bg-white shadow-md" data-aos="fade-up">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-base md:text-lg font-medium">
                            Bagaimana sistem langganannya?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sm md:text-base">Kami menawarkan paket langganan dengan masa aktif hingga 3 bulan. Anda bisa memilih paket bulanan atau langsung 3 bulan dengan harga lebih hemat.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-white shadow-md" data-aos="fade-up" data-aos-delay="100">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-base md:text-lg font-medium">
                            Metode pembayaran apa saja yang tersedia?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sm md:text-base">Kami menerima pembayaran melalui QRIS, transfer bank (BCA, Mandiri, BRI, BNI), dan e-wallet (GoPay, OVO, Dana).</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-white shadow-md" data-aos="fade-up" data-aos-delay="200">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-base md:text-lg font-medium">
                            Apakah materinya selalu diperbarui?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sm md:text-base">Ya, tim ahli kami secara rutin memperbarui materi sesuai perkembangan kurikulum terbaru dan kebutuhan ujian.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-400 text-white py-12 md:py-16 text-center">
                <div className="container mx-auto px-4" data-aos="zoom-in">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Siap Memulai Perjalanan Belajarmu?</h2>
                    <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan peserta lainnya dan raih kesuksesan dalam ujianmu!
                    </p>
                    <a className="btn btn-info btn-md md:btn-lg px-8 md:px-10 text-white" href='#belajar'>
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Content