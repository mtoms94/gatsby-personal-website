import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../vectors/initials.svg'
import resume from '../pdfs/mairead-toms-resume.pdf'

const Header = props => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			<Icon className="icon"></Icon>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Hello World!</h1>
				<p>
					My name is Mairead Toms, but I mostly go by Mai (pronounced like the
					month). <br /> I made this website to tell you about myself (and so I
					could practice css).
				</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<button
						onClick={() => {
							props.onOpenArticle('intro')
						}}
					>
						Intro
					</button>
				</li>
				<li>
					<button>
						<a href={resume} target="_blank" rel="noreferrer">
							{' '}
							Resume{' '}
						</a>
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							props.onOpenArticle('contact')
						}}
					>
						Contact
					</button>
				</li>
			</ul>
		</nav>
	</header>
)

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
}

export default Header
