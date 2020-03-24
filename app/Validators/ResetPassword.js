'use strict'

const Antl = use('Antl')

class ResetPassword {
  get validatorAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password_confirmation: 'required|confirmed'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassword
