import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
  return (
    <Container>
      {/* Home */}
      <Section
          title="Model S"
          description="Order Online for touchless Delievery"
          backgroundImg="model-s.jpg"
          leftBtn="Custom order"
          rightBtn="Existing inventory"
     
          

      />
      <Section 
      title="Model Y"
      description="Order Online for touchless Delievery"
      backgroundImg="model-y.jpg"
      leftBtn="Custom order"
      rightBtn="Existing inventory"
      
      
      
      />
      <Section 
      title="Model 3"
      description="Order Online for touchless Delievery"
      backgroundImg="model-3.jpg"
      leftBtn="Custom order"
      rightBtn="Existing inventory"/>
      <Section 
      title="Model X"
      description="Order Online for touchless Delievery"
      backgroundImg="model-x.jpg"
      leftBtn="Custom order"
      rightBtn="Existing inventory"/>
      <Section

title="Lowest Cost Solar Panel in America"
description="Money-back guarantee"
backgroundImg="solar-panel.jpg"
leftBtn="Order now"
rightBtn="Learn More"
      
      
      
      />
         <Section

title="Solar for New Roofs"
description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
backgroundImg="solar-roof.jpg"
leftBtn="Order now"
rightBtn="Learn More"
      
      
      
      />
        <Section

title="Accessories"
description=""
backgroundImg="accessories.jpg"
leftBtn="Shop Now"

      
      
      
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
