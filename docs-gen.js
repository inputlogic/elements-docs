#!/usr/bin/env node

const { resolve } = require('path')
const { readdir, readFile, writeFile } = require('fs')

const DIR = resolve('../', 'elements', 'components')

const SKIP_RE = [
  /^\./,
  /^connect$/,
  /^with-/,
  /^use-/
]

const capFirst = str => str[0].toUpperCase() + str.slice(1)

const getComponentName = (packageName) => {
  const parts = packageName.split('/')
  return parts[parts.length - 1].split('-').map(capFirst).join('')
}

readdir(DIR, (err, files) => {
  if (err) {
    console.error(err.stack)
    process.exit(1)
  } else {
    const entries = []
    const out = () => {
      const file = resolve('src', 'components.js')
      writeFile(file, 'export const components = ' + JSON.stringify(entries, null, 2) + '\n', (err) => {
        if (err) throw err
        console.log('built docs data')
        process.exit(0)
      })
    }
    const components = files
      .filter(name => !SKIP_RE.some(re => re.test(name)))
      .sort()
    const max = components.length - 1
    components.map((name, idx) => {
      const file = resolve(DIR, name, 'package.json')
      const pkg = require(file)
      readFile(resolve(DIR, name, 'README.md'), 'utf8', (err, docs) => {
        if (err) throw err
        entries.push({
          name: pkg.name,
          component: getComponentName(pkg.name),
          description: pkg.description,
          version: pkg.version,
          docs
        })
        if (idx === max) out()
      })
    })
  }
})
