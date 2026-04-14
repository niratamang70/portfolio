import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const STATS = [
  { value: '3.5+', label: 'Years experience' },
  { value: 'React', label: 'Primary stack' },
  { value: 'Troy', label: 'MS CS, 2026' }
];

export default function Hero() {
  const navigate = useNavigate();

  const handleViewWork = () => {
    // navigate('/projects');
    return;
  };
  return (
    <section className="text-center" style={{ padding: '60px 5% 48px' }}>
      <Container style={{ maxWidth: '860px' }} className="py-md-5 pt-4">
        <div
          className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4"
          style={{ background: '#dbeafe', fontSize: 13, color: 'dodgerblue', fontWeight: 500 }}
        >
          <span
            style={{ width: 7, height: 7, borderRadius: '50%', background: 'dodgerblue', display: 'inline-block' }}
          />
          Open to internships · Summer 2026
        </div>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: '3.6rem',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#1e3a5f'
          }}
        >
          Frontend &amp; <span style={{ color: 'dodgerblue' }}>full stack</span>
          <br /> engineer
        </h1>

        <p className="mx-auto mb-5 text-secondary" style={{ maxWidth: 440, lineHeight: 1.7 }}>
          MS Computer Science student at Troy University. Building clean, fast interfaces and distributed systems from
          Nepal to the US tech scene.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          <Button variant="primary" className="rounded-3 px-4" onClick={handleViewWork}>
            View work
          </Button>
          <Button
            variant="outline-primary"
            className="rounded-3 px-4"
            onClick={() => window.open('https://github.com/niratamang70', '_blank')}
          >
            GitHub
          </Button>
          <Button
            variant="outline-primary"
            className="rounded-3 px-4"
            onClick={() => window.open('https://www.linkedin.com/in/nira-tamang/', '_blank')}
          >
            LinkedIn
          </Button>
        </div>

        <div
          className="d-inline-flex bg-white rounded-4 px-5 py-4"
          style={{ boxShadow: '0 2px 16px rgba(30,144,255,0.08)' }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.value}
              className="text-center px-4"
              style={{ borderRight: i < STATS.length - 1 ? '1.5px solid #e5e7eb' : 'none' }}
            >
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, color: '#1e3a5f' }}>
                {s.value}
              </div>
              <div className="text-secondary" style={{ fontSize: 12, marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
