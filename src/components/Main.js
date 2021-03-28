import PropTypes from 'prop-types'
import React from 'react'
<<<<<<< HEAD
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
=======
import Image from '../components/Image'
>>>>>>> bfb431cbaf6a6af8ea2eadc8b5ec54ddf95cece2
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
<<<<<<< HEAD
						<span className="image main">
							<Img
								fluid={this.props.file.childImageSharp.fluid}
								alt="Mai's headshot"
							/>
						</span>
=======
						<Image></Image>
>>>>>>> bfb431cbaf6a6af8ea2eadc8b5ec54ddf95cece2
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
							Outside of work, I like to read, exercise, and travel. In September 2019, I decided to leave my job to do more of all three of those things. A one-way ticket to Bangkok became 6 months of traveling and 11 countries visited, including hiking in Nepal, surfing in the Philippines, eating my way through Japan, and seeing old friends in Spain. When COVID-19 sent me home in March, I began volunteering at a local shelter and working on some long-neglected side projects. In September 2020, after almost exactly a year off, I returned to Capital One excited to pick up where I left off.
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

export default props => (
	<StaticQuery
		query={graphql`
			query HeadShotQuery {
				file(name: { eq: "headshot" }) {
					childImageSharp {
						fluid {
							aspectRatio
							base64
							sizes
							src
							srcSet
						}
					}
				}
			}
		`}
		render={data => (
			<Main
				file={data.file}
				route={PropTypes.object}
				article={PropTypes.string}
				articleTimeout={PropTypes.bool}
				onCloseArticle={PropTypes.func}
				timeout={PropTypes.bool}
				setWrapperRef={PropTypes.func.isRequired}
			/>
		)}
	/>
)

/* Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired,
} */
