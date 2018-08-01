import { config, createLocalVue, RouterLinkStub, shallowMount, Wrapper } from '@vue/test-utils';
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
    component = shallowMount<LoginComponent>(Login, {
      localVue,
      stubs: {
        'router-link': RouterLinkStub,
        'router-view': {
          render: h => h('div')
        }
      }
    });
  });

  it('suite should be working', () => {
    expect(2 + 2).toBe(4);
  });
});
