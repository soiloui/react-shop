import styled from 'styled-components';

const StyledStripe = styled.div`
    padding: 2em;
    margin-top: 1em;
    width: 100%;

    text-align: center;
    color: #fff;
    background: ${props => props.theme.primCol};

    h3{
        font-size: 3.5rem;
    }
    p{
        padding: 1em 0;

        font-weight: 300;
    }
`;

StyledStripe.defaultProps = {
    theme:{
        primCol: "#999"
    }
}

export default StyledStripe;