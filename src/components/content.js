import React from 'react';
import faker from 'faker';

const Content = () => {
  const {metadata__content} = styles;
	return (
		<div style={metadata__content}>
      {faker.lorem.sentence()}
    </div>
	);
};
const styles={
  metadata__content:{
    textAlign:'left',
    width:'200px'
  }
}
export default Content;
