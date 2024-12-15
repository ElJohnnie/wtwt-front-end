import React from 'react';
import { fireEvent } from '@testing-library/react';
import ButtonAnswer from '../../../components/buttons/ButtonAnswer';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

describe('ButtonAnswer', () => {
  it('deve chamar a função de retorno de chamada quando fornecida', () => {
    const mockCallback = jest.fn();
    const { getByRole } = renderWithOutContextProvider(
      <ButtonAnswer text="Test Button" onClick={mockCallback} value="Teste" />,
    );
    const button = getByRole('button', { name: 'Test Button' });

    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();
  });
});
