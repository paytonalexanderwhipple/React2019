import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem.jsx';

export default ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.slice(0, 4)
				.map(({ id, ...itemProps }) => (
					<CollectionItem key={id} {...itemProps} />
				))}
		</div>
	</div>
)