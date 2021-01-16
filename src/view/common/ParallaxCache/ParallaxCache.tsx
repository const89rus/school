import React, { useLayoutEffect } from 'react';
import { useController } from 'react-scroll-parallax';

export const ParallaxCache: React.FC = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = (): void => parallaxController.update();
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return null;
};
