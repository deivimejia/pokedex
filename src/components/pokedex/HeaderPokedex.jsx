import '../../styles/headerPokedex.css';
function HeaderPokedex({ name }) {
	return (
		<div className="pokedex__header">
			<p>Bienvenido {name}, aquí encontrarás tu pokemón favorito</p>
		</div>
	);
}

export default HeaderPokedex;
