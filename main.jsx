function App() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const services = [
  {
    id: "aires",
    eyebrow: "Aires acondicionados",
    title: "Aires acondicionados",
    photo: "assets/aire.jpg",
    photoAlt: "Técnico reparando un aire acondicionado split",
    copy: "Instalación, mantenimiento, recarga de gas y reparación de todo tipo de equipos split y multi-split . Trabajamos con todas las marcas.",
    features: [
    "Mantenimiento preventivo",
    "Recarga de gas refrigerante",
    "Reparación de placa electrónica",
    "Cambio de turbina y motor",
    "Limpieza de filtros y bobinas",
    "Instalación, desinstalación y reinstalación de equipos nuevos y usados"],

    ctaLabel: "Llamar por mi aire",
    photoLabel: "[ foto · técnico instalando split ]",
    icon: <Icon.AC />,
    chip: "Todas las marcas",
    reverse: false
  },
  {
    id: "heladeras",
    eyebrow: "Heladeras y freezers",
    title: "Heladeras y freezers",
    photo: "assets/heladeras.jpg",
    photoAlt: "Técnico de Service del Sur reparando una heladera",
    copy: "Diagnosticamos fugas de gas, fallas de termostato, problemas de compresor y todo lo que impide que tu heladera enfríe como antes.",
    features: [
    "Heladera que no enfría",
    "Cambio de compresor y reparación placas electrónicas",
    "Carga de gas y soldadura",
    "Reparación de termostato",
    "Cambio de gomas y burletes",
    "Freezer horizontales y verticales"],

    ctaLabel: "Llamar por mi heladera",
    photoLabel: "[ foto · reparación de heladera en cocina ]",
    icon: <Icon.Fridge />,
    chip: "Atención en el día",
    reverse: true
  },
  {
    id: "lavarropas",
    eyebrow: "Lavarropas",
    title: "Lavarropas y Secarropas",
    photo: "assets/lavarropas.jpg",
    photoAlt: "Técnico anotando un diagnóstico junto a un lavarropas",
    copy: "Reparación de lavarropas automáticos y semi-automáticos. Resolvemos pérdidas de agua, problemas eléctricos y fallas mecánicas con repuestos originales.",
    features: [
    "Cambio de rulemanes y reten",
    "Reparación de placa",
    "Bomba de desagote",
    "Resistencia y termostato",
    "Pérdidas de agua",
    "Programador y selector"],

    ctaLabel: "Llamar por mi lavarropas",
    photoLabel: "[ foto · técnico abriendo lavarropas ]",
    icon: <Icon.Washer />,
    chip: "Repuestos originales",
    reverse: false
  }];


  return (
    <>
      <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Hero />
      <Strip />

      <section className="section" id="servicios">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Nuestros servicios</Eyebrow>
              <h2 style={{ marginTop: 16 }}>
                Reparamos lo que tu casa necesita todos los días.
              </h2>
            </div>
            <p>Tres especialidades, un mismo nivel de atención. Si necesitás instalar o reparar, contá con nosotros.


            </p>
          </div>
          {services.map((s) => <Service key={s.id} {...s} />)}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <WhyUs />
        </div>
      </section>

      <Story />
      <ServiceArea />
      <Quotes />
      <Compromiso />
      <Contact />
      <Footer />
      <FloatingWA />
    </>);

}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);