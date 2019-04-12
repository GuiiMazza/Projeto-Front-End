import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FAFAFA;
    }
`;

export const Card = styled.div`
    background: #FFFFFF;
    width: 955px;
    margin: 0px auto;
    border: 1px solid #E6E6E6;
    padding: 55px 69px 55px 69px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;