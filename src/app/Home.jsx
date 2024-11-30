import React, { useRef } from 'react';
import { types, useNameContext } from '../context/nameContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/home.css';

function Home() {
	const inputRef = useRef();
	const [name, dispatch] = useNameContext();
	const navigate = useNavigate();

	const setName = () => {
		console.log(inputRef.current.value);
		dispatch({
			type: types.SET_NAME,
			payload: inputRef.current.value.trim(),
		});
		inputRef.current.value = '';
		navigate('/pokedex');
	};
	const clearName = () => {
		dispatch({
			type: types.CLEAR_NAME,
		});
	};
	return (
		<div className="home">
			<div className="home__container">
				<h2 className="home__title">
					¡Bienvenido {name ? <>de nuevo {name}</> : 'Entrenador'}!
				</h2>
				<div>
					<>
						{name ? (
							<>
								<p className="home__text">
									'Continua con tu viaje...Ve a tu{' '}
									<Link className="home__link" to="/pokedex">
										{' '}
										Pokédex
									</Link>
									'
								</p>

								<button className="home__btn btn--radius" onClick={clearName}>
									Salir
								</button>
							</>
						) : (
							<>
								<p className="home__text">
									Para comenzar, ingresa tu nombre...
								</p>
								<div className="home__search">
									<input
										type="text"
										placeholder="Tu nombre aqu..."
										ref={inputRef}
										className="home__input"
									/>
									<button className="home__btn" onClick={setName}>
										Ingresar
									</button>
								</div>
							</>
						)}
					</>
				</div>
			</div>
		</div>
	);
}

export { Home };
