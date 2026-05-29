import { FC, useEffect } from 'react';

const isProtectedImage = (target: EventTarget | null): target is HTMLImageElement => {
  return target instanceof HTMLImageElement;
};

const ImageProtection: FC = () => {
  useEffect(() => {
    const preventImageAction = (event: Event) => {
      // 이미지 자료 위에서만 기본 브라우저 동작을 막습니다.
      if (isProtectedImage(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventImageAction);
    document.addEventListener('dragstart', preventImageAction);

    return () => {
      document.removeEventListener('contextmenu', preventImageAction);
      document.removeEventListener('dragstart', preventImageAction);
    };
  }, []);

  return null;
};

export default ImageProtection;
