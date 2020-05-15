import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Footer from './component/Footer'
import './App.css'
import LoadingBar from 'react-top-loading-bar';
import { Link, animateScroll as scroll } from "react-scroll"
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
	state = {
		loading: true
	}

	componentDidMount() {
		AOS.init()
		this.startFetch()
	    window.addEventListener('scroll', this.handleScroll)
	    setTimeout(() => {
	    	this.onFinishFetch()
	    	this.setState({
	    	loading: false
	    })
	    } ,5000)
	}

	  startFetch = () => {
	    this.LoadingBar.continuousStart()
	  }

	  onFinishFetch = () => {
	    this.LoadingBar.complete()
	  }


	handleScroll = (e) => {
	    let scrollTop = e.target.scrollingElement.scrollTop 
	    const nav = document.querySelector('#nav')

	    if (scrollTop !== 0) {
	      nav.classList.add('bg-success')
	    }else{
	      nav.classList.remove('bg-success')
	    }
	  }

render() {
  return (
  	<React.Fragment>

  	<LoadingBar 
  	height={3}
    color='red'
  	onRef={ref => (this.LoadingBar = ref)} 
  	/>

  	<nav id="nav" className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
              <Link
                    	className="navbar-brand text-uppercase"
					    to="home"
					    spy={true}
					    smooth={true}
					    offset={-70}
					    duration= {500}
					>
					Robbi Abdul Rohman
					</Link>

              <div className="d-block d-sm-none">
				<a className="text-white" href="#">{this.state.loading ? <i className="fas fa-spinner fa-pulse"></i> : ''}</a>
              </div>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center text-uppercase">
                  <li className="nav-item">
                    <Link
                    	className="nav-link"
					    activeClass="active"
					    to="about"
					    spy={true}
					    smooth={true}
					    offset={-70}
					    duration= {500}
					>
					About
					</Link>
                  </li>
                  <li className="nav-item">
                    <Link
                    	className="nav-link"
					    activeClass="active"
					    to="skill"
					    spy={true}
					    smooth={true}
					    offset={-70}
					    duration= {500}
					>
					Skills
					</Link>
                  </li>
                  <li className="nav-item">
                   <Link
                    	className="nav-link"
					    activeClass="active"
					    to="portfolio"
					    spy={true}
					    smooth={true}
					    offset={-70}
					    duration= {500}
					>
					Portfolio
					</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white text-left" href="#">{this.state.loading ? <i className="fas fa-spinner fa-pulse"></i> : ''}</a>
                  </li>
                </ul>
              </div>
            </div>
    </nav>

  	
  	<Home />
  	<About />
  	<Skills />
  	<Portfolio />
  	<Education />
  	<Footer />

  	

  	</React.Fragment>
  )
}
}

export default App;
