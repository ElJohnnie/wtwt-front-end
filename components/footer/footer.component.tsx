import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CoffeeIcon from '@mui/icons-material/EmojiFoodBeverage';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" gutterBottom>
        © {new Date().getFullYear()} What to watch tonight? | Um sistema de
        recomendação de filmes baseado em aprendizado de máquina que agrupa
        filmes por gênero e ano, proporcionando sugestões personalizadas.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Link
          href="https://github.com/usuario/nome-do-projeto"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', marginRight: 2 }}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.buymeacoffee.com/seuUsuario"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <CoffeeIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
