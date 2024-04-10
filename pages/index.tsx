import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'

import { initialData } from '../database/products'
import { ProductList } from '../components/products'

export default function Home() {
  return (
    <ShopLayout title={'Ecommerce Sena - Home'} pageDescription={'Encuentra los mejores artículos para tu setup'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} >Articulos</Typography>
    <ProductList products={initialData.products as any} />
    </ShopLayout>
  )
}
