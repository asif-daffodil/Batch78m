// rollup.config.js
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { module, main, unpkg, main_umd, unpkg_umd } from './package.json';

const name = 'jquery_counto';

export default {
    input: module,
    plugins: [
        babel() // convert to ES5
    ],
    output: [
        {
            file: main_umd,
            name: name,
            format: 'umd',
            sourcemap: true,
        },
        {
            file: unpkg_umd,
            name: name,
            format: 'umd',
            sourcemap: true,
            plugins: [
                terser(), // minify JS/ES
            ],
        },
        {
            file: main,
            // name: name,
            format: 'iife',
            sourcemap: true,
        },
        {
            file: unpkg,
            // name: name,
            format: 'iife',
            sourcemap: true,
            plugins: [
                terser(), // minify JS/ES
            ],
        },
    ]
};
