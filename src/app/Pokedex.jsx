import { useEffect, useState } from 'react';
import HeaderPokedex from '../components/pokedex/HeaderPokedex';
import { useFetch } from '../hooks/useFetch';
import { useNameContext } from '../context/nameContext';
import Search from '../components/pokedex/Search';
import Filters from '../components/pokedex/Filters';
import PokemonList from '../components/pokedex/PokemonList';
import PokemonCard from '../components/pokedex/PokemonCard';
import Pages from '../components/pokedex/Pages';
import { Link } from 'react-router-dom';
import '../styles/pokedex.css';
function Pokedex() {
	const [name] = useNameContext();
	const [pokemons, setPokemons] = useFetch();
	const [pokemonUrl, setPokemonUrl] = useState(null);
	const [isFiltering, setIsFiltering] = useState(null);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = () => {
		setPokemons('https://pokeapi.co/api/v2/pokemon');
	};

	const handleSearch = (value) => {
		if (!value) {
			setIsFiltering(false);
			setPokemonUrl(null);
			setPokemons('https://pokeapi.co/api/v2/pokemon');
		} else {
			setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}/`);
		}
	};
	const handleTypeFilter = (type) => {
		if (!type) {
			setIsFiltering(false);
			setPokemons('https://pokeapi.co/api/v2/pokemon');
		} else {
			setIsFiltering(true);
			setPokemons(`https://pokeapi.co/api/v2/type/${type}`);
		}
	};
	const pokemonsArray = isFiltering ? pokemons?.pokemon : pokemons?.results;
	return (
		<div className="pokedex">
			<Link to="/">{'⬅️'} Volver</Link>
			<div className="pokedex__container">
				<HeaderPokedex name={name} />
				<div className="pokedex__form">
					<Search handleSearch={handleSearch} />
					<Filters handleTypeFilter={handleTypeFilter} />
				</div>
				{!isFiltering && (
					<Pages pokemons={pokemons} setPokemons={setPokemons} />
				)}
				<div className="pokemons__cards">
					{pokemonUrl ? (
						<>
							<PokemonCard url={pokemonUrl} />
						</>
					) : (
						<>
							<PokemonList pokemons={pokemonsArray} isFiltering={isFiltering} />
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export { Pokedex };
