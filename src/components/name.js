import React from 'react';
import faker from 'faker';

const Name = () => {
  const {metadata__names} = styles;
	return (
		<div style={metadata__names}>
			{faker.name.firstName()} {faker.name.lastName()}
		</div>
	);
};
const styles={
  metadata__names:{
    textDecoration: 'underline',
    fontWeight: '600'
  }
}
export default Name;
