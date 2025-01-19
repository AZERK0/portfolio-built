import { g as i$5, c as u$5, b as o$1, t as t$2, d as i$1, A as A$2, s as s$3, l as l$2, N as N$3, C as useAppConfig, p as useUI, P as s$5, h as o, D as __nuxt_component_1$2 } from './server.mjs';
import { defineComponent, ref, provide, computed, onMounted, onUnmounted, watchEffect, useId, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, inject } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-Bum7rJyU.mjs';
import { r as renderSlot } from './slot-TbM67qIw.mjs';
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

var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r = inject(T, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let N = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$1, { slots: r, attrs: o$12 }) {
  let s2 = ref(t$1.defaultOpen ? 0 : 1), e = ref(null), i$2 = ref(null), n = { buttonId: ref(`headlessui-disclosure-button-${i$5()}`), panelId: ref(`headlessui-disclosure-panel-${i$5()}`), disclosureState: s2, panel: e, button: i$2, toggleDisclosure() {
    s2.value = u$5(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l2) {
    n.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o$1(l2) : o$1(n.button) : o$1(n.button))();
    a == null || a.focus();
  } };
  return provide(T, n), t$2(computed(() => u$5(s2.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$1, c = { open: s2.value === 0, close: n.close };
    return A$2({ theirProps: a, ourProps: {}, slot: c, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o$2, expose: s$12 }) {
  let e = O("DisclosureButton"), i2 = U(), n = computed(() => i2 === null ? false : i2.value === e.panelId.value);
  onMounted(() => {
    n.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s$12({ el: l2, $el: l2 }), n.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = s$3(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c() {
    var u2;
    t2.disabled || (n.value ? (e.toggleDisclosure(), (u2 = o$1(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S;
    if (!t2.disabled) if (n.value) switch (u2.key) {
      case o.Space:
      case o.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S = o$1(e.button)) == null || S.focus();
        break;
    }
    else switch (u2.key) {
      case o.Space:
      case o.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
        break;
    }
  }
  function v(u2) {
    switch (u2.key) {
      case o.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S, ...K } = t2, M = n.value ? { ref: l2, type: a.value, onClick: c, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o$1(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c, onKeydown: D, onKeyup: v };
    return A$2({ ourProps: M, theirProps: K, slot: u2, attrs: r, slots: o$2, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o2, expose: s2 }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s2({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i2 = l$2(), n = computed(() => i2 !== null ? (i2.value & i$1.Open) === i$1.Open : e.disclosureState.value === 0);
  return () => {
    var v;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c } = t2, D = { id: (v = e.panelId.value) != null ? v : a, ref: e.panel };
    return A$2({ ourProps: D, theirProps: c, slot: l2, attrs: r, slots: o2, features: N$3.RenderStrategy | N$3.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
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
      const _component_UIcon = __nuxt_component_1$2;
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
//# sourceMappingURL=Collapsible-YGntQElz.mjs.map
