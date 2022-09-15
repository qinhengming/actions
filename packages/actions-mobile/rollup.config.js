import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import ts from 'rollup-plugin-typescript2'
import json from "@rollup/plugin-json"
import pkg from './package.json'
const getPath = _path => path.resolve(__dirname, _path)
import packageJSON from './package.json'


const extensions = [
  '.js',
  '.ts',
  '.tsx'
]


// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions
})


// 基础配置
const commonConf = {
  input: getPath('./lib/index.ts'),
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    // 配置参考这里 https://github.com/rollup/rollup-plugin-node-resolve
    resolve({ extensions: extensions, preferBuiltins: true }),
    commonjs(),
    tsPlugin,
    json()
  ]
}
// 需要导出的模块类型
const outputMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'umd',
    exports: 'named',
    sourcemap: true
  },
  {
    file: packageJSON.module, // es6模块
    format: 'es',
    exports: 'named'
  }
]


const buildConf = options => Object.assign({}, commonConf, options)


export default outputMap.map(output => buildConf({ output: { name: packageJSON.name, ...output } }))