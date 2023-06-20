import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [lg, setLg] = useState(window.innerWidth >= 1450);
  const [md, setMd] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setLg(window.innerWidth >= 1450);
      setMd(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  return { md, lg };
};

export default useWindowWidth;
