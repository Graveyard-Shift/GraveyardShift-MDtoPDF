import argv from './argv'
import { main } from './lib/core'

main(argv)
  .then(() => console.log('CLI resolved'))
  .catch(e => console.error(e))
