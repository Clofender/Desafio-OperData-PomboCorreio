import { Link } from 'react-router-dom';
import './HomePage.css';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export function HomePage() {
  const features = [
    { icon: <ZapIcon />, title: "Entrega Ultrarrápida", description: "Nossos pombos-correio entregam suas mensagens com velocidade incomparável." },
    { icon: <ShieldIcon />, title: "100% Confiável", description: "Sistema de rastreamento e pombos treinados garantem que sua mensagem chegue ao destino." },
    { icon: <ClockIcon />, title: "Disponível 24/7", description: "Nossa frota está sempre pronta para voar, independente do horário ou condições climáticas." }
  ];

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <h1 className="hero-title">
          Delivery Aéreo do Sr. Moraes Moreira
        </h1>
        <p className="hero-subtitle">
          Conectando pessoas através dos céus com a tradição e a velocidade dos pombos-correio.
        </p>
        <div className="hero-buttons">
          <Link to="/cartas" className="hero-button primary">
            Enviar uma Carta
          </Link>
          <Link to="/pombos" className="hero-button secondary">
            Conhecer a Frota
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Por que voar conosco?</h2>
          <p className="section-subtitle">
            Combinamos tradição e inovação para oferecer o melhor serviço de entrega.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}