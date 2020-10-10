import './bin/remove_warnings_plugin.js'
import { Config } from '@stencil/core';

export interface CardinalConfig extends Config {
  readonly useBootstrap: boolean;
}

export const config: CardinalConfig = {
  namespace: 'cardinal-core',
  globalScript: './src/globals/index.ts',
  buildDist: true,
  plugins: [
    global.removeWarnings()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'controllers/AppConfigurationHelper.js', warn: true },
        { src: 'controllers/defaultApplicationConfig.json', warn: true },
        { src: 'controllers/base-controllers', warn: true },
        { src: 'events/*.js', dest: "../cardinal-core/events", warn: true },
        { src: 'libs/*.js', dest: "../cardinal-core/libs", warn: true }
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  buildEs5: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false
  },
  useBootstrap: true
};
