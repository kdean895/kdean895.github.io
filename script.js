const { useState } = React;

const projects = [
    {
        title: 'Interactive Dashboard',
        description: 'A dynamic and responsive dashboard using HTML, CSS, and JavaScript.'
    },
    {
        title: 'E-commerce Website',
        description: 'A full-fledged e-commerce website with advanced CSS animations and JavaScript functionalities.'
    }
    // Add more projects as needed
];

function App() {
    return (
        <div>
            <Header />
            <main>
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header>
            <h1>Kevin Munkres' Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} description={project.description} />
                ))}
            </div>
        </section>
    );
}

function Project({ title, description }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>I am a frontend developer specializing in creating interactive and visually appealing web applications.</p>
        </section>
    );
}

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple form validation
        if (formData.name && formData.email && formData.message) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Kevin Munkres. All rights reserved.</p>
        </footer>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
