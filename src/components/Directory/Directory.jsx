import React, { useState } from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem.jsx';
import Data from './Directory.data.js';

export default () => {

	const [sections] = useState(Data);

	return (
		<div className='directory-menu'>
			{sections.map((section) => <MenuItem key={section.id} size={section.size} imageUrl={section.imageUrl} title={section.title} />)}
		</div>
	)

}