import React from 'react';
import { Viewport } from '../src';

export default {
	title: 'Viewport',
};

export const _default = () => (
	<>
		<Viewport breakpoint={777}>777</Viewport>
		<Viewport.Mobile>Mobile</Viewport.Mobile>
		<Viewport.Phablet>Phablet</Viewport.Phablet>
		<Viewport.Tablet>Tablet</Viewport.Tablet>
		<Viewport.Desktop>Desktop</Viewport.Desktop>
	</>
);
