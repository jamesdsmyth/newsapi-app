import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsGridArticle from '../components/NewsGridArticle';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import mockApiResponseSuccess from '../mockData/mock-api-success';
import { idCreator } from '../helpers/idCreator';

configure({ adapter: new Adapter() });

describe('<NewsGridArticle />', () => {
  const article = mockApiResponseSuccess.articles[0];
  const category = 'general'
  const index = 0;
  const articleId = idCreator(article.title);
  
  const wrapper = shallow(
    <NewsGridArticle 
      article={article} 
      category={category} 
      index={index} 
    />
  ); 
  
  it('should render the NewsGridArticle', () => {
    expect(wrapper.find('NewsGridArticle')).toBeDefined();
  });

  it('should have the correct wrapping class', () => {
    expect(wrapper.find('.article')).toBeDefined();
  });

  it('should have the correct wrapping index class', () => {
    expect(wrapper.find(`.article--${index}`)).toBeDefined();
  });

  it('should render an <img />', () => {
    expect(wrapper.find('img.article__article-image')).toBeDefined();
  });

  it('should render the <Img /> with the correct image', () => {
    expect(wrapper.find('img.article__article-image').props().src).toBe(article.urlToImage);
   });

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2')).toBeDefined();
  });

  it('should render <span />', () => {
    expect(wrapper.find('.article__article-source')).toBeDefined();
  });

  it('should render <span /> with text of the passed source', () => {
    expect(wrapper.find('.article__article-source').text()).toEqual(article.source.name);
  });

  it('should render a <Link />', () => {
    expect(wrapper.find('Link')).toBeDefined();
  });
  
  it('should render the <Link /> with the correct href', () => {
    expect(wrapper.find('Link').props().to).toBe(`${category}/${articleId}`);
  });

  it('should render the <Link /> with the correct class', () => {
    expect(wrapper.find('Link').props().className).toBe('article__article-heading-link');
  });

  it('renders <NewsGridArticle /> and matches the snapshot', () => {
    const component = renderer.create(
      <Router>
        <NewsGridArticle 
          article={article} 
          category={category} 
          index={index} 
        />
      </Router>
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should simulate the click event and expect an anonymous function', () => {
    const mockCallBack = sinon.spy();
    
    wrapper.find('Link').simulate('click');
    expect(mockCallBack).toEqual(expect.any(Function));
  });
});