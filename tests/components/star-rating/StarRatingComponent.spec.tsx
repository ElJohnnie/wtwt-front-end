import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from '../../../components/star-rating/StarRatingComponent';

describe('StarRatingComponent', () => {
  it('renders correctly with a rating of 10', () => {
    const { container } = render(<StarRating rating={10} />);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders 5 stars for a rating of 9', () => {
    const { getAllByText } = render(<StarRating rating={9} />);
    const stars = getAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(5);
  });

  it('renders 4 stars for a rating of 7', () => {
    const { getAllByText } = render(<StarRating rating={7} />);
    const stars = getAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(4);
  });

  it('renders 3 stars for a rating of 5', () => {
    const { getAllByText } = render(<StarRating rating={5} />);
    const stars = getAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(3);
  });

  it('renders 2 stars for a rating of 3', () => {
    const { getAllByText } = render(<StarRating rating={3} />);
    const stars = getAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(2);
  });

  it('renders 1 star for a rating of 1', () => {
    const { getAllByText } = render(<StarRating rating={1} />);
    const stars = getAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(1);
  });

  it('renders 0 stars for a rating of 0', () => {
    const { queryAllByText } = render(<StarRating rating={0} />);
    const stars = queryAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(0);
  });

  it('renders 0 stars for a negative rating', () => {
    const { queryAllByText } = render(<StarRating rating={-1} />);
    const stars = queryAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(0);
  });

  it('renders 5 stars for a rating greater than 10', () => {
    const { getAllByText } = render(<StarRating rating={11} />);
    const stars = getAllByText(
      (content, element) => element?.textContent === '★',
    );
    expect(stars.length).toBe(5);
  });
});
