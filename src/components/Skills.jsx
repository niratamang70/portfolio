import { Badge } from 'react-bootstrap';

const Skills = ({ skill }) => {
  return (
    <Badge
      pill
      bg="white"
      className="px-3 py-2 fw-medium border"
      style={{
        fontSize: 14,
        color: '#374151',
        border: '1.5px solid #e5e7eb !important',
        cursor: 'default',
        transition: 'all 0.18s'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#dbeafe';
        e.currentTarget.style.color = 'dodgerblue';
        e.currentTarget.style.borderColor = '#93c5fd';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.color = '#374151';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      {skill}
    </Badge>
  );
};

export default Skills;
