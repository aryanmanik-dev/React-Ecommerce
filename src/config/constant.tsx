import React from 'react'

export const Header = React.lazy(() => import('@components/TopNavigation/HeaderRow/Header'));
export const Footer = React.lazy(() => import('@components/Footer/Footer'));

export const Home = React.lazy(() => import('@views/Homepage/Home'));
export const ProductCollection = React.lazy(() => import('@views/Product/Collections'));
export const ProductCart = React.lazy(() => import('@views/Cart/Cart'));
export const AccountLogin = React.lazy(() => import('@views/Account/Login'));
export const AccountRegister = React.lazy(() => import('@views/Account/Register'));
