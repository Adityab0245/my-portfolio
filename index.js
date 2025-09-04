import Head from 'next/head';
import { useCallback } from 'react';

export default function Home() {
  const handleContact = useCallback((e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const msg = (fd.get('msg') || '').toString().trim();
    if (!name || !email || !msg) {
      alert('Please fill all fields.');
      return;
    }
    alert(`Thanks, ${name}! Your message was received (demo).`);
    e.currentTarget.reset();
  }, []);

  return (
    <>
      <Head>
        <title>Modern Portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="container">
        <header>
          <div className="brand">
            <div className="logo">AB</div>
            <div>
              <div className="brand-name">Aditya B.</div>
              <div className="brand-subtitle">Frontend · Web · Side projects</div>
            </div>
          </div>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="card">
              <h1>Hi — I build simple, usable web apps.</h1>
              <p className="lead">I’m a college student who loves building small tools that solve everyday problems. I focus on clean UI, accessible markup and fast performance.</p>

              <div className="skills">
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">React</span>
                <span className="chip">Python</span>
                <span className="chip">Django</span>
              </div>

              <div className="cta-row">
                <a className="btn" href="#contact">Get in touch</a>
                <a className="see-projects-link" href="#projects">See projects →</a>
              </div>
            </div>

            <aside className="card profile" aria-labelledby="profile-heading">
              <div id="profile-heading" className="profile-heading">About me</div>
              <div className="avatar">🙂</div>
              <div className="meta">20 y/o · College student · Based in India</div>
              <div className="profile-note">I carry my own tiffin and try to make a good lunch. I like building small utilities and contributing to open-source.</div>
            </aside>
          </section>

          <section id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects">
              <article className="project">
                <h3>VoiceToSpeech</h3>
                <p>A real-time speech translator app — speech-to-text, translate and TTS with a clean UI.</p>
                <a href="#">View repo</a>
              </article>
              <article className="project">
                <h3>Portfolio Generator</h3>
                <p>One-file portfolio templates and a tiny generator to create personal pages.</p>
                <a href="#">View repo</a>
              </article>
              <article className="project">
                <h3>Algorithm Visualiser</h3>
                <p>Interactive visualisations for sorting and search algorithms for learning and teaching.</p>
                <a href="#">View demo</a>
              </article>
            </div>
          </section>

          <section id="about" className="about-section">
            <div className="card">
              <h2>About</h2>
              <p className="muted">I’m currently focused on frontend development and building small full-stack projects. I enjoy teaching algorithmic concepts and writing neat documentation.</p>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="card">
              <h2>Contact</h2>
              <form onSubmit={handleContact} className="contact-form">
                <input name="name" placeholder="Your name" required />
                <input name="email" type="email" placeholder="Email" required />
                <textarea name="msg" placeholder="Message" rows={4} required />
                <div className="form-actions">
                  <button className="btn" type="submit">Send message</button>
                  <div className="muted">or email: <a href="mailto:aditya@example.com">aditya@example.com</a></div>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer>
          Built with ❤️ — feel free to copy and customise this template.
        </footer>
      </div>
    </>
  );
}
