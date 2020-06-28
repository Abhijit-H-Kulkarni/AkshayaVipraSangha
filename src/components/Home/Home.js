import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div class="Main">
				<nav class="navbar navbar-default">
					<div class="container-fluid">
						<ul class="nav navbar-nav">
							<li><a href="/">Home</a></li>
							<li><a href="/matrimonial">Matrimonial</a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Aims and Objectives</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</nav>
				<div class="Advertisements">
					<img src="images/image1.jpg" alt="Image Unavailable" class="ad1" />
					<img src="images/image2.jpg" alt="Image Unavailable" class="ad2" />
					<img src="images/image3.jpg" alt="Image Unavailable" class="ad3" />
					<img src="images/image4.jpg" alt="Image Unavailable" class="ad4" />
				</div>
				<div class="Main-Content">
					<h2 class="root">The main content goes here.</h2>
				</div>
				<h6 class="copyright"> &copy; Akshaya Vipra Sangha 2020</h6>
			</div>
		);
	}
}
export default Home;
