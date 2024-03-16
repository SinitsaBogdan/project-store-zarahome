import React from 'react';

// Widgets
import {
	Advantages,
	Banner,
	Footer,
	Header,
	PartitionSection,
	PreviewCatalog,
	QuestionSection,
	SocialSection,
} from '../../../widgets';

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
			<Advantages />
			<QuestionSection />
			<SocialSection />
			<Footer />
		</>
	);
}
