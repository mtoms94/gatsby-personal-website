import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
	let content

	if (location && location.pathname === '/') {
		content = <div>{children}</div>
	} else {
		content = (
			<div id="wrapper" className="page">
				<div>{children}</div>
			</div>
		)
	}

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{
								name: 'description',
								content:
									"My name is Mairead Toms, but I mostly go by Mai. I'm a software developer and I made this website to tell you about myself (and so I could practice css).",
							},
							{ name: 'keywords', content: 'Mai Toms, Mairead Toms' },
							{
								name: 'google-site-verification',
								content: 'NQXgPjbguXdZxdppQ2UsFHfx28qoLDQpnUpH5tYFo1w',
							},
						]}
					>
						<html lang="en" />
					</Helmet>
					{content}
				</>
			)}
		/>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
