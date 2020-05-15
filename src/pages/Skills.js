import React from 'react';
import Progress from '../component/Progress'


export default function Skills() {
	return (
		<div id="page2" className="pt-4">
			<section id="skill">
				<div className="container">
					<h3 className="text-blue text-center" data-aos="zoom-in-up">Professional Skills</h3>
					<div className="card mt-4 mb-4 mx-auto shadow-lg bg-white rounded" data-aos="fade-up" data-aos-duration="1000">
					  <div className="card-body">
					    <div className="row">
							<div className="col-sm-6">
								<div className="card-text">
									<Progress name="HTML" persentase="80" />
									<Progress name="CSS" persentase="70" />
									<Progress name="BOOTSTRAP" persentase="65" />
								</div>
							</div>

							<div className="col-sm-6">
									<Progress name="PHP" persentase="75" />
									<Progress name="JAVASCRIPT" persentase="50" />
									<Progress name="REACT JS" persentase="20" />
							</div>
					    </div>
					  </div>
					</div>
				</div>
			</section>
	  </div>
	)
}