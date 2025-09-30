// Route constants for easy management
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  AGENTS: "/agents",
  PRICING: "/pricing",
  CONTACT: "/contact",
  EVENTS: "/events",
} as const;

// Route labels for navigation
export const ROUTE_LABELS = {
  [ROUTES.HOME]: "Home",
  [ROUTES.ABOUT]: "About",
  [ROUTES.AGENTS]: "Agents",
  [ROUTES.PRICING]: "Pricing",
  [ROUTES.CONTACT]: "Contact",
  [ROUTES.EVENTS]: "Events",
} as const;

// Type for route keys
export type RouteKey = keyof typeof ROUTES;
