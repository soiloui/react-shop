import styled from 'styled-components';

const StyledUsers = styled.div`

    ul{
        /* display: flex;
        flex-wrap: wrap;
        justify-content: space-between; */

        li{
            margin: 1.5em 0; 
            /* flex-grow:1; */
        }

        a{
            display: block;
            padding: 1.5em;

            cursor: pointer;
            background: #f3f3f3;

            &:hover{
                background: #e7e7e7;
            }
        }
    }
`

export default StyledUsers;