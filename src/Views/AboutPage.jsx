import { Card, Col, Container, Row } from 'react-bootstrap';
import '../css/about-page.css';

const FOCUS_CARDS = [
  {
    icon: '👩🏼‍💻',
    iconBg: '#dbeafe',
    iconColor: 'dodgerblue',
    title: 'Frontend focus',
    desc: 'React,JavaScript, TypeScript,Next.js, hooks, async patterns, component architecture.'
  },
  {
    icon: '📚',
    iconBg: '#e0f2fe',
    iconColor: '#0369a1',
    title: 'CS foundations',
    desc: 'Analysis of Algorithms, Networks, OS, distributed systems, cybersecurity, architecture.'
  },
  {
    icon: '🎯',
    iconBg: '#eff6ff',
    iconColor: '#1d4ed8',
    title: 'Seeking internship',
    desc: 'Frontend · Full stack · General SWE — Summer 2026 in the US.'
  }
];

const JOURNEY = [
  {
    period: 'Aug 2024 – now',
    title: 'Troy University',
    subtitle: 'MS in Computer Science — expected graduation Dec 2026',
    active: true
  },
  {
    period: 'Jan 2024 - May 2024',
    title: 'Wichita State University',
    subtitle: 'MS in Computer Science (transfer) — 1 semester',
    active: false
  },
  {
    period: '2022–2024',
    title: 'Mid Frontend developer — Nepal',
    subtitle: 'Khalti Pvt. Ltd.',
    active: false
  },
  {
    period: '2021–2022',
    title: 'Associate Frontend developer — Nepal',
    subtitle: 'Ekbana Solutions Pvt. Ltd.',
    active: false
  }
];

const FocusCard = ({ icon, iconBg, iconColor, title, desc }) => (
  <Card className="focus-card h-100">
    <Card.Body className="p-4">
      <div className="focus-card__icon" style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <Card.Title className="focus-card__title">{title}</Card.Title>
      <Card.Text className="focus-card__desc">{desc}</Card.Text>
    </Card.Body>
  </Card>
);

const JourneyItem = ({ period, title, subtitle, active, isLast }) => (
  <Row className="flex-nowrap g-0 journey-item">
    <Col xs="auto" className="journey-item__period">
      {period}
    </Col>
    <Col xs="auto" className="d-flex flex-column align-items-center journey-item__timeline">
      <div className={`journey-item__dot ${active ? 'journey-item__dot--active' : ''}`} />
      {!isLast && <div className="journey-item__line" />}
    </Col>
    <Col className={isLast ? 'pb-0' : 'pb-4'}>
      <p className="journey-item__title mb-1">{title}</p>
      <p className="journey-item__subtitle mb-0">{subtitle}</p>
    </Col>
  </Row>
);

export default function About() {
  return (
    <div className="about-page">
      <Container className="about-page__container">
        {/* Top: Intro + Avatar */}
        <Row className="align-items-start justify-content-between mb-5 g-4">
          <Col xs={12} md={8}>
            <p className="about-page__hello mb-2">HELLO, I'M</p>
            <h1 className="about-page__name mb-2">Nira Tamang</h1>
            <p className="about-page__role mb-4">Frontend &amp; full stack engineer · Troy University</p>
            <p className="about-page__bio mb-3">
              I'm an MS Computer Science student with Software Engineer with 3+ years of professional frontend
              development experience building scalable web applications with React.js, Next.js, and TypeScript. Skilled
              in REST API integration, unit testing (Jest, Vitest), and Agile workflows. Currently pursuing an MS in
              Computer Science, seeking a software engineering internship to apply full-stack fundamentals and
              contribute to impactful products.
            </p>
            {/* <p className="about-page__bio mb-0">
              When I'm not coding, I'm deep in computer architecture textbooks, debugging OMNeT++ simulations, or
              helping organize library collections at work.
            </p> */}
          </Col>

          <Col xs="auto" className="d-flex justify-content-center">
            <div className="about-page__avatar">
              <span className="about-page__avatar-text">NT</span>
            </div>
          </Col>
        </Row>

        {/* Focus Cards */}
        <Row className="g-3 mb-5">
          {FOCUS_CARDS.map(card => (
            <Col key={card.title} xs={12} sm={6} lg={4}>
              <FocusCard {...card} />
            </Col>
          ))}
        </Row>

        {/* Journey */}
        <div>
          <p className="about-page__section-label mb-4">JOURNEY</p>
          {JOURNEY.map((item, i) => (
            <JourneyItem key={item.title} {...item} isLast={i === JOURNEY.length - 1} />
          ))}
        </div>
      </Container>
    </div>
  );
}
