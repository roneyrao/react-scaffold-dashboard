import * as modules from './registered';

export const reducers = {};
export const navList = [];
export const routeList = [];


Object.entries(modules).forEach(([k, v]) => {
  v.getState = function getState(state) {
    return state[k];
  };
  const { reducers: r, Navs, Routes } = v;
  Navs.moduleName = k;
  Routes.moduleName = k;
  reducers[k] = r;
  navList.push(Navs);
  routeList.push(Routes);
});
