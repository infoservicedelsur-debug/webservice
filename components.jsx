/* ============================================================
   Service del Sur — shared components & icons
   ============================================================ */

const PHONE_RAW = "+59896269359";
const PHONE_DISPLAY = "096 269 359";
const WA_URL = "https://wa.me/59896269359?text=" + encodeURIComponent(
  "Hola Service del Sur, quería consultar por un servicio técnico."
);

/* ---------- icons ---------- */
const Icon = {
  Phone: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>,

  WhatsApp: () =>
  <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.9 15.9c-.2.5-1.1 1-1.5 1-.4 0-.9.2-2.9-.6-2.4-1-4-3.4-4.1-3.6-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3.2 0 .4 0 .5.0.2 0 .4-.1.7.5.2.6.8 2.1.9 2.2.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.2.3-.3.5-.1.2-.2.3-.1.5.1.2.6 1.1 1.4 1.8 1 .9 1.9 1.2 2.1 1.3.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.5.2.1.1.1.6-.1 1.1z" />
    </svg>,

  Menu: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
    </svg>,

  Close: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
    </svg>,

  Check: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>,

  AC: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="9" rx="2" />
      <line x1="2" y1="11" x2="22" y2="11" />
      <path d="M7 17c0 1.5 1 2 1 3" />
      <path d="M12 17c0 1.5 1 2 1 3" />
      <path d="M17 17c0 1.5 1 2 1 3" />
    </svg>,

  Fridge: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="5" y1="10" x2="19" y2="10" />
      <line x1="9" y1="6" x2="9" y2="7.5" />
      <line x1="9" y1="14" x2="9" y2="17" />
    </svg>,

  Washer: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="14" r="5" />
      <circle cx="12" cy="14" r="2" />
      <circle cx="8" cy="6" r=".6" fill="currentColor" />
      <circle cx="11" cy="6" r=".6" fill="currentColor" />
    </svg>,

  Bolt: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>,

  Tools: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>,

  Shield: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>,

  Quote: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>,

  Mail: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>,

  Pin: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>,

  Clock: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>,

  Arrow: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>,

  Spark: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6" /><path d="M12 16v6" /><path d="M2 12h6" /><path d="M16 12h6" />
      <path d="M4.9 4.9l4.2 4.2" /><path d="M14.9 14.9l4.2 4.2" />
      <path d="M4.9 19.1l4.2-4.2" /><path d="M14.9 9.1l4.2-4.2" />
    </svg>

};

/* ---------- shared bits ---------- */
function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="dot"></span>{children}
    </span>);

}

function CallButton({ variant = "primary", children, full }) {
  const cls = `btn btn-${variant === "primary" ? "primary" : variant}`;
  return (
    <a href={`tel:${PHONE_RAW}`} className={cls} style={full ? { width: "100%" } : null}>
      <Icon.Phone /> {children || `Llamar ${PHONE_DISPLAY}`}
    </a>);

}

function WAButton({ children, variant = "wa" }) {
  return (
    <a href={WA_URL} className={`btn btn-${variant}`} target="_blank" rel="noopener noreferrer">
      <Icon.WhatsApp /> {children || "WhatsApp"}
    </a>);

}

