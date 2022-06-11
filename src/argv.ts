import { PaperFormat } from 'markdown-pdf'
import yargs from 'yargs'

export interface Argv {
  src: string
  dest: string
  format: PaperFormat
}

const argv = yargs
  .option('src', {
    alias: 's',
    type: 'string',
    requiresArg: true,
    describe: 'The source path of the markdown file'
  }).option('dest', {
    alias: 'd',
    type: 'string',
    requiresArg: true,
    describe: 'The destination path of the pdf file'
  }).option('format', {
    alias: 'f',
    type: 'string',
    requiresArg: true,
    describe: 'The format of the PDF. Supported options: A3, A4, A5, Legal, Letter or Tabloid'
  }).argv as Argv

export default argv
