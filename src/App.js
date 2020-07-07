import React, { Fragment } from 'react';
//Styles
import './styles/App.css';
//COMPONENTS
import Header from './components/header';
import Game from './components/game';
import Modal from './components/modal';

function App(props) {
	const { score, isPlaying, isSelected, itemPcSelected, result, openModal, pcScore } = props.state;
	const {
		buttonsRef,
		handleClickSelection,
		gameRef,
		pcSelectionRef,
		handleClickReset,
		handleClickRules,
	} = props;

	return (
		<Fragment>
			<Header
				isPlaying={isPlaying}
				handleClickPlay={props.handleClickPlay}
				score={score}
				pcScore={pcScore}
			/>
			<Game
				buttonsRef={buttonsRef}
				isSelected={isSelected}
				gameRef={gameRef}
				itemPcSelected={itemPcSelected}
				pcSelectionRef={pcSelectionRef}
				result={result}
				handleClickSelection={handleClickSelection}
				handleClickReset={handleClickReset}
				handleClickRules={handleClickRules}
			/>
			<Modal openModal={openModal} handleClickRules={handleClickRules} />
		</Fragment>
	);
}

export default App;
