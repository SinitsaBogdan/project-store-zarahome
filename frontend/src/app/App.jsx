import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
	AdressPage,
	CartPage,
	CatalogPage,
	EditEmailPage,
	EditPasswordPage,
	HomePage,
	InfoPage,
	OrderPage,
	ProductPage,
	ReviewsPage,
	SearchPage,
} from '../pages';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/catalog' element={<CatalogPage />} />
			<Route path='/catalog/search' element={<SearchPage />} />
			<Route path='/discounts' element={<CatalogPage />} />
			<Route path='/info' element={<InfoPage />} />
			<Route path='/new-products' element={<CatalogPage />} />
			<Route path='/reviews' element={<ReviewsPage />} />
			<Route path='/product/:id' element={<ProductPage />} />
			<Route path='/product/:id/reviews' element={<ProductPage />} />
			<Route path='/user/:userId/cart' element={<CartPage />} />
			<Route path='/user/:userId/history/orderId' element={<OrderPage />} />
			<Route path='/user/:userId/edit/mail' element={<EditEmailPage />} />
			<Route path='/user/:userId/edit/password' element={<EditPasswordPage />} />
			<Route path='/user/:userId/edit/adress' element={<AdressPage />} />
			<Route path='*' element={<h1>Страница не найдена</h1>} />
		</Routes>
	);
}
