import _sfc_main$1 from './ProseCodeIcon-CMi-IQWB.mjs';
import { defineComponent, useSlots, toRef, ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
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
  ...{
    inheritAttrs: false
  },
  __name: "CodeGroup",
  __ssrInlineRender: true,
  props: {
    class: {
      type: [String, Object, Array],
      default: void 0
    }
  },
  setup(__props, { expose: __expose }) {
    const config = {
      wrapper: "relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",
      header: "flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",
      tab: {
        base: "px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",
        active: "bg-gray-100 dark:bg-gray-800",
        inactive: "hover:bg-gray-50 dark:hover:bg-gray-800/50",
        icon: {
          base: ""
        }
      }
    };
    const props = __props;
    const slots = useSlots();
    const { ui, attrs } = useUI("content.codeGroup", void 0, config, toRef(props, "class"), true);
    const selectedIndex = ref(0);
    __expose({ selectedIndex });
    function transformSlot(slot, index) {
      var _a, _b, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a = slot.children) == null ? void 0 : _a.map(transformSlot);
      }
      return {
        label: ((_b = slot.props) == null ? void 0 : _b.filename) || ((_c = slot.props) == null ? void 0 : _c.label) || `${index}`,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    const tabs = computed(() => {
      var _a, _b;
      return ((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.flatMap(transformSlot).filter(Boolean)) || [];
    });
    const selectedTab = computed(() => tabs.value.find((_, index) => index === selectedIndex.value));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ProseCodeIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).header)}"><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<button tabindex="-1" class="${ssrRenderClass([unref(ui).tab.base, unref(selectedIndex) === index ? unref(ui).tab.active : unref(ui).tab.inactive])}">`);
        _push(ssrRenderComponent(_component_ProseCodeIcon, {
          icon: tab.icon,
          filename: tab.label,
          class: unref(ui).tab.icon.base
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_a = unref(selectedTab)) == null ? void 0 : _a.component), {
        key: unref(selectedIndex),
        "hide-header": ""
      }, null), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeGroup-CzAK385S.mjs.map
