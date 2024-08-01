import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import HomeLayout from "./layout/HomeLayout";
import Homepage from "./pages/dashboard/Homepage";
import ProductsList from "./pages/products/ProductsList";
import AddProduct from "./pages/products/AddProduct";
import Categories from "./pages/category/Categories";
import AddCategory from "./pages/category/AddCategory";
import Customers from "./pages/customers/Customers";
import Orders from "./pages/orders/Orders";
import Aggregator from "./pages/customers/Aggregator";
import InputDistributor from "./pages/customers/InputDistributor";
import Transporter from "./pages/customers/Transporter";
import Mechanization from "./pages/customers/Mechanization";
import SpecialServices from "./pages/customers/SpecialServices";
import ValueAddition from "./pages/customers/ValueAddition";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="categories" element={<Categories />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />

          {/* profiles */}
          <Route path="create-profile/aggregator" element={<Aggregator />} />
          <Route
            path="create-profile/input-distributor"
            element={<InputDistributor />}
          />
          <Route path="create-profile/transporter" element={<Transporter />} />
          <Route
            path="create-profile/mechanization"
            element={<Mechanization />}
          />
          <Route
            path="create-profile/special-services"
            element={<SpecialServices />}
          />
          <Route
            path="create-profile/value-addition"
            element={<ValueAddition />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
