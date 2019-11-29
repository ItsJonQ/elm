import React from 'react';
import { cy } from '@itsjonq/cyan';
import { Viewport, View } from '../../index';

// JSDOM window.innerWidth is 1024
const TEST_ENV_INNER_WIDTH = 1024;

// Simulate window resize event
function resizeWindow(width, height) {
	window.innerWidth = width || window.innerWidth;
	window.innerHeight = height || window.innerHeight;

	window.dispatchEvent(new Event('resize'));
}

afterEach(() => {
	window.innerWidth = TEST_ENV_INNER_WIDTH;
});

describe('Viewport', () => {
	test('should render if smaller than window.innerWidth', () => {
		cy.render(
			<Viewport breakpoint={800}>
				<View>Hello</View>
			</Viewport>,
		);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should not render if larger than window.innerWidth', () => {
		cy.render(
			<Viewport breakpoint={2000}>
				<View>Hello</View>
			</Viewport>,
		);

		expect(cy.get('div').exists()).toBe(false);
	});

	test('should fallback on defaults if invalid breakpoint value', () => {
		cy.render(
			<Viewport breakpoint={[]}>
				<View>Hello</View>
			</Viewport>,
		);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should render Viewport.Mobile if extra small viewport size', () => {
		resizeWindow(500);

		cy.render(
			<Viewport.Mobile>
				<View>Hello</View>
			</Viewport.Mobile>,
		);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should render Viewport.Phablet if small viewport size', () => {
		resizeWindow(600);

		cy.render(
			<Viewport.Phablet>
				<View>Hello</View>
			</Viewport.Phablet>,
		);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should render Viewport.Tablet if medium viewport size', () => {
		resizeWindow(800);

		cy.render(
			<Viewport.Tablet>
				<View>Hello</View>
			</Viewport.Tablet>,
		);

		expect(cy.get('div').exists()).toBe(true);
	});

	test('should render Viewport.Desktop if medium large size', () => {
		resizeWindow(1600);

		cy.render(
			<Viewport.Desktop>
				<View>Hello</View>
			</Viewport.Desktop>,
		);

		expect(cy.get('div').exists()).toBe(true);
	});
});
