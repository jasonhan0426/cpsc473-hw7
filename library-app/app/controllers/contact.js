import Ember from 'ember';
import Controller from '@ember/controller';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isLength: Ember.computed.gte('message.length', 5),
  isDisable: Ember.computed.and('isValid', 'isLength'),
  isDisabled: Ember.computed.not('isDisable'),

  actions: {

    saveMessage() {
      alert(`Saving of the following email address is in progress:\nEmail: ${this.get('emailAddress')}\nMessage: ${this.get('message')}`);

      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
