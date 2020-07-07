import React from 'react';
import ReactDom from 'react-dom';
//STYLES
import '../styles/modal.css';
//IMAGES
import Rules from '../assets/images/image-rules.svg';
import iconClose from '../assets/images/icon-close.svg';

const modal = (props) => {
	if (props.openModal) {
		return ReactDom.createPortal(
			<div className='modal'>
				<div className='modal__container'>
					<img
						src={iconClose}
						onClick={props.handleClickRules}
						className='modal__container__close'
						alt='close icon'
					/>
					<img src={Rules} className='modal__container__img' alt='rules of game' />
				</div>
			</div>,
			document.getElementById('modal')
		);
	}
	return null;
};
export default modal;
