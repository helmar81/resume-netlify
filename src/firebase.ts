// @ts-nocheck
import firebase from "svelte-adapter-firebase";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: firebase({
      // @ts-ignore
      // @ts-ignore
      esbuildBuildOptions: (defaultOptions: import("vite").BuildOptions) => Promise<BuildOptions> | BuildOptions,
      firebaseJsonPath: "",
      target: "svelte-func-single-site",
      sourceRewriteMatch: "",
    }),
  },
};