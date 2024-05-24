import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonAnswer from '../../../components/buttons/ButtonAnswer';

describe('ButtonAnswer', () => {
  it('deve alterar o estado isSelected quando o botão é clicado', () => {
    const { getByRole } = render(<ButtonAnswer text="Test Button" />);
    const button = getByRole('button', { name: 'Test Button' });

    fireEvent.click(button);

    expect(button.className).toContain('bg-pink-400');
  });

  it('deve chamar a função de retorno de chamada quando fornecida', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(
      <ButtonAnswer text="Test Button" callback={mockCallback} />,
    );
    const button = getByRole('button', { name: 'Test Button' });

    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();
  });

  it('deve alternar entre as classes de acordo com o estado isSelected', () => {
    const { getByRole } = render(<ButtonAnswer text="Test Button" />);
    const button = getByRole('button', { name: 'Test Button' });

    fireEvent.click(button);
    expect(button.className).toContain('bg-pink-400');

    fireEvent.click(button);
    expect(button.className).toContain('bg-pink-600');
  });
});
