import studio from '@sanity/eslint-config-studio'

export default [
  ...studio,
  {
    ignores: ['dist', 'node_modules', 'package.config.ts']
  }
]
