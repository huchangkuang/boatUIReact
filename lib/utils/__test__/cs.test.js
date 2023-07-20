import {describe, expect, test} from '@jest/globals';
import cs from '../cs'

describe('cs Function', () => {
    it('接收1个className', () => {
        const res = cs('a')
        expect(res).toEqual('a')
    })
    it('接收2个className', () => {
        const res = cs('a', 'b')
        expect(res).toEqual('a b')
    })
    it('接收undefined 结果没有undefined', () => {
        const res = cs('a', undefined)
        expect(res).toEqual('a')
    })
    it('接收特殊值', () => {
        const res = cs('a', undefined, false, null, 0, 1)
        expect(res).toEqual('a 1')
    })
    it('不接收参数', () => {
        const res = cs()
        expect(res).toEqual('')
    })
})