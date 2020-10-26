import * as controllers from "./controllers";
import * as decorators from "./decorators";
import * as events from "./events";
import * as services from "./services";

export * from "./controllers";
export * from "./decorators";
export * from "./events";
export * from "./services";

const cardinalCore = {
  ...controllers,
  ...decorators,
  ...events,
  ...services,
};

type CardinalCore = typeof cardinalCore;

declare global {
  interface Window {
    cardinalCore: CardinalCore;
  }
}

window.cardinalCore = cardinalCore;
