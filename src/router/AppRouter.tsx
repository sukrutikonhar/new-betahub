import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AgentsPage from '../pages/AgentsPage';
import ContactPage from '../pages/ContactPage';
import EventsPage from '../pages/EventsPage';
import NotFoundPage from '../pages/NotFoundPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'agents',
        element: <AgentsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
