import React from 'react'

export default function Home() {
	return (
		<React.Fragment>
			<div id="page">
			    <section id="home" className="parallax">
			      <div className="parallax-inner">
			      <div data-aos="fade-up" data-aos-duration="1000">
				        <div id="photo">
							<img src="./img/foto-profile.jpg" className="img-fluid rounded-circle" width="200" height="200" alt="profile" />
				        </div>
				        <div className="pt-4">
				        	<h3>Robbi Abdul Rohman</h3>
				        	<h5>Web Developer</h5>
				        	<h5>
				        		<a target="_blank" href="./file/my-cv-update.pdf" className="btn btn-success">Download CV</a>
				        	</h5>
				        </div>
			        </div>

			        {/* <button className="btn btn-warning text-white"><i class="fas fa-arrow-circle-down fa-3x"></i></button> */}
			      </div>
			    </section>
	  		</div>
		</React.Fragment>
	)
}
