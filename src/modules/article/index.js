import exportModules from 'Utils/exporter';
import * as modules from './registered';

const { reducers, Navs, Routes } = exportModules(modules, module.exports);
export { reducers, Navs, Routes };
