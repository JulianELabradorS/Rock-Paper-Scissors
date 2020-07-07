import React, { useState, useRef } from 'react';
//Components
import App from './App';
//
import backgroundImage from './assets/images/bg-pentagon.svg';

function AppContainer(props) {
	const [state, setState] = useState({
		result: '',
		score: 0,
		pcScore: 0,
		isPlaying: false,
		isSelected: false,
		itemPcSelected: '',
		openModal: true,
	});
	const buttonsRef = [];
	const gameRef = useRef();
	const pcSelectionRef = useRef();

	//PLAY BUTTON HANDLER
	const handleClickPlay = (e) => {
		setState({
			...state,
			isPlaying: true,
		});
		buttonsRef.forEach((button) => {
			button.style.pointerEvents = 'all';
		});
	};

	//GAME BUTTON HANDLER
	const handleClickSelection = (event) => {
		setState({
			...state,
			isSelected: true,
		});
		buttonsRef.forEach((button) => {
			button.style.pointerEvents = 'none';
		});
		const {
			currentTarget: {
				classList: [, playerSelection],
			},
		} = event;

		buttonsRef.forEach((button) => {
			if (button.classList[1] !== playerSelection) {
				button.classList.add('hidden');
			} else {
				button.classList.add('selected');
			}
		});

		gameRef.current.style.backgroundImage = 'none';
		pcSelection(playerSelection);
		setTimeout(() => {
			pcSelectionRef.current.style.opacity = '1';
		}, 500);
	};

	const pcSelection = (playerSelection) => {
		const choices = [
			{ name: 'rock', defeats: ['scissors', 'lizard'] },
			{ name: 'paper', defeats: ['rock', 'spock'] },
			{ name: 'scissors', defeats: ['paper', 'lizard'] },
			{ name: 'lizard', defeats: ['paper', 'spock'] },
			{ name: 'spock', defeats: ['scissors', 'rock'] },
		];
		const pcSelection = choices[Math.floor(Math.random() * 5)];
		console.log('revis', pcSelection);
		setState({
			...state,
			isSelected: true,
			itemPcSelected: pcSelection.name,
		});

		if (pcSelection.name === playerSelection) {
			setTimeout(() => {
				setState({
					...state,
					isSelected: true,
					itemPcSelected: pcSelection.name,
					result: 'EMPATE',
				});
			}, 2000);
		} else {
			const find = pcSelection.defeats.includes('paper');

			if (find) {
				setTimeout(() => {
					setState({
						...state,
						pcScore: state.pcScore + 1,
						isSelected: true,
						itemPcSelected: pcSelection.name,
						result: 'PERDISTE',
					});
				}, 2000);
			} else {
				setTimeout(() => {
					setState({
						...state,
						isSelected: true,
						itemPcSelected: pcSelection.name,
						score: state.score + 1,
						result: 'GANASTE',
					});
				}, 2500);
			}
		}
	};
	const handleClickReset = () => {
		setState({
			...state,
			isSelected: false,
			itemPcSelected: '',
			result: '',
		});
		buttonsRef.forEach((button) => {
			button.classList.remove('hidden');
			button.style.pointerEvents = 'all';
			button.classList.remove('selected');
		});
		gameRef.current.removeAttribute('style');
	};
	const handleClickRules = () => {
		setState({
			...state,
			openModal: !state.openModal,
		});
	};

	return (
		<App
			state={state}
			handleClickPlay={handleClickPlay}
			handleClickSelection={handleClickSelection}
			buttonsRef={buttonsRef}
			gameRef={gameRef}
			pcSelectionRef={pcSelectionRef}
			handleClickReset={handleClickReset}
			handleClickRules={handleClickRules}
		/>
	);
}

export default AppContainer;
