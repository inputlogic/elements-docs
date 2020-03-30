#!/usr/bin/env node

const { resolve } = require('path')
const { readdir, readFile, writeFile } = require('fs')

const DIR = resolve('../', 'elements', 'components')

console.log(DIR)

readdir(DIR, (err, files) => {
  if (err) {
    console.error(err.stack)
    process.exit(1)
  } else {
    const entries = []
    const out = () => {
      const file = resolve('src', 'components.json')
      writeFile(file, JSON.stringify(entries, null, 2) + '\n', (err) => {
        if (err) throw err
        console.log('built docs data')
        process.exit(0)
      })
    }
    const components = files.filter(name => name[0] !== '.')
    const max = components.length - 1
    components.map((name, idx) => {
      const file = resolve(DIR, name, 'package.json')
      const pkg = require(file)
      readFile(resolve(DIR, name, 'README.md'), 'utf8', (err, docs) => {
        entries.push({
          name: pkg.name,
          description: pkg.description,
          version: pkg.version,
          docs
        })
        if (idx === max) out()
      })
    })
  }
})

