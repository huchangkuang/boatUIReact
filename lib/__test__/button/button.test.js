import 'jsdom-global/register';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";
import Button from "../../button/button";

configure({adapter: new Adapter()});
describe('icon', () => {
  it('should be div', function () {
    const component = renderer.create(<Button name='share' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can click', function () {
    const fn = jest.fn()
    const wrapper = shallow(<Button name='share' onClick={fn} />);
    const icon = wrapper.find('.boat-button')
    icon.simulate('click')
    expect(fn).toBeCalled()
  });
})