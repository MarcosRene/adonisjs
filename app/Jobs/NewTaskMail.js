'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

class NewTaskMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewTaskMail-job'
  }

  async handle ({ email, username, title, file }) {
    console.log(`Job ${NewTaskMail.key}`)

    await Mail.send(
      ['emails.new_task'],
      { username, title, hasAttachment: !!file },
      message => {
        message
          .to(email)
          .from('renemoura789@gmail.com' | 'Renê | Legatus Digital')
          .subject('Nova tarefa para você')

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            fileName: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail
