import { Command, flags } from '@oclif/command'
import { allUnits, normalize } from '../units'
import length from '@turf/length'
import { convertLength } from '@turf/helpers'
import readJson from '../util/read-json'

export default class Perimeter extends Command {
  static description = 'calculates the total perimeter for some GeoJSON'

  static flags = {
    help: flags.help({ char: 'h' }),
    noUnits: flags.boolean({
      char: 'n',
      description: "don't display the units on output",
    }),
  }

  static args = [
    { name: 'file', description: 'a file path or URL to some GeoJSON' },
    {
      name: 'units',
      description: 'the desired output units of the computation',
      options: allUnits,
      default: 'm',
    },
  ]

  async run() {
    const {
      args: { file, units },
      flags: { noUnits },
    } = this.parse(Perimeter)

    const safeUnits = normalize(units)

    if (file) {
      if (safeUnits) {
        const geojson = await readJson(file)
        const computedLength = length(geojson)
        const convertedLength = convertLength(
          computedLength,
          'kilometers',
          safeUnits,
        )
        noUnits
          ? this.log(convertedLength.toString())
          : this.log(`${convertedLength} ${units}`)
      } else {
        this.error(`"${units}" is not a valid unit`)
      }
    } else {
      this.error('no file path or url provided')
    }
  }
}
