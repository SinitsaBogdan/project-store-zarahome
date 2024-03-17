import React from 'react';
import '../style/CatalogPage.css';

// widgets
import { Header, Footer, Catalog } from '../../../widgets';

export default function CatalogPage() {
	return (
		<>
			<Header />
			<Catalog sort='bathroom' />
			<Footer />
		</>
	);
}
