import React, { useState } from 'react';
import Data from './Shop.data.js';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.jsx';
import './Shop.scss';

export default () => {

	const [collections] = useState(Data);

	return (
		<>
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</>
	)
}