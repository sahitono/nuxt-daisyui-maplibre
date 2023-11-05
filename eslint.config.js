import antfu from "@antfu/eslint-config"

export default antfu(
  {
    stylistic: {
      quotes: "double",
    },
    ignores: [
      "commitlint.config.js",
    ],
  },
)
