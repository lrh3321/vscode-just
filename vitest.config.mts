import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
        exclude: [
            ...configDefaults.exclude,
            'out/**',
            // 'src/*/*.spec.ts',
            'src/test/**',
            // 'node_modules/**'
        ],
        // ...
    },
})