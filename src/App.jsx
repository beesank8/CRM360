import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/customers";


import DashboardLayout from "./components/layout/DashboardLayout.jsx";

import ProtectedRoute from "./routes/ProtectedRoute";



function App() {


return (

<BrowserRouter>


<Routes>


<Route
path="/login"
element={<Login />}
/>





<Route

element={

<ProtectedRoute>

<DashboardLayout />

</ProtectedRoute>

}

>


<Route

path="/dashboard"

element={<Dashboard />}

/>



<Route

path="/customers"

element={<Customers />}

/>



</Route>





<Route

path="*"

element={<Login />}

/>



</Routes>


</BrowserRouter>


);


}


export default App;