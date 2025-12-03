"use client";

import React, { useState, useEffect } from 'react';
import { 
  Network, Shield, Server, Terminal, GraduationCap, Mail, Linkedin, MapPin, 
  Cpu, Wifi, Moon, Sun, Languages, BookOpen, CheckCircle2 
} from 'lucide-react';

// --- DATA & TRANSLATIONS ---
const DATA = {
  en: {
    nav: {
      role: "Network Engineer",
    },
    hero: {
      status: "Open to Work",
      role: "Junior Network Engineer & NOC Analyst",
      summary: "Specialist in LAN/WAN administration, Fortinet security, and network monitoring. Passionate about automation and cybersecurity. Currently pursuing a Bachelor's in Cyberdefense.",
      location: "Río Tercero, Córdoba, Argentina",
      email: "callegarisantiago0@gmail.com",
      linkedin: "LinkedIn Profile"
    },
    skills: {
      title: "Technical Arsenal",
      networking: "Networking Core",
      security: "Security & Firewalls",
      monitoring: "Observability",
      automation: "DevNet & Tools"
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Network Instructor",
          company: "Instituto Técnico Río Tercero",
          period: "Jun 2025 – Present",
          desc: "Leading practical networking education for future technicians.",
          points: [
            "Delivering comprehensive training on VLANs, DHCP, DNS, ACLs, and routing protocols.",
            "Designing complex topology labs using Packet Tracer and GNS3.",
            "Mentoring students in troubleshooting methodologies using Wireshark."
          ]
        },
        {
          title: "Freelance Network Technician",
          company: "Self-Employed",
          period: "Mar 2023 – Present",
          desc: "Providing IT infrastructure support for SMBs.",
          points: [
            "Resolved 50+ incidents regarding L2 segmentation and connectivity.",
            "Deployed Zabbix servers/agents for proactive monitoring.",
            "Hardened small office networks using ACLs and firewall rules."
          ]
        },
        {
          title: "FTTH Network Intern",
          company: "Cooperativa de Obras y Servicios Públicos",
          period: "Aug 2024 – Sep 2024",
          desc: "Hands-on experience in ISP infrastructure.",
          points: [
            "Managed GPON provisioning and ONT configuration.",
            "Optimized inventory management by 70% using a custom Excel/Barcode solution."
          ]
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      degrees: [
        {
          title: "Bachelor's in Cyberdefense",
          school: "UNDEF - Universidad de la Defensa Nacional",
          year: "In Progress",
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: "Technical High School Diploma",
          school: "Instituto Técnico Río Tercero",
          year: "2023",
          detail: "Technician in Informatics",
          icon: <GraduationCap className="w-5 h-5" />
        }
      ],
      certs: {
        title: "Certifications & Knowledge",
        items: [
          {
            name: "Fortinet Certified Associate (FCA)",
            detail: "ID 1101209200SF",
            topics: ["Fabric Security", "Firewall Policies", "NAT & PAT", "SSL/IPsec VPNs", "Logging & Reporting"]
          },
          {
            name: "Cisco CCNA (Modules 1-3)",
            detail: "Complete Training",
            topics: [
              "CCNA 1: OSI/TCP Models, IPv4/IPv6 Subnetting, Ethernet concepts.",
              "CCNA 2: VLANs, Trunking (802.1Q), STP, EtherChannel, DHCP, Routing (Static/OSPF).",
              "CCNA 3: ACLs, NAT, VPNs, QoS, Network Automation (REST APIs, SDN, JSON), Virtualization."
            ]
          },
          {
            name: "ISC2 Certified in Cybersecurity",
            detail: "Training Completed",
            topics: ["Security Principles", "Incident Response", "Access Control"]
          }
        ]
      }
    },
    projects: {
      title: "Projects & Labs",
      items: [
        { title: "Enterprise Network Design", tech: "GNS3 / Cisco", desc: "Full-scale topology with Inter-VLAN routing, OSPF areas, and hardened access via ACLs." },
        { title: "Zabbix Monitoring Stack", tech: "Linux / Zabbix", desc: "End-to-end monitoring setup: Server installation, agent deployment, and custom trigger creation." },
        { title: "FortiGate Security Ops", tech: "Fortinet VM", desc: "Implementation of UTM features, Site-to-Site VPNs, and SD-WAN rules." }
      ]
    },
    footer: "Built with Next.js, Tailwind CSS & Vercel."
  },
  es: {
    nav: {
      role: "Ingeniero de Redes",
    },
    hero: {
      status: "Disponible para trabajar",
      role: "Junior Network Engineer & NOC Analyst",
      summary: "Especialista en administración LAN/WAN, seguridad Fortinet y monitoreo de redes. Apasionado por la automatización y la ciberdefensa. Actualmente cursando la Licenciatura en Ciberdefensa.",
      location: "Río Tercero, Córdoba, Argentina",
      email: "callegarisantiago0@gmail.com",
      linkedin: "Perfil de LinkedIn"
    },
    skills: {
      title: "Arsenal Técnico",
      networking: "Redes Core",
      security: "Seguridad y Firewalls",
      monitoring: "Observabilidad",
      automation: "DevNet y Herramientas"
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          title: "Instructor de Networking",
          company: "Instituto Técnico Río Tercero",
          period: "Jun 2025 – Presente",
          desc: "Liderando la formación práctica en redes para futuros técnicos.",
          points: [
            "Impartiendo capacitación integral sobre VLANs, DHCP, DNS, ACLs y protocolos de enrutamiento.",
            "Diseño de laboratorios de topología compleja utilizando Packet Tracer y GNS3.",
            "Mentoría a estudiantes en metodologías de troubleshooting con Wireshark."
          ]
        },
        {
          title: "Técnico de Redes Freelance",
          company: "Independiente",
          period: "Mar 2023 – Presente",
          desc: "Soporte de infraestructura TI para PyMEs.",
          points: [
            "Resolución de más de 50 incidentes relacionados con segmentación L2 y conectividad.",
            "Despliegue de servidores y agentes Zabbix para monitoreo proactivo.",
            "Hardenización de redes de oficinas pequeñas mediante ACLs y reglas de firewall."
          ]
        },
        {
          title: "Pasantía Redes FTTH",
          company: "Cooperativa de Obras y Servicios Públicos",
          period: "Ago 2024 – Sep 2024",
          desc: "Experiencia práctica en infraestructura de ISP.",
          points: [
            "Gestión de aprovisionamiento GPON y configuración de ONTs.",
            "Optimización de gestión de inventario en un 70% mediante solución personalizada Excel/Barcode."
          ]
        }
      ]
    },
    education: {
      title: "Educación y Certificaciones",
      degrees: [
        {
          title: "Licenciatura en Ciberdefensa",
          school: "UNDEF - Universidad de la Defensa Nacional",
          year: "En Curso",
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: "Técnico en Informática",
          school: "Instituto Técnico Río Tercero",
          year: "2023",
          detail: "Título Secundario Técnico",
          icon: <GraduationCap className="w-5 h-5" />
        }
      ],
      certs: {
        title: "Certificaciones y Conocimientos",
        items: [
          {
            name: "Fortinet Certified Associate (FCA)",
            detail: "ID 1101209200SF",
            topics: ["Fabric Security", "Políticas de Firewall", "NAT & PAT", "VPN SSL/IPsec", "Logging y Reportes"]
          },
          {
            name: "Cisco CCNA (Módulos 1-3)",
            detail: "Entrenamiento Completo",
            topics: [
              "CCNA 1: Modelos OSI/TCP, Subnetting IPv4/IPv6, Conceptos Ethernet.",
              "CCNA 2: VLANs, Trunking (802.1Q), STP, EtherChannel, DHCP, Enrutamiento (Estático/OSPF).",
              "CCNA 3: ACLs, NAT, VPNs, QoS, Automatización (REST APIs, SDN, JSON), Virtualización."
            ]
          },
          {
            name: "ISC2 Certified in Cybersecurity",
            detail: "Training Completado",
            topics: ["Principios de Seguridad", "Respuesta a Incidentes", "Control de Acceso"]
          }
        ]
      }
    },
    projects: {
      title: "Proyectos y Labs",
      items: [
        { title: "Diseño de Red Empresarial", tech: "GNS3 / Cisco", desc: "Topología completa con enrutamiento Inter-VLAN, áreas OSPF y seguridad de acceso vía ACLs." },
        { title: "Stack de Monitoreo Zabbix", tech: "Linux / Zabbix", desc: "Setup completo: Instalación de servidor, despliegue de agentes y creación de triggers personalizados." },
        { title: "Operaciones de Seguridad FortiGate", tech: "Fortinet VM", desc: "Implementación de funciones UTM, VPNs Site-to-Site y reglas SD-WAN." }
      ]
    },
    footer: "Creado con Next.js, Tailwind CSS y Vercel."
  }
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = DATA[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* --- NAVBAR --- */}
      <nav className={`sticky top-0 z-50 backdrop-blur-lg border-b ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <Terminal className="text-blue-500" size={24} />
            <span>Santiago Callegari</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium
                ${darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600'}`}
            >
              <Languages size={18} />
              <span className="uppercase">{lang}</span>
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors
                ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">

        {/* --- HERO SECTION --- */}
        <section className="flex flex-col md:flex-row gap-10 items-center pt-8">
          <div className="flex-1 space-y-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase
              ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero.status}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Santiago <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Callegari
              </span>
            </h1>
            
            <h2 className={`text-xl md:text-2xl font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.hero.role}
            </h2>
            
            <p className={`text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.hero.summary}
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <SocialLink href={`mailto:${t.hero.email}`} icon={<Mail size={18} />} text={t.hero.email} dark={darkMode} />
              <SocialLink href="https://www.linkedin.com/in/santiago-ferreyra-callegari-104b02303" icon={<Linkedin size={18} />} text={t.hero.linkedin} dark={darkMode} />
              <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                <MapPin size={18} /> {t.hero.location}
              </div>
            </div>
          </div>

          {/* Abstract Tech Visual */}
          <div className="relative hidden md:block">
            <div className={`w-64 h-64 rounded-2xl rotate-3 border-2 flex items-center justify-center
               ${darkMode ? 'border-blue-500/30 bg-slate-900' : 'border-blue-200 bg-white'}`}>
                <Network size={80} className="text-blue-500" strokeWidth={1} />
            </div>
            <div className={`absolute -top-4 -right-4 w-64 h-64 rounded-2xl -rotate-3 -z-10
               ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'}`}></div>
          </div>
        </section>

        {/* --- SKILLS GRID --- */}
        <section>
          <SectionTitle icon={<Cpu />} title={t.skills.title} dark={darkMode} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkillCard 
              title={t.skills.networking} 
              items={['VLANs, STP, EtherChannel', 'OSPFv2/v3, BGP Concepts', 'IPv4/IPv6 Subnetting', 'L2 Segmentation']} 
              dark={darkMode} 
            />
            <SkillCard 
              title={t.skills.security} 
              items={['Fortinet Fabric', 'IPsec & SSL VPNs', 'ACLs & Zone-Based Firewall', 'Port Security & DHCP Snooping']} 
              dark={darkMode} 
            />
             <SkillCard 
              title={t.skills.monitoring} 
              items={['Zabbix (Server/Proxy)', 'Dynatrace (APM)', 'Wireshark & Packet Analysis', 'SNMP, Syslog & NetFlow']} 
              dark={darkMode} 
            />
            <SkillCard 
              title={t.skills.automation} 
              items={['Bash & Python Scripting', 'REST APIs & JSON/YAML', 'Linux Administration', 'Git Version Control']} 
              dark={darkMode} 
            />
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section>
          <SectionTitle icon={<Terminal />} title={t.experience.title} dark={darkMode} />
          <div className={`relative border-l-2 ml-3 space-y-10 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            {t.experience.jobs.map((job, idx) => (
              <ExperienceItem key={idx} data={job} dark={darkMode} />
            ))}
          </div>
        </section>

        {/* --- EDUCATION & CERTS (Detailed) --- */}
        <section className="grid lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-5">
            <SectionTitle icon={<GraduationCap />} title={t.education.title} dark={darkMode} />
            <div className="space-y-4">
              {t.education.degrees.map((deg, idx) => (
                <div key={idx} className={`p-5 rounded-xl border transition-colors flex items-start gap-4
                  ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-800' : 'bg-white border-slate-200 hover:border-blue-300'}`}>
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {deg.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>{deg.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{deg.school}</p>
                    <p className="text-xs text-slate-500 mt-1">{deg.year} {deg.detail && `• ${deg.detail}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs Column */}
          <div className="lg:col-span-7">
            <SectionTitle icon={<BookOpen />} title={t.education.certs.title} dark={darkMode} />
            <div className="space-y-4">
              {t.education.certs.items.map((cert, idx) => (
                <div key={idx} className={`p-6 rounded-xl border group transition-all
                   ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-green-800' : 'bg-white border-slate-200 hover:border-green-400'}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className={`font-bold text-lg ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>{cert.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded border 
                        ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
                        {cert.detail}
                      </span>
                    </div>
                    <CheckCircle2 className={darkMode ? 'text-green-500' : 'text-green-600'} size={20} />
                  </div>
                  
                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded-md font-medium
                        ${darkMode ? 'bg-blue-950/40 text-blue-300 border border-blue-900/50' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section>
          <SectionTitle icon={<Wifi />} title={t.projects.title} dark={darkMode} />
          <div className="grid md:grid-cols-3 gap-6">
            {t.projects.items.map((proj, idx) => (
              <ProjectCard key={idx} data={proj} dark={darkMode} />
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className={`py-12 mt-20 border-t ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Santiago Callegari.</p>
          <p className="text-sm mt-2">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

function SectionTitle({ icon, title, dark }: any) {
  return (
    <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${dark ? 'text-slate-100' : 'text-slate-900'}`}>
      <span className={dark ? 'text-blue-400' : 'text-blue-600'}>{icon}</span> {title}
    </h3>
  );
}

function SocialLink({ href, icon, text, dark }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border
       ${dark 
         ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-600 hover:text-white' 
         : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 shadow-sm'}`}>
      {icon} <span className="text-sm font-medium">{text}</span>
    </a>
  );
}

function SkillCard({ title, items, dark }: any) {
  return (
    <div className={`p-5 rounded-xl border transition-all h-full
      ${dark ? 'bg-slate-900 border-slate-800 hover:border-blue-600' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
      <h4 className={`font-bold mb-3 pb-2 border-b ${dark ? 'text-slate-100 border-slate-800' : 'text-slate-900 border-slate-100'}`}>{title}</h4>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className={`text-sm flex items-start gap-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="text-blue-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0"></span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ data, dark }: any) {
  return (
    <div className="relative pl-8 group">
      <span className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 transition-colors
        ${dark ? 'bg-slate-950 border-blue-500 group-hover:bg-blue-500' : 'bg-white border-blue-600 group-hover:bg-blue-600'}`}></span>
      
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
        <h4 className={`text-xl font-bold ${dark ? 'text-slate-100' : 'text-slate-900'}`}>{data.title}</h4>
        <span className={`text-sm font-mono ${dark ? 'text-blue-400' : 'text-blue-600'}`}>{data.period}</span>
      </div>
      
      <p className={`font-medium text-sm mb-3 uppercase tracking-wide ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{data.company}</p>
      <p className={`mb-3 italic ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{data.desc}</p>
      
      <ul className={`list-disc list-outside ml-4 text-sm space-y-1 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
        {data.points.map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ data, dark }: any) {
  return (
    <div className={`p-6 rounded-xl border flex flex-col transition-all
      ${dark ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'}`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className={`font-bold ${dark ? 'text-slate-100' : 'text-slate-900'}`}>{data.title}</h4>
        <Server size={18} className={dark ? 'text-slate-600' : 'text-slate-300'} />
      </div>
      <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
        {data.tech}
      </span>
      <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
        {data.desc}
      </p>
    </div>
  );
}