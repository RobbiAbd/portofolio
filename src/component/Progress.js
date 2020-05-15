import React from 'react'
import CountUp from 'react-countup'

export default function Progress(props) {
	const { name, persentase } = props

	return (
		<React.Fragment>
			<div className="row">
				<div className="col">
				<h5>{name}</h5>
				</div>
				<div className="col text-right">
				<h5>
					<CountUp duration={10} delay={5} end={parseInt(persentase)} /><span>%</span>
				</h5>
				</div>
			</div>

			<div className="progress" style={{height: '8px'}}>
				<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: ''+persentase+'%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} data-aos="fade-right" data-aos-duration="2000" />
			</div>
		</React.Fragment>
	)
}