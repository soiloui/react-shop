import React, {useState} from 'react'

type ProductTypes = {
    id: number,
    name: string,
    price: number,
    description: string,
    imgSrc: string,
    colors?: string[],
    sizes?: string[],
}

const productsData: ProductTypes[] = [
    {
        id: 0,
        name: 'Rolling Bricks Blouse',
        price: 99,
        description: 'this is awesome book!',
        imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2F94%2F2394aaf5c2861ce31bfd576c00f15830923f8e49.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        colors: ['Violet', 'Green', 'Lazure'],
        sizes: ['M', 'L', 'XL'],
    },
    {
        id: 1,
        name: 'Hoodie Type Blouse',
        price: 55,
        description: 'this is awesome book!',
        imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2Fda%2F83dacd5623930eb235e4412b13a2e31381842b68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        colors: ['Red', 'Blue', 'Yellow'],
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 2,
        name: 'Big Trobule Blouse',
        price: 72,
        description: 'this is awesome book!',
        imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2F36%2Fb136c7991f4b907651435adcc5cfc357c15944c9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        colors: ['Cyan', 'Magnet', 'Yellow', 'Black'],
        sizes: ['M', 'L', 'XL', 'XXL']
    }
]

type ContextProps = { 
    products: ProductTypes[]
  };

export const DataContext = React.createContext<Partial<ContextProps>>({});

const DataProvider = (props:any) => {
    const [products, setProducts] = useState(productsData);

    return (
        <DataContext.Provider value={ {
            products: products
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider
