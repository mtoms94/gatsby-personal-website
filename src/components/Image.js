import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const Image = () => (
	<StaticQuery
		query={graphql`
			query {
				file(relativePath: { eq: "headshot.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 225) {
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
		render={data => {
			// Set ImageData.
			const imageData = data.file.childImageSharp.fluid
			return (
				<Img
					fixed={imageData}
					alt="Mai's Headshot"
					style={{
						margin: '.5rem 2rem .5rem 0',
						border: '0',
						display: 'inline-block',
						aspectRatio: '1.5',
						maxWidth: '224px',
						maxHeight: '336px',
						width: '35vw',
						height: '52.5vw',
						objectFit: 'contain',
						float: 'left',
					}}
				/>
			)
		}}
	/>
)

export default Image
