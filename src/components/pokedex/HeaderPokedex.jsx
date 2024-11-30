import '../../styles/headerPokedex.css';
function HeaderPokedex({ name }) {
	return (
		<div className="pokedex__header">
			<div>
				<p>Bienvenido {name}, aquí encontrarás tu pokemón favorito</p>
			</div>
		</div>
	);
}

export default HeaderPokedex;
