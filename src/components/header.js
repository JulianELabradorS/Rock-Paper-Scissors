import React from 'react';
//STYLES
import '../styles/header.css';
//IMAGES
import Logo from '../assets/images/logo.svg';

const header = (props) => {
	const { score, handleClickPlay, isPlaying, pcScore } = props;

	return (
		<header className='header'>
			<img
				src={Logo}
				alt='Rock, Papper, Scissors, Spok and Lizard game Logo'
				className='header__img'
			/>
			{isPlaying ? (
				<div className='header__score'>
					<div className='header__score__container'>
						<p className='header__score__container__text'>PLAYER</p>
						<p className='header__score__container__pt'>{score}</p>
					</div>
					<div className='header__score__container'>
						<p className='header__score__container__text'>PC</p>
						<p className='header__score__container__pt'>{pcScore}</p>
					</div>
				</div>
			) : (
				<button type='button' className='header__button' onClick={handleClickPlay}>
					Play
				</button>
			)}
		</header>
	);
};

export default header;
