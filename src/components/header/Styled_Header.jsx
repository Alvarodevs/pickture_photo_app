import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;

export const HomeIconContainer = styled.button`
    width: 85px;
    height: 100%;
    background-color: var(--white);
    border: none;
    margin-left: 10px;
    
    @media only screen and (max-width: 500px) {
        img {
            width: 100%;
        }
    }
`;

