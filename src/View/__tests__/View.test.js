import React from 'react';
import { cy } from '@itsjonq/cyan';
import { View } from '../../index';

describe('View', () => {
	test('should render', () => {
		cy.render(<View />);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should render as defined element', () => {
		cy.render(<View as="button" />);

		expect(cy.get('div').exists()).toBe(false);
		expect(cy.get('button').exists()).toBe(true);
	});
});
