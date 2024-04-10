import { FC } from 'react'
import { IProduct } from '../../interfaces'
import { Grid } from '@mui/material'
import { ProductCard } from '.'

interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4}>
      {
        products.map(product => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))
      }  
    </Grid>
  )
}