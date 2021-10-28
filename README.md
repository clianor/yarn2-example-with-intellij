# yarn2 with CRA

## `Create project`

npx create-react-app yarn2-cra-example --template typescript

## `Setting yarn2`

yarn set version berry

## `Setting typescript plugin`

yarn plugin import typescript

## `Edit .yarnrc.yml`

yarn install 이후
.yarnrc.yml 파일을 열어 `nodeLinker: node-modules` 제거

## `Delete node_modules`

rm -rf node_modules

## `Install dependency`

yarn install

## `Start project`

yarn run start

## `Setting eslint & prettier`

yarn add -D eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-config-react-app eslint-import-resolver-typescript eslint-loader eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-import-resolver-node @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier prettier-eslint prettier-eslint-cli eslint-plugin-prettier

## `Intellij restart`

Intellij를 재시작합니다