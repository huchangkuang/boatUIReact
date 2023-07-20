import 'jsdom-global/register';
import renderer from "react-test-renderer";
import Icon from "../../icon/icon";
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";

configure({adapter: new Adapter()});
describe('icon', () => {
  it('should be svg', function () {
    const component = renderer.create(<Icon name='share' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can click', function () {
    const fn = jest.fn()
    const wrapper = shallow(<Icon name='share' onClick={fn} />);
    const icon = wrapper.find('.boat-icon')
    icon.simulate('click')
    expect(fn).toBeCalled()
  });
})