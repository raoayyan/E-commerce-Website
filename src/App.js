import Home from "./Routes/Home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.component";
import Authentication from "./Routes/Authentication/Authentication-in.component";
import Shop from "./Routes/shop/shop.component";
import CheckOut from "./Routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} exact>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};
//these route ans routes tags are working because we wrap the application inside BrowerRoute tags in index.js so that why it is detecting the route'/'path
export default App;
