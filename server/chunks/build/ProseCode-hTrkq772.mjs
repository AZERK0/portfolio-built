import _sfc_main$1 from './ProseCodeIcon-CMi-IQWB.mjs';
import _sfc_main$2 from './ProseCodeButton--4xD5xDe.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { p as useUI } from './server.mjs';
import 'node:http';
import 'node:https';
import '../runtime.mjs';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: void 0
    },
    language: {
      type: String,
      default: void 0
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    filename: {
      type: String,
      default: void 0
    },
    highlights: {
      type: Array,
      default: void 0
    },
    meta: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const config = {
      wrapper: "[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",
      header: "flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",
      icon: {
        base: ""
      },
      button: {
        base: "absolute top-2.5 right-2.5"
      },
      filename: "text-gray-700 dark:text-gray-200 text-sm/6"
    };
    const { ui } = useUI("content.prose.code", void 0, config, void 0, true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProseCodeIcon = _sfc_main$1;
      const _component_ProseCodeButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative", !!__props.filename && unref(ui).wrapper]
      }, _attrs))}>`);
      if (__props.filename && !__props.hideHeader) {
        _push(`<div class="${ssrRenderClass(unref(ui).header)}">`);
        _push(ssrRenderComponent(_component_ProseCodeIcon, {
          icon: __props.icon,
          filename: __props.filename,
          class: unref(ui).icon.base
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(unref(ui).filename)}">${ssrInterpolate(__props.filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ProseCodeButton, {
        code: __props.code,
        class: unref(ui).button.base
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseCode-hTrkq772.mjs.map
