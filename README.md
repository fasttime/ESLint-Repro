# `@eslint/mcp` &amp; `jiti` Repro for `pnpm`

1. Run `pnpm install` to install dependencies.  
1. Open the repository in an IDE such as VSCode, Cursor, or Windsurf.  
1. Start the MCP server in the IDE (refer to the IDE’s documentation).  
1. Ask the AI coding agent to lint `index.js` using ESLint.

The MCP server should run successfully and it should report a violation of the `no-console` rule.
