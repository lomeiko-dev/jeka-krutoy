import React from "react";
import { WithRouter } from "./With-Router";
import { WithStore } from "./With-Store";

export const wrap = (app: () => React.ReactNode) => WithStore(WithRouter(app));