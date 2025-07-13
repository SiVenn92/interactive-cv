// backend/data.js
const educationHistory = [
  { 
    id: 1, 
    period: '2022 - Sekarang', 
    institution: 'Universitas Amikom Yogyakarta', 
    major: 'S1 - Teknik Informatika',
    mapUrl: 'https://maps.app.goo.gl/jnLZiA8WbL35P8nE7' // Contoh URL
  },
  { 
    id: 2, 
    period: '2019 - 2022', 
    institution: 'SMK WONGSOREJO GOMBONG', 
    major: 'Teknik Permesinan',
    mapUrl: 'https://maps.app.goo.gl/HZKyh9f5xuUkTQJg8' // Contoh URL
  }
];

const skills = [
  { 
    name: 'Vue.js', 
    level: 'Mahir',
    slug: 'vue-js',
    description: 'Vue.js adalah kerangka kerja JavaScript yang progresif dan mudah dipelajari untuk membangun antarmuka pengguna yang interaktif. Fokus utamanya adalah pada view layer dan dapat dengan mudah diintegrasikan ke dalam proyek besar.',
    projects: ['Membangun aplikasi portofolio pribadi ini.', 'Membuat dasbor admin untuk manajemen data.', 'Mengembangkan aplikasi Single Page Application (SPA) untuk toko online.']
  },
  { 
    name: 'JavaScript', 
    level: 'Mahir',
    slug: 'javascript',
    description: 'JavaScript adalah bahasa pemrograman fundamental untuk web. Digunakan untuk membuat halaman web yang dinamis, memanipulasi DOM, dan berinteraksi dengan server melalui AJAX/Fetch API.',
    projects: ['Implementasi logika interaktif pada berbagai proyek web.', 'Validasi form secara real-time.', 'Membuat komponen web kustom tanpa framework.']
  },
  { 
    name: 'Tailwind CSS', 
    level: 'Mahir',
    slug: 'tailwind-css',
    description: 'Tailwind CSS adalah kerangka kerja CSS utility-first untuk membangun desain kustom dengan cepat. Ia menyediakan kelas-kelas atomik yang bisa digabungkan langsung di dalam HTML.',
    projects: ['Mendesain seluruh tampilan portofolio ini.', 'Membuat ulang layout kompleks dari situs populer.', 'Mempercepat proses styling pada proyek berbasis Vue.js dan React.']
  },
  { 
    name: 'Node.js', 
    level: 'Menengah',
    slug: 'node-js',
    description: 'Node.js adalah lingkungan eksekusi JavaScript sisi server yang memungkinkan pembuatan aplikasi backend yang cepat dan skalabel. Sangat cocok untuk membangun REST API.',
    projects: ['Membangun REST API untuk aplikasi portofolio ini.', 'Membuat server untuk aplikasi chat sederhana menggunakan WebSocket.']
  },
  { 
    name: 'MySQL', 
    level: 'Menengah',
    slug: 'mysql',
    description: 'MySQL adalah sistem manajemen basis data relasional (RDBMS) yang populer dan andal. Digunakan secara luas untuk menyimpan data terstruktur pada aplikasi web.',
    projects: ['Merancang skema database untuk aplikasi e-commerce.', 'Mengelola data pengguna dan produk untuk berbagai aplikasi.']
  },
  { 
    name: 'PostgreSQL', 
    level: 'Menengah',
    slug: 'postgresql',
    description: 'PostgreSQL adalah RDBMS open-source yang sangat kuat dengan fitur-fitur canggih seperti dukungan untuk tipe data kompleks dan transaksi yang andal.',
    projects: ['Digunakan sebagai database untuk proyek yang membutuhkan integritas data tinggi.']
  },
  { 
    name: 'Git & GitHub', 
    level: 'Mahir',
    slug: 'git-github',
    description: 'Git adalah sistem kontrol versi terdistribusi untuk melacak perubahan pada kode. GitHub adalah platform hosting untuk repositori Git yang memfasilitasi kolaborasi tim.',
    projects: ['Mengelola semua riwayat kode proyek pribadi dan tim.', 'Berkolaborasi dengan developer lain menggunakan Pull Request dan Code Review.']
  },
  { 
    name: 'HTML5 & CSS3', 
    level: 'Mahir',
    slug: 'html-css',
    description: 'HTML5 dan CSS3 adalah pilar utama dari World Wide Web. HTML digunakan untuk struktur konten, sedangkan CSS digunakan untuk presentasi dan layout visual.',
    projects: ['Membangun struktur semantik untuk semua proyek web.', 'Membuat desain yang responsif dan animasi modern menggunakan CSS3.']
  }
];

