import Image from "next/image";

export default function Home() {
  const skills = [
    "Python",
    
    "SQL",
    "TensorFlow",
    "OpenCV",
    "Machine Learning",
    "NLP",
    "Streamlit",
    "GitHub",
    "HTML/CSS",
  ];

  const projects = [
    {
      title: "CAPTCHA Recognition using CNN",
      desc: "Developed a CAPTCHA solver using CNN with TensorFlow and OpenCV with 98.97% accuracy.",
      tech: ["Python", "TensorFlow", "OpenCV"],
    },
    {
      title: "Voice Biometric Authentication",
      desc: "Built real-time authentication using MFCC feature extraction and PyAudio.",
      tech: ["Python", "MFCC", "PyAudio"],
    },
    {
      title: "Capsicum Disease Detection",
      desc: "Developed MobileNetV2 + Streamlit disease prediction system.",
      tech: ["Python", "MobileNetV2", "Streamlit"],
    },
    {
      title: "NLP-Based Text Processing",
      desc: "Developed an NLP system for intelligent text processing.",
      tech: ["Python", "NLP", "ML"],
    },
    {
      title: "Multi-Modal Authentication Framework",
      desc: "Integrated voice and face recognition for secure authentication.",
      tech: ["Python", "Authentication", "ML"],
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

          <h1 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Aashish S Anderson
          </h1>

          <div className="hidden md:flex gap-8 text-zinc-400">

            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center max-w-7xl mx-auto px-8">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          <div>

            <div className="inline-flex px-5 py-2 rounded-full border border-purple-800 bg-zinc-900 text-purple-300">
              2026 Graduate • Open to Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-8">

              Hi, I'm

              <span className="block mt-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">

                Aashish S Anderson

              </span>

            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-9">

              Building intelligent systems and practical software solutions through Machine Learning and modern technologies.

            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <a
                href="https://github.com/Aashish-Anderson"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aashish-s-anderson-44067a264/"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-zinc-700"
              >
                LinkedIn
              </a>

              <a
                href="/Aashish_Resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-purple-700"
              >
                Resume
              </a>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">

              <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-800">
                <h1 className="text-3xl font-bold text-purple-400">
                  8.54
                </h1>
                <p className="text-zinc-500">
                  CGPA
                </p>
              </div>

              <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-800">
                <h1 className="text-3xl font-bold text-cyan-400">
                  5+
                </h1>
                <p className="text-zinc-500">
                  Projects
                </p>
              </div>

              <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-800">
                <h1 className="text-3xl font-bold text-blue-400">
                  IEEE
                </h1>
                <p className="text-zinc-500">
                  Publication
                </p>
              </div>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 blur-[120px] opacity-30"></div>

            <Image
              src="/aashish.jpeg"
              alt="Aashish"
              width={400}
              height={500}
              className="relative w-[380px] h-[500px] object-cover rounded-[35px] border border-zinc-800 hover:scale-105 transition duration-500 shadow-[0_0_80px_rgba(59,130,246,.25)]"
            />

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-bold">
          About Me
        </h2>

        <div className="mt-10 p-10 rounded-3xl bg-zinc-950 border border-zinc-800">

          <p className="text-zinc-400 leading-9">

            I am Aashish S Anderson, a Bachelor of Engineering student at SJB Institute of Technology, Bangalore graduating in 2026 with a CGPA of 8.54.

            Passionate about Machine Learning and software development, I enjoy building intelligent systems and practical solutions.

          </p>

        </div>

      </section>



      {/* SKILLS */}

      <section className="max-w-7xl mx-auto px-8 py-10">

        <h2 className="text-5xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4 mt-10">

          {skills.map((skill) => (

            <div
              key={skill}
              className="px-6 py-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-purple-500"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>



      {/* PROJECTS */}

      <section id="projects" className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-2 transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 mb-6"></div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-5">
                {project.desc}
              </p>

              <div className="flex gap-2 flex-wrap mt-6">

                {project.tech.map((t) => (

                  <div
                    key={t}
                    className="px-4 py-2 rounded-xl bg-black border border-zinc-800 text-sm"
                  >
                    {t}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>
        

      </section>



      {/* IEEE */}

<section id="research" className="max-w-7xl mx-auto px-8 py-24">

  <h2 className="text-5xl font-bold">
    Research & Publications
  </h2>

  <div className="bg-zinc-950 border border-purple-900 rounded-3xl p-10 mt-10">

    <div className="inline-flex px-4 py-2 rounded-full bg-purple-950 text-purple-300">

      IEEE Publication • Co-Author

    </div>

    <h3 className="text-3xl font-bold mt-6">

      A Multi-Modal Biometric Authentication Framework Integrating Voice and Face Recognition

    </h3>

    <p className="text-zinc-400 mt-5 leading-8">

      Developed a secure biometric authentication framework integrating
      voice and facial recognition for enhanced multi-factor identity
      verification. The system combines multiple biometric modalities
      to improve security, reliability and authentication accuracy.

    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="bg-black border border-zinc-800 rounded-2xl p-5">

        <h4 className="text-cyan-400 font-semibold">
          Conference
        </h4>

        <p className="text-zinc-400 mt-2 text-sm">
          IC-ICNS 2026
        </p>

      </div>


      <div className="bg-black border border-zinc-800 rounded-2xl p-5">

        <h4 className="text-cyan-400 font-semibold">
          Paper ID
        </h4>

        <p className="text-zinc-400 mt-2 text-sm">
          294
        </p>

      </div>


      <div className="bg-black border border-zinc-800 rounded-2xl p-5">

        <h4 className="text-cyan-400 font-semibold">
          Research Domain
        </h4>

        <p className="text-zinc-400 mt-2 text-sm">
          Machine Learning • Biometrics • Authentication
        </p>

      </div>

    </div>


    <div className="mt-10 border-t border-zinc-800 pt-8">

      <h4 className="text-xl font-semibold text-purple-300">
        Key Contributions
      </h4>

      <ul className="mt-5 space-y-3 text-zinc-400">

        <li>• Integrated voice and face recognition techniques</li>

        <li>• Improved authentication reliability using multimodal biometrics</li>

        <li>• Explored secure identity verification approaches</li>

        <li>• Focused on enhancing accuracy and usability</li>

      </ul>

    </div>

  </div>

</section>



      {/* FOOTER CARDS */}

<section className="max-w-7xl mx-auto px-8 py-20">

  <div className="grid md:grid-cols-3 gap-8">

    {/* WORKSHOPS */}

    <div className="bg-zinc-950 rounded-3xl border border-zinc-800 p-8">

      <h2 className="font-bold text-2xl mb-6">
        Workshops & Certifications
      </h2>

      <div className="space-y-6">

        <div>

          <h3 className="font-semibold text-cyan-400">
            Ethical Hacking & Cyber Security
          </h3>

          <p className="text-zinc-400 text-sm mt-2">
            Participated in cybersecurity workshop focused on ethical hacking, network security and security practices.
          </p>

        </div>


        <div>

          <h3 className="font-semibold text-cyan-400">
            Python Programming Workshop
          </h3>

          <p className="text-zinc-400 text-sm mt-2">
            Hands-on workshop focused on Python programming, automation and practical development concepts.
          </p>

        </div>

      </div>

    </div>



    {/* INTERNSHIP + IEEE */}

    <div className="bg-zinc-950 rounded-3xl border border-zinc-800 p-8">

      <h2 className="font-bold text-2xl mb-6">
        Internship & IEEE
      </h2>

      <h3 className="font-semibold text-cyan-400">
        Cyber Security Internship
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        Gained exposure to cybersecurity concepts, security awareness and practical learning experience.
      </p>

      <div className="mt-6 border-t border-zinc-800 pt-5">

        <h3 className="font-semibold text-cyan-400">
          Treasurer — IEEE Student Branch
        </h3>

        <p className="text-zinc-400 text-sm mt-2">
          Organized activities and actively contributed to student engagement initiatives.
        </p>

      </div>

    </div>



    {/* LANGUAGES + PAPER */}

    <div className="bg-zinc-950 rounded-3xl border border-zinc-800 p-8">

      <h2 className="font-bold text-2xl mb-6">
        Languages & Publication
      </h2>

      <div className="flex gap-3 flex-wrap mb-8">

        {["English","Kannada","Hindi","Telugu"].map((lang)=>(

          <div
            key={lang}
            className="px-4 py-2 rounded-full border border-zinc-700"
          >
            {lang}
          </div>

        ))}

      </div>


      <div className="bg-black rounded-2xl border border-purple-900 p-4">

        <p className="text-purple-300 text-sm">
          IEEE Publication
        </p>

        <p className="text-zinc-300 text-sm mt-2">
          Multi-Modal Biometric Authentication Framework Integrating Voice and Face Recognition
        </p>

      </div>

    </div>

  </div>

</section>



      {/* CONTACT */}

<section id="contact" className="max-w-7xl mx-auto px-8 py-28">

  <h2 className="text-5xl font-bold">
    Let's Connect
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
      <h3 className="font-bold">
        📧 Email
      </h3>

      <a
        href="mailto:aashish.s.anderson@gmail.com"
        className="text-cyan-400 mt-4 block"
      >
        aashish.s.anderson@gmail.com
      </a>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
      <h3 className="font-bold">
        📱 Phone
      </h3>

      <a
        href="tel:+917975215101"
        className="text-cyan-400 mt-4 block"
      >
        +91 7975215101
      </a>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
      <h3 className="font-bold">
        💻 GitHub
      </h3>

      <a
        href="https://github.com/Aashish-Anderson"
        target="_blank"
        className="text-cyan-400 mt-4 block"
      >
        github.com/Aashish-Anderson
      </a>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
      <h3 className="font-bold">
        💼 LinkedIn
      </h3>

      <a
        href="https://www.linkedin.com/in/aashish-s-anderson-44067a264/"
        target="_blank"
        className="text-cyan-400 mt-4 block"
      >
        Connect with me
      </a>
    </div>

  </div>

</section>

    </main>
  );
}