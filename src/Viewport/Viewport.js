import React from 'react';
import { useViewport } from './useViewport';

const defaultProps = {
	breakpoint: 'md',
};

export function Viewport({ breakpoint, children }) {
	const [visible] = useViewport(breakpoint);
	return visible ? children : null;
}

export function ViewportMobile(props) {
	return <Viewport {...props} breakpoint="xs" />;
}

export function ViewportPhablet(props) {
	return <Viewport {...props} breakpoint="sm" />;
}

export function ViewportTablet(props) {
	return <Viewport {...props} breakpoint="md" />;
}

export function ViewportDesktop(props) {
	return <Viewport {...props} breakpoint="lg" />;
}

Viewport.defaultProps = defaultProps;
Viewport.Mobile = ViewportMobile;
Viewport.Phablet = ViewportPhablet;
Viewport.Tablet = ViewportTablet;
Viewport.Desktop = ViewportDesktop;
