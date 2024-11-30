import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ handleSearch }) {
	const inputRef = useRef();
	const onSearch = () => {
		handleSearch(inputRef.current.value.toLowerCase().trim());

		inputRef.current.value = '';
	};

	return (
		<div className="search">
			<div className="search__input">
				<FaSearch />
				<input type="text" placeholder="Buscar un pokemón" ref={inputRef} />
			</div>
			<button className="search__btn" onClick={onSearch}>
				Buscar
			</button>
		</div>
	);
}

export default Search;
