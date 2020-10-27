import * as controllers from "./controllers";
import * as decorators from "./decorators";
import * as events from "./events";
import * as services from "./services";
import * as utils from "./utils";

export * from "./controllers";
export * from "./decorators";
export * from "./events";
export * from "./services";
export * from "./utils";

const cardinalCore = {
  ...controllers,
  ...decorators,
  ...events,
  ...services,
  ...utils,
};

type CardinalCore = typeof cardinalCore;

declare global {
  interface Window {
    cardinalCore: CardinalCore;
  }
}

if (!("cardinalCore" in window)) {
  window.cardinalCore = cardinalCore;
}
