import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function detectWindowSize() {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    }
    window.addEventListener('resize', detectWindowSize);
    if (window.innerWidth < 768) setIsMobile(true);
    return () => {
      window.removeEventListener('resize', detectWindowSize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
