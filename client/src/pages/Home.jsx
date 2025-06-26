import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const skills = [
    'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Python',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'AWS', 'Docker'
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Change the background gradient to a lighter one */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-blue-100 hero-pattern"></div>
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      {/* Profile Image */}
      <div className="mb-8 animate-bounce-gentle">
        <img
          src="/profile.jpg"
          alt="Sowmiya"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />
      </div>

      {/* Name & Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
        Hi, I'm <span className="text-yellow-500">Sowmiya</span>
      </h1>
      
      <div className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-8 h-12 flex items-center justify-center">
        <span className="border-r-2 border-yellow-500 pr-2 animate-pulse">
          {typedText}
        </span>
      </div>

      {/* Introduction */}
      <p className="text-lg sm:text-xl text-gray-700 text-opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
        Welcome to my digital space! I'm passionate about creating beautiful, functional web applications 
        that solve real-world problems. With expertise in modern technologies and a love for clean code, 
        I bring ideas to life through innovative solutions.
      </p>
      {/* ...rest of the code... */}
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Link
                to="/projects"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                  My journey in software development started with curiosity and has evolved into a deep love 
                  for creating digital experiences that make a difference.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying updated with the latest industry trends.
                </p>
                <p>
                  My goal is to bridge the gap between design and functionality, creating applications that 
                  are not only technically sound but also intuitive and delightful to use.
                </p>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '2+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white animate-slide-up">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project previews would be loaded from API */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Project Title</h3>
                  <p className="text-gray-600 mb-4">Brief project description...</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-800 text-sm rounded-full">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="btn-primary text-lg px-8 py-3"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always excited to take on new challenges and collaborate on interesting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;