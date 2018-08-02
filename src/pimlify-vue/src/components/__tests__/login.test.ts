import { config, createLocalVue, RouterLinkStub, shallowMount, Wrapper, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from '../../../node_modules/vuetify';
import LoginComponent from '../login-component';
import Login from '../Login.vue';

config.silent = false;

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VueRouter);

describe('Login', () => {
  let component: Wrapper<LoginComponent>;

  beforeEach(() => {
    component = mount<LoginComponent>(Login, {
      localVue,
      stubs: {
        'router-link': RouterLinkStub,
        'router-view': {
          render: h => h('div')
        }
      }
    });
  });

  it('email should be invalid', () => {
    component.find('input').setValue('test');
    expect(component.vm.valid).toBeFalsy();
  });

  it('email should be valid', () => {
    component.find('input').setValue('test@test.com');
    expect(component.vm.valid).toBeTruthy();
  });
});
