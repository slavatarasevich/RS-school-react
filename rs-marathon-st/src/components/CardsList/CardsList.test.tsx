import { describe, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import CardList, { CardsListProps } from './index';

describe('CardList', () => {
  const props: CardsListProps = {
    data: [
      {
        id: 1,
        img: 'https://example.com/image1.jpg',
        title: 'Example Card 1',
        price: 10.99,
      },
      {
        id: 2,
        img: 'https://example.com/image2.jpg',
        title: 'Example Card 2',
        price: 15.99,
      },
    ],
  };

  it('renders the correct number of cards', () => {
    const { container } = render(<CardList {...props} />);
    const cards = container.querySelectorAll('.card-container');

    expect(cards).toHaveLength(props.data.length);
  });

  it('renders a Card component for each data item', () => {
    const { container } = render(<CardList {...props} />);
    const cards = container.querySelectorAll('.card-container');

    expect(cards).toHaveLength(props.data.length);

    cards.forEach((card, index) => {
      const cardProps = props.data[index];
      const HTMLImageElement = card.querySelector('img');
      const titleElement = card.querySelector('h3');
      const priceElement = card.querySelector('span');

      expect(HTMLImageElement).toHaveAttribute('src', cardProps.img);
      expect(titleElement).toHaveTextContent(cardProps.title);
      expect(priceElement).toHaveTextContent(`${cardProps.price}$`);
    });
  });
});
