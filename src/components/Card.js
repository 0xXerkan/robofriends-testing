import React from 'react';

const Card = ({name, email, id}) => {
	// Can destructure props directly when passing in

	// const {name, email, id} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' width="200" height="200" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;