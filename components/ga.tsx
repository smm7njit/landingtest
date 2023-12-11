import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-DD3RM7V9YG');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  
};