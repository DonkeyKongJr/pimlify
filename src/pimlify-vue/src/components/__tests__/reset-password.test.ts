import { mount, shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import ResetPasswordComponent from '../reset-password-component';
import ResetPassword from '../ResetPassword.vue';

Vue.config.silent = true;

Vue.use(Vuetify);

describe('ResetPassword', () => {
  let component: Wrapper<ResetPasswordComponent>;
  let shallowComponent: Wrapper<ResetPasswordComponent>;

  beforeEach(() => {
    component = mount<ResetPasswordComponent>(ResetPassword);
    shallowComponent = shallowMount<ResetPasswordComponent>(ResetPassword);
  });

  it('email should be invalid', () => {
    component.find('input').setValue('test');
    expect(component.vm.valid).toBeFalsy();
  });

  it('email should be valid', () => {
    component.find('input').setValue('test@test.com');
    expect(component.vm.valid).toBeTruthy();
  });

  it('reset should not call sendPasswordResetEmail when form is not valid', () => {
    const formMock = {
      validate: () => {
        return false;
      }
    };

    shallowComponent.vm.$refs.form = formMock as any;
    shallowComponent.vm.reset();
  });
});
