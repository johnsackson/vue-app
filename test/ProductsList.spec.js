import { mount } from '@vue/test-utils'
import ProductsList from '../components/ProductsList.vue'

describe('ProductsList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProductsList)
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should test getActiveFilters', () => {
    // Arrange
    wrapper.vm.filterTypes = [
      { name: 'electronics', value: 'electronics', checked: true },
      { name: 'jewelery', value: 'jewelery', checked: true }
    ]

    // Act
    const filtersResult = wrapper.vm.getActiveFilters()

    // Assert
    expect(filtersResult.length).toEqual(2)
  })

  test('should test getFilteredProducts method(scenario 1: test search with non-existent value)', () => {
    // Arrange
    wrapper.vm.products = [
      { 'title': 'test title1', 'category': 'test category', 'price': 110, 'description': 'test description', 'img': '' },
      { 'title': 'test title2', 'category': 'test category', 'price': 110, 'description': 'test description', 'img': '' }
    ]
    wrapper.vm.searchValue = 'abc'

    // Act
    const productsResult = wrapper.vm.getFilteredProducts()

    // Assert
    expect(productsResult.length).toEqual(0)
  })

})
