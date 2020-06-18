import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledFullScreenWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
`

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js
 * @return {*}
 * @constructor
 */
const BackgroundSection = ({ className, children }) => {
	const { desktop } = useStaticQuery(
		graphql`
			query {
				desktop: file(relativePath: { eq: "bg.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 2560) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
			}
		`
	)

	const imageData = desktop.childImageSharp.fluid
	return (
		<StyledFullScreenWrapper>
			<BackgroundImage
				Tag="section"
				className={className}
				// To style via external CSS see layout.css last examples:
				// className="test"
				fluid={imageData}
				// Title gets passed to both container and noscriptImg.
				title="bg"
				// style={{
				//   // Defaults are overwrite-able by setting one of the following:
				//   // backgroundSize: '',
				//   // backgroundPosition: '',
				//   // backgroundRepeat: '',
				// }}
				// To "force" the classic fading in of every image (especially on
				// imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
				// fadeIn={`soft`}
				// To be able to use stacking context changing elements yourself,
				// set this to true to disable the "opacity hack":
				// preserveStackingContext={true}
				// You can "safely" (look them up beforehand ; ) add other props:
				id="bg"
				role="img"
				aria-label="background"
			>
				{children}
			</BackgroundImage>
		</StyledFullScreenWrapper>
	)
}
export default BackgroundSection

/* const StyledBackgroundSection = styled(BackgroundSection)`

    // These three crucial styles (if existing) are directly parsed and added to 
    // the pseudo-elements without further ado (except when overwritten).
    //background-repeat: repeat-y;
    //background-position: left center;
    //background-size: cover;
    
    // With media-queries you have to overwrite the default options (see style={{}} above).
    // ${media.lessThan('large')`
    //   background-size: cover;
    //   &:after, &:before {
    //     background-size: contain;
    //   }
	// `}

    
    // For pseudo-elements you have to overwrite the default options (see style={{}} above).
    // See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles 
    //&:after, &:before {
    //   background-clip: content-box;
    //   background-size: contain;
    //}
 ` 
 */
