export default function Home() {
  return (
    <div className="min-h-screen bg-anthracite">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-anthracite/95 backdrop-blur-sm border-b border-industrial/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-industrial rounded-lg flex items-center justify-center font-orbitron font-bold text-anthracite text-xl">
              C
            </div>
            <div className="text-xl font-orbitron font-bold text-industrial">
              COVISART
              <span className="block text-xs text-gray-400 font-exo font-light">
                Advanced Technologies
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 font-exo">
            <a href="#product" className="text-gray-300 hover:text-industrial transition-colors">
              Product
            </a>
            <a href="#features" className="text-gray-300 hover:text-industrial transition-colors">
              Features
            </a>
            <a href="#specs" className="text-gray-300 hover:text-industrial transition-colors">
              Specifications
            </a>
            <a href="#contact" className="text-gray-300 hover:text-industrial transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-industrial/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-industrial/10 border border-industrial/30 rounded-full text-industrial text-sm font-exo font-semibold uppercase tracking-wider">
                Next Generation Technology
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-orbitron font-black text-white mb-6 text-glow">
              NGS-360-3
            </h1>
            <p className="text-2xl md:text-3xl font-exo font-light text-industrial mb-4">
              Next Generation Simulator
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-exo">
              Revolutionary 360-degree simulation platform designed for defense and industrial training. 
              Precision engineering meets cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#specs"
                className="px-8 py-4 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-bold uppercase tracking-wider transition-all transform hover:scale-105 rounded-sm box-glow"
              >
                View Specifications
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-industrial hover:bg-industrial/10 text-industrial font-exo font-bold uppercase tracking-wider transition-all rounded-sm"
              >
                Request Information
              </a>
            </div>
          </div>
        </div>
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,176,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(244,176,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="py-20 px-6 bg-gradient-to-b from-anthracite to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Advanced Simulation Platform
            </h2>
            <p className="text-gray-400 font-exo text-lg max-w-3xl mx-auto">
              The NGS-360-3 represents the pinnacle of simulation technology, 
              offering unparalleled realism and precision for mission-critical training scenarios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Visual representation placeholder */}
            <div className="bg-gradient-to-br from-anthracite to-black border-2 border-industrial/30 rounded-lg p-8 box-glow">
              <div className="aspect-square bg-gradient-to-br from-industrial/20 to-transparent rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 border-4 border-industrial rounded-full flex items-center justify-center">
                    <span className="text-6xl font-orbitron font-black text-industrial">360°</span>
                  </div>
                  <p className="text-industrial font-exo text-xl font-semibold">Full Immersion</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-anthracite border-l-4 border-industrial p-6">
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  Complete 360° Coverage
                </h3>
                <p className="text-gray-300 font-exo">
                  Seamless panoramic simulation environment providing total situational awareness
                </p>
              </div>
              
              <div className="bg-anthracite border-l-4 border-industrial p-6">
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  Military-Grade Precision
                </h3>
                <p className="text-gray-300 font-exo">
                  Defense industry certified components ensuring maximum reliability and accuracy
                </p>
              </div>
              
              <div className="bg-anthracite border-l-4 border-industrial p-6">
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  Modular Architecture
                </h3>
                <p className="text-gray-300 font-exo">
                  Scalable design adapts to various training requirements and mission profiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-gray-400 font-exo text-lg">
              Engineered for excellence in every detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "High-Fidelity Graphics",
                description: "Ultra-realistic visual rendering with advanced shader technology and real-time lighting",
                icon: "🎯"
              },
              {
                title: "Real-Time Analytics",
                description: "Comprehensive performance metrics and scenario analysis with AI-powered insights",
                icon: "📊"
              },
              {
                title: "Multi-Scenario Support",
                description: "Extensive library of pre-configured training scenarios across multiple domains",
                icon: "🎮"
              },
              {
                title: "Hardware Integration",
                description: "Seamless connectivity with existing defense systems and peripherals",
                icon: "🔧"
              },
              {
                title: "Networked Operations",
                description: "Multi-user collaborative training with synchronized mission scenarios",
                icon: "🌐"
              },
              {
                title: "Ruggedized Design",
                description: "Industrial-grade construction for harsh operational environments",
                icon: "🛡️"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-anthracite to-black border border-industrial/20 hover:border-industrial/50 p-8 rounded-lg transition-all transform hover:scale-105 hover:box-glow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-exo">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20 px-6 bg-gradient-to-b from-black to-anthracite">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-400 font-exo text-lg">
              NGS-360-3 Platform Details
            </p>
          </div>
          
          <div className="bg-anthracite border-2 border-industrial/30 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-industrial to-industrial/80 px-6 py-4">
              <h3 className="text-2xl font-orbitron font-bold text-anthracite">
                System Overview
              </h3>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Display Technology</h4>
                  <p className="text-gray-300 font-exo">360° Panoramic Projection System</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Resolution</h4>
                  <p className="text-gray-300 font-exo">4K+ Per Screen (Multi-Channel)</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Field of View</h4>
                  <p className="text-gray-300 font-exo">Full 360° Horizontal / 180° Vertical</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Refresh Rate</h4>
                  <p className="text-gray-300 font-exo">120Hz+ (Low Latency Mode)</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Processing Unit</h4>
                  <p className="text-gray-300 font-exo">Multi-GPU Rendering Cluster</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Operating System</h4>
                  <p className="text-gray-300 font-exo">Custom Real-Time Linux Kernel</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Network</h4>
                  <p className="text-gray-300 font-exo">10GbE / Fiber Optic Ready</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Power Requirements</h4>
                  <p className="text-gray-300 font-exo">220-240V, 50-60Hz, 3-Phase</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Dimensions</h4>
                  <p className="text-gray-300 font-exo">5m (Diameter) × 3m (Height)</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Weight</h4>
                  <p className="text-gray-300 font-exo">Approx. 2,500 kg (Complete System)</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Compliance</h4>
                  <p className="text-gray-300 font-exo">MIL-STD-810G, NATO STANAG</p>
                </div>
                
                <div className="border-b border-industrial/20 pb-4">
                  <h4 className="text-industrial font-exo font-semibold mb-1">Warranty</h4>
                  <p className="text-gray-300 font-exo">3 Years Full Coverage + Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6 bg-anthracite">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-gray-400 font-exo text-lg">
              Versatile solutions for multiple sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Military Training", desc: "Combat & tactical scenarios" },
              { name: "Aviation", desc: "Flight simulation & cockpit training" },
              { name: "Naval Operations", desc: "Ship navigation & operations" },
              { name: "Ground Vehicles", desc: "Tank & armored vehicle training" },
              { name: "Emergency Response", desc: "Crisis management simulation" },
              { name: "Industrial Safety", desc: "Hazardous environment training" },
              { name: "Medical Training", desc: "Surgical & emergency procedures" },
              { name: "Research & Development", desc: "Testing & validation" }
            ].map((app, index) => (
              <div
                key={index}
                className="bg-black border border-industrial/20 p-6 rounded-lg hover:border-industrial/50 transition-all"
              >
                <h3 className="text-lg font-orbitron font-bold text-industrial mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-anthracite to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-300 font-exo text-lg mb-12">
            Ready to revolutionize your training capabilities? Contact our team for a demonstration 
            or to discuss your specific requirements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-anthracite border border-industrial/20 p-6 rounded-lg">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-industrial font-orbitron font-bold mb-2">Email</h3>
              <p className="text-gray-300 font-exo">info@covisart.com</p>
            </div>
            
            <div className="bg-anthracite border border-industrial/20 p-6 rounded-lg">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-industrial font-orbitron font-bold mb-2">Phone</h3>
              <p className="text-gray-300 font-exo">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-anthracite border border-industrial/20 p-6 rounded-lg">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-industrial font-orbitron font-bold mb-2">Location</h3>
              <p className="text-gray-300 font-exo">Global Operations</p>
            </div>
          </div>
          
          <button className="px-12 py-5 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-bold uppercase tracking-wider text-lg transition-all transform hover:scale-105 rounded-sm box-glow">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-industrial/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-industrial rounded-lg flex items-center justify-center font-orbitron font-bold text-anthracite">
                  C
                </div>
                <div className="text-lg font-orbitron font-bold text-industrial">
                  COVISART
                </div>
              </div>
              <p className="text-gray-400 font-exo text-sm">
                COVISART Advanced Technologies is a leading provider of next-generation simulation 
                systems for defense and industrial applications.
              </p>
            </div>
            
            <div>
              <h4 className="text-industrial font-orbitron font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 font-exo text-sm">
                <li><a href="#" className="hover:text-industrial transition-colors">NGS-360-3</a></li>
                <li><a href="#" className="hover:text-industrial transition-colors">Training Solutions</a></li>
                <li><a href="#" className="hover:text-industrial transition-colors">Support Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-industrial font-orbitron font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-exo text-sm">
                <li><a href="#" className="hover:text-industrial transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-industrial transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-industrial transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-industrial/20 pt-8 text-center">
            <p className="text-gray-500 font-exo text-sm">
              © 2024 COVISART Advanced Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
