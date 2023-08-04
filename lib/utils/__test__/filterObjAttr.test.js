import {filterObjAttr} from "../filterObjAttr";

describe('filterObjAttr', () => {
  it('接收一个对象', function () {
    const a = {
      b: 0,
      c: '',
      d: undefined,
      e: false,
      f: null,
      g: () => {},
      h: {}
    }
    const res = filterObjAttr(a)
    expect(JSON.stringify(res)).toBe(JSON.stringify({
      b: 0,
      c: '',
      e: false,
      f: null,
      g: () => {},
      h: {}
    }))
  });
  it('深度过滤对象', function () {
    const a = {
      b: 2,
      c: 'sdfg',
      d: undefined,
      h: {
        e: 'werwt',
        f: undefined,
        g: 235
      }
    }
    const res = filterObjAttr(a, true)
    expect(JSON.stringify(res)).toBe(JSON.stringify({
      b: 2,
      c: 'sdfg',
      h: {
        e: 'werwt',
        g: 235
      }
    }))
  });
  it('接收无效值', function () {
    const a = null
    const res = filterObjAttr(a)
    expect(JSON.stringify(res)).toBe(JSON.stringify({}))
  });
})