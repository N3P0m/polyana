module.exports = {
    env: {
        browser: true,
        es2023: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'no-tabs': 'error'
    }
}
