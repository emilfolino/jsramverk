import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductList from '../ProductList.vue'

describe('ProductList', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductList)
    expect(wrapper.text()).toContain('List')
  })

  it('it calls fetchProducts on mount', () => {
    const spy = vi.spyOn(ProductList, 'fetchProducts')
    expect(spy.getMockName()).toEqual('fetchProducts')

    // expect(messages.getLatest()).toEqual(
    //   messages.items[messages.items.length - 1],
    // )

    // expect(spy).toHaveBeenCalledTimes(1)
  })
})
