import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
						margin: '1rem',
						maxHeight: 'calc(50vh - 4rem)',
						border: '0',
						position: 'relative',
						float: 'left',
						width: '40%',
						height: '400px',
					}}
					imgStyle={{ objectFit: 'contain' }}
					//className="image main"
				/>
			)
		}}
	/>
)

const StyledImage = styled(Image)`
	picture > img {
		height: auto !important;
	}
	> img {
		height: auto !important;
	}
`

export default StyledImage
