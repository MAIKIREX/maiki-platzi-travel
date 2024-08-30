import { createBrowserRouter } from "react-router-dom"
import App from "../App"

const basename = process.env.NODE_ENV === 'production' ? '/travel-platzy' : '/';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    }
],
{
    basename: basename
}

)

export default routes