// ### BAGIAN PROJECTS YANG DIPERBARUI SECARA LENGKAP ###
const projects = [
  { 
    title: 'Website Toko Online',
    slug: 'website-toko-online',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070',
    shortDescription: 'Platform e-commerce dengan fitur keranjang belanja dan manajemen produk.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    
    // --- Data Detail untuk Studi Kasus ---
    liveUrl: '#', // Ganti dengan link demo
    githubUrl: '#', // Ganti dengan link GitHub
    fullDescription: 'Proyek ini adalah sebuah platform e-commerce fungsional yang dibangun untuk mensimulasikan pengalaman belanja online dari sisi pengguna dan admin. Pengguna dapat mendaftar, login, melihat produk, menambahkan item ke keranjang, dan menyelesaikan proses checkout. Admin memiliki dasbor khusus untuk mengelola data produk, melihat pesanan masuk, dan memperbarui status pengiriman.',
    myRole: 'Full-Stack Developer',
    challenge: 'Tantangan utama adalah memastikan data antara keranjang belanja di frontend dan stok produk di backend selalu sinkron secara real-time untuk menghindari penjualan barang yang stoknya sudah habis.',
    solution: 'Saya mengimplementasikan logika di backend untuk memeriksa ketersediaan stok setiap kali item ditambahkan ke keranjang dan sebelum proses checkout. Di frontend, state dikelola secara efisien menggunakan Pinia untuk memberikan feedback langsung kepada pengguna jika ada perubahan stok.',
    features: [
      'Autentikasi pengguna menggunakan JWT (JSON Web Tokens)',
      'Dasbor admin untuk operasi Create, Read, Update, Delete (CRUD) produk',
      'Keranjang belanja yang persisten (tersimpan di database)',
      'Pencarian produk berdasarkan nama dan kategori',
      'Desain yang sepenuhnya responsif untuk desktop dan mobile'
    ],
    gallery: [
      'https://via.placeholder.com/1280x720?text=Toko+Online+-+Halaman+Utama',
      'https://via.placeholder.com/1280x720?text=Toko+Online+-+Halaman+Produk',
      'https://via.placeholder.com/1280x720?text=Toko+Online+-+Keranjang+Belanja'
    ]
  },
  { 
    title: 'Aplikasi Manajemen Tugas',
    slug: 'aplikasi-manajemen-tugas',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
    shortDescription: 'Aplikasi untuk melacak progres tugas harian dengan antarmuka yang bersih.',
    tech: ['React', 'Firebase'],

    // --- Data Detail untuk Studi Kasus ---
    liveUrl: '#', // Ganti dengan link demo
    githubUrl: '#', // Ganti dengan link GitHub
    fullDescription: 'Sebuah aplikasi web berbasis React untuk membantu pengguna mengelola tugas harian mereka. Aplikasi ini menggunakan Firebase untuk autentikasi pengguna dan sebagai database real-time (Firestore), memungkinkan data tugas tersinkronisasi secara otomatis di berbagai perangkat.',
    myRole: 'Frontend Developer',
    challenge: 'Tantangan teknisnya adalah membuat antarmuka yang mulus dan reaktif untuk memindahkan tugas antar kolom (misal: "To Do", "In Progress", "Done") menggunakan fungsionalitas drag-and-drop.',
    solution: 'Saya menggunakan library `react-beautiful-dnd` untuk mengimplementasikan fungsionalitas drag-and-drop. Logika untuk memperbarui urutan dan status tugas di database Firestore di-handle setelah aksi drop selesai, memastikan konsistensi data.',
    features: [
      'Login dan registrasi aman menggunakan Firebase Authentication',
      'Membuat, mengedit, dan menghapus tugas',
      'Fungsionalitas drag-and-drop untuk mengubah status tugas',
      'Penyimpanan data real-time dengan Cloud Firestore',
      'Filter tugas berdasarkan prioritas atau tanggal'
    ],
    gallery: [
      'https://via.placeholder.com/1280x720?text=Manajemen+Tugas+-+Tampilan+Papan',
      'https://via.placeholder.com/1280x720?text=Manajemen+Tugas+-+Form+Tugas'
    ]
  }
];

module.exports = { educationHistory, skills, projects };