import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
	AdressPage,
	CartPage,
	CatalogPage,
	EditEmailPage,
	EditPasswordPage,
	HomePage,
	OrderPage,
	ProductPage,
	SearchPage,
} from '../pages';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/search' element={<SearchPage />} />
			<Route path='/catalog' element={<CatalogPage />} />
			<Route path='/discounts' element={<CatalogPage />} />
			<Route path='/new-products' element={<CatalogPage />} />
			<Route path='/search' element={<SearchPage />} />
			<Route path='/product/:id' element={<ProductPage />} />
			<Route path='/user/:userId/cart' element={<CartPage />} />
			<Route path='/user/:userId/history/orderId' element={<OrderPage />} />
			<Route path='/user/:userId/edit/mail' element={<EditEmailPage />} />
			<Route path='/user/:userId/edit/password' element={<EditPasswordPage />} />
			<Route path='/user/:userId/edit/adress' element={<AdressPage />} />
			<Route path='*' element={<h1>Страница не найдена</h1>} />
		</Routes>
	);
}
