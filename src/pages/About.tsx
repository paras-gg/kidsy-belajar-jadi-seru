import { Heart, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang <span className="text-gradient">kidsy</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami percaya setiap anak berhak mendapatkan pendidikan yang menyenangkan dan berkualitas.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Cerita Kami</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              kidsy lahir dari keresahan seorang ibu yang ingin memberikan stimulasi terbaik untuk anaknya. Kami memahami tantangan orang tua dalam mencari materi edukasi yang tepat, menyenangkan, dan efektif.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sejak 2023, kami telah membantu ribuan keluarga Indonesia dalam mempersiapkan anak-anak mereka untuk sukses di sekolah dan kehidupan. Setiap produk kami dirancang dengan cinta, berbasis riset, dan disesuaikan dengan kebutuhan anak Indonesia.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visi</h3>
            <p className="text-muted-foreground">
              Menjadi partner terpercaya orang tua Indonesia dalam memberikan fondasi pendidikan terbaik untuk anak usia dini.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Misi</h3>
            <p className="text-muted-foreground">
              Menciptakan materi edukasi berkualitas yang membuat belajar menyenangkan, mudah diakses, dan efektif untuk perkembangan anak.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: 'Cinta', desc: 'Setiap produk dibuat dengan penuh cinta dan perhatian terhadap detail' },
            { icon: Lightbulb, title: 'Inovasi', desc: 'Terus berinovasi menciptakan metode belajar yang efektif dan menyenangkan' },
            { icon: Users, title: 'Komunitas', desc: 'Membangun komunitas orang tua yang saling mendukung' },
          ].map((v, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
