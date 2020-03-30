import W from 'wasmuth'

const environments = {
  test: 'localhost:5001',
  development: [
    'localhost:3000'
  ],
  staging: ['elements-docs-dev.herokuapp.com'],
  production: ['elements-docs.herokuapp.com']
}

export const environment = (() => {
  try {
    const host = window.location.host
    const current = W.find(
      (env) => W.toType(environments[env]) === 'array'
        ? W.some(v => v === host, environments[env])
        : environments[env] === host,
      Object.keys(environments)
    )
    if (!current) {
      throw new Error('No environment matching current url')
    }
    return current
  } catch (_) {
    return process.env.NODE_ENV || 'development'
  }
})()
