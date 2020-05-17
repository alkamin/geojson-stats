import { Command, flags } from '@oclif/command'

export default class Area extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    imperial: flags.boolean({ char: 'i' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Area)

    if (args.file) {
      this.log(`you input --force and --file: ${args.file}`)
    } else {
      this.error('no file path or url provided')
    }
  }
}
