// eslint-disable-next-line import/prefer-default-export
export const initializeResizeObserver = () => {
  Object.defineProperty(global, 'ResizeObserver', {
    value: jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });
};
