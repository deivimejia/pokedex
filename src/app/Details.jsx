import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { tipos } from '../utils/helpers';
import '../styles/Details.css';

function Details() {
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();
	useEffect(() => {
		if (params.name) {
			getPokemon();
		}
	}, [params.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	};
	const types = pokemon?.types.map((type) => type.type.name);

	return (
		<div className="details">
			<Link className="btn" to="/pokedex">
				{'⬅️'} volver
			</Link>
			<div>
				<div className="details__header">
					<img
						src={pokemon?.sprites?.other?.dream_world?.front_default}
						alt={pokemon?.name}
					/>
				</div>
				<div>
					<div className="details__info">
						<span className="details__info-id">
							#{pokemon?.id?.toString().padStart(3, '0')}
						</span>
						<h2 className="details__info-name">{pokemon?.name} </h2>
						<div className="details__size">
							<span className="details__size--type">
								<span>Peso</span>
								<span>{pokemon?.weight} </span>
							</span>
							<span className="details__size--type">
								<span>Altura</span>
								<span>{pokemon?.height} </span>
							</span>
						</div>
					</div>

					<div className="details__body">
						<div>
							<h3 className="details__body--name">Tipo</h3>
							<div className="details__container">
								{types?.map((type) => [
									<span className="details__body--items" key={type}>
										{tipos[type]}
									</span>,
								])}
							</div>
						</div>
						<div>
							<h3 className="details__body--name">Habilidades</h3>

							<div className="details__container">
								{pokemon?.abilities?.map((data) => (
									<span
										className="details__body--items"
										key={data?.ability?.name}
									>
										{data?.ability?.name}
									</span>
								))}
							</div>
						</div>
					</div>
					{/*stats*/}
					<div>
						<h3>Stats</h3>
						<div>
							<span>HP</span>
							<span>{pokemon?.stats[0]?.base_stat}</span>
						</div>
						<div>
							<span>ATAQUE</span>
							<span>{pokemon?.stats[1]?.base_stat}</span>
						</div>
						<div>
							<span>DEFENSA</span>
							<span>{pokemon?.stats[2]?.base_stat}</span>
						</div>
						<div>
							<span>VELOCIDAD</span>
							<span>{pokemon?.stats[5]?.base_stat}</span>
						</div>
					</div>
					{/*Movimientos */}
					<div>
						<h3>Movimientos</h3>
						{pokemon?.moves?.map((data) => (
							<span key={data?.move?.name}>{data?.move?.name}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export { Details };
