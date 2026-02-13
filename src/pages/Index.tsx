import { Github, Linkedin, Mail, MapPin, Calendar, Coffee, Phone, Send, ExternalLink, Code2, Server, Database, Wrench, GraduationCap, Award, Trophy, Medal } from "lucide-react";

const NAV_ITEMS = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const SKILLS = {
  Frontend: { icon: Code2, color: "text-primary", items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"] },
  Backend: { icon: Server, color: "text-accent", items: ["Node.js", "Express.js", "Python", "Django", "PHP", "REST APIs", "GraphQL"] },
  Database: { icon: Database, color: "text-primary", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"] },
  "Tools & DevOps": { icon: Wrench, color: "text-yellow-400", items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux", "Figma", "VS Code"] },
};

const PROJECTS = [
  { title: "Community Crime Watch", desc: "A web-based platform that helps communities report and monitor local crime incidents in real time.", tags: ["React", "Node.js", "MongoDB", "Maps API"], emoji: "🚨", link: "https://jay-28070.github.io/Community-Crime-Watch/" },
  { title: "AI Learning Chatbot", desc: "An interactive web chatbot that allows users to learn about artificial intelligence topics through conversation.", tags: ["JavaScript", "REST API", "NLP"], emoji: "🤖", link: "https://ai-concept-bot.zapier.app/" },
  { title: "NovaWeb Designs", desc: "A modern web application designed to deliver fast, responsive, and user-friendly digital experiences.", tags: ["HTML", "CSS", "JavaScript"], emoji: "✨", link: "https://novawebz.netlify.app/" },
  { title: "AI for an Eye Analyser Prototype", desc: "A prototype application that uses AI to analyze eye-related medical data and provide insights.", tags: ["Python", "TensorFlow", "Flask"], emoji: "👁️", link: "https://www.figma.com/proto/thTajjR3DACaJFciK3z9zz/AI4nEye?node-id=1-2&starting-point-node-id=1%3A2" },
  { title: "Sentiment Analysis Dashboard", desc: "A dashboard that analyzes and visualizes sentiment data from various text sources in real-time.", tags: ["React", "Python", "NLP"], emoji: "📊", link: "https://senti-score-hub.lovable.app/" },
  { title: "Ikamva Lethu Aluminium and Solutions", desc: "A professional business website for an aluminium and welding solutions company.", tags: ["Web Design", "Business", "Netlify"], emoji: "🔧", link: "https://ikamva-lethu-aluminium-and-welding.netlify.app/" },
];

const CERTIFICATES = [
  { name: "HTML & in Depth", link: "https://coursera.org/share/d661861e78cf1a29f0148028f3345cdc" },
  { name: "Interactivity with JavaScript", link: "https://coursera.org/share/18882a4533a2f79081d7811a8e1523db" },
  { name: "Introduction to Front-End Development", link: "https://coursera.org/share/9468f60681f1a54954c66d0f64848d8f" },
  { name: "Responsive Design", link: "https://coursera.org/share/6147ad2f2f7c2adab1b9ce6ffed72f33" },
  { name: "Version Control", link: "https://coursera.org/share/43dcb89c68d594251731563be7952494" },
  { name: "Web Design for Everybody", link: "https://coursera.org/share/d90ce147ce5ad07c6ead0e308057a3d2" },
  { name: "AI Managing Bias & Ethics", link: "https://coursera.org/share/2c6c701d7f5bd5c92b0d5197ac6c93fa" },
  { name: "Introduction to HTML5", link: "https://coursera.org/share/90a3f750cc9fc550cad3abb6dbb544fd" },
  { name: "Responsible AI", link: "https://coursera.org/share/3c793d13dab40f84a70f6a04d9ccecff" },
  { name: "Supervised Machine Learning", link: "https://coursera.org/share/174ce9362ae97caab6f39e509c035aa3" },
  { name: "Unsupervised Learning", link: "" },
  { name: "Full Stack", link: "" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display font-bold text-xl gradient-text">AM</span>
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
          <a href="#contact" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_52%/0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Hi, I'm <span className="gradient-text">Akhona Mathanda</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            I craft elegant digital experiences with clean code and modern technologies
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 rounded-lg font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 rounded-lg font-medium bg-foreground text-background hover:opacity-90 transition-opacity">
              View Projects
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            {[
              { icon: Github, href: "https://github.com/akhonamathanda77-cyber" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akhona-mathanda-543909255/" },
              { icon: Mail, href: "mailto:akhonamathanda77@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-12">Who I Am</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
              <p>I'm a passionate <span className="text-primary font-semibold">Full Stack Web Developer</span> with a deep love for creating seamless digital experiences. I specialize in building robust, scalable applications from concept to deployment.</p>
              <p>With expertise in both frontend and backend technologies, I bridge the gap between beautiful design and powerful functionality. I believe in writing clean, maintainable code that stands the test of time.</p>
              <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
            </div>
            <div className="flex flex-wrap gap-4 content-start">
              {[
                { icon: MapPin, label: "Cape Town, South Africa" },
                { icon: Calendar, label: "Available for work" },
                { icon: Coffee, label: "Coffee enthusiast" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-muted-foreground bg-secondary px-4 py-2 rounded-lg">
                  <Icon size={16} className="text-primary" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <p className="text-primary font-medium text-sm uppercase tracking-widest text-center mb-2">Expertise</p>
          <h2 className="text-4xl font-display font-bold text-center mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">A comprehensive toolkit built over years of hands-on experience</p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, { icon: Icon, color, items }]) => (
              <div key={category} className="bg-card border border-border rounded-xl p-6 hover:glow transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={24} className={color} />
                  <h3 className="font-display font-semibold text-lg">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="text-sm px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">A selection of projects that showcase my skills and passion for development</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(project => (
              <div key={project.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <div className="flex gap-2">
                    <Github size={18} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Experience</h2>
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <Calendar size={14} /> January 2023 – June 2024
            </div>
            <h3 className="text-xl font-display font-semibold mb-1">1st Line Support Technician</h3>
            <p className="text-primary font-medium mb-4">Vodacom (Nexio)</p>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Provided first-line technical support to customers, troubleshooting network and connectivity issues, resolving technical queries, and ensuring customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Resolved customer technical issues", "Maintained service quality standards", "Team collaboration & support"].map(item => (
                <span key={item} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Education & Certificates</h2>
          
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={24} className="text-primary" />
            <h3 className="text-2xl font-display font-semibold">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { status: "Completed", title: "Grade 12 / Matric", place: "Waban High School", desc: "Completed secondary education with focus on mathematics and technology subjects.", color: "text-primary" },
              { status: "Ongoing", title: "Full Stack Web Development", place: "Capaciti", desc: "Comprehensive full stack development program covering modern web technologies, best practices, and real-world project experience.", color: "text-yellow-400" },
            ].map(edu => (
              <div key={edu.title} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm mb-3">
                  <Calendar size={14} className={edu.color} />
                  <span className={edu.color}>{edu.status}</span>
                </div>
                <h4 className="font-display font-semibold text-lg mb-1">{edu.title}</h4>
                <p className="text-primary text-sm mb-3">{edu.place}</p>
                <p className="text-muted-foreground text-sm">{edu.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Trophy size={24} className="text-yellow-400" />
            <h3 className="text-2xl font-display font-semibold">Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { score: "43/50 (86%)", title: "AI & Machine Learning Fundamentals", place: "Capaciti", date: "November 14, 2025" },
              { score: "31/40 (77.5%)", title: "Advanced Styling & Responsive Web Design Mastery", place: "Capaciti", date: "January 12, 2026" },
            ].map(a => (
              <div key={a.title} className="bg-card border border-border rounded-xl p-6" style={{ borderImage: "var(--gradient-primary) 1", borderImageSlice: 1 }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-primary font-display font-bold text-lg">{a.score}</span>
                </div>
                <h4 className="font-display font-semibold mb-1">{a.title}</h4>
                <p className="text-primary text-sm">{a.place}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs mt-2">
                  <Calendar size={12} /> {a.date}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Medal size={24} className="text-primary" />
            <h3 className="text-2xl font-display font-semibold">Certificates</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATES.map(cert => (
              cert.link ? (
                <a key={cert.name} href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors block">
                  <h4 className="font-display font-medium text-sm flex items-center gap-2">{cert.name} <ExternalLink size={12} className="text-primary" /></h4>
                  <p className="text-primary text-xs mt-1">Coursera</p>
                </a>
              ) : (
                <div key={cert.name} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                  <h4 className="font-display font-medium text-sm">{cert.name}</h4>
                  <p className="text-primary text-xs mt-1">Coursera</p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "akhonamathanda77@gmail.com", href: "mailto:akhonamathanda77@gmail.com" },
                { icon: Phone, label: "Phone", value: "062 515 2090", href: "tel:0625152090" },
                { icon: MapPin, label: "Location", value: "Cape Town, South Africa", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </a>
              ))}
              <div className="pt-4">
                <p className="text-muted-foreground text-sm mb-3">Follow me on social media</p>
                <div className="flex gap-3">
                  {[
                    { label: "GitHub", href: "https://github.com/akhonamathanda77-cyber" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/akhona-mathanda-543909255/" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <form className="bg-card border border-border rounded-xl p-6 space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Subject</label>
                <input type="text" placeholder="What's this about?" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-medium text-primary-foreground flex items-center justify-center gap-2" style={{ background: "var(--gradient-primary)" }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Akhona Mathanda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
