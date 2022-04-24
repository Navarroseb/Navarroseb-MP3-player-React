import React, { useState, useEffect } from "react";
import Mplayer from "../component/player";

function App() {
	const [songs, setSongs] = useState([
		{
			title: "World 1",
			artist: "Mario Bros",
			img_src: "https://media.giphy.com/media/KqqLx9TrusX0Q/giphy.gif",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
		},
		{
			title: "Castle",
			artist: "Mario Bros",
			img_src:
				"https://media.giphy.com/media/2t9jvx7uAs7ilTpLfK/giphy.gif",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
		},
		{
			title: "Water",
			artist: "Mario Bros",
			img_src:
				"https://media.giphy.com/media/4HgDCMosFYHjLJ6oum/giphy.gif",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/underwater.mp3",
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex]);

	return (
		<div className="Home">
			<Mplayer
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default App;
