import * as stencilCore from "@stencil/core";
import * as stencilRouter from "@stencil/router";

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
type StencilCore = typeof stencilCore;
type StencilRouter = typeof stencilRouter;

declare global {
  interface Window {
    cardinalCore: CardinalCore;
    stencilCore: StencilCore;
    stencilRouter: StencilRouter;
  }
}

if (!("cardinalCore" in window)) {
  window.cardinalCore = cardinalCore;
}
if (!("cardinalCore" in window)) {
  window.stencilCore = stencilCore;
}
if (!("cardinalRouter" in window)) {
  window.stencilRouter = stencilRouter;
}
