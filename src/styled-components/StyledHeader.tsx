import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    width: 100%;
    
    text-align: center;
    box-shadow: 0 2px 6px rgba(0,0,0, 0.3);

    .nav-toggler{
        position: absolute;
    }

    .nav{
        text-transform: uppercase;
        font-weight: 600;

    }
    ul{
        display: flex;
    }
    li{ 
        a{ 
            display: block;
            padding: 1em;

            &:hover{
                color: #999;
            }
        }
    }

    .cart{
        position: relative;
        cursor: pointer;
        z-index: 99;

        span{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -70%;
            right: -50%;
            width: 1.6em;
            height: 1.6em;

            color: #fff;
            font-size: 0.8rem;
            font-weight: 600;
            background: #0fc445;
            border-radius: 50%;
            z-index: -1;
        }
    }


    @media (max-width: 700px){
        
        .nav{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            color: #fff;
            background: #0fc445;
            transform: translateY(-100%);
            transition: transform .5s ease-in-out;

            ul{
                flex-direction: column;
                justify-content: center;
                height: 100%;
            }
        }
        .nav--active{
            transform: translateY(0); 
        }

        .nav-toggler{
            position: relative;
            width: 35px;
            height: 30px;

            cursor: pointer;
            z-index: 99;

            &::before, &::after, .bar{
                position: absolute;
                top: 50%;
                width: 80%;
                height: 4px;

                transform: translateX(-50%);
                background:#0fc445;
                border-radius: 1px;
                transition: all .45s ease-in-out;
                transform-origin: top left;
            }

            &::before{
                content: '';
                transform: translate(-50%, -250%);
            }

            .bar{
                display: inline-block;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &::after{
                content: '';
                transform: translate(-50%, 150%);
            }

        }

        .nav-toggler--active{
            &::before, &::after, .bar{
                background:#fff;
            }

            &::before{
                transform: rotate(-45deg) translate(-50%, -50%);
            }

            .bar{
                transform: translateX(-100%);
                opacity: 0;
            }

            &::after{
                transform: rotate(45deg) translate(-50%, -50%);
            }
        }
    }

`

export default StyledHeader;