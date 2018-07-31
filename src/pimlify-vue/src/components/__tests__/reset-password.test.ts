import Vue from 'vue';
import ResetPasswordComponent from '../reset-password-component';
import ResetPassword from '../ResetPassword.vue';

import { mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

Vue.config.silent = true;

Vue.use(Vuetify);

describe('ResetPassword', () => {
  let component: Wrapper<ResetPasswordComponent>;

  beforeEach(() => {
    component = mount<ResetPasswordComponent>(ResetPassword);
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
