import { useInView } from 'react-intersection-observer';
import styled from './section.module.css';

interface SectionProps {
  children: React.ReactNode;
  threshold: number[];
}

const Section = ({ children, threshold }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    root: null,
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
