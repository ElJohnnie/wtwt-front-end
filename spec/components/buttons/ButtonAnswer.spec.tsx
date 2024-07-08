import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonAnswer from '../../../components/buttons/ButtonAnswer';

describe('ButtonAnswer', () => {
  it('deve chamar a função de retorno de chamada quando fornecida', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(
      <ButtonAnswer text="Test Button" callback={mockCallback} />,
    );
    const button = getByRole('button', { name: 'Test Button' });

    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();
  });
});
