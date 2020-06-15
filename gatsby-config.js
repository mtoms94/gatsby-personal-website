module.exports = {
  siteMetadata: {
    title: 'Mai Toms',
    author: 'Hunter Chang',
    description:
      'A Gatsby.js V2 personal website based on Dimension by HTML5 UP',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/images/` } },
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
