import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home page</h2>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>About page</h2>
      </div>
    ),
  },
]);
const App = () => {
  return <h2>mixmaster starter</h2>;
};
export default App;
