import * as controllers from "./controllers";
import * as decorators from "./decorators";
import * as events from "./events";
import * as globals from "./globals";
import * as services from "./services";

export * from "./controllers";
export * from "./decorators";
export * from "./events";
export * from "./globals";
export * from "./services";

declare global {
  interface Window {
    cardinalCore: any;
  }
}

window.cardinalCore = {
  ...controllers,
  ...decorators,
  ...events,
  ...globals,
  ...services,
};
