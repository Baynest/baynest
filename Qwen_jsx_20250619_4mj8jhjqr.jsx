import React, { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  // Sample global project data
  const projects = [
    {
      id: 1,
      name: "Coral Bay Residences",
      location: "Exuma, Bahamas",
      country: "Bahamas",
      price: 350000,
      status: "Under Development",
      image: "https://picsum.photos/seed/exuma1/600/400", 
    },
    {
      id: 2,
      name: "Tropical Haven Resort",
      location: "Barbados",
      country: "Barbados",
      price: 1200000,
      status: "Planning Phase",
      image: "https://picsum.photos/seed/barbados/600/400", 
    },
    {
      id: 3,
      name: "Caribbean Shores Villas",
      location: "Grand Cayman, Cayman Islands",
      country: "Cayman Islands",
      price: 950000,
      status: "Pre-Construction",
      image: "https://picsum.photos/seed/cayman/600/400", 
    },
    {
      id: 4,
      name: "Sandy Beach Estates",
      location: "Antigua",
      country: "Antigua and Barbuda",
      price: 780000,
      status: "Completed",
      image: "https://picsum.photos/seed/antigua/600/400", 
    },
    {
      id: 5,
      name: "Ocean View Condos",
      location: "St. Lucia",
      country: "St. Lucia",
      price: 620000,
      status: "Under Development",
      image: "https://picsum.photos/seed/stlucia/600/400", 
    },
    {
      id: 6,
      name: "Island Paradise Villas",
      location: "Maldives",
      country: "Maldives",
      price: 2500000,
      status: "Pre-Construction",
      image: "https://picsum.photos/seed/maldives/600/400", 
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter ? project.country === countryFilter : true;
    return matchesSearch && matchesCountry;
  });

  const countries = [...new Set(projects.map((p) => p.country))];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Baynest Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-gray-900">Baynest</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => setActiveSection("home")} className="hover:text-teal-500 capitalize">
              Home
            </button>
            <button onClick={() => setActiveSection("about")} className="hover:text-teal-500 capitalize">
              About
            </button>
            <button onClick={() => setActiveSection("projects")} className="hover:text-teal-500 capitalize">
              Projects
            </button>
            <button onClick={() => setActiveSection("invest")} className="hover:text-teal-500 capitalize">
              Invest
            </button>
            <button onClick={() => setActiveSection("contact")} className="hover:text-teal-500 capitalize">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => setActiveSection("home")} className="capitalize py-2 hover:text-teal-500">
                Home
              </button>
              <button onClick={() => setActiveSection("about")} className="capitalize py-2 hover:text-teal-500">
                About
              </button>
              <button onClick={() => setActiveSection("projects")} className="capitalize py-2 hover:text-teal-500">
                Projects
              </button>
              <button onClick={() => setActiveSection("invest")} className="capitalize py-2 hover:text-teal-500">
                Invest
              </button>
              <button onClick={() => setActiveSection("contact")} className="capitalize py-2 hover:text-teal-500">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex flex-col justify-center px-4 py-16 transition-opacity duration-700 ease-in-out ${
          activeSection === "home" ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Building The Future of Island Living, One Property at a Time
            </h1>
            <p className="text-lg text-gray-600">
              Baynest develops sustainable, affordable, and high-quality housing across islands worldwide.
            </p>
            <button
              onClick={() => setActiveSection("projects")}
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              Explore Global Properties
            </button>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://picsum.photos/seed/global-real-estate/800/600" 
              alt="Global Real Estate"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className={`py-16 px-4 transition-opacity duration-700 ease-in-out ${
          activeSection === "about" ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">About Baynest</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/isaac/600/400" 
                alt="Isaac Michel"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Founder & Visionary</h3>
              <h4 className="text-xl text-teal-600">Isaac Michel — HVAC Technician & Bahamian Entrepreneur</h4>
              <p className="text-gray-600">
                A native of Exuma, Isaac Michel founded Baynest with a vision to create sustainable, accessible, and premium real estate opportunities for locals and investors alike. Certified in HVAC and deeply rooted in his community, Isaac combines technical expertise with island values to build the future of island living.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Our Mission</h3>
              <p className="text-gray-600">
                At Baynest, we believe in developing communities that reflect the beauty and sustainability of island life. Our mission is to provide quality housing that empowers residents, attracts global investment, and preserves natural charm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`py-16 px-4 transition-opacity duration-700 ease-in-out ${
          activeSection === "projects" ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Global Projects</h2>
          <p className="text-center text-gray-600 mb-8">Find properties to invest in or buy across the globe.</p>

          {/* Search + Country Filter */}
          <div className="max-w-2xl mx-auto mb-10 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by property name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
            />
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Countries</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{project.location}</p>
                    <p className="mt-2 text-gray-600">
                      <strong>Price:</strong> ${project.price.toLocaleString()}
                    </p>
                    <p className="text-gray-600">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status.includes("Completed")
                            ? "bg-green-100 text-green-800"
                            : project.status.includes("Under")
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      <strong>Baynest Fee (3%):</strong> ${(project.price * 0.03).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No matching properties found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Invest */}
      <section
        id="invest"
        className={`py-16 px-4 transition-opacity duration-700 ease-in-out ${
          activeSection === "invest" ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Invest With Us</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in Island Real Estate?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Rapid growth in tourism and foreign investment</li>
              <li>Stable economy and strong property rights</li>
              <li>High demand for luxury and eco-friendly properties</li>
              <li>Tax incentives for international investors</li>
            </ul>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-teal-200 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-teal-200 focus:outline-none"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Your Message / Investment Interest"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-teal-200 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`py-16 px-4 transition-opacity duration-700 ease-in-out ${
          activeSection === "contact" ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Email:</strong> info@baynestglobal.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (242) 555-0123
                </p>
                <p>
                  <strong>Address:</strong> Exuma, The Bahamas
                </p>
              </div>
              <button className="mt-6 flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16l-4-4 1.414-1.414 2.586 2.586 5.586-5.586 1.414 1.414-7 7z" />
                </svg>
                <span>WhatsApp Chat</span>
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Location Map</h3>
              <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/logo.png" alt="Baynest Logo" className="w-12 h-12" />
            <span className="text-lg font-bold text-gray-900">Baynest</span>
          </div>
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Baynest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}