import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { tipos } from '../utils/helpers';
import '../styles/Details.css';
import Loading from './Loading';

function Details() {
	const params = useParams();
	const [pokemon, setPokemon, loading] = useFetch();
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
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div className="header">
						<h2 className="header--name">POKEDEX</h2>
						{/*Link*/}
					</div>
					<Link className="btn" to="/pokedex">
						{/* {'⬅️'} volver */}Volver
					</Link>
					<div className="details">
						<div className="details__card">
							{/*Imagen*/}
							<div className="details__card--contentImage">
								<img
									src={pokemon?.sprites?.other?.dream_world?.front_default}
									alt={pokemon?.name}
								/>
							</div>
							{/*titulo-peso-altura*/}

							<div className="details__card-character">
								<span className="details__card-character--id">
									#{pokemon?.id?.toString().padStart(3, '0')}
								</span>

								<hr />
								<h2 className="details__card-character--name">
									{pokemon?.name}{' '}
								</h2>
								<hr />

								<div className="details__card-character--sizes">
									<span className="details__card-character--sizesItems">
										<span>Peso</span>
										<span>{pokemon?.weight} </span>
									</span>
									<span className="details__card-character--sizesItems">
										<span>Altura</span>
										<span>{pokemon?.height} </span>
									</span>
								</div>
							</div>
							{/*tipo/habilidades*/}
							<div className="details__card--skills">
								<div>
									<h3 className="details__card--skillsName">Tipo</h3>
									<div className="details__card--skillsItems">
										{types?.map((type) => [
											<span className="details__body--items" key={type}>
												{tipos[type]}
											</span>,
										])}
									</div>
								</div>
								<div>
									<h3 className="details__card--skillsName">Habilidades</h3>

									<div className="details__card--skillsItems">
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
							<div className="details__card--stats">
								<h3 className="details__card--statstittle">Stats</h3>
								<div className="details__card--statsItem">
									<span className="details__card--statsItemName">HP:</span>
									<span className="details__card--statsItemValue">
										{pokemon?.stats[0]?.base_stat}/150
									</span>
								</div>
								<progress
									className="details__card--statsProgress"
									max={100}
									value={pokemon?.stats[0]?.base_stat}
								></progress>
								<div className="details__card--statsItem">
									<span className="details__card--statsItemName">ATAQUE:</span>
									<span className="details__card--statsItemValue">
										{pokemon?.stats[1]?.base_stat}/150
									</span>
								</div>
								<progress
									className="details__card--statsProgress"
									max={100}
									value={pokemon?.stats[1]?.base_stat}
								></progress>
								<div className="details__card--statsItem">
									<span className="details__card--statsItemName">DEFENSA:</span>
									<span className="details__card--statsItemValue">
										{pokemon?.stats[2]?.base_stat}/150
									</span>
								</div>
								<progress
									className="details__card--statsProgress"
									max={100}
									value={pokemon?.stats[2]?.base_stat}
								></progress>
								<div className="details__card--statsItem">
									<span className="details__card--statsItemName">
										VELOCIDAD:
									</span>
									<span className="details__card--statsItemValue">
										{pokemon?.stats[5]?.base_stat}/150
									</span>
								</div>
								<progress
									className="details__card--statsProgress"
									max={100}
									value={pokemon?.stats[5]?.base_stat}
								></progress>
							</div>
						</div>
						{/*Movimientos */}
						<div className="details__card">
							<h2 className="details__card-movementsName">Movimientos</h2>
							<div className="details__card-movementsContent">
								{pokemon?.moves?.map((data) => (
									<span
										className="details__card-movementsValue"
										key={data?.move?.name}
									>
										{data?.move?.name}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export { Details };
