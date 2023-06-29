import { useEffect, useRef } from 'react';

const useClickOutside = (dispatch: React.Dispatch<boolean>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        dispatch(false);
      }
    };
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [dispatch]);

  return ref;
};

export default useClickOutside;
