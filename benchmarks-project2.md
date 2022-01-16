- 1.255 source code files
- 44 specified dependencies

# Yarn Berry

## pnpm

### File Size

292K    yarn.lock
156M    node_modules
34M    .yarn

### UC1

- 20.8322s
- 20.4486s
- 19.0092s

### UC2

- 12.9218s
- 14.3569s
- 17.5145s

### UC3

- 5.8696s
- 6.2614s
- 5.9519s

## node-mocules

### File Size

292K    yarn.lock
164M    node_modules
34M .cache

### UC1

- 24.2449s
- 24.0995s
- 22.5399s

### UC2

- 16.1857s
- 14.9761s
- 14.2139s

### UC3

- 7.9423s
- 8.4317s
- 8.1907s

## PnP strict

### File Size

38M    .yarn
1.0M    .pnp.cjs
8.0K    .pnp.loader.mjs
292K    yarn.lock

### UC1

`$ rm yarn.lock && yarn cache clean && yarn cache clean --mirror && rm .pnp* && yarn | gnomon`

`./cleanup-berry-pnp.sh && yarn | gnomon`

- 5.9233s
- 6.7198s
- 6.6843

### UC2

`rm .pnp* && rm yarn.lock && yarn | gnomon`

- 5.4948s
- 4.7269s
- 6.6931s

### UC3

`rm .pnp* && yarn | gnomon`

- 0.8112s
- 0.7807s
- 0.7919s

## PnP loose

### File Size

38M    .yarn
292K    yarn.lock
1.1M    .pnp.cjs
8.0K    .pnp.loader.mjs

### UC1

- 14.1635s
- 13.5612s
- 14.0463s

### UC2

- 7.3345s
- 6.2186s
- 7.7293s

### UC3

- 0.9951s
- 0.9121s
- 0.9100s

# Yarn 1

- v1.23.0-20211220.1904

### File Size

268K    yarn.lock
159M    node_modules

## UC1

yarn cache clean && rm yarn.lock && rm -rf node_modules && yarn | gnomon

- 43.2036s
- 42.8606s
- 43.7269s

## UC2

- 37.3071s
- 31.2893s
- 32.3615s

## UC3

- 13.3485s
- 13.4895s
- 20.0895s

# npm

- v8.1.2

### File Size

151M    node_modules
684K    package-lock.json

## UC1

- 32.1364s
- 37.4098s
- 35.1977s

## UC2

- 8.1740s
- 7.7541s
- 7.8402s

## UC3

- 4.7074s
- 5.4280s
- 5.1553s

# pnpm

- v6.25.1

### File Size

141M    node_modules
212K    pnpm-lock.yaml

## UC1

- 14.9319s
- 15.3266s
- 16.5698s

## UC2

- 8.3493s
- 9.3164s
- 8.9371s

## UC3

- 4.4729s
- 4.4334s
- 5.3129s
