import {describe, expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Button from "./Button";

describe('button', () => {
  it('should be div ', () => {
    const component = renderer.create(<Button />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});