import markdownpdf from 'markdown-pdf'
import fs from 'fs'
import { Argv } from '../argv'
import { join } from 'path'
import GYSLogo from './gys-logo'

export function main(argv: Argv): Promise<void> {
  return new Promise((resolve) => {
    markdownpdf({
      paperFormat: argv.format,
      remarkable: { html: true }
    })
      .from.string(attachLogo(fetchMarkdown(argv)))
      .to(argv.dest, resolve)
  })
}

function fetchMarkdown(argv: Argv): string {
  const file = fs.readFileSync(join(process.cwd(), argv.src))
  return file.toString()
}

function attachLogo(file: string): string {
  return `<div align="center">${GYSLogo}</div>\n\n` + file
}
