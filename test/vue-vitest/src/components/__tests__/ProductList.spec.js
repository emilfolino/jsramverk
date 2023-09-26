import { describe, it, expect } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'
import ProductList from '../ProductList.vue'

describe('ProductList', () => {

  it('renders properly', () => {
    const wrapper = mount(ProductList)
    expect(wrapper.text()).toContain('List')
  })

  it('list contains iPhone 15', async () => {
    const wrapper = mount(ProductList)

    await flushPromises();

    expect(wrapper.text()).toContain('iPhone 15')
  })
})
