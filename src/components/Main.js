import PropTypes from 'prop-types'
import React from 'react'
import headshot from '../images/headshot.jpg'
import resume from '../pdfs/mairead-toms-resume.pdf'
class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				role="button"
				tabIndex="0"
				aria-label="close article"
				onClick={() => {
					this.props.onCloseArticle()
				}}
			></div>
		)

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
			>
				<article
					id="intro"
					className={`${this.props.article === 'intro' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Intro</h2>
					<div className="article-content">
						<span className="image main">
							<img src={headshot} alt="Mai's headshot" />
						</span>
						<div>
							<p>
								I’m a full-stack software developer always learning new stuff.
								So far I’ve taken on everything from web development, to cloud
								infrastructure, to DevOps, to Java microservices. Check out my
								<a href={resume} target="_blank" rel="noreferrer">
									{' '}
									resume{' '}
								</a>
								,{' '}
								<a
									href="https://www.linkedin.com/in/mairead-toms-a44144107/"
									rel="noreferrer"
									target="_blank"
								>
									LinkedIn
								</a>
								, or{' '}
								<a
									href="https://github.com/mtoms94"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>{' '}
								to learn more about all that.
							</p>
							<p>
								Outside of work, I like to read, exercise, and travel. In
								September 2019, I decided to leave my job to do more of all
								three of those things. A one-way ticket to Bangkok became 6
								months of traveling and 11 countries visited, including hiking
								in Nepal, surfing in the Philippines, eating my way through
								Japan, and seeing old friends in Spain. Since Coronavirus sent
								me home in March, I’ve been volunteering at a local shelter and
								working on some long-neglected side projects.
							</p>
						</div>
					</div>
					{close}
				</article>
				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Contact</h2>
					<ul className="icons">
						<li>
							<div className="list-item">
								<span className="icon fa-at">
									<span className="label">Email</span>
								</span>
								<a
									href="mailto:maireadtoms@gmail.com"
									target="_blank"
									rel="noreferrer"
									className="icon-label"
								>
									maireadtoms@gmail.com
								</a>
							</div>
						</li>
						<li>
							<span className="icon fa-linkedin">
								<span className="label">LinkedIn</span>
							</span>
							<a
								href="https://www.linkedin.com/in/mairead-toms-a44144107/"
								target="_blank"
								rel="noreferrer"
								className="icon-label"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<span className="icon fa-github">
								<span className="label">GitHub</span>
							</span>
							<a
								href="https://github.com/mtoms94"
								target="_blank"
								rel="noreferrer"
								className="icon-label"
							>
								GitHub
							</a>
						</li>
					</ul>
					{close}
				</article>
			</div>
		)
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired,
}

export default Main
