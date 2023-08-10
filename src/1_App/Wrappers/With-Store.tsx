import { Provider } from "react-redux";

export const WithStore = (component: () => React.ReactNode ) => () => (
    <div>
        {component()}   
    </div>
)