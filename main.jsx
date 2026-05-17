import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Car, Sparkles, ShieldCheck, Droplets, MapPin, CheckCircle2, Star, CalendarCheck, Mail } from 'lucide-react';
import './styles.css';

import logo from './assets/logo.png';
import galleryPolishing from './assets/gallery-polishing.jpeg';
import galleryInterior from './assets/gallery-interior.jpeg';
import galleryWash from './assets/gallery-wash.jpeg';
import galleryCeramic from './assets/gallery-ceramic.jpeg';
import galleryStudio from './assets/gallery-studio.jpeg';

const whatsappLink = 'https://wa.me/491726684456?text=Hallo%20LS-CAR%20Auto%20Studio%2C%20ich%20m%C3%B6chte%20einen%20Termin%20vereinbaren.';
const emailLink = 'mailto:serhii.levkovskyi@icloud.com?subject=Terminanfrage%20LS-CAR%20Auto%20Studio&body=Hallo%20LS-CAR%20Auto%20Studio%2C%0A%0Aich%20m%C3%B6chte%20einen%20Termin%20vereinbaren.%0A%0AFahrzeug%3A%0AWunschtermin%3A%0ANachricht%3A%0A';

const services = [
  { icon: Sparkles, title: 'Lackpolitur', text: 'Glanz zurückbringen, feine Kratzer, Hologramme und Waschspuren professionell entfernen.' },
  { icon: ShieldCheck, title: 'Keramikversiegelung', text: 'Lang anhaltender Schutz, tiefer Glanz, starker Abperleffekt und einfachere Pflege.' },
  { icon: Droplets, title: 'Innenraumreinigung', text: 'Gründliche Reinigung von Sitzen, Teppichen, Himmel, Kunststoffteilen und Kofferraum.' },
  { icon: Car, title: 'Verkaufsaufbereitung', text: 'Komplette Fahrzeugaufbereitung, damit Ihr Auto beim Verkauf einen besseren Eindruck macht.' },
];

const packages = [
  { name: 'Express Shine', price: 'ab 120 €', features: ['Handwäsche', 'Felgenreinigung', 'Schneller Lackschutz', 'Innenraum-Auffrischung'] },
  { name: 'Premium Detail', price: 'ab 200 €', featured: true, features: ['Gründliche Außenwäsche', 'Innenraum-Detailing', 'Einstufige Politur', 'Lackschutz'] },
  { name: 'Ceramic Pro Look', price: 'ab 599 €', features: ['Mehrstufige Politur', 'Keramikversiegelung', 'Scheibenhydrophobie', 'Finale Qualitätskontrolle'] },
];

const steps = ['Fahrzeugbesichtigung', 'Passendes Paket wählen', 'Detailing-Arbeiten', 'Finale Übergabe'];

const gallery = [
  { src: galleryPolishing, title: 'Lackpolitur' },
  { src: galleryInterior, title: 'Innenraumreinigung' },
  { src: galleryWash, title: 'Premium Handwäsche' },
  { src: galleryCeramic, title: 'Keramikschutz' },
  { src: galleryStudio, title: 'Studio Finish' },
];

function Button({ children, href, variant = 'primary', target }) {
  return (
    <a className={`btn ${variant}`} href={href} target={target} rel={target ? 'noreferrer' : undefined}>
      {children}
    </a>
  );
}

