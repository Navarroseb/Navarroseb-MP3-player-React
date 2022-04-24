import React from "react";

function Pdetails(props) {
	return (
		<div className="c-player--details">
			<div className="details-img">
				<img src={props.song.img_src} alt="" />
			</div>
			<h3 className="details-title">Title: {props.song.title}</h3>
			<h4 className="details-artist">Artist: {props.song.artist}</h4>
		</div>
	);
}

export default Pdetails;
