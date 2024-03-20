export const backfaceFixed = (fixed: boolean) => {
	const scrollbarWidth = window.innerWidth - document.body.clientWidth;
	document.body.style.paddingRight = fixed ? `${scrollbarWidth}px` : '';

	const scrollingElement = () => {
		if ('scrollingElement' in document) return document.scrollingElement as HTMLElement;
		return;
	};

	const scrollY = fixed
		? (scrollingElement()?.scrollTop as number)
		: parseInt(document.body.style.top || '0');

	const styles = {
		height: '100vh',
		left: '0',
		overflow: 'hidden',
		position: 'fixed',
		top: `${scrollY * -1}px`,
		width: '100vw'
	};
	//required for...inが非推奨の可能性があるので、リファクタリングの必要あり
	for (const key in styles) {
		if (
			key === 'height' ||
			key === 'left' ||
			key === 'overflow' ||
			key === 'position' ||
			key === 'top' ||
			key === 'width'
		) {
			document.body.style[key] = fixed ? styles[key] : '';
		}
	}

	if (!fixed) window.scrollTo(0, scrollY * -1);
};
