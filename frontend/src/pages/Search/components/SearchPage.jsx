import React from 'react';
import { Header, Footer, Directory } from '../../../widgets';
import { Search } from '../../../features';

export default function SearchPage() {
	return (
		<>
			<Header />
			<Search />
			<Directory />
			<Footer />
		</>
	);
}
