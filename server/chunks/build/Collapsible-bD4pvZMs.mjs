import { h as useAppConfig, b as useUI, s as s$5, i as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, computed, useId, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-Bum7rJyU.mjs';
import { r as renderSlot } from './slot-TbM67qIw.mjs';
import { N, Q, V } from './disclosure-tIJCQisc.mjs';
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
import './node-04k6j4dz.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "properties"
    },
    openText: {
      type: String,
      default: "Show"
    },
    closeText: {
      type: String,
      default: "Hide"
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const config = computed(() => ({
      button: {
        base: "flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
        icon: {
          name: appConfig.ui.icons.chevron,
          base: "w-4 h-4 transform transition-transform duration-200",
          active: "",
          inactive: "-rotate-90"
        }
      },
      panel: "mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"
    }));
    const { ui } = useUI("content.collapsible", void 0, config, void 0, true);
    s$5(() => useId("$xFhFdg1qPT"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$1;
      _push(ssrRenderComponent(unref(N), mergeProps({ as: "div" }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Q), {
              class: unref(ui).button.base
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).button.icon.name,
                    class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(open ? __props.closeText : __props.openText)} ${ssrInterpolate(__props.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: unref(ui).button.icon.name,
                      class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                    }, null, 8, ["name", "class"]),
                    createVNode("span", null, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(V), {
              class: unref(ui).panel
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Q), {
                class: unref(ui).button.base
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: unref(ui).button.icon.name,
                    class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", null, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 1)
                ]),
                _: 2
              }, 1032, ["class"]),
              createVNode(unref(V), {
                class: unref(ui).panel
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapsible-bD4pvZMs.mjs.map
