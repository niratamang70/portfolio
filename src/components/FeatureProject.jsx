const PROJECTS = [
  {
    icon: '⊞',
    iconBg: '#ede9fe',
    iconColor: '#7c3aed',
    title: 'OMNeT++ network sim',
    desc: 'Multicast & send-forward-reply simulations using NED, C++ and INI configs for distributed systems modeling.',
    tags: ['C++', 'OMNeT++', 'Networks'],
    tagBg: '#f1f5f9',
    tagColor: '#475569'
  },
  {
    icon: '〜',
    iconBg: '#ffe4e6',
    iconColor: '#e11d48',
    title: 'React dashboard',
    desc: 'Responsive admin dashboard with dynamic data tables, filtering, and real-time chart updates using hooks.',
    tags: ['React', 'TypeScript', 'Recharts'],
    tagBg: '#fce7f3',
    tagColor: '#be185d'
  },
  {
    icon: '◷',
    iconBg: '#d1fae5',
    iconColor: '#059669',
    title: 'Book inventory system',
    desc: 'Spreadsheet automation and inventory management tool built with organized workflows and data formatting.',
    tags: ['Excel', 'Automation', 'Data'],
    tagBg: '#dcfce7',
    tagColor: '#166534'
  }
];
function ProjectCard({ icon, iconBg, iconColor, title, desc, tags, tagBg, tagColor }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 16,
        padding: '28px 24px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        transition: 'all 0.22s ease',
        cursor: 'default'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.13)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: iconBg,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          marginBottom: 18
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#1e1b4b' }}>{title}</h3>
      <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {tags.map(t => (
          <span
            key={t}
            style={{
              background: tagBg,
              color: tagColor,
              borderRadius: 20,
              padding: '3px 12px',
              fontSize: 12,
              fontWeight: 500
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="mb-5">
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          color: '#9ca3af',
          marginBottom: 24
        }}
      >
        FEATURED PROJECTS
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20
        }}
      >
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
