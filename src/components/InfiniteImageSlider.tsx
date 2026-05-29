import './css/InfiniteImageSlider.css';
import { CSSProperties, FC } from 'react';

export interface InfiniteImageSliderItem {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

interface InfiniteImageSliderProps {
  title?: string;
  images: InfiniteImageSliderItem[];
  className?: string;
  ariaLabel?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageGap?: string;
  duration?: string;
}

type SliderStyle = CSSProperties & {
  '--slider-image-width': string;
  '--slider-image-height': string;
  '--slider-image-gap': string;
  '--slider-duration': string;
};

const InfiniteImageSlider: FC<InfiniteImageSliderProps> = ({
  title,
  images,
  className = '',
  ariaLabel,
  imageWidth = '220px',
  imageHeight = '320px',
  imageGap = '32px',
  duration = '35s',
}) => {
  const sliderStyle: SliderStyle = {
    // 아래 CSS 변수들은 사용하는 페이지에서 props로 쉽게 수정할 수 있습니다.
    '--slider-image-width': imageWidth,
    '--slider-image-height': imageHeight,
    '--slider-image-gap': imageGap,
    '--slider-duration': duration,
  };

  const renderImageSet = (setName: 'original' | 'duplicate') => (
    <div className="infinite-slider-set" aria-hidden={setName === 'duplicate'}>
      {images.map((image, index) => (
        <div
          key={`${setName}-${image.src}-${index}`}
          className={`infinite-slider-item ${image.className ?? ''}`}
        >
          <div className="infinite-slider-image-frame">
            <img
              src={image.src}
              alt={setName === 'duplicate' ? '' : image.alt}
              className="infinite-slider-image"
              loading="lazy"
            />
          </div>
          {image.title && <p className="infinite-slider-caption">{image.title}</p>}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`infinite-slider ${className}`.trim()}
      style={sliderStyle}
      aria-label={ariaLabel ?? title}
    >
      {title && <h2 className="infinite-slider-title">{title}</h2>}

      <div className="infinite-slider-viewport">
        {/* 원본 목록 뒤에 동일한 목록을 붙여 애니메이션이 끝나도 끊김 없이 이어지게 합니다. */}
        <div className="infinite-slider-track">
          {renderImageSet('original')}
          {renderImageSet('duplicate')}
        </div>
      </div>
    </div>
  );
};

export default InfiniteImageSlider;
