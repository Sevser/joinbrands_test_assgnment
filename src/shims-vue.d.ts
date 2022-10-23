import mitt from 'mitt';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<unknown, unknown, any>;
  export default component;
}

declare module 'vue' {
  interface ComponentCustomProperties extends ComponentCustomProperties {
    $formBus: typeof emitter;
    beforeUnmount?(this: ComponentPublicInstance): void;
    beforeMount?(this: ComponentPublicInstance): void;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    emitter: mitt;
  }
}
