import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react"


export const WithRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            {component()}
        </Suspense>
    </BrowserRouter>
)
