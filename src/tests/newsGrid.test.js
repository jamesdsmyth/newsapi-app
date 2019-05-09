import React from 'react';
import { shallow, configure } from 'enzyme';

import NewsGrid from '../components/NewsGrid';
import Adapter from 'enzyme-adapter-react-16';

import mockApiResponseSuccess from '../mockData/mock-api-success';

configure({ adapter: new Adapter() });

describe('<NewsGrid /> in the main body', () => {
  const wrapper = shallow(<NewsGrid articles={mockApiResponseSuccess.articles} category="general" />); 
    
  it('should render the NewsGrid', () => {
    expect(wrapper.find('.news-grid')).toBeDefined();
  });

  it('expects NewsGridArticle count to match what was passed in props', () => {   
    expect(wrapper.find('NewsGridArticle')).toHaveLength(mockApiResponseSuccess.articles.length);
  });
});