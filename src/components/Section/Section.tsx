import { useInView } from 'react-intersection-observer';
import styled from './section.module.css';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${styled.section} ${inView ? styled.showSection : ''}`}
    >
      {children}
    </div>
  );
};

export default Section;
