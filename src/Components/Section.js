import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const Section = (props) => {
    return (
        <>
            <Wrap bgImage={props.background}>
                <Fade top>
                    <ItemText>
                        <h1>{props.title}</h1>
                        <p>{props.subtitle}</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <Fade top>
                        <ButtonGroup>
                            <LeftButton>
                                {props.leftbutton}
                            </LeftButton>
                            {
                                props.rightbutton &&
                                <RightButton>
                                    {props.rightbutton}
                                </RightButton>
                            }
                        </ButtonGroup>
                    </Fade>
                    <DownArrow src="/images/down-arrow.svg" />
                </Buttons>

            </Wrap>
        </>
    )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image:${props => `url("${props.bgImage}")`};
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const ItemText = styled.div`
padding-top:15vh ;
`
const Buttons = styled.div`
   
`;
const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;

   @media (max-width : 768px){
       flex-direction: column;
   }
`;
const LeftButton = styled.div`
  background: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  margin:10px;
 
`;
const RightButton = styled(LeftButton)`
  background:white;
  opacity:0.65;
  color:black;
`;

const DownArrow = styled.img`
height: 40px;
margin-top:0px;
animation : animateDown infinite 1.5s;

`;