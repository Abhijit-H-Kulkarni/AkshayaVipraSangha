import React from 'react';
class Navigation extends React.Component{
    render() {
		return (
			<div>
				<nav class="navbar navbar-default">
					<div class="container-fluid">
						<ul class="nav navbar-nav">
							<li><a href="/">Home</a></li>
							<li><a href="/matrimonial">Matrimonial</a></li>
							<li><a href="/about">About Us</a></li>
							<li><a href="#">Aims and Objectives</a></li>
							<li><a href="/contact">Contact Us</a></li>
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