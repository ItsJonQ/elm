import React from 'react';
import { cy } from '@itsjonq/cyan';
import { Flex, FlexItem, FlexBlock } from '../../index';

describe('Flex', () => {
	test('should render', () => {
		cy.render(<Flex />);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should render sub-components', () => {
		cy.render(
			<Flex>
				<Flex.Item>Item</Flex.Item>
				<Flex.Block>Block</Flex.Block>
			</Flex>,
		);

		expect(cy.get('div')).toHaveLength(3);
	});
});

describe('FlexItem', () => {
	test('should render', () => {
		cy.render(<FlexItem />);

		expect(cy.get('div').exists()).toBe(true);
	});
});

describe('FlexBlock', () => {
	test('should render', () => {
		cy.render(<FlexBlock />);

		expect(cy.get('div').exists()).toBe(true);
	});
});
