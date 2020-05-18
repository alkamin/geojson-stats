# geojson-stats

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/geojson-stats.svg)](https://npmjs.org/package/geojson-stats)
[![Downloads/week](https://img.shields.io/npm/dw/geojson-stats.svg)](https://npmjs.org/package/geojson-stats)
[![License](https://img.shields.io/npm/l/geojson-stats.svg)](https://github.com/alkamin/geojson-stats/blob/master/package.json)

<!-- toc -->
* [geojson-stats](#geojson-stats)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g geojson-stat
$ geojson-stats COMMAND
running command...
$ geojson-stats (-v|--version|version)
geojson-stat/1.0.1 darwin-x64 node-v13.6.0
$ geojson-stats --help [COMMAND]
USAGE
  $ geojson-stats COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`geojson-stats area [FILE] [UNITS]`](#geojson-stats-area-file-units)
* [`geojson-stats help [COMMAND]`](#geojson-stats-help-command)
* [`geojson-stats perimeter [FILE] [UNITS]`](#geojson-stats-perimeter-file-units)

## `geojson-stats area [FILE] [UNITS]`

calculates the total perimeter for some GeoJSON

```
USAGE
  $ geojson-stats area [FILE] [UNITS]

ARGUMENTS
  FILE   a file path or URL to some GeoJSON

  UNITS  (km|kilometers|kilometres|m|meters|metres|cm|centimeters|centimetres|mm|millimeters|millimetres|ft|feet|in|inch
         es|acres|miles|yards) [default: m] the desired output units of the computation

OPTIONS
  -h, --help     show CLI help
  -n, --noUnits  don't display the units on output
```

_See code: [src/commands/area.ts](https://github.com/alkamin/geojson-stats/blob/v1.0.1/src/commands/area.ts)_

## `geojson-stats help [COMMAND]`

display help for geojson-stats

```
USAGE
  $ geojson-stats help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `geojson-stats perimeter [FILE] [UNITS]`

calculates the total perimeter for some GeoJSON

```
USAGE
  $ geojson-stats perimeter [FILE] [UNITS]

ARGUMENTS
  FILE   a file path or URL to some GeoJSON

  UNITS  (km|kilometers|kilometres|m|meters|metres|cm|centimeters|centimetres|mm|millimeters|millimetres|ft|feet|in|inch
         es|acres|miles|yards) [default: m] the desired output units of the computation

OPTIONS
  -h, --help     show CLI help
  -n, --noUnits  don't display the units on output
```

_See code: [src/commands/perimeter.ts](https://github.com/alkamin/geojson-stats/blob/v1.0.1/src/commands/perimeter.ts)_
<!-- commandsstop -->
