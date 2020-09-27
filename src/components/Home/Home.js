import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div class="Main">
				<div class="Advertisements">
					<img src="images/image1.jpg" alt="Image Unavailable" class="ad1" />
					<img src="images/image2.jpg" alt="Image Unavailable" class="ad2" />
					<img src="images/image3.jpg" alt="Image Unavailable" class="ad3" />
					<img src="images/image4.jpg" alt="Image Unavailable" class="ad4" />
				</div>
				<div class="Main-Content">
					{/* <h2 class="root">The main content goes here.</h2> */}
					<img class="img-fluid gayatriDevi" src="images/gayatriMantra.jpg" alt="Image Unavailable" />
					
				</div>
				<audio class="audio" controls>  
						<source  src="images/gayatri-mantra-raga-1.mp3" type="audio/mpeg"></source>
						{/* <source src="horse.mp3" type="audio/mpeg">rowser does not support the audio element. */}
					</audio>
				{/* <h6 class="copyright"> &copy; Akshaya Vipra Sangha 2020</h6> */}
			</div>
		);
	}
}
export default Home;
