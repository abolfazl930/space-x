import { lazy } from "react";

const routes = [
  {
    title: "home",
    path: "/",
    exact: true,
    component: () => lazy(() => import("../pages/home")),
    visibleIn: ["header"],
  },
  {
    title: "about-us",
    path: "/about-us",
    exact: true,
    component: () => lazy(() => import("../pages/about-us")),
    visibleIn: ["header"],
  },
];

export default routes;

export const visibleRoutes = ({ visibleIn } = {}) => {
  return routes.filter((route) => {
    if (visibleIn) {
      return route.visibleIn.find((visible) => visible === visibleIn[0]);
    } else {
      return route.visibleIn.length > 0;
    }
  });
};
