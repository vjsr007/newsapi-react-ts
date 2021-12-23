import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import News from './index';
import { dummyEveryThing } from '../../mock/NewsDummyData'
import { act } from 'react-dom/test-utils';

const mockJsonPromise = Promise.resolve({ json: () => Promise.resolve(dummyEveryThing), ok: true })
global.fetch = jest.fn().mockImplementation(() => mockJsonPromise)

describe('News', () => {
  beforeEach(async () => {
    await act(async () => {
      await render(<News />)
    })
  })

  it('should render News API title', () => {
    const title = screen.getAllByTestId('title')
    expect(title[0].textContent).toBe('News API')
  })

  it('should render 7 mock articles',async () => {
    await waitFor(() => {
      const articles = screen.getAllByTestId('article')
      expect(articles.length).toBe(7)
    })
  })
})
