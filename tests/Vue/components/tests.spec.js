// tests/js/components/AppContainer.spec.js
import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import expect from 'expect';
import VModal from 'vue-js-modal'
import flushPromises from "flush-promises"
import axios from 'axios'
import moxios from 'moxios'
Vue.use(VModal)
import AppContainer from '../../../resources/js/components/AppContainer.vue';
import Login from '../../../resources/js/components/Login.vue';
import Services from '../../../resources/js/components/Services.vue';
import ItemList from '../../../resources/js/components/ItemList.vue';


beforeEach(function () {
  moxios.install()
})

afterEach(function () {
  moxios.uninstall()
})

describe('AppContainer.vue', () => {
  it('finds div id', () => {
    const wrapper = mount(AppContainer);
    expect(wrapper.html()).toContain('div id="app">');
  });
});

describe('Login.vue', () => {
  it('make sure login component renders correctly ', () => {
    const wrapper = mount(Login);
    expect(wrapper.html()).toContain('Enter Your Name');
  });
});

describe('Login.vue', () => {
  it('can type into input ', () => {
    const wrapper = mount(Login);

    let nameInput = wrapper.find('input');
    nameInput.element.value = 'Matt';
    nameInput.trigger('input');

    expect(wrapper.vm.name).toBe('Matt');
  });
});

describe('Services.vue', () => {
  it('check if services renders correctly ', async () => {
    const wrapper = mount(Services, {
      propsData: {
        name: 'Matt'
      }
    })
    moxios.stubRequest('/getCities', {
      status: 200,
      response: {"status":0,"cities":[{"id":1,"name":"Toronto","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","services":[{"id":1,"name":"Shelter","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":1,"services_id":1}},{"id":2,"name":"Food","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":1,"services_id":2}},{"id":3,"name":"Clothing","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":1,"services_id":3}}]},{"id":2,"name":"New York","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","services":[{"id":1,"name":"Shelter","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":2,"services_id":1}},{"id":2,"name":"Food","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":2,"services_id":2}},{"id":3,"name":"Clothing","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":2,"services_id":3}}]},{"id":3,"name":"Vancouver","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","services":[{"id":1,"name":"Shelter","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":3,"services_id":1}},{"id":2,"name":"Food","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":3,"services_id":2}},{"id":3,"name":"Clothing","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":3,"services_id":3}}]}]}
    });
    expect(wrapper.html()).toContain('Welcome Matt');
  });
});

describe('ItemList.vue', () => {
  it('check if ItemList renders correctly ', async () => {
    const wrapper = mount(ItemList, {
      propsData: {
        items: [{"id":1,"name":"Toronto","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","services":[{"id":1,"name":"Shelter","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":1,"services_id":1}},{"id":2,"name":"Food","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":1,"services_id":2}},{"id":3,"name":"Clothing","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":1,"services_id":3}}]},{"id":2,"name":"New York","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","services":[{"id":1,"name":"Shelter","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":2,"services_id":1}},{"id":2,"name":"Food","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":2,"services_id":2}},{"id":3,"name":"Clothing","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":2,"services_id":3}}]},{"id":3,"name":"Vancouver","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","services":[{"id":1,"name":"Shelter","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":3,"services_id":1}},{"id":2,"name":"Food","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":3,"services_id":2}},{"id":3,"name":"Clothing","created_at":"2019-10-24 03:15:40","updated_at":"2019-10-24 03:15:40","pivot":{"cities_id":3,"services_id":3}}]}]
      }
    })
    expect(wrapper.html()).toContain('Toronto');
    expect(wrapper.html()).toContain('New York');
    expect(wrapper.html()).toContain('Vancouver');
  });
});
