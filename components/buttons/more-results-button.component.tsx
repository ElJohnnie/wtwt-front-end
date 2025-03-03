import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

interface MoreResultsButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const MoreResultsButton: React.FC<MoreResultsButtonProps> = ({
  onClick,
  isLoading,
}) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Carregando...' : 'Mais Resultados'}
    </StyledButton>
  );
};

export default MoreResultsButton;
