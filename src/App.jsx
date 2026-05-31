import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" style={{ padding: "40px" }}>
        <h1>Home</h1>
        <p>Welcome to my portfolio website.</p>
      </section>

      <section id="about" style={{ padding: "40px" }}>
        <h1>About</h1>
        <p>I am a student building my first React SPA portfolio.</p>
      </section>

      <section id="projects" style={{ padding: "40px" }}>
        <h1>Projects</h1>
        <p>Here I will display my projects.</p>
      </section>

      <section id="contact" style={{ padding: "40px" }}>
        <h1>Contact</h1>
        <p>Email: example@email.com</p>
      </section>
    </div>
  );
}

export default App;