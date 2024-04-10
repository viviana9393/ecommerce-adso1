import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'

const CartPage  = () => {
  return (
    <ShopLayout title='carrito' pageDescription= 'carrito de compras de la tienda'>
      <Typography component='h1' variant='h1'>Carrito</Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* CartList */}
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{ my:2 }} />
              <OrderSummary />
              <Button color='secondary' className='circular-btm' fullWidth>
                Pagar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage