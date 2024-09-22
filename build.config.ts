import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      input: 'src/index.ts',
      outDir: 'dist',
      format: 'cjs',
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
