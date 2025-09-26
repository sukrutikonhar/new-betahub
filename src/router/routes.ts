// Route constants for easy management
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  AGENTS: "/agents",
  SERVICES: "/services",
  PRICING: "/pricing",
  RESOURCES: "/resources",
  GET_STARTED: "/get-started",
} as const;

// Route labels for navigation
export const ROUTE_LABELS = {
  [ROUTES.HOME]: "Home",
  [ROUTES.ABOUT]: "About",
  [ROUTES.AGENTS]: "Agents",
  [ROUTES.SERVICES]: "Services",
  [ROUTES.PRICING]: "Pricing",
  [ROUTES.RESOURCES]: "Resources",
  [ROUTES.GET_STARTED]: "Get Started",
} as const;

// Type for route keys
export type RouteKey = keyof typeof ROUTES;
