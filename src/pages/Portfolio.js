import React from 'react';

function ListPortfolio(props) {
	const {img, name} = props

	return (
		<React.Fragment>
						<div className="col-sm-6 mt-4">
							<figure className="figure" data-aos="fade-down" data-aos-duration="2000">
							  <img src={props.img} className="figure-img img-fluid rounded shadow-lg" alt="" />
							  <figcaption className="figure-caption">{props.name}.</figcaption>
							</figure>
						</div>
		</React.Fragment>
	)
}

export default function Portfolio(props) {

	return (
		<div id="page2" className="pt-4">
			<section id="portfolio">
				<div className="container">
				<h3 className="text-blue text-center" data-aos="zoom-in-up">Portfolio</h3>
					<div className="row">
						<ListPortfolio img="https://github.com/RobbiAbd/pengaduan-masyarakat/blob/master/assets/uploads/pengaduan-img.png?raw=true" name="Pengaduan Masyarakat dengan PHP Codeigniter" />
					</div>

				</div>
			</section>
		</div>
	)
}