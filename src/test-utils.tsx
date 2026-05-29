import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

// 테스트 유틸리티 함수들
// 반복되는 코드를 줄이기 위해 사용

/**
 * BrowserRouter로 감싸서 컴포넌트 렌더링
 * Header, Footer 등 라우팅이 필요한 컴포넌트용
 */
export const renderWithRouter = (
  component: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );

  return render(component, { wrapper: Wrapper, ...options });
};

/**
 * MemoryRouter로 감싸서 컴포넌트 렌더링
 * 특정 경로 시작 시 필요 (테스트용)
 * 예: initialPath="/product"로 /product 경로에서 시작
 */
export const renderWithMemoryRouter = (
  component: React.ReactElement,
  { initialPath = '/', ...options }: RenderOptions & { initialPath?: string } = {}
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <MemoryRouter initialEntries={[initialPath]}>
      {children}
    </MemoryRouter>
  );

  return render(component, { wrapper: Wrapper, ...options });
};

/**
 * 일반 render (라우팅 필요 없을 때)
 * 버튼, 카드 등 단순 컴포넌트용
 */
export { render, screen, fireEvent, waitFor } from '@testing-library/react';

export * from '@testing-library/react';
