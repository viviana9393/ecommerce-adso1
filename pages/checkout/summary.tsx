import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import React from 'react'

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription= 'Resumen de la orden'>
      <Typography component='h1' variant='h1'>Resumen de la Orden</Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* CartList */}
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen 3 productos</Typography>
              <Divider sx={{ my:2 }} />
              <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
              <Typography>Andrea Lozano Cataño</Typography>
              <Typography>Carrea 7#35-10</Typography>
              <Typography>Las Flores</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 310 123 4567</Typography>
              <Divider sx={{ my:1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Button color='secondary' className='circular-btm' fullWidth>
                Confirmar Orden
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage