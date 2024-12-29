function About() {
    const aboutInfo = {
      name: "Tobias Gonzalez Arriola",
      city: "La Plata, Buenos Aires, Argentina",
      github: "https://github.com/crtobias",
      linkedin: "https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/",
      email: "tgonzalezarriola@gmail.com",
    };
  
    return (
      <div className="min-h-screen text-fuentes flex justify-center items-center p-4">
        <div className="bg-secundario text-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">About Me</h2>
          <p className="text-lg text-center mb-4">Hello! Im {aboutInfo.name}, a Software Developer</p>
          <div className="text-center">
            <p className="text-lg">City: <br /> {aboutInfo.city}</p>
            <br />
            <p className="text-lg">Email: <br /> {aboutInfo.email}</p>
          </div>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href={aboutInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-200 hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={aboutInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-200 hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  