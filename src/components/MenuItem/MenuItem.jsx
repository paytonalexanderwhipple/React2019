import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
	<div className={`menu-item ${size}`} onClick={() => history.push(`${linkUrl}`)}>
		<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);