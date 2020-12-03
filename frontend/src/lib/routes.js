export const routesConfig = {
  root: {
    title: "Dashboard",
    path: "/",
  },
  students: {
    title: "Estudantes",
    path: "/estudantes",
  },
};

export const getTitleByPath = (path) => {
  if (!path) return null;

  let findTitle = null;

  Object.keys(routesConfig).forEach((route) => {
    if (routesConfig[route].path === path) {
      findTitle = routesConfig[route].title;
    }
  });

  return findTitle;
};

export default routesConfig;
