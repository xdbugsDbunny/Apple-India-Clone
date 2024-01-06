import React from 'react'
import { Heading, LearnMoreAndBuy, MainWrapper, SubHeading } from './SectionCSS'

const Section = ({ data }) => {
  return (
    <MainWrapper style={{ background: `url(${data.imageURL}) 50% 50% no-repeat`}}>
      <Heading style={{ color: data.headColor }}>{data.heading}</Heading>
      <SubHeading style={{ color: data.subHeadColor }}>{data.subHeading}</SubHeading>
      <LearnMoreAndBuy>
        <span>Learn More &gt;</span>
        <span>Buy &gt;</span>
      </LearnMoreAndBuy>
    </MainWrapper>
  )
}

export default Section