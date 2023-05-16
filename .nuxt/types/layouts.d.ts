import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custome" | "default"
declare module "C:/Users/LENOVO/Desktop/workspace/sample/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}