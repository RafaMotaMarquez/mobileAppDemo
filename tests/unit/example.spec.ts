import { mount } from '@vue/test-utils'
import TabUserList from '@/views/TabUserList.vue'

describe('TabUserList.vue', () => {
  it('renders tab 1 TabUserList', () => {
    const wrapper = mount(TabUserList)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