/* ---------- nav ---------- */
function Nav({ openMenu, setOpenMenu }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {document.body.style.overflow = "";};
  }, [openMenu]);
  const close = () => setOpenMenu(false);
  return (
    <>
    <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <a href="#inicio" className="brand" onClick={close}>
          <img className="brand-mark" src="assets/logo-mark.png" alt="" />
          <div>
            <div className="brand-name">Service del Sur</div>
            <div className="brand-sub">Montevideo · Uruguay</div>
          </div>
        </a>
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#zona">Zona de cobertura</a>
          <a href="#opiniones">Opiniones</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="nav-cta">
          <a href={`tel:${PHONE_RAW}`} className="nav-phone">
            <span className="pulse"></span>{PHONE_DISPLAY}
          </a>
          <a href="#contacto" className="btn btn-navy">Pedir presupuesto</a>
          <button className="nav-burger" onClick={() => setOpenMenu((v) => !v)} aria-label="Menú" aria-expanded={openMenu}>
            {openMenu ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </div>
    </div>
    <div className={`mobile-menu ${openMenu ? "open" : ""}`} aria-hidden={!openMenu}>
        <div className="mobile-menu-head">
          <a href="#inicio" className="brand" onClick={close}>
            <img className="brand-mark" src="assets/logo-mark.png" alt="" />
            <div>
              <div className="brand-name">Service del Sur</div>
              <div className="brand-sub">Montevideo · Uruguay</div>
            </div>
          </a>
          <button className="mobile-menu-close" onClick={() => setOpenMenu(false)} aria-label="Cerrar menú">
            <Icon.Close />
          </button>
        </div>
        <nav className="mobile-menu-links">
          <a href="#servicios" onClick={close}>Servicios</a>
          <a href="#nosotros" onClick={close}>Nosotros</a>
          <a href="#zona" onClick={close}>Zona de cobertura</a>
          <a href="#opiniones" onClick={close}>Opiniones</a>
          <a href="#contacto" onClick={close}>Contacto</a>
        </nav>
        <div className="mobile-menu-cta">
          <a href={`tel:${PHONE_RAW}`} className="btn btn-primary" onClick={close}>
            <Icon.Phone /> Llamar ahora
          </a>
          <a href={WA_URL} className="btn btn-wa" target="_blank" rel="noopener noreferrer" onClick={close}>
            <Icon.WhatsApp /> Escribir por WhatsApp
          </a>
        </div>
        <div className="mobile-menu-foot">
          <div className="mobile-menu-foot-label">Teléfono · WhatsApp</div>
          <a href={`tel:${PHONE_RAW}`} className="mobile-menu-phone" onClick={close}>{PHONE_DISPLAY}</a>
        </div>
      </div>
    </>);

}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg-ornament"></div>
      <div className="hero-bg-ornament-2"></div>
      <div className="container hero-grid">
        <div>
          <Eyebrow>Servicio técnico · Montevideo</Eyebrow>
          <h1 style={{ marginTop: 16 }}>
            Es nuevo? Lo instalamos, <em>se rompió? lo arreglamos hoy.</em>
          </h1>
          <p className="hero-lead">Reparamos e instalamos aires acondicionados, heladeras, lavarropas y secarropas en todo Montevideo y alrededores. Técnicos calificados, respuesta rápida y presupuesto en el acto. Trabajamos todas las marcas.


          </p>
          <div className="hero-cta">
            <CallButton>Llamar al {PHONE_DISPLAY}</CallButton>
            <WAButton>Escribir por WhatsApp</WAButton>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><Icon.Check /> Presupuesto inmediato</div>
            <div className="trust-item"><Icon.Check /> Garantía por escrito</div>
            <div className="trust-item"><Icon.Check /> Atención en el día</div>
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-photo-img" src="assets/todos.webp" alt="Aire acondicionado, lavarropas y heladera reparados por Service del Sur" />
          <div className="hero-badge">
            <span className="dot"></span> Disponibles ahora
          </div>
          <div className="hero-photo-label" style={{ display: "none" }}>[ foto · técnico atendiendo en domicilio ]</div>
          <div className="hero-card">
            <div className="hero-card-avatars">
              <div className="av">JC</div>
              <div className="av">MP</div>
              <div className="av">RS</div>
            </div>
            <div className="hero-card-text">
              <small>+1.200 clientes</small>
              <strong>4.9 ★ · 320 reseñas</strong>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- marquee ---------- */
function Strip() {
  const items = [
  "Atención en el día",
  "Presupuesto inmediato",
  "Garantía por escrito",
  "Técnicos matriculados",
  "Repuestos originales",
  "Más de 12 años en Montevideo"];

  const row =
  <>
      {items.map((t, i) =>
    <span className="strip-item" key={i}>
          <span className="star">✦</span> {t}
        </span>
    )}
    </>;

  return (
    <div className="strip">
      <div className="strip-track">{row}{row}</div>
    </div>);

}

