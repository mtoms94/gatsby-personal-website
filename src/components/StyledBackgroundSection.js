import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
/** 
* @param className   string    className(s) from styled-components.
* @param children    nodes     Child-components from index.js
*/
const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
    Tag="section"
    className={className}
    fluid={imageData}
    //   backgroundColor={`#040e18`}
    >
        {children}
        <div id="bg"></div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
&::before,
&::after{
    transform: scale(1.125);
    transition: transform .325s ease-in-out,filter .325s ease-in-out;
}
`

export default StyledBackgroundSection

