
import type { Defu } from 'defu'
import cfg0 from "C:/Users/LENOVO/Desktop/workspace/sample/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module '@nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
