import React from 'react';
import { cy } from '@itsjonq/cyan';
import { Truncate } from '../../index';
import { TRUNCATE_ELLIPSIS } from '../Truncate.utils';

describe('Truncate', () => {
	test('should render', () => {
		cy.render(<Truncate />);

		expect(cy.get('span').exists()).toBe(true);
	});

	test('should render numberOfLines', () => {
		cy.render(<Truncate numberOfLines={2} />);

		expect(cy.get('span').style().display).toBe('-webkit-box');
		expect(cy.get('span').style().overflow).toBe('hidden');
	});

	test('should truncate head', () => {
		cy.render(
			<Truncate ellipsizeMode="head" limit={3}>
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe(`${TRUNCATE_ELLIPSIS}345`);
	});

	test('should truncate middle', () => {
		cy.render(
			<Truncate ellipsizeMode="middle" limit={3}>
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe(`1${TRUNCATE_ELLIPSIS}5`);
	});

	test('should truncate tail', () => {
		cy.render(
			<Truncate ellipsizeMode="tail" limit={3}>
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe(`123${TRUNCATE_ELLIPSIS}`);
	});

	test('should enable custom ellipsis', () => {
		cy.render(
			<Truncate ellipsizeMode="tail" limit={3} ellipsis="!">
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe(`123!`);
	});

	test('should handle undefined custom ellipsis', () => {
		cy.render(
			<Truncate ellipsizeMode="tail" limit={3} ellipsis={undefined}>
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe(`123${TRUNCATE_ELLIPSIS}`);
	});

	test('should handle null custom ellipsis', () => {
		cy.render(
			<Truncate ellipsizeMode="tail" limit={3} ellipsis={null}>
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe(`123${TRUNCATE_ELLIPSIS}`);
	});

	test('should quietly handle non-strings', () => {
		cy.render(
			<Truncate ellipsizeMode="tail" limit={3}>
				<div>Hello</div>
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe('');
	});

	test('should handle under-limit', () => {
		cy.render(
			<Truncate ellipsizeMode="tail" limit={30}>
				12345
			</Truncate>,
		);

		expect(cy.get('span').text()).toBe('12345');
	});
});
