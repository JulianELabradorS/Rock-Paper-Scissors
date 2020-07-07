import React from 'react';
//IMAGES
import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';
import Spock from '../assets/images/icon-spock.svg';
import Lizard from '../assets/images/icon-lizard.svg';
//STYLES
import '../styles/game.css';

const game = (props) => {
	const {
		handleClickSelection,
		buttonsRef,
		gameRef,
		isSelected,
		itemPcSelected,
		pcSelectionRef,
		result,
		handleClickReset,
		handleClickRules,
	} = props;
	const elements = {
		rock: {
			image: Rock,
			name: 'rock',
		},
		paper: {
			image: Paper,
			name: 'paper',
		},
		scissors: {
			image: Scissors,
			name: 'scissors',
		},
		spock: {
			image: Spock,
			name: 'spock',
		},
		lizard: {
			image: Lizard,
			name: 'lizard',
		},
	};
	const buttons = [];

	for (const key in elements) {
		buttons.push(
			<div
				className={`game__buttons__button ${elements[key].name}`}
				onClick={handleClickSelection}
				ref={(button) => {
					buttonsRef.push(button);
				}}
				key={elements[key].name}>
				<div className='game__buttons__button__inside'>
					<img src={elements[key].image} alt={elements[key].name} />
				</div>
			</div>
		);
	}
	if (itemPcSelected) {
		console.log(itemPcSelected);
		buttons.push(
			<div
				className={`game__buttons__button ${itemPcSelected}`}
				id='game__buttons__button--pcSelected'
				onClick={handleClickSelection}
				key='pcSelection'
				ref={pcSelectionRef}>
				<div className='game__buttons__button__inside'>
					<img src={elements[itemPcSelected].image} alt={itemPcSelected} />
				</div>
			</div>
		);
	}
	console.log(buttons);

	return (
		<main className='game' ref={gameRef}>
			{isSelected ? (
				<div className='game__text'>
					<p>YOU PICKED</p>
					<p>THE HOUSE PICKED</p>
				</div>
			) : null}
			<div className='game__buttons'>
				{isSelected ? (
					<>
						<div className='game__buttons__position L'></div>
						<div className='game__buttons__position R'></div>
					</>
				) : null}
				{buttons}
				{result ? (
					<div className='game__result'>
						<h1 className='game__result__text'>{result}</h1>
						<button className='game__result__button' onClick={handleClickReset}>
							PLAY AGAIN
						</button>
					</div>
				) : null}
			</div>
			<button className='game__rules' onClick={handleClickRules}>
				RULES
			</button>
		</main>
	);
};

export default game;
