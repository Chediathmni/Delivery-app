import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"}; 
color: var(--lightBlue);
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"}; 
border-radius: 0.5rem;
padding: ${props => props.icon ? "0.3rem 0.6rem" : "0.3rem 0.7rem"};
margin: ${props => props.icon ? "0.3rem 0.6rem 0.3rem 0" : "0.4rem 0.4rem 0.4rem 0.4rem"};
cursor: pointer;
transition:all 0.5s ease-in-out;
&:hover {
    background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`;