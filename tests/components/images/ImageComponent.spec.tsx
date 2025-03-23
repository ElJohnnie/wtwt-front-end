import React from 'react';
import ImageComponent from '../../../components/images/image.component';
import { renderWithOutContextProvider } from '../../../utils/tests/helpers';

describe('ImageComponent', () => {
  it('quero que minha imagem renderize sem problemas', () => {
    const { container } = renderWithOutContextProvider(
      <ImageComponent
        href="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        title="Clube da Luta"
        description="Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler."
        rating={4}
      />,
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