/* ---------- service block ---------- */
function Service({ id, eyebrow, title, copy, features, ctaLabel, photo, photoAlt, photoLabel, icon, reverse, chip }) {
  return (
    <div className={`service ${reverse ? "reverse" : ""}`} id={id}>
      <div className="service-media">
        {photo ?
        <img className="service-photo" src={photo} alt={photoAlt || title} loading="lazy" /> :

        <div className="placeholder">
            <div className="placeholder-inner">
              <div className="placeholder-icon">{icon}</div>
              <div className="placeholder-label">{photoLabel}</div>
              <div className="placeholder-title">{title}</div>
            </div>
          </div>
        }
        {chip && <div className="media-chip">{chip}</div>}
      </div>
      <div className="service-body">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 style={{ marginTop: 14 }}>{title}</h3>
        <p>{copy}</p>
        <ul className="service-features">
          {features.map((f, i) =>
          <li key={i}><Icon.Check /> {f}</li>
          )}
        </ul>
        <div className="service-cta-row">
          <CallButton>{ctaLabel}</CallButton>
          <WAButton variant="ghost">Consultar por WhatsApp</WAButton>
        </div>
      </div>
    </div>);

}

/* ---------- why us ---------- */
function WhyUs() {
  const items = [
  { num: "01", icon: <Icon.Tools />, title: "Técnicos calificados", body: "Equipo con formación específica y más de una década reparando electrodomésticos en Uruguay." },
  { num: "02", icon: <Icon.Bolt />, title: "Respuesta rápida", body: "Coordinamos la visita el mismo día o al siguiente. Sabemos que no podés esperar una semana." },
  { num: "03", icon: <Icon.Spark />, title: "Presupuesto inmediato", body: "Diagnosticamos sin costo y te entregamos un presupuesto claro antes de cualquier reparación." },
  { num: "04", icon: <Icon.Shield />, title: "Atención que se nota", body: "Trato cercano, comunicación directa y garantía por escrito sobre cada trabajo realizado." }];

  return (
    <div className="why" id="nosotros">
      <div className="why-bg"></div>
      <Eyebrow>Por qué elegirnos</Eyebrow>
      <h2 style={{ marginTop: 16, fontSize: "clamp(32px, 4vw, 52px)", maxWidth: 720 }}>Cuatro razones por las que las familias, comercios y empresas uruguayas nos eligen.

      </h2>
      <div className="why-grid">
        {items.map((it, i) =>
        <div key={i} className="why-item">
            <div className="why-item-num">{it.num}</div>
            <div className="why-item-icon">{it.icon}</div>
            <h4>{it.title}</h4>
            <p>{it.body}</p>
          </div>
        )}
      </div>
    </div>);

}

