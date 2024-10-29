import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('Componente HomeView', () => {
  test('Validación de match con snapshot', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})