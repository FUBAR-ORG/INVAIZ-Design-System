type BreakpointName = 'mobile' | 'tablet' | 'desktop';

type Breakpoints = {
  [key in BreakpointName]: number;
};

const breakpoints: Breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

type IMediaQuery = {
  [key in BreakpointName]: string;
};

const mediaQuery: IMediaQuery = Object.entries(breakpoints).reduce(
  (prev, [key, value]) => ({
    ...prev,
    [key]: `@media (max-width: ${value}px)`,
  }),
  {
    mobile: '',
    tablet: '',
    desktop: '',
  }
);

export default mediaQuery;
