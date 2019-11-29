import { useEffect, useState, useCallback } from 'react';
import { get, is } from '../utils';

/**
 * Breakpoint values based on Bootstrap
 * https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
 */
export const BREAKPOINTS = {
	xs: 575,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

function isSmallestBreakpoint(breakpoint) {
	return breakpoint === 'xs';
}

function getBreakpoint(breakpoint) {
	if (is.string(breakpoint)) {
		return get(BREAKPOINTS, breakpoint, BREAKPOINTS.md);
	}

	if (is.number(breakpoint)) {
		return breakpoint;
	}

	return window.innerWidth;
}

function shouldViewportShow(width = BREAKPOINTS.md) {
	const breakpoint = getBreakpoint(width);
	const isXs = isSmallestBreakpoint(width);
	const { innerWidth } = window;

	if (isXs) {
		return innerWidth <= breakpoint;
	}

	return innerWidth >= breakpoint;
}

export function useViewport(breakpoint) {
	const [visible, setVisible] = useState(breakpoint);

	const calculateVisibility = useCallback(() => {
		setVisible(shouldViewportShow(breakpoint));
	}, [breakpoint]);

	useEffect(() => {
		window.addEventListener('resize', calculateVisibility);
		return () => {
			window.removeEventListener('resize', calculateVisibility);
		};
	}, [calculateVisibility]);

	return [visible];
}
