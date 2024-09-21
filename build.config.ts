import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      input: 'src/index.ts',
      outDir: 'dist',
      format: 'esm',
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
