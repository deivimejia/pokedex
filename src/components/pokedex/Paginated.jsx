import React, { useState } from 'react';

function Paginated() {
	const [page, setPage] = useState(1);
	const itemsPerPage = 6;
	const totalItems = 20;
	const maxPage = Math.ceil(totalItems / itemsPerPage);
	const onPrev = () => {
		if (page > 1) {
			setPage(page - 1);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};
	const onNext = () => {
		if (page < maxPage) {
			setPage(page + 1);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};
	const currentPageItems = residents?.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage,
	);

	return (
		<div className="pag">
			<button className="pag__btn-prev" onClick={onPrev} disabled={page === 1}>
				Prev
			</button>
			<span className="pag__items">
				Page {page}/{maxPage}{' '}
			</span>
			<button
				className="pag__btn-next"
				onClick={onNext}
				disabled={page === maxPage}
			>
				Next
			</button>
		</div>
	);
}

export default Paginated;
