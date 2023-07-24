import {scopeClassMaker} from "../scopeClassMaker"

describe('scopeClassMaker', () => {
  const scm = scopeClassMaker('test')
  it('接收一个参数', function () {
    const res = scm('xxx')
    expect(res).toEqual('test-xxx')
  });
  it('不接收参数', function () {
    const res = scm('')
    expect(res).toEqual('test')
  });
})