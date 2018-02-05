import React from 'react';
import {shallow,mount} from 'enzyme';
import ReactDOM from 'react-dom';
import Name from './name'
import App from './App';
import Hello from './Hello'
import {MemoryRouter} from 'react-router-dom';
import  Routes from './route';

// describe('<App/>',()=>{
//   it('renders div',()=>{
//     const editor=shallow(<App/>);
//     expect(editor.find('div.App').length).toEqual(1)
//   });

//   it('function test',()=>{
//     const editor = shallow(<App/>);
//     var op = editor.find('#testButton');
//     op.simulate('click');
//     expect(editor.state().test).toEqual(false)
//   })
// });
describe("<Routes/>",()=>{
  const wrapper=mount(<Routes/>);
  it("Routes testing",()=>{
    expect(wrapper.contains(Hello)).toBe(true);
  })
})
