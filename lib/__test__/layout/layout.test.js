import 'jsdom-global/register';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import {configure} from "enzyme";
import Layout from "../../layout/layout";
import Header from "../../layout/header";
import Content from "../../layout/content";
import Footer from "../../layout/footer";
import React from "react";

configure({adapter: new Adapter()});
describe('layout', () => {
  it('should be div', function () {
    const component = <Layout style={{height: 500, width: 400}}>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
})