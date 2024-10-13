import { stdout } from 'node:process'

export const prompt = () => {
  stdout.write('> ')
}
