'use client';
import React from 'react';
import { Container, Typography, Button, Box, Paper, Grid } from '@mui/material';
import LoadingComponent from '../components/loading/LoadingComponent';
import Link from 'next/link';
import {
  Star as StarIcon,
  BarChart as BarChartIcon,
  FilterList as FilterListIcon,
  Movie as MovieIcon,
  MonetizationOn as MonetizationOnIcon,
} from '@mui/icons-material';
import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

const featuresData = [
  {
    title: 'Recomendações Personalizadas',
    description:
      'Receba sugestões de filmes com base em seu humor e preferências de gênero.',
    icon: <StarIcon fontSize="large" sx={{ color: '#FFD700' }} />,
  },
  {
    title: 'Análise de Clustering',
    description:
      'Utiliza algoritmos de clustering para agrupar filmes semelhantes.',
    icon: <BarChartIcon fontSize="large" sx={{ color: '#4CAF50' }} />,
  },
  {
    title: 'Filtros Avançados',
    description:
      'Encontre exatamente o que você deseja, seja um clássico ou uma nova descoberta.',
    icon: <FilterListIcon fontSize="large" sx={{ color: '#2196F3' }} />,
  },
];

const HeroFeaturesPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '60vh',
            backgroundImage:
              'url("https://source.unsplash.com/random/1920x1080?movies")',
            backgroundSize: 'cover',
            padding: { xs: 3, sm: 4, md: 8 },
            borderRadius: 2,
            position: 'relative',
            height: { xs: 'calc(100vh - 56px)', md: 'calc(80vh - 128px)' },
            marginBottom: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <LoadingComponent />
          </Box>

          <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                color: 'black',
                marginBottom: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              What to watch tonight?
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: 'black',
                marginBottom: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              Descubra o filme perfeito em instantes! Deixe de lado a busca
              interminável nas plataformas de streaming e permita que nossas
              recomendações personalizadas combinem com seu humor e gosto.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Link href="/movie" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ marginTop: 4, marginBottom: 2 }}
                  startIcon={<MovieIcon />}
                >
                  Encontrar um filme
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            padding: { xs: 2, sm: 3, md: 8 },
            marginTop: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
          >
            Nossa Intenção
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ marginBottom: 4, fontSize: { xs: '1rem', md: '1.2rem' } }}
          >
            Este projeto é um esforço independente, desenvolvido com o objetivo
            de simplificar a experiência de escolha de filmes. Utilizamos um
            algoritmo de clustering que ainda está em fase de calibração para
            oferecer recomendações cada vez mais precisas. Sua contribuição é
            bem-vinda!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: { xs: 2, sm: 4 },
            }}
          >
            <Link href="https://www.buymeacoffee.com/seu_usuario" passHref>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<MonetizationOnIcon />}
              >
                Apoie nosso trabalho
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{ padding: { xs: 2, sm: 4, md: 8 } }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
          >
            Funcionalidades
          </Typography>
          <Grid container spacing={4}>
            {featuresData.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: { xs: 2, sm: 3 },
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 220,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: 2,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HeroFeaturesPage;
