import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import MyPage from './pages/MyPage/MyPage';
import OrderInfo from './pages/OrderInfo/OrderInfo';
import Paid from './pages/Paid/Paid';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import SignIn from './pages/SignIn/SignIn';
import AppLayout from './layout/AppLayout';
import AddressList from './components/Address/AddressList';
import AddressEdit from './components/Address/AddressEdit';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/order-info" element={<OrderInfo />} />
          <Route
            path="/paid"
            element={
              <Paid titleText="결제가 완료 되었습니다." showButton={true} />
            }
          />

          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/address-list" element={<AddressList />} />
          <Route path="/address-edit" element={<AddressEdit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
