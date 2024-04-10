import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces'
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from '@mui/material';
import NextLink from 'next/link'


interface Props {
    product: IProduct;
}
export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const productImage = useMemo(() => {
    return isHovered
    ?`products/${product.images[1]}`
    :`products/${product.images[0]}`
  },[isHovered, product.images])
  return (
    <Grid item 
      xs={6} 
      sm={4} 
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href='/product/slug' passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
              <CardMedia
              component='img'
              image={productImage}
              alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ met:1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}