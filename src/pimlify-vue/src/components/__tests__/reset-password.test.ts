import { mount, shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import ResetPasswordComponent from '../reset-password-component';
import ResetPassword from '../ResetPassword.vue';
import * as firebase from 'firebase';

Vue.config.silent = true;

Vue.use(Vuetify);

describe('ResetPassword', () => {
  let component: Wrapper<ResetPasswordComponent>;
  let shallowComponent: Wrapper<ResetPasswordComponent>;
  const sendPasswordResetEmail = jest.fn(() => Promise.resolve());

  beforeEach(() => {
    component = mount<ResetPasswordComponent>(ResetPassword);
    shallowComponent = shallowMount<ResetPasswordComponent>(ResetPassword);

    const initializeApp = jest.spyOn(firebase, 'initializeApp').mockImplementation(() => {
      return {
        auth: () => {
          return {
            sendPasswordResetEmail
          };
        }
      };
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

  it('reset should call sendPasswordResetEmail when form is valid', () => {
    const formMock = {
      validate: () => {
        return true;
      }
    };

    jest.spyOn(firebase, 'auth').mockImplementation(() => {
      return {
        sendPasswordResetEmail
      };
    });

    shallowComponent.vm.$refs.form = formMock as any;
    shallowComponent.vm.reset();

    expect(firebase.auth().sendPasswordResetEmail).toHaveBeenCalled();
  });
});
