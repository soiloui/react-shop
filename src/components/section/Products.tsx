import React from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import styled from 'styled-components'

export const StyledProducts = styled.div`
    img{
        width: 100%;
        max-height: 50vh;
        object-fit: contain;

        max-width: 100%;
    }

    .card{
        padding: 1em;
        margin-bottom: 2em;

        border-radius: 3px;
        box-shadow: 0px 5px 7px rgba(0,0,0, 0.25);
    }

    .content{
        &__title{
            margin: 0.5em 0;
            font-size: 1.5rem;
        }

        &__price{
            font-size: 1.2rem;
            font-weight: 600;
        }

        &__description{
            margin: 1em 0;
        }
    }
`

const Products = () => {
    return (
        <StyledProducts id="product">
        <DataContext.Consumer>
        {
            ({products}) => {
                return products?.map((product) => {
                    return (
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={`${product.imgSrc}`} alt="nothing"/>
                        </Link>

                        <div className="content">
                            <h3 className="content__title">
                                <Link to={`/product/${product.id}`}>
                                    <p>{product.name}</p>
                                </Link>
                            </h3>
                            <p className="content__price">{product.price}$</p>
                            <p className="content__description">{product.description}</p>
                        </div>
                    </div>
                    )
                })
            }
        }
        </DataContext.Consumer>
        </StyledProducts>
    )
}

export default Products
