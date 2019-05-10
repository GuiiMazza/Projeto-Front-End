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

export const Button = styled.button`
    margin: 56.81px 0px 0px 0px;
    color: #FFFFFF;
    background-color: #009DFF;
    border-radius: 4px;
    border: 0px;
    height: 39.65px;
    width: 151.33px
    font-size: 18px;
    font-family: Roboto;
    text-align: center;
`;