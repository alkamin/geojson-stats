import { Command, flags } from '@oclif/command'
import { convertArea } from '@turf/helpers'
import area from '@turf/area'

import { allUnits, normalize } from '../units'
import readJson from '../util/read-json'

export default class Area extends Command {
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
    } = this.parse(Area)

    const safeUnits = normalize(units)

    if (!file) {
      this.error('no file path or url provided')
      return
    }
    if (!safeUnits) {
      this.error(`"${units}" is not a valid unit`)
      return
    }

    const geojson = await readJson(file)
    const computedArea = area(geojson)
    const convertedArea = convertArea(computedArea, 'meters', safeUnits)
    noUnits
      ? this.log(convertedArea.toString())
      : this.log(`${convertedArea} ${units}`)
  }
}