function App() {
  return (
    <main>
      <section className="hero">
        <div className="bg-grid" />
        <nav className="nav container">
          <img src={logo} alt="LS-CAR Auto Studio" className="logo" />
          <div className="nav-actions">
            <Button href={whatsappLink} target="_blank" variant="light">WhatsApp Anfrage</Button>
            <Button href="#termin"><CalendarCheck size={18} /> Termin vereinbaren</Button>
          </div>
        </nav>

        <div className="hero-inner container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="badge"><Star size={16} fill="currentColor" /> Premium Fahrzeugpflege in Kassel</div>
            <h1>Wir lassen Ihr Auto wieder <span>wie neu</span> aussehen</h1>
            <p className="lead">LS-CAR Auto Studio — professionelle Lackpolitur, Innenraumreinigung, Keramikschutz und Fahrzeugaufbereitung für Verkauf oder Alltag.</p>
            <div className="cta-row">
              <Button href={whatsappLink} target="_blank"><CalendarCheck size={20} /> Termin per WhatsApp</Button>
              <Button href="#services" variant="outline">Leistungen ansehen</Button>
            </div>
          </motion.div>

          <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <img src={galleryCeramic} alt="LS-CAR Auto Studio Detailing" />
            <div className="hero-card-overlay">
              <strong>Premium Detailing</strong>
              <small>Kassel · Auto Studio</small>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section container">
        <div className="section-head">
          <p className="eyebrow">Leistungen</p>
          <h2>Detailing, das man sofort sieht</h2>
          <p>Wir wählen die passenden Arbeiten nach Zustand, Ziel und Budget Ihres Fahrzeugs.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return <article className="card" key={service.title}><Icon className="card-icon" /><h3>{service.title}</h3><p>{service.text}</p></article>;
          })}
        </div>
      </section>

      <section className="why">
        <div className="container why-grid">
          <div><p className="eyebrow dark">Warum LS-CAR</p><h2>Ihr Fahrzeug ist unsere Visitenkarte</h2></div>
          <div className="check-list">
            {['Sorgfältige Arbeit mit jedem Material', 'Professionelle Produkte und saubere Prozesse', 'Ehrliche Beratung ohne unnötige Arbeiten', 'Ideal für Privatfahrzeuge und Verkaufsaufbereitung'].map(item => <div className="check" key={item}><CheckCircle2 /> {item}</div>)}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head center"><p className="eyebrow">Pakete</p><h2>Wählen Sie die passende Pflege</h2></div>
        <div className="package-grid">
          {packages.map(pack => <article className={`package ${pack.featured ? 'featured' : ''}`} key={pack.name}>{pack.featured && <span className="popular">Beliebt</span>}<h3>{pack.name}</h3><strong>{pack.price}</strong>{pack.features.map(feature => <p key={feature}><CheckCircle2 size={18} /> {feature}</p>)}</article>)}
        </div>
      </section>

      <section className="section container">
        <div className="section-head center"><p className="eyebrow">Galerie</p><h2>Unsere Arbeiten</h2><p>Professionelle Fahrzeugaufbereitung, Lackpolitur, Innenraumreinigung und Premium-Finish.</p></div>
        <div className="gallery">
          {gallery.map((item, index) => <motion.figure className="gallery-item" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}><img src={item.src} alt={item.title} /><figcaption><strong>{item.title}</strong><span>LS-CAR Auto Studio</span></figcaption></motion.figure>)}
        </div>
      </section>

      <section className="section container">
        <div className="process"><h2>So läuft es ab</h2><div className="steps">{steps.map((step, index) => <div className="step" key={step}><span>{index + 1}</span><b>{step}</b></div>)}</div></div>
      </section>

      <section id="termin" className="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Termin</p>
            <h2>Jetzt Termin zur Fahrzeugbesichtigung vereinbaren</h2>
            <p>Schicken Sie uns Fotos vom Fahrzeug oder kommen Sie direkt zur Besichtigung. Wir empfehlen Ihnen das passende Paket.</p>
            <div className="cta-row"><Button href={whatsappLink} target="_blank">Termin per WhatsApp</Button><Button href={emailLink} variant="outline"><Mail size={20} /> Anfrage per E-Mail</Button></div>
            <div className="address"><MapPin /> Reuterstraße 1a, 34117 Kassel, Deutschland</div>
          </div>
          <div className="form-card">
            <h3>Termin anfragen</h3>
            <p>Wir melden uns schnellstmöglich zurück.</p>
            <input placeholder="Ihr Name" />
            <input placeholder="E-Mail oder WhatsApp-Kontakt" />
            <input placeholder="Fahrzeugmarke und Modell" />
            <select defaultValue=""><option value="" disabled>Gewünschte Leistung</option><option>Express Shine</option><option>Premium Detail</option><option>Ceramic Pro Look</option><option>Ich brauche Beratung</option></select>
            <textarea placeholder="Wunschtermin oder Nachricht" />
            <Button href={whatsappLink} target="_blank">Anfrage über WhatsApp senden</Button>
          </div>
        </div>
      </section>

      <footer>© 2026 LS-CAR Auto Studio. Premium Fahrzeugaufbereitung in Kassel.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
