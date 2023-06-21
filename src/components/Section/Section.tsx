import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from './section.module.css';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  const [showContent, setShowContent] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      setShowContent(true);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`${styled.section} ${showContent ? styled.showSection : ''}`}
    >
      {children}
    </div>
  );
};

export default Section;
