import React from "react";

export const WithStore = (component: () => React.ReactNode ) => () => (
    <div>
        {component()}   
    </div>
)