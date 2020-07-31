import React from 'react';
class Navigation extends React.Component{
    render() {
		return (
			<div>
				{/* <div id="title">
				<img class="kalash" src="images/Kalash.jpg" alt="Image Unavailable" />
				<h3>Akshaya Vipra Sangha</h3>
				</div> */}
				<div class="row">
					<div class="col-md-3">
						<img class="kalash" src="images/Kalash.jpg" alt="Image Unavailable" />
					</div>
					<div class="col-md-6">
						<h4>Akshaya Vipra Maha Sabha</h4>
					</div>
				</div>
								<nav class="navbar bg-primary navbar-default">
					<div class="container-fluid">
						<ul class="nav navbar-nav">
							<li><a href="/">Home</a></li>
							<li><a href="/about">About Us</a></li>
							<li><a href="#">Aims and Objectives</a></li>
							<li><a href="/events">Events & activities</a></li>
							<li><a href="/memberDetails">Committee Members</a></li>
							<li><a href="/contact">Members Directory</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="/matrimonial">Matrimonial</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>
					</div>
				</nav>
                </div>
        )
    }
}
export default Navigation;