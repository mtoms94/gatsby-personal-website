module.exports = {
	siteMetadata: {
		title: 'Mai Toms - Developer',
		author: 'Mai Toms',
		description:
			"My name is Mairead Toms, but I mostly go by Mai. I'm a software developer and I made this website to tell you about myself (and so I could practice css).",
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://maitoms.dev/',
				policy: [{ userAgent: '*', disallow: '/static/*.pdf$' }],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /vectors/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/vectors/icon.svg',
			},
		},
		'gatsby-plugin-sass',
	],
}
