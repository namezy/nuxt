// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt([
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": "off",
      "vue/attributes-order": "off",
      "vue/attribute-hyphenation": "off",
    },
  },
])
