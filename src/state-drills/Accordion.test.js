import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';
import { exportAllDeclaration } from '@babel/types';


describe('Accordion Component', () => {

  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  //  renders an empty li when the sections prop is not supplied
  it('renders an empty li when sections prop is not supplied', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  //  renders no sections as active by default
  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  //  opens a clicked section
  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})




//  opens a clicked section
//  only opens the last section when multiple sections have been clicked.