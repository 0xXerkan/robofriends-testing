import { shallow } from 'enzyme';
import React from 'react';
import Cardlist from './Cardlist';


it('expect to render Cardlist component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	]
	expect(shallow(<Cardlist robots={mockRobots} />)).toMatchSnapshot();
})