import 'jsdom-global/register';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";
import {Button, Icon} from "../index";

configure({adapter: new Adapter()});
describe('icon', () => {
  it('should be svg', function () {
    const component = renderer.create(<Icon name='share' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should be div', function () {
    const component = renderer.create(<Button />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})