import React, { useEffect, useState } from "react";
const cusrsorImg = "/logo/logo.svg";

const Cursor = React.forwardRef((props, ref) => {
	const [cords, setCords] = useState({});
	let element = null,
		btnPlayPause = null,
		video = null;

	// set logo position
	let setPosition = (event) => {
		let bounds = element.getBoundingClientRect();
		setCords({
			x: (event.clientX - bounds.x),
			y: (event.clientY - bounds.y)
		});
	};

	// reset logo position
	const resetPosition = () => {
		setCords({
			x: '50%',
			y: "50%",
			transition: 'all 0.5s'
		})
	};

	// handle play pause
	const handlePlayPause = () => {
		if (video.paused) {
			video.play()
		} else {
			video.pause();
		}
	};

	// btn style
	const btnStyle = {
		left: cords.x,
		top: cords.y,
		transition: cords.transition
	}

	// mounting effect
	useEffect(() => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event

		// get current
		element = ref.current;

		// get HTML video and set to variable
		if (element.childNodes[0].tagName.toLowerCase() === 'video') {
			video = element.childNodes[0];
		}

		// get HTML button and set to variable
		if (element.childNodes[1].tagName.toLowerCase() === 'button') {
			btnPlayPause = element.childNodes[1];
			btnPlayPause.addEventListener("click", handlePlayPause);
		}

		// register event
		element.addEventListener("pointermove", setPosition);
		element.addEventListener("pointerout", resetPosition);

		// clean up
		return () => {
			if (element) {
				element.removeEventListener("pointermove", setPosition);
				element.removeEventListener("pointerout", resetPosition);
			}
			if (element.childNodes[1].tagName.toLowerCase() === 'button') {
				btnPlayPause.removeEventListener("click", handlePlayPause);
			}
		}
	}, []);

	return (
		<div className="cursor" ref={ref} >
			{props.children}
			<button id="btn" style={btnStyle}>
				<img
					src={cusrsorImg}
					alt="logo"
					width="40"
					height="40"
				/>
			</button>
		</div>
	)
});

export default Cursor;