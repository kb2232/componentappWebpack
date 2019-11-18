import React from 'react';
import faker from 'faker';

const Image = () => {
  const {image} = styles;
	return (
		<div>
			<figure>
				<img style={image} src={faker.image.avatar()} alt="img" />
			</figure>
		</div>
	);
};
const styles={
  image:{
    radius:'35%',
    width:'100',
    height:'100',
    borderRadius:'50%'
  }
}
export default Image;
