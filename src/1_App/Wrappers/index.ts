import React from "react";
import {WithStore} from "./providers/With-Store";
import {WithRouter} from "./providers/With-Router";

export const wrap = (app: () => React.ReactNode) => WithStore(WithRouter(app));