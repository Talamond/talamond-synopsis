import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  const debounceResize = debounce(handleResize, 500);

  useEffect(() => {
    window.addEventListener('resize', debounceResize);
    handleResize();
    return () => window.removeEventListener('resize', debounceResize);
  }, []);

  return windowSize;
};
