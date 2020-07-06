import React from 'react';

export default function About() {
	return (
		<div id="page1">
			<section id="about">
				<div className="container">
					<div className="card mt-4 mb-4 mx-auto shadow-lg bg-white rounded" data-aos="fade-up" data-aos-duration="1000">
					  <div className="card-body">
					    <div className="row">
							<div className="col-sm-6 pt-4">
								<div className="card-title">
									<h3 className="text-blue">About</h3>
								</div>
								<div className="card-text">
								Lahir di Majalengka pada tahun 2001, saya adalah seorang web developer. Kesukaan terhadap IT membuat saya ingin mempelajari hal-hal baru setiap harinya. Suka motivasi diri agar mencapai target, dan tidak berlebihan dalam segala hal.
								</div>
							</div>

							<div className="col-sm-6 pt-4">
								<div className="card-title">
									<div className="card-title">
										<h3 className="text-blue">Basic Information</h3>
									</div>
									<div className="table-responsive">
									<table className="table ">
										<tbody>
											<tr>
												<th>Age</th>
												<th>:</th>
												<td>18 </td>
											</tr>

											<tr>
												<th>Email</th>
												<th>:</th>
												<td>robbiabd.drawing@gmail.com </td>
											</tr>


											<tr>
												<th>Phone</th>
												<th>:</th>
												<td>085156185946 </td>
											</tr>

											<tr>
												<th>WhatsApp</th>
												<th>:</th>
												<td>082126566475 </td>
											</tr>

											<tr>
												<th>Address</th>
												<th>:</th>
												<td>Majalengka, Indonesia. </td>
											</tr>
										</tbody>
									</table>
									</div>
								</div>
							</div>
					    </div>
					  </div>
					</div>
				</div>
			</section>
	  </div>
	)
}
