import isUrl from 'is-url'
import { readFileSync } from 'fs'
import axios from 'axios'

export default async (path: string) => {
  if (isUrl(path)) {
    return (await axios.get(path)).data
  }
  return readFileSync(path).toJSON()
}
