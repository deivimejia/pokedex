import React from 'react';

function Pages({ pokemons, setPokemons }) {
	const onNext = () => {
		setPokemons(pokemons?.next);
	};
	const onPrev = () => {
		setPokemons(pokemons?.previous);
	};
	return (
		<>
			<button onClick={onPrev} disabled={!pokemons?.previous}>
				Anterior
			</button>
			<button onClick={onNext} disabled={!pokemons?.next}>
				Siguiente
			</button>
		</>
	);
}

export default Pages;
