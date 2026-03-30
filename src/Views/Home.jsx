import { useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import { Button, Col, Row, Container } from 'react-bootstrap';

const SKILLS = [
  // Languages
  { id: 1, skill: 'Python' },
  { id: 2, skill: 'C' },
  { id: 3, skill: 'C++' },
  { id: 4, skill: 'JavaScript' },
  { id: 5, skill: 'TypeScript' },
  { id: 6, skill: 'HTML/CSS' },

  // Frameworks
  { id: 7, skill: 'React' },
  { id: 8, skill: 'Next.js' },
  { id: 9, skill: 'Vue' },
  { id: 10, skill: 'React Native' },

  // Backend / Runtime
  { id: 11, skill: 'Node.js' },

  // Developer Tools
  { id: 12, skill: 'Git' },
  { id: 13, skill: 'GitHub' },
  { id: 14, skill: 'GitLab' },

  // API Platforms
  { id: 15, skill: 'Swagger' },
  { id: 16, skill: 'Postman' },
  { id: 17, skill: 'REST APIs' },

  // Frontend Frameworks / UI
  { id: 18, skill: 'Bootstrap' },
  { id: 19, skill: 'Ant Design' },
  { id: 20, skill: 'Chakra UI' },

  // Testing
  { id: 21, skill: 'Jest' },
  { id: 22, skill: 'Vitest' },
  { id: 23, skill: 'React Testing Library' },

  // Existing extras
  { id: 24, skill: 'Distributed systems' },
  { id: 25, skill: 'Computer networks' },
  { id: 26, skill: 'Cybersecurity' }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container style={{ maxWidth: '860px' }}>
      <div className="mt-lg-0 mt-5">
        <Hero />
        {/* <Projects /> */}
        <section style={{ padding: '8px' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: '#9ca3af',
              marginBottom: 18
            }}
          >
            SKILLS
          </p>
          <Row className="d-flex flex-wrap gap-2">
            {SKILLS.map(({ id, skill }) => (
              <Col key={id} xs="auto" className="px-0">
                <Skills skill={skill} />
              </Col>
            ))}
          </Row>
        </section>
        <section className="py-4">
          <div
            className="d-flex align-items-center justify-content-between flex-wrap gap-4 p-4 rounded-4"
            style={{ background: 'linear-gradient(135deg, dodgerblue 0%, #60a5fa 100%)' }}
          >
            <div>
              <p className="fw-semibold text-white mb-1" style={{ fontSize: 17 }}>
                Looking for a 2026 summer intern?
              </p>
              <p className="mb-0" style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
                Frontend · Full stack · General SWE — open to all three
              </p>
            </div>

            <Button
              className="bg-white fw-semibold rounded-3 px-4 py-2 border-0"
              style={{ color: 'dodgerblue', fontSize: 15, whiteSpace: 'nowrap' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.color = '#0369a1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = 'dodgerblue';
              }}
            >
              Get in touch
            </Button>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Home;
