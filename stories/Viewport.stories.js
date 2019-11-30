import React from 'react';
import { View, Viewport } from '../src';

export default {
	title: 'Viewport',
};

function Box(props) {
	return <View {...props} background="#eee" padding={10} />;
}

export const _default = () => (
	<>
		<Viewport.Mobile>
			<Box>Mobile</Box>
		</Viewport.Mobile>
		<Viewport.PhabletOnly>
			<Box>PhabletOnly</Box>
		</Viewport.PhabletOnly>
		<Viewport.Phablet>
			<Box>Phablet</Box>
		</Viewport.Phablet>
		<Viewport.Tablet>
			<Box>Tablet</Box>
		</Viewport.Tablet>
		<Viewport.TabletOnly>
			<Box>TabletOnly</Box>
		</Viewport.TabletOnly>
		<Viewport.Desktop>
			<Box>Desktop</Box>
		</Viewport.Desktop>
	</>
);
