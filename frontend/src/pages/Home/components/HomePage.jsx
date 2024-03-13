import React from 'react';

// Widgets
import { Banner, Footer, Header, PartitionSection, PreviewCatalog } from '../../../widgets';

// Data
import Banners from '../data/Banners.json';

export default function HomePage() {
	return (
		<>
			<Header />
			<Banner data={Banners[0]} />
			<PreviewCatalog />
			<Banner data={Banners[1]} />
			<PreviewCatalog sort='discounts' />
			<PartitionSection />
			<Footer />
		</>
	);
}
