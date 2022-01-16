- 1.423 source code files
- 33 specified dependencies

## yarn 1

- yarn version 1.23.0-20211220.1904
- command   $yarn | gnomon

### Clear cache

$ yarn cache clean

### UC1

$ yarn cache clean && rm -rf node_modules && rm yarn.lock && yarn | gnomon

- 108.6169s
- 110.1785s
- 107.8934s

### UC2

- 69.4359s
- 62.3791s
- 64.6788s

### UC3

- 45.4831s
- 36.9970s
- 38.5882s

### File Size

- same for all runs
- node_modules 397M
- yarn.lock 504K

### Observation

- Startzeit sehr viel länger als bei yarn berry (auch anderen)?
- wie messen?

## yarn berry (pnp strict)

- yarn berry version 3.1.1

```
# https://yarnpkg.com/cli/cache/clean
# delete project cache and global cache (~/.yarn/cache)
$ yarn cache clean && yarn cache clean --mirror

# delete "node_modules" -> .pnp.cjs
$ rm .pnp.cjs

# delete and recreate yarn.lock
$ rm yarn.lock && touch yarn.lock

```

```
packageExtensions:
 'babel-preset-react-app@*':
  dependencies:
   '@babel/plugin-proposal-private-property-in-object': '*'
 '@sam/sam-react-components-lib@*':
  dependencies:
   '@babel/runtime': '*'
 '@rushstack/eslint-patch@*':
  dependencies:
   '@eslint/eslintrc': '*'
 'eslint-config-react-app@*':
  dependencies:
   '@eslint/eslintrc': '*'
```

### UC1

1) 29.2848s
2) 31.0318s
3) 30.0901s

### UC2

- 12.3476s
- 13.0817s
- 12.5561s

### UC3

- 1.3995s
- 1.3348s
- 1.3487s

### File Size

- 115M project
- 540K yarn.lock
- .yarn/cache 68M
- .yarn/unplugged 29M
- .pnp.cjs 1,5M

### Observation

- node_modules/.cache/babel-loader and .yarn/.cache is generated on startup (compile phase)
  - ... seems to be [normal behaviour](https://github.com/storybookjs/storybook/issues/11113#issuecomment-642871123)

## yarn berry (pnp loose)

### UC1

- 34.0264s
- 31.3580s
- 29.9478s

### UC2

- 12.6186s
- 11.8703s
- 12.8977s

### UC3

- 1.7254s
- 1.5459s
- 1.5665s

### File Size

- 115M project
- 540K yarn.lock
- .yarn/cache 68M
- .yarn/unplugged 29M
- .pnp.cjs 1,6M **<-- einziger kleiner Unterschied**

## yarn berry (node_modules)

### File Size

- node_modules395M
- yarn.lock 540K
- .yarn/cache 68M

### UC1

rm -rf node_modules && rm yarn.lock && yarn cache clean && yarn cache clean --mirror && yarn | gnomon

- 56.0046s
- 52.6163s
- 51.6852s
- 66.2888s

### UC2

rm -rf node_modules && rm yarn.lock && yarn | gnomon

- 48.7874s
- 45.5869s
- 44.7314s

### UC3

- 26.5170s
- 32.4238s
- 27.2456s

### Observation

## yarn berry (pnpm)

### File Size

- .yarn/cache 68M
- nod_modules 374M
- yarn.lock540K

### UC1

- 78.6554s
- 51.9378s
- 52.1547s

### UC2

- 40.9815s
- 34.5380s
- 46.7013s

### UC3

- 31.9513s
- 31.9882s
- 31.7359s

## pnpm

- v6.24.4

### File Size

- 412K pnpm-lock.yaml
- 319  node_modules

### UC1

`npm cache clean --force && rm -rf ~/.pnpm-store && rm -rf node_modules && rm pnpm-lock.yaml && pnpm i | gnomon`

- 40.0023s
- 45.4781s
- 45.272

### UC2

`rm -rf node_modules && rm pnpm-lock.yaml && pnpm i | gnomon`

- 27.0083s
- 27.0572s
- 25.2419s

### UC3

- 21.1976s
- 20.1745s
- 19.5995s

-

## npm

### File Size

- package-lock.json 1.3M
- node_modules 469M / 467M / 466M

### UC1

```
npm cache clean --force && rm -rf node_modules && rm package-lock.json && npm i | gnomon
```

- 97.9933s
- 74.5881s
- 87.3182s

### UC2

```
rm -rf node_modules && rm package-lock.json && npm i | gnomon
```

- 30.7384s
- 64.2306s
- 29.6794s

### UC3

- 23.2872s
- 22.3681s
- 25.1258s
