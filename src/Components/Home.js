import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <div>
            <Container>
                <Section
                    title="Model S"
                    subtitle="Order Online for Touchless Delivery"
                    background="/images/model-s.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory"
                />
                <Section
                    title="Model Y"
                    subtitle="Order Online for Touchless Delivery"
                    background="/images/model-y.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory" />
                <Section
                    title="Model 3"
                    subtitle="Order Online for Touchless Delivery"
                    background="/images/model-3.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory" />
                <Section
                    title="Model X"
                    subtitle="Order Online for Touchless Delivery"
                    background="/images/model-x.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory" />
                <Section
                    title="Solar Panels"
                    subtitle="Lowest Cost Solar Panel in America"
                    background="/images/solar-panel.jpg"
                    leftbutton="Custom Order"
                    rightbutton="Existing Inventory"
                />
                <Section
                    title="Accessories"
                    background="/images/accessories.jpg"
                    leftbutton="Shop Now"

                />

            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
