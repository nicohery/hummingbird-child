# Contributing

Thanks for your interest in improving **Hummingbird Child** 🪶

This is a small, intentionally minimal starter — contributions that keep it **lean and readable** are the most welcome.

## Ways to contribute

- 🐛 **Bug or question** → open an [issue](https://github.com/nicohery/hummingbird-child/issues).
- ✨ **Improvement** → fork, branch off `develop`, and open a Pull Request.

## Development

See the [README](README.md) for the wrapper-theme architecture. In short, from the theme root:

```bash
npm ci
npm run build      # or: npm run watch
```

The theme must live in `themes/`, next to the `hummingbird` parent.

## Guidelines

- **Keep it minimal** — this is a starter, not a full theme. Prefer small, focused changes over broad ones.
- Match the existing code style; avoid adding dependencies without a clear reason.
- Keep `src/js/theme.ts` diff-able against the parent Hummingbird `theme.ts` (same import aliases, same order).
- Use clear [Conventional Commits](https://www.conventionalcommits.org/) messages (`feat:`, `fix:`, `docs:`…).
- Target the **`develop`** branch for PRs; **`main`** stays stable.

By contributing, you agree that your contributions are licensed under the [AFL-3.0](LICENSE.md).
