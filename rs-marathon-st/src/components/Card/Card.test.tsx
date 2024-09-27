import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Card, { Props } from './index';

describe('Card', () => {
  const props: Props = {
    img: 'https://example.com/image.jpg',
    title: 'Example Card',
    price: 10.99,
  };
  it('renders the card with the correct props', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByAltText, getByText } = render(<Card {...props} />);
    const img = getByAltText('');
    const title = getByText(props.title);
    const price = getByText(`${props.price}$`);
    expect(img.src).toBe(props.img);
    expect(title).toBeVisible();
    expect(price).toBeVisible();
  });
});
