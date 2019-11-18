import React from 'react';
import faker from 'faker';

import Image from './images';
import Name from './name';
import Content from './content';

const Card = () => {
  const {profiles, profiles__metadata} = styles;
	return (
		<div style={profiles}>
			<Image />
			<div style={profiles__metadata}>
				<Name />
				<Content />
			</div>
		</div>
	);
};

const styles = {
  profiles:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profiles__metadata:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
}

export default Card;
