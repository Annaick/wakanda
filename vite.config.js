import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig ({
    build:{
        rollupOptions:{
            input:{
                main: resolve (__dirname, 'index.html'),
                enigme: resolve (__dirname, 'enigme.html'),
                wakanda: resolve (__dirname, 'wakanda.html')
            }
        }
    },
})