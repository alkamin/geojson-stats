export type TurfAreaUnits =
  | 'meters'
  | 'millimeters'
  | 'centimeters'
  | 'kilometers'
  | 'acres'
  | 'miles'
  | 'nauticalmiles'
  | 'inches'
  | 'yards'
  | 'feet'
  | 'radians'
  | 'degrees'

export const mapping: { [u: string]: TurfAreaUnits } = {
  km: 'kilometers',
  kilometers: 'kilometers',
  kilometres: 'kilometers',
  m: 'meters',
  meters: 'meters',
  metres: 'meters',
  cm: 'centimeters',
  centimeters: 'centimeters',
  centimetres: 'centimeters',
  mm: 'millimeters',
  millimeters: 'millimeters',
  millimetres: 'millimeters',
  ft: 'feet',
  feet: 'feet',
  in: 'inches',
  inches: 'inches',
  acres: 'acres',
  miles: 'miles',
  yards: 'yards',
}

export const allUnits = Object.keys(mapping)

export const normalize = (someUnit: string): TurfAreaUnits | null =>
  mapping[someUnit] || null
