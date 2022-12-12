import { render, fireEvent } from '@testing-library/react';
import HomeCard from './HomeCard';

describe('HomeCard component', () => {
  it('should be rendered with title and author text with proper text styles', () => {
    const { getByTestId, getByText } = render(
      <HomeCard imageUrl="" title="title" author="author" onClick={() => {}} />,
    );

    const homeCardComponent = getByTestId('homecard-component-title');
    const title = getByText(/TITLE/);
    const author = getByText(/author/);

    expect(homeCardComponent).toBeInTheDocument();
    expect(title.tagName).toBe('P');
    expect(author.tagName).toBe('P');
  });

  it('should trigger onClick function when user clicks on image or text', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<HomeCard imageUrl="" title="" author="" onClick={onClick} />);

    const homeCard = getByTestId('homecard-component-');
    expect(homeCard).toBeInTheDocument();

    const image = homeCard.querySelector('img') as HTMLImageElement;
    const textWrapper = homeCard.querySelector('div') as HTMLDivElement;

    fireEvent.click(image);
    fireEvent.click(textWrapper);

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('should render an image passed as prop', () => {
    const { getByTestId } = render(
      <HomeCard
        imageUrl="https://wallpaperaccess.com/full/317501.jpg"
        title=""
        author=""
        onClick={() => {}}
      />,
    );

    const image = getByTestId('homecard-component-').querySelector('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(`
        border-radius: 50%;
        height: 100px;
        width: 100px;
    `);
  });
});
