import React from 'react'

export default function Home() {
	return (
		<React.Fragment>
			<div id="page">
			    <section id="home" className="parallax">
			      <div className="parallax-inner">
			      <div data-aos="fade-up" data-aos-duration="1000">
				        <div id="photo">
							<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-circle" width="200" height="200" alt="profile" />
				        </div>
				        <div className="pt-4">
				        	<h3>Robbi Abdul Rohman</h3>
				        	<h5>Web Developer</h5>
				        </div>
			        </div>

			        {/* <button className="btn btn-warning text-white"><i class="fas fa-arrow-circle-down fa-3x"></i></button> */} 
			      </div>
			    </section>
	  		</div>
		</React.Fragment>
	)
}