/* ---------- story ---------- */
function Story() {
  return (
    <section className="section story">
      <div className="container story-grid">
        <div className="story-visual">
          <img className="story-photo" src="assets/atencion.webp" alt="Atención al cliente de Service del Sur respondiendo consultas" />
        </div>
        <div>
          <Eyebrow>Nuestra historia</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            Service del Sur nació para devolverle a la gente algo simple: que las cosas funcionen.
          </h2>
          <p className="story-lead">
            Empezamos como un pequeño taller en el barrio La Blanqueada. Hoy somos un equipo de
            técnicos matriculados que recorre toda Montevideo reparando lo que cada hogar necesita,
            con la misma atención cercana del primer día.
          </p>
          <p style={{ marginTop: 20, color: "var(--ink-2)" }}>
            Creemos que un buen service no se mide solo en una reparación, sino en cómo te
            sentiste durante todo el proceso: la rapidez en contestar, la claridad del
            presupuesto y la garantía detrás de cada trabajo.
          </p>
          <div className="story-stats">
            <div className="story-stat">
              <div className="story-stat-num">+100<span>0</span></div>
              <div className="story-stat-label">Reparaciones realizadas</div>
            </div>
            <div className="story-stat">
              <div className="story-stat-num">24<span>h</span></div>
              <div className="story-stat-label">Tiempo medio de respuesta</div>
            </div>
            <div className="story-stat">
              <div className="story-stat-num">4.9<span>★</span></div>
              <div className="story-stat-label">Promedio de calificación</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- service area / map ---------- */
function ServiceArea() {
  const zones = [
  "Centro", "Pocitos", "Punta Carretas", "Cordón", "La Blanqueada", "Buceo",
  "Carrasco", "Malvín", "Parque Batlle", "Tres Cruces", "Prado", "Aguada",
  "Sayago", "Maroñas", "Cerrito", "Paso Molino y más! Consultános."];

  return (
    <section className="section" id="zona">
      <div className="container">
        <div className="area">
          <div>
            <Eyebrow>Zona de cobertura</Eyebrow>
            <h3 style={{ marginTop: 16 }}>
              Llegamos a toda Montevideo y alrededores.
            </h3>
            <p>
              Nuestra base de operaciones está en Montevideo y cubrimos todos sus barrios.
              También atendemos zonas cercanas de Canelones bajo coordinación previa.
            </p>
            <div className="area-zones">
              {zones.map((z) => <span key={z} className="area-zone">{z}</span>)}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <CallButton>Llamar ahora</CallButton>
              <WAButton variant="ghost">Consultar mi zona</WAButton>
            </div>
          </div>
          <div className="map">
            <img className="map-img" src="assets/mapa-montevideo.png" alt="Mapa de Montevideo y alrededores" loading="lazy" />
            <div className="map-overlay"></div>
            <div className="map-pin" style={{ left: "calc(50% - 20px)", top: "calc(62% - 20px)" }}>
              <div className="pin-inner"></div>
            </div>
            <div className="map-tag">
              <Icon.Pin />
              <span>Montevideo</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- quotes ---------- */
function Quotes() {
  const data = [
  {
    stars: 5,
    text: "Llamé un sábado a la mañana porque la heladera no enfriaba y al mediodía ya estaba arreglada. Trato impecable y precio justo.",
    author: "Lucía Fernández",
    where: "Pocitos · Heladera",
    initials: "LF"
  },
  {
    stars: 5,
    text: "Hicieron mantenimiento a dos splits antes del verano. Súper prolijos, dejaron todo limpio y el aire quedó como nuevo.",
    author: "Martín Pereyra",
    where: "Carrasco · Aire acondicionado",
    initials: "MP"
  },
  {
    stars: 5,
    text: "Pensé que tenía que comprar un lavarropas nuevo. Vinieron, diagnosticaron, lo arreglaron el mismo día y me ahorraron una fortuna.",
    author: "Soledad Rivero",
    where: "Cordón · Lavarropas",
    initials: "SR"
  }];

  return (
    <section className="section" id="opiniones" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>Lo que dicen nuestros clientes</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Reseñas reales de clientes.</h2>
          </div>
          <p>Cada visita termina con la pregunta más importante: ¿quedó funcionando bien? Si la respuesta es no, volvemos sin cargo.</p>
        </div>
        <div className="quotes">
          {data.map((q, i) =>
          <div className="quote" key={i}>
              <div className="quote-stars">{"★".repeat(q.stars)}</div>
              <p>"{q.text}"</p>
              <div className="quote-author">
                <div className="quote-avatar">{q.initials}</div>
                <div>
                  <strong>{q.author}</strong>
                  <small>{q.where}</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- contact ---------- */
const WEB3FORMS_KEY = "1d65d1c1-5368-4cc9-a9e7-10d807b50802";

function Contact() {
  const [form, setForm] = React.useState({
    name: "", phone: "", service: "", zone: "", message: ""
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState(null);

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const serviceLabels = {
    aire: "Aire acondicionado",
    heladera: "Heladera / Freezer",
    lavarropas: "Lavarropas",
    otro: "Otro electrodoméstico"
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Ingresá tu nombre";
    if (!form.phone.trim()) errs.phone = "Necesitamos un teléfono para devolverte el llamado";else
    if (!/^[\d\s+()-]{7,}$/.test(form.phone)) errs.phone = "El teléfono no parece válido";
    if (!form.service) errs.service = "Elegí el servicio que necesitás";
    if (!form.message.trim()) errs.message = "Contanos brevemente el problema";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    setSendError(null);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `Nuevo pedido de servicio — ${serviceLabels[form.service] || form.service}`,
        from_name: "Service del Sur — Web",
        nombre: form.name,
        telefono: form.phone,
        servicio: serviceLabels[form.service] || form.service,
        barrio: form.zone || "(no indicado)",
        mensaje: form.message,
        botcheck: ""
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setSendError(data.message || "No pudimos enviar el mensaje. Intentá nuevamente o llamanos.");
      }
    } catch (err) {
      setSendError("Hubo un problema de conexión. Intentá nuevamente o llamanos.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="contact">
          <div className="contact-grid">
              <div>
                <Eyebrow>Contacto</Eyebrow>
                <h2 style={{ marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Contanos qué pasó.<br />Te respondemos en minutos.
                </h2>
                <p className="contact-lead">
                  Si necesitás una respuesta inmediata, lo más rápido es llamarnos o
                  escribirnos por WhatsApp. También podés dejarnos un mensaje y te
                  contactamos a la brevedad.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <CallButton>Llamar</CallButton>
                  <WAButton>WhatsApp</WAButton>
                </div>
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Icon.Phone /></div>
                    <div className="contact-info-text">
                      <small>Teléfono · WhatsApp</small>
                      <strong><a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a></strong>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Icon.Mail /></div>
                    <div className="contact-info-text">
                      <small>Email</small>
                      <strong><a href="mailto:hola@servicedelsur.uy">infoservicedelsur@gmail.com</a></strong>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Icon.Pin /></div>
                    <div className="contact-info-text">
                      <small>Zona de cobertura</small>
                      <strong>Montevideo y alrededores</strong>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Icon.Clock /></div>
                    <div className="contact-info-text">
                      <small>Horarios</small>
                      <strong>Lun a sáb · 8:00 a 20:00</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="form" onSubmit={submit} noValidate>
                  {sent ?
                <div className="form-success">
                      <div className="form-success-icon"><Icon.Check /></div>
                      <h3>¡Mensaje recibido!</h3>
                      <p>Te vamos a estar contactando en los próximos minutos al teléfono que dejaste.</p>
                      <p style={{ marginTop: 18, fontSize: 14 }}>¿Es urgente? <a href={`tel:${PHONE_RAW}`} style={{ color: "var(--clay)", textDecoration: "underline" }}>Llamanos al {PHONE_DISPLAY}</a></p>
                    </div> :

                <>
                      <div className="form-row">
                        <div className="field">
                          <label>Nombre</label>
                          <input type="text" placeholder="Tu nombre"
                      value={form.name} onChange={(e) => update("name", e.target.value)} />
                          {errors.name && <div className="field-error">{errors.name}</div>}
                        </div>
                        <div className="field">
                          <label>Teléfono</label>
                          <input type="tel" placeholder="Ej. 099 123 456"
                      value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                          {errors.phone && <div className="field-error">{errors.phone}</div>}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="field">
                          <label>¿Qué servicio necesitás?</label>
                          <select value={form.service} onChange={(e) => update("service", e.target.value)}>
                            <option value="">Elegí una opción</option>
                            <option value="aire">Aire acondicionado</option>
                            <option value="heladera">Heladera / Freezer</option>
                            <option value="lavarropas">Lavarropas</option>
                            <option value="otro">Otro electrodoméstico</option>
                          </select>
                          {errors.service && <div className="field-error">{errors.service}</div>}
                        </div>
                        <div className="field">
                          <label>Barrio</label>
                          <input type="text" placeholder="Ej. Pocitos"
                      value={form.zone} onChange={(e) => update("zone", e.target.value)} />
                        </div>
                      </div>
                      <div className="field">
                        <label>Contanos qué está pasando</label>
                        <textarea placeholder="Describí brevemente la falla, marca, modelo si lo sabés..."
                    value={form.message} onChange={(e) => update("message", e.target.value)} />
                        {errors.message && <div className="field-error">{errors.message}</div>}
                      </div>
                      <div className="form-submit">
                        <p className="form-disclaimer">
                          Al enviar, aceptás que un técnico te contacte para coordinar el servicio.
                        </p>
                        {sendError && <div className="field-error" style={{ marginBottom: 10 }}>{sendError}</div>}
                        <button type="submit" className="btn btn-primary" disabled={sending}>
                          {sending ? "Enviando..." : <>Enviar mensaje <Icon.Arrow /></>}
                        </button>
                      </div>
                      <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                    </>
                }
                </form>
              </div>
            </div>
        </div>
      </div>
    </section>);

}

/* ---------- compromiso banner ---------- */
function Compromiso() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="compromiso">
          <div className="compromiso-media">
            <img src="assets/handshake.jpg" alt="Acuerdo y compromiso con cada cliente" loading="lazy" />
          </div>
          <div className="compromiso-body">
            <Eyebrow>Nuestro compromiso</Eyebrow>
            <h2>Un trato simple: si no quedó funcionando bien, volvemos.</h2>
            <p>
              Cada reparación viene con garantía por escrito. No cobramos por diagnóstico,
              no hay sorpresas en el presupuesto y, si después de la visita algo no quedó
              como esperabas, volvemos sin cargo. Así de simple.
            </p>
            <div className="compromiso-points">
              <div className="compromiso-point">
                <div className="compromiso-point-icon"><Icon.Shield /></div>
                <div>
                  <strong>Garantía por escrito</strong>
                  <small>Sobre la mano de obra y los repuestos colocados</small>
                </div>
              </div>
              <div className="compromiso-point">
                <div className="compromiso-point-icon"><Icon.Spark /></div>
                <div>
                  <strong>Presupuesto sin cargo</strong>
                  <small>Sabés exactamente cuánto cuesta antes de empezar</small>
                </div>
              </div>
            </div>
            <div className="service-cta-row">
              <CallButton>Coordinar visita</CallButton>
              <WAButton variant="ghost">Consultar por WhatsApp</WAButton>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="brand">
              <img className="brand-mark" src="assets/logo-mark.png" alt="" />
              <div>
                <div className="brand-name">Service del Sur</div>
                <div className="brand-sub">Montevideo · Uruguay</div>
              </div>
            </a>
            <p>Servicio técnico de aires acondicionados, heladeras y lavarropas en Montevideo. Atención cercana, garantía por escrito.</p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#aires">Aires acondicionados</a></li>
              <li><a href="#heladeras">Heladeras</a></li>
              <li><a href="#lavarropas">Lavarropas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Compañía</h5>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#zona">Zona de cobertura</a></li>
              <li><a href="#opiniones">Opiniones</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li><a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:hola@servicedelsur.uy">infoservicedelsur@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Service del Sur · Todos los derechos reservados.</div>
          <div>Hecho con cuidado en Montevideo, Uruguay 🇺🇾</div>
        </div>
      </div>
    </footer>);

}

/* ---------- floating WA ---------- */
function FloatingWA() {
  return (
    <div className="wa-fab">
      <div className="wa-fab-tip">
        <small>Chateá con nosotros</small>
        Respuesta en minutos
      </div>
      <a className="wa-fab-btn" href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
        <Icon.WhatsApp />
      </a>
    </div>);

}

/* expose */
Object.assign(window, {
  PHONE_RAW, PHONE_DISPLAY, WA_URL,
  Icon, Eyebrow, CallButton, WAButton,
  Nav, Hero, Strip, Service, WhyUs, Story, ServiceArea, Quotes, Compromiso, Contact, Footer, FloatingWA
});