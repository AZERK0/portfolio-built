import { m as mergeConfig, e as appConfig, b as useUI, f as useInjectButtonGroup, t as tooltip, g as usePopper, n as nuxtLinkProps, j as config$9, k as getNuxtLinkProps, l as getSlotChildrenText, q as avatar, r as getSlotsChildren, s as __nuxt_component_4$1, v as useAsyncData, w as useSeoMeta, h as useAppConfig, o as __nuxt_component_0$2, a as __nuxt_component_0$7, i as __nuxt_component_1$1, p as __nuxt_component_9, c as __nuxt_component_0$8, d as __nuxt_component_0$3, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, toRef, computed, ref, useSlots, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, renderSlot, createTextVNode, toDisplayString, cloneVNode, h, Fragment, renderList, withAsyncContext, createSlots } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { twMerge, twJoin } from 'tailwind-merge';
import { _ as _sfc_main$c } from './NuxtImg-rMvQWX0S.mjs';
import { _ as __nuxt_component_0 } from './Kbd-CvXKrk23.mjs';
import { m as defu } from '../runtime.mjs';
import { createSharedComposable, useMouse, defaultWindow, watchThrottled, unrefElement } from '@vueuse/core';
import { q as queryContent } from './query-ByJ6oR_d.mjs';
import 'node:http';
import 'node:https';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import './preview-xVq093Dj.mjs';

const avatarGroup = {
  wrapper: "inline-flex flex-row-reverse justify-end",
  ring: "ring-2 ring-white dark:ring-gray-900",
  margin: "-me-1.5 first:me-0"
};
const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const chip = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap",
  background: "bg-{color}-500 dark:bg-{color}-400",
  position: {
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-left": "bottom-0 left-0"
  },
  translate: {
    "top-right": "-translate-y-1/2 translate-x-1/2 transform",
    "bottom-right": "translate-y-1/2 translate-x-1/2 transform",
    "top-left": "-translate-y-1/2 -translate-x-1/2 transform",
    "bottom-left": "translate-y-1/2 -translate-x-1/2 transform"
  },
  size: {
    "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
    "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
    xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
    sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
    md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
    lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
    xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
    "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
    "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
  },
  default: {
    size: "sm",
    color: "primary",
    position: "top-right",
    inset: false
  }
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingHero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = computed(() => {
      const container = twJoin(
        "gap-16 sm:gap-y-24",
        props.orientation === "vertical" && "flex flex-col",
        props.orientation === "horizontal" && "grid lg:grid-cols-2 lg:items-center"
      );
      const base = props.orientation === "vertical" ? "text-center" : "";
      const links = twJoin(
        "mt-10 flex flex-wrap gap-x-6 gap-y-3",
        props.orientation === "vertical" && "justify-center"
      );
      return {
        wrapper: "py-24 sm:py-32 md:py-40 relative",
        container,
        base,
        headline: "mb-10",
        title: "text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",
        description: "mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",
        links
      };
    });
    const { ui, attrs } = useUI("landing.hero", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$8;
      const _component_UButton = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).base)}"${_scopeId}>`);
            if (_ctx.$slots.headline) {
              _push2(`<div class="${ssrRenderClass(unref(ui).headline)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</h1>`);
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
              _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).base
              }, [
                _ctx.$slots.headline ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).headline
                }, [
                  renderSlot(_ctx.$slots, "headline")
                ], 2)) : createCommentVNode("", true),
                createVNode("h1", {
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                ((_b = __props.links) == null ? void 0 : _b.length) || _ctx.$slots.links ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/landing/LandingHero.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$a = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$2.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$2.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$2.variant),
          ...Object.values(config$2.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config$2);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    return {
      attrs,
      badgeClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.label)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1__vue@3.5.11_typescript@5.6.2_/node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingLogos",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    align: {
      type: String,
      default: "center"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = computed(() => {
      const wrapper = {
        center: "text-center",
        right: "text-right",
        left: "text-left"
      }[props.align];
      return {
        wrapper,
        title: "text-lg font-semibold leading-8 text-gray-900 dark:text-white",
        images: "mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"
      };
    });
    const { ui, attrs } = useUI("landing.logos", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.title) {
        _push(`<h2 class="${ssrRenderClass(unref(ui).title)}">${ssrInterpolate(__props.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).images)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/landing/LandingLogos.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
const _sfc_main$8 = defineComponent({
  components: {
    UKbd: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: () => config$1.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$1.default.closeDelay
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config$1, toRef(props, "class"));
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    const isVisible = computed(() => !!(useSlots().text || props.text));
    function onMouseEnter() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      open,
      onMouseEnter,
      onMouseLeave,
      isVisible
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_UKbd = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "trigger",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { open: _ctx.open }, () => {
    _push(` Hover `);
  }, _push, _parent);
  if (_ctx.open && !_ctx.prevent && _ctx.isVisible) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}"><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.background, _ctx.ui.color, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.ring])}">`);
    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    if ((_a = _ctx.shortcuts) == null ? void 0 : _a.length) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.shortcuts)}"><span class="${ssrRenderClass(_ctx.ui.middot)}">·</span><!--[-->`);
      ssrRenderList(_ctx.shortcuts, (shortcut) => {
        _push(ssrRenderComponent(_component_UKbd, {
          key: shortcut,
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(shortcut)}`);
            } else {
              return [
                createTextVNode(toDisplayString(shortcut), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1__vue@3.5.11_typescript@5.6.2_/node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingSection",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: void 0
    },
    headline: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    features: {
      type: Array,
      default: () => []
    },
    links: {
      type: Array,
      default: () => []
    },
    slot: {
      type: String,
      default: void 0
    },
    align: {
      type: String,
      default: "center"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const appConfig2 = useAppConfig();
    const props = __props;
    const config2 = computed(() => {
      const container = twJoin(
        "gap-16 sm:gap-y-24",
        props.align === "center" ? "flex flex-col" : "grid lg:grid-cols-2 lg:items-center"
      );
      const base = twJoin(
        "",
        props.align === "center" && "text-center flex flex-col items-center",
        props.align === "right" && "lg:order-last"
      );
      return {
        wrapper: "py-24 sm:py-32",
        container,
        base,
        icon: {
          wrapper: "flex mb-6",
          base: "w-10 h-10 flex-shrink-0 text-primary"
        },
        headline: "mb-2 text-base/7 font-semibold text-primary",
        title: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
        description: "mt-6 text-lg/8 text-gray-600 dark:text-gray-300",
        links: "mt-8 flex flex-wrap gap-x-3 gap-y-1.5",
        features: {
          wrapper: {
            base: "mt-6 leading-7",
            list: "space-y-4",
            grid: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          },
          base: "relative pl-8",
          name: "font-semibold text-gray-900 dark:text-white",
          description: "text-gray-500 dark:text-gray-400 leading-6",
          icon: {
            base: "absolute left-0 top-1 h-5 w-5 text-primary",
            name: appConfig2.ui.icons.check
          }
        }
      };
    });
    const { ui, attrs } = useUI("landing.section", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$8;
      const _component_UIcon = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            if (__props.icon || _ctx.$slots.icon || (__props.headline || _ctx.$slots.headline) || (__props.title || _ctx.$slots.title) || (__props.description || _ctx.$slots.description) || (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links)) {
              _push2(`<div class="${ssrRenderClass(unref(ui).base)}"${_scopeId}>`);
              if (__props.icon || _ctx.$slots.icon) {
                _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: __props.icon,
                    class: unref(ui).icon.base
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else if (__props.headline || _ctx.$slots.headline) {
                _push2(`<div class="${ssrRenderClass(unref(ui).headline)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                  _push2(`${ssrInterpolate(__props.headline)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.title || _ctx.$slots.title) {
                _push2(`<h2 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</h2>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || _ctx.$slots.description) {
                _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.align !== "center" && ((_b = __props.features) == null ? void 0 : _b.length)) {
                _push2(`<dl class="${ssrRenderClass([unref(ui).features.wrapper.base, unref(ui).features.wrapper.list])}"${_scopeId}><!--[-->`);
                ssrRenderList(__props.features, (feature) => {
                  _push2(`<div class="${ssrRenderClass(unref(ui).features.base)}"${_scopeId}><dt class="${ssrRenderClass(unref(ui).features.name)}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: feature.icon || unref(ui).features.icon.name,
                    class: unref(ui).features.icon.base,
                    "aria-hidden": "true"
                  }, null, _parent2, _scopeId));
                  if (feature.name) {
                    _push2(`<span${_scopeId}>${ssrInterpolate(feature.name)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</dt>`);
                  if (feature.description) {
                    _push2(`<dd class="${ssrRenderClass(unref(ui).features.description)}"${_scopeId}>${ssrInterpolate(feature.description)}</dd>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></dl>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.align !== "center" && (((_c = __props.links) == null ? void 0 : _c.length) || _ctx.$slots.links)) {
                _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.links, (link, index) => {
                    _push2(ssrRenderComponent(_component_UButton, mergeProps({
                      key: index,
                      ref_for: true
                    }, link, {
                      onClick: link.click
                    }), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$slots[__props.slot || "default"]) {
              ssrRenderSlot(_ctx.$slots, __props.slot || "default", {}, null, _push2, _parent2, _scopeId);
            } else if (__props.align === "right") {
              _push2(`<div${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.align === "center" && ((_d = __props.features) == null ? void 0 : _d.length)) {
              _push2(`<dl class="${ssrRenderClass([unref(ui).features.wrapper.base, unref(ui).features.wrapper.grid])}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.features, (feature) => {
                _push2(`<div class="${ssrRenderClass(unref(ui).features.base)}"${_scopeId}><dt class="${ssrRenderClass(unref(ui).features.name)}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: feature.icon || unref(ui).features.icon.name,
                  class: unref(ui).features.icon.base,
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
                if (feature.name) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(feature.name)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</dt>`);
                if (feature.description) {
                  _push2(`<dd class="${ssrRenderClass(unref(ui).features.description)}"${_scopeId}>${ssrInterpolate(feature.description)}</dd>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></dl>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.align === "center" && (((_e = __props.links) == null ? void 0 : _e.length) || _ctx.$slots.links)) {
              _push2(`<div class="${ssrRenderClass(unref(twMerge)(unref(ui).links, "mt-0 justify-center"))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon || _ctx.$slots.icon || (__props.headline || _ctx.$slots.headline) || (__props.title || _ctx.$slots.title) || (__props.description || _ctx.$slots.description) || (((_f = __props.links) == null ? void 0 : _f.length) || _ctx.$slots.links) ? (openBlock(), createBlock("div", {
                key: 0,
                class: unref(ui).base
              }, [
                __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).icon.wrapper
                }, [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(_component_UIcon, {
                      name: __props.icon,
                      class: unref(ui).icon.base
                    }, null, 8, ["name", "class"])
                  ])
                ], 2)) : __props.headline || _ctx.$slots.headline ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).headline
                }, [
                  renderSlot(_ctx.$slots, "headline", {}, () => [
                    createTextVNode(toDisplayString(__props.headline), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.title || _ctx.$slots.title ? (openBlock(), createBlock("h2", {
                  key: 2,
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.align !== "center" && ((_g = __props.features) == null ? void 0 : _g.length) ? (openBlock(), createBlock("dl", {
                  key: 4,
                  class: [unref(ui).features.wrapper.base, unref(ui).features.wrapper.list]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature) => {
                    return openBlock(), createBlock("div", {
                      key: feature.name,
                      class: unref(ui).features.base
                    }, [
                      createVNode("dt", {
                        class: unref(ui).features.name
                      }, [
                        createVNode(_component_UIcon, {
                          name: feature.icon || unref(ui).features.icon.name,
                          class: unref(ui).features.icon.base,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"]),
                        feature.name ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(feature.name), 1)) : createCommentVNode("", true)
                      ], 2),
                      feature.description ? (openBlock(), createBlock("dd", {
                        key: 0,
                        class: unref(ui).features.description
                      }, toDisplayString(feature.description), 3)) : createCommentVNode("", true)
                    ], 2);
                  }), 128))
                ], 2)) : createCommentVNode("", true),
                __props.align !== "center" && (((_h = __props.links) == null ? void 0 : _h.length) || _ctx.$slots.links) ? (openBlock(), createBlock("div", {
                  key: 5,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              _ctx.$slots[__props.slot || "default"] ? renderSlot(_ctx.$slots, __props.slot || "default", { key: 1 }) : __props.align === "right" ? (openBlock(), createBlock("div", { key: 2 })) : createCommentVNode("", true),
              __props.align === "center" && ((_i = __props.features) == null ? void 0 : _i.length) ? (openBlock(), createBlock("dl", {
                key: 3,
                class: [unref(ui).features.wrapper.base, unref(ui).features.wrapper.grid]
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature) => {
                  return openBlock(), createBlock("div", {
                    key: feature.name,
                    class: unref(ui).features.base
                  }, [
                    createVNode("dt", {
                      class: unref(ui).features.name
                    }, [
                      createVNode(_component_UIcon, {
                        name: feature.icon || unref(ui).features.icon.name,
                        class: unref(ui).features.icon.base,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"]),
                      feature.name ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(feature.name), 1)) : createCommentVNode("", true)
                    ], 2),
                    feature.description ? (openBlock(), createBlock("dd", {
                      key: 0,
                      class: unref(ui).features.description
                    }, toDisplayString(feature.description), 3)) : createCommentVNode("", true)
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true),
              __props.align === "center" && (((_j = __props.links) == null ? void 0 : _j.length) || _ctx.$slots.links) ? (openBlock(), createBlock("div", {
                key: 4,
                class: unref(twMerge)(unref(ui).links, "mt-0 justify-center")
              }, [
                renderSlot(_ctx.$slots, "links", {}, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                    return openBlock(), createBlock(_component_UButton, mergeProps({
                      key: index,
                      ref_for: true
                    }, link, {
                      onClick: link.click
                    }), null, 16, ["onClick"]);
                  }), 128))
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/landing/LandingSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.chip, chip);
const _sfc_main$6 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    position: {
      type: String,
      default: () => config.default.position,
      validator(value) {
        return Object.keys(config.position).includes(value);
      }
    },
    text: {
      type: [String, Number],
      default: null
    },
    inset: {
      type: Boolean,
      default: () => config.default.inset
    },
    show: {
      type: Boolean,
      default: true
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("chip", toRef(props, "ui"), config, toRef(props, "class"));
    const chipClass = computed(() => {
      return twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.position[props.position],
        props.inset ? null : ui.value.translate[props.position],
        ui.value.background.replaceAll("{color}", props.color)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      chipClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.show) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">`);
    ssrRenderSlot(_ctx.$slots, "content", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1__vue@3.5.11_typescript@5.6.2_/node_modules/@nuxt/ui/dist/runtime/components/elements/Chip.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const useSharedMouse = createSharedComposable(useMouse);
function useSharedMouseInElement(target, options = {}) {
  const { x, y } = useSharedMouse(options);
  const targetRef = ref(target ?? void 0);
  const elementX = ref(0);
  const elementY = ref(0);
  if (defaultWindow) {
    watchThrottled(
      [targetRef, x, y],
      () => {
        var _a;
        const el = unrefElement(targetRef);
        if (!el) {
          return;
        }
        const { left, top } = el.getBoundingClientRect();
        const eX = x.value - (left + defaultWindow.scrollX);
        const eY = y.value - (top + defaultWindow.scrollY);
        if (Math.abs(eX) > 1500 || Math.abs(eY) > 1500 || ((_a = defaultWindow.screen) == null ? void 0 : _a.width) <= 800) {
          return;
        }
        elementX.value = eX;
        elementY.value = eY;
      },
      { immediate: true, throttle: 50 }
    );
  }
  return {
    x,
    y,
    elementX,
    elementY
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingCard",
  __ssrInlineRender: true,
  props: {
    ...nuxtLinkProps,
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "primary"
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const colorLight = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$9[props.color]) == null ? void 0 : _a["500"]) || config$9[props.color] || props.color;
    });
    const colorDark = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$9[props.color]) == null ? void 0 : _a["400"]) || config$9[props.color] || props.color;
    });
    const config2 = computed(() => {
      const base = twJoin(
        "gap-x-8 gap-y-4 rounded-xl flex-1",
        props.orientation === "vertical" && "flex flex-col",
        !!slots.default && props.orientation === "horizontal" && "grid lg:grid-cols-2 lg:items-center"
      );
      return {
        wrapper: "relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",
        to: "transition-shadow duration-200",
        base: "flex-1 flex flex-col overflow-hidden",
        container: "",
        body: {
          base
        },
        background: "bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",
        ring: "",
        rounded: "rounded-xl",
        shadow: "",
        icon: {
          wrapper: "mb-2 pointer-events-none",
          base: "w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
        },
        title: "text-gray-900 dark:text-white text-base font-bold truncate",
        description: "text-[15px] text-gray-500 dark:text-gray-400 mt-1"
      };
    });
    const el = ref();
    const slots = useSlots();
    const { elementX, elementY } = useSharedMouseInElement(el);
    const { ui, attrs } = useUI("landing.card", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const nuxtLinkBind = computed(() => getNuxtLinkProps(props));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Card link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$7;
      const _component_UIcon = __nuxt_component_1$1;
      const _cssVars = { style: {
        "--89b3f98a": unref(colorLight),
        "--67916e9e": unref(colorDark)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        style: {
          "--x": `${unref(elementX)}px`,
          "--y": `${unref(elementY)}px`
        },
        class: [unref(ui).wrapper, _ctx.to && [unref(ui).to, "to"]]
      }, unref(attrs), _attrs, _cssVars))} data-v-a7bb7dd3>`);
      _push(ssrRenderComponent(_component_UCard, { ui: unref(ui) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).container)}" data-v-a7bb7dd3${_scopeId}>`);
            if (_ctx.to) {
              _push2(ssrRenderComponent(_component_NuxtLink, mergeProps({ "aria-label": unref(ariaLabel) }, unref(nuxtLinkBind), {
                class: "focus:outline-none",
                tabindex: "-1"
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true" data-v-a7bb7dd3${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon || _ctx.$slots.icon) {
              _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}" data-v-a7bb7dd3${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: __props.icon,
                  class: unref(ui).icon.base
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.title || _ctx.$slots.title) {
              _push2(`<p class="${ssrRenderClass(unref(ui).title)}" data-v-a7bb7dd3${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}" data-v-a7bb7dd3${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "container", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (_ctx.$slots.default) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: unref(ui).container
              }, [
                _ctx.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                  key: 0,
                  "aria-label": unref(ariaLabel)
                }, unref(nuxtLinkBind), {
                  class: "focus:outline-none",
                  tabindex: "-1"
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).icon.wrapper
                }, [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(_component_UIcon, {
                      name: __props.icon,
                      class: unref(ui).icon.base
                    }, null, 8, ["name", "class"])
                  ], true)
                ], 2)) : createCommentVNode("", true),
                __props.title || _ctx.$slots.title ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ], true)
                ], 2)) : createCommentVNode("", true),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ], true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "container", {}, void 0, true)
              ], 2),
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/landing/LandingCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a7bb7dd3"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    align: {
      type: String,
      default: "bottom"
    },
    highlight: {
      type: Boolean,
      default: false
    },
    scale: {
      type: Boolean,
      default: false
    },
    features: {
      type: Array,
      default: () => []
    },
    badge: {
      type: Object,
      default: void 0
    },
    button: {
      type: Object,
      default: void 0
    },
    price: {
      type: String,
      default: void 0
    },
    discount: {
      type: String,
      default: void 0
    },
    cycle: {
      type: String,
      default: void 0
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const appConfig2 = useAppConfig();
    const config2 = computed(() => {
      const base = twJoin(
        "flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col",
        props.orientation === "horizontal" ? "lg:grid lg:grid-cols-10" : ""
      );
      const left = props.orientation === "horizontal" ? "lg:col-span-7" : "";
      const right = props.orientation === "horizontal" ? "flex flex-col lg:items-center justify-center gap-y-6 lg:col-span-3 border-t lg:border-l lg:border-t-0 border-gray-200 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8 xl:pl-10" : "";
      return {
        wrapper: "relative flex flex-col self-stretch w-full",
        highlight: "ring-2 ring-primary dark:ring-primary",
        scale: "lg:scale-[1.1] lg:z-10",
        rounded: "rounded-xl",
        header: {
          padding: "p-6 lg:px-8 xl:px-10"
        },
        body: {
          base,
          padding: "p-6 lg:p-8 xl:p-10"
        },
        footer: {
          padding: "p-6 lg:px-8 xl:px-10"
        },
        inner: "flex items-center gap-3",
        title: "text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate",
        description: "text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2",
        amount: {
          base: "flex flex-row items-baseline gap-x-1",
          discount: "text-gray-500 dark:text-gray-400 line-through text-xl sm:text-2xl font-medium",
          price: "text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold",
          cycle: "text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate"
        },
        features: {
          vertical: "space-y-3 text-sm",
          horizontal: "grid lg:grid-cols-2 text-sm gap-3",
          item: {
            base: "flex items-center gap-x-3 min-w-0",
            label: "text-gray-600 dark:text-gray-400 truncate",
            icon: {
              base: "w-5 h-5 flex-shrink-0 text-primary",
              name: appConfig2.ui.icons.check
            }
          }
        },
        divider: "my-6 lg:my-8",
        left,
        right
      };
    });
    const { ui, attrs } = useUI("pricing.card", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$2;
      const _component_UBadge = __nuxt_component_1;
      const _component_UDivider = __nuxt_component_9;
      const _component_UIcon = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: [unref(ui).wrapper, __props.highlight && unref(ui).highlight, __props.scale && unref(ui).scale]
      }, unref(attrs), { ui: unref(ui) }, _attrs), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).left)}"${_scopeId}><div class="${ssrRenderClass(unref(ui).inner)}"${_scopeId}>`);
            if (__props.title || _ctx.$slots.title) {
              _push2(`<p class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.badge) {
              _push2(ssrRenderComponent(_component_UBadge, { variant: "subtle", ...__props.badge }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.orientation === "horizontal") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UDivider, {
                class: unref(ui).divider
              }, null, _parent2, _scopeId));
              if (((_a = __props.features) == null ? void 0 : _a.length) || _ctx.$slots.features) {
                _push2(`<div class="flex-1"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                  var _a2;
                  if ((_a2 = __props.features) == null ? void 0 : _a2.length) {
                    _push2(`<ul class="${ssrRenderClass(unref(ui).features.horizontal)}"${_scopeId}><!--[-->`);
                    ssrRenderList(__props.features, (offer, index) => {
                      _push2(`<li class="${ssrRenderClass(unref(ui).features.item.base)}"${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: unref(ui).features.item.icon.name,
                        class: unref(ui).features.item.icon.base
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="${ssrRenderClass(unref(ui).features.item.label)}"${_scopeId}>${ssrInterpolate(offer)}</span></li>`);
                    });
                    _push2(`<!--]--></ul>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.orientation === "vertical") {
              _push2(`<!--[--><div class="${ssrRenderClass(unref(ui).amount.base)}"${_scopeId}>`);
              if (__props.discount && __props.price) {
                _push2(`<p class="${ssrRenderClass(unref(ui).amount.discount)}"${_scopeId}>${ssrInterpolate(__props.price)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="${ssrRenderClass(unref(ui).amount.price)}"${_scopeId}>${ssrInterpolate(__props.discount || __props.price || " ")}</p>`);
              if (__props.cycle) {
                _push2(`<p class="${ssrRenderClass(unref(ui).amount.cycle)}"${_scopeId}>${ssrInterpolate(__props.cycle)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (((_b = __props.features) == null ? void 0 : _b.length) || _ctx.$slots.features) {
                _push2(`<div class="${ssrRenderClass([__props.align === "top" && "order-last", "flex-1"])}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                  var _a2;
                  if ((_a2 = __props.features) == null ? void 0 : _a2.length) {
                    _push2(`<ul class="${ssrRenderClass(unref(ui).features.vertical)}"${_scopeId}><!--[-->`);
                    ssrRenderList(__props.features, (offer, index) => {
                      _push2(`<li class="${ssrRenderClass(unref(ui).features.item.base)}"${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: unref(ui).features.item.icon.name,
                        class: unref(ui).features.item.icon.base
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="${ssrRenderClass(unref(ui).features.item.label)}"${_scopeId}>${ssrInterpolate(offer)}</span></li>`);
                    });
                    _push2(`<!--]--></ul>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(unref(ui).right)}"${_scopeId}>`);
            if (__props.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass([unref(ui).amount.base, __props.align === "top" && "order-last"])}"${_scopeId}>`);
              if (__props.discount && __props.price) {
                _push2(`<p class="${ssrRenderClass(unref(ui).amount.discount)}"${_scopeId}>${ssrInterpolate(__props.price)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="${ssrRenderClass(unref(ui).amount.price)}"${_scopeId}>${ssrInterpolate(__props.discount || __props.price || " ")}</p>`);
              if (__props.cycle) {
                _push2(`<p class="${ssrRenderClass(unref(ui).amount.cycle)}"${_scopeId}>${ssrInterpolate(__props.cycle)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.button) {
              _push2(ssrRenderComponent(_component_UButton, mergeProps({ block: true, size: "lg", ...__props.button }, {
                onClick: (_c = __props.button) == null ? void 0 : _c.click
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.orientation === "horizontal") {
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.orientation === "vertical") {
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: unref(ui).left
              }, [
                createVNode("div", {
                  class: unref(ui).inner
                }, [
                  __props.title || _ctx.$slots.title ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: unref(ui).title
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({ key: 1 }, { variant: "subtle", ...__props.badge }), null, 16)) : createCommentVNode("", true)
                ], 2),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.orientation === "horizontal" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_component_UDivider, {
                    class: unref(ui).divider
                  }, null, 8, ["class"]),
                  ((_d = __props.features) == null ? void 0 : _d.length) || _ctx.$slots.features ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex-1"
                  }, [
                    renderSlot(_ctx.$slots, "features", {}, () => {
                      var _a2;
                      return [
                        ((_a2 = __props.features) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: unref(ui).features.horizontal
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (offer, index) => {
                            return openBlock(), createBlock("li", {
                              key: index,
                              class: unref(ui).features.item.base
                            }, [
                              createVNode(_component_UIcon, {
                                name: unref(ui).features.item.icon.name,
                                class: unref(ui).features.item.icon.base
                              }, null, 8, ["name", "class"]),
                              createVNode("span", {
                                class: unref(ui).features.item.label
                              }, toDisplayString(offer), 3)
                            ], 2);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ];
                    })
                  ])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ], 2),
              __props.orientation === "vertical" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: unref(ui).amount.base
                }, [
                  __props.discount && __props.price ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: unref(ui).amount.discount
                  }, toDisplayString(__props.price), 3)) : createCommentVNode("", true),
                  createVNode("p", {
                    class: unref(ui).amount.price
                  }, toDisplayString(__props.discount || __props.price || " "), 3),
                  __props.cycle ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: unref(ui).amount.cycle
                  }, toDisplayString(__props.cycle), 3)) : createCommentVNode("", true)
                ], 2),
                ((_e = __props.features) == null ? void 0 : _e.length) || _ctx.$slots.features ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: [__props.align === "top" && "order-last", "flex-1"]
                }, [
                  renderSlot(_ctx.$slots, "features", {}, () => {
                    var _a2;
                    return [
                      ((_a2 = __props.features) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("ul", {
                        key: 0,
                        class: unref(ui).features.vertical
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (offer, index) => {
                          return openBlock(), createBlock("li", {
                            key: index,
                            class: unref(ui).features.item.base
                          }, [
                            createVNode(_component_UIcon, {
                              name: unref(ui).features.item.icon.name,
                              class: unref(ui).features.item.icon.base
                            }, null, 8, ["name", "class"]),
                            createVNode("span", {
                              class: unref(ui).features.item.label
                            }, toDisplayString(offer), 3)
                          ], 2);
                        }), 128))
                      ], 2)) : createCommentVNode("", true)
                    ];
                  })
                ], 2)) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true),
              createVNode("div", {
                class: unref(ui).right
              }, [
                __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: [unref(ui).amount.base, __props.align === "top" && "order-last"]
                }, [
                  __props.discount && __props.price ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: unref(ui).amount.discount
                  }, toDisplayString(__props.price), 3)) : createCommentVNode("", true),
                  createVNode("p", {
                    class: unref(ui).amount.price
                  }, toDisplayString(__props.discount || __props.price || " "), 3),
                  __props.cycle ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: unref(ui).amount.cycle
                  }, toDisplayString(__props.cycle), 3)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                __props.button ? (openBlock(), createBlock(_component_UButton, mergeProps({ key: 1 }, { block: true, size: "lg", ...__props.button }, {
                  onClick: (_f = __props.button) == null ? void 0 : _f.click
                }), null, 16, ["onClick"])) : createCommentVNode("", true),
                __props.orientation === "horizontal" ? renderSlot(_ctx.$slots, "bottom", { key: 2 }) : createCommentVNode("", true)
              ], 2),
              __props.orientation === "vertical" ? renderSlot(_ctx.$slots, "bottom", { key: 1 }) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        _ctx.$slots.header ? {
          name: "header",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "header")
              ];
            }
          }),
          key: "0"
        } : void 0,
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "footer")
              ];
            }
          }),
          key: "1"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/pricing/PricingCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BlogList",
  __ssrInlineRender: true,
  props: {
    orientation: {
      type: String,
      default: "horizontal"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = computed(() => {
      const wrapper = {
        horizontal: "flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",
        vertical: "flex flex-col gap-y-16 w-full"
      }[props.orientation];
      return {
        wrapper
      };
    });
    const { ui, attrs } = useUI("blog.list", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/blog/BlogList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const avatarConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const avatarGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatarGroup, avatarGroup);
const __nuxt_component_3 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(avatarConfig.size).includes(value);
      }
    },
    max: {
      type: Number,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("avatarGroup", toRef(props, "ui"), avatarGroupConfig, toRef(props, "class"));
    const children = computed(() => getSlotsChildren(slots));
    const max = computed(() => typeof props.max === "string" ? parseInt(props.max, 10) : props.max);
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (!props.max || max.value && index < max.value) {
        if (props.size) {
          vProps.size = props.size;
        }
        vProps.class = node.props.class || "";
        vProps.class = twMerge(twJoin(vProps.class, ui.value.ring, ui.value.margin), vProps.class);
        return cloneVNode(node, vProps);
      }
      if (max.value !== void 0 && index === max.value) {
        return h(__nuxt_component_4$1, {
          size: props.size || avatarConfig.default.size,
          text: `+${children.value.length - max.value}`,
          class: twJoin(ui.value.ring, ui.value.margin)
        });
      }
      return null;
    }).filter(Boolean).reverse());
    return () => h("div", { class: ui.value.wrapper, ...attrs.value }, clones.value);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BlogPost",
  __ssrInlineRender: true,
  props: {
    ...nuxtLinkProps,
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    date: {
      type: [String, Date],
      default: void 0
    },
    image: {
      type: [String, Object],
      default: void 0
    },
    badge: {
      type: Object,
      default: void 0
    },
    authors: {
      type: Array,
      default: void 0
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const config2 = computed(() => {
      const wrapper = twJoin(
        "relative group flex flex-col w-full gap-y-6",
        props.orientation === "horizontal" && (!!props.image || !!slots.image) ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center" : void 0
      );
      return {
        wrapper,
        image: {
          wrapper: "ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",
          base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
        },
        container: "flex flex-col justify-between flex-1",
        inner: "flex-1",
        badge: {
          wrapper: "mb-3",
          base: ""
        },
        title: "text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",
        description: "text-base text-gray-500 dark:text-gray-400 mt-1",
        date: "text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",
        authors: {
          wrapper: "relative flex items-center gap-x-3 mt-4",
          avatar: {
            base: "relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",
            size: "xs"
          }
        }
      };
    });
    const { ui, attrs } = useUI("blog.post", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const nuxtLinkBind = computed(() => getNuxtLinkProps(props));
    const ariaLabel = computed(() => (props.title || slots.title && getSlotChildrenText(slots.title()) || "Post link").trim());
    const datetime = computed(() => {
      if (!props.date) {
        return void 0;
      }
      try {
        return new Date(props.date).toISOString();
      } catch (e) {
        return void 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$c;
      const _component_NuxtLink = __nuxt_component_0$7;
      const _component_UBadge = __nuxt_component_1;
      const _component_UAvatarGroup = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_4$1;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (__props.image || _ctx.$slots.image) {
        _push(`<div class="${ssrRenderClass(unref(ui).image.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, () => {
          _push(ssrRenderComponent(_component_NuxtImg, mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
            class: unref(ui).image.base
          }), null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).container)}"><div class="${ssrRenderClass(unref(ui).inner)}">`);
      if (_ctx.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ "aria-label": unref(ariaLabel) }, unref(nuxtLinkBind), {
          class: "focus:outline-none",
          tabindex: "-1"
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.badge || _ctx.$slots.badge) {
        _push(`<div class="${ssrRenderClass(unref(ui).badge.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
          if (__props.badge) {
            _push(ssrRenderComponent(_component_UBadge, mergeProps({ variant: "subtle", ...__props.badge }, {
              class: unref(ui).badge.base
            }), null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.title || _ctx.$slots.title) {
        _push(`<h2 class="${ssrRenderClass(unref(ui).title)}">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          _push(`${ssrInterpolate(__props.title)}`);
        }, _push, _parent);
        _push(`</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description || _ctx.$slots.description) {
        _push(`<div class="${ssrRenderClass(unref(ui).description)}">`);
        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (((_a = __props.authors) == null ? void 0 : _a.length) || _ctx.$slots.authors || (__props.date || _ctx.$slots.date)) {
        _push(`<div class="${ssrRenderClass(unref(ui).authors.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "authors", {}, () => {
          var _a2;
          if ((_a2 = __props.authors) == null ? void 0 : _a2.length) {
            _push(ssrRenderComponent(_component_UAvatarGroup, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.authors, (author, index) => {
                    _push2(ssrRenderComponent(_component_UAvatar, mergeProps({
                      key: index,
                      alt: author.name,
                      class: unref(ui).authors.avatar.base,
                      ref_for: true
                    }, { size: unref(ui).authors.avatar.size, ...author.avatar }), {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          if (author.to) {
                            _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({ ref_for: true }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                              class: "focus:outline-none",
                              tabindex: "-1"
                            }), {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`<span class="absolute inset-0" aria-hidden="true"${_scopeId3}></span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "absolute inset-0",
                                      "aria-hidden": "true"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                        } else {
                          return [
                            author.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                              key: 0,
                              ref_for: true
                            }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                              class: "focus:outline-none",
                              tabindex: "-1"
                            }), {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "absolute inset-0",
                                  "aria-hidden": "true"
                                })
                              ]),
                              _: 2
                            }, 1040)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                      return openBlock(), createBlock(_component_UAvatar, mergeProps({
                        key: index,
                        alt: author.name,
                        class: unref(ui).authors.avatar.base,
                        ref_for: true
                      }, { size: unref(ui).authors.avatar.size, ...author.avatar }), {
                        default: withCtx(() => [
                          author.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                            key: 0,
                            ref_for: true
                          }, { target: "_blank", ...unref(getNuxtLinkProps)(author) }, {
                            class: "focus:outline-none",
                            tabindex: "-1"
                          }), {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "absolute inset-0",
                                "aria-hidden": "true"
                              })
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040, ["alt", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "date", {}, () => {
          if (__props.date) {
            _push(`<time${ssrRenderAttr("datetime", unref(datetime))} class="${ssrRenderClass(unref(ui).date)}">${ssrInterpolate(__props.date)}</time>`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/blog/BlogPost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingCTA",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    card: {
      type: Boolean,
      default: true
    },
    links: {
      type: Array,
      default: () => []
    },
    align: {
      type: String,
      default: "center"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = computed(() => {
      const card = {};
      if (props.card) {
        card.rounded = "rounded-xl";
      } else {
        card.ring = "";
        card.rounded = "";
        card.background = "";
        card.shadow = "";
        card.divide = "";
      }
      const container = twJoin(
        "",
        props.align === "center" && "text-center",
        props.align === "right" && "lg:order-last"
      );
      const base = twJoin(
        "flex flex-col",
        props.align !== "center" && "lg:grid lg:grid-cols-2 lg:items-center",
        "gap-16 sm:gap-y-24"
      );
      const padding = props.card ? "py-24 sm:py-32 sm:px-16" : "py-24 sm:py-32 px-6 lg:px-8";
      const links = twJoin(
        "mt-10 flex items-center gap-x-6",
        props.align === "center" && "justify-center"
      );
      return {
        ...card,
        wrapper: "relative",
        container,
        body: {
          base,
          padding
        },
        title: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
        description: "mt-6 text-lg/8 text-gray-600 dark:text-gray-300",
        links
      };
    });
    const { ui, attrs } = useUI("landing.cta", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), { ui: unref(ui) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).container)}"${_scopeId}>`);
            if (__props.title || _ctx.$slots.title) {
              _push2(`<h2 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</h2>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
              _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.$slots.default) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else if (__props.align === "right") {
              _push2(`<div${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: unref(ui).container
              }, [
                __props.title || _ctx.$slots.title ? (openBlock(), createBlock("h2", {
                  key: 0,
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                ((_b = __props.links) == null ? void 0 : _b.length) || _ctx.$slots.links ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : __props.align === "right" ? (openBlock(), createBlock("div", { key: 1 })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.4_magicast@0.3.5_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_terser@5.34.1___3ulkd3ud5fay3f4cmwsbq5xnz4/node_modules/@nuxt/ui-pro/components/landing/LandingCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("index", () => queryContent("/").findOne())), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: page.value.title,
      ogTitle: page.value.title,
      description: page.value.description,
      ogDescription: page.value.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULandingHero = _sfc_main$b;
      const _component_UBadge = __nuxt_component_1;
      const _component_UIcon = __nuxt_component_1$1;
      const _component_NuxtImg = _sfc_main$c;
      const _component_ULandingLogos = _sfc_main$9;
      const _component_UTooltip = __nuxt_component_5;
      const _component_ULandingSection = _sfc_main$7;
      const _component_UChip = __nuxt_component_7;
      const _component_ULandingCard = __nuxt_component_8;
      const _component_UDivider = __nuxt_component_9;
      const _component_UPricingCard = _sfc_main$4;
      const _component_UBlogList = _sfc_main$3;
      const _component_UBlogPost = _sfc_main$2;
      const _component_ULandingCTA = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hero"></div>`);
      _push(ssrRenderComponent(_component_ULandingHero, {
        title: unref(page).hero.title,
        description: unref(page).hero.description,
        links: unref(page).hero.links,
        orientation: "horizontal",
        ui: { title: "text-5xl font-black tracking-tight text-white mix-blend-difference sm:text-7xl" }
      }, {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page).hero.headline) {
              _push2(ssrRenderComponent(_component_UBadge, {
                variant: "subtle",
                size: "lg",
                class: "relative rounded-full font-semibold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(page).hero.headline.icon) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: unref(page).hero.headline.icon,
                        class: "mr-2 w-4 h-4 pointer-events-none"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(unref(page).hero.headline.label)}`);
                  } else {
                    return [
                      unref(page).hero.headline.icon ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: unref(page).hero.headline.icon,
                        class: "mr-2 w-4 h-4 pointer-events-none"
                      }, null, 8, ["name"])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(unref(page).hero.headline.label), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(page).hero.headline ? (openBlock(), createBlock(_component_UBadge, {
                key: 0,
                variant: "subtle",
                size: "lg",
                class: "relative rounded-full font-semibold"
              }, {
                default: withCtx(() => [
                  unref(page).hero.headline.icon ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: unref(page).hero.headline.icon,
                    class: "mr-2 w-4 h-4 pointer-events-none"
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(unref(page).hero.headline.label), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex justify-center lg:justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/portrait.webp",
              format: "webp",
              alt: "Raphael Charpentier",
              class: "md:w-3/4 lg:w-11/12 lg:-mt-32 lg:-mb-44 portrait"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ULandingLogos, {
              title: unref(page).logos.title,
              align: "center",
              ui: { images: "mx-auto mt-10 flex flex-wrap items-center justify-center gap-8" },
              class: "lg:col-span-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(page).logos.icons, (icon) => {
                    _push3(ssrRenderComponent(_component_UTooltip, {
                      key: icon,
                      text: icon.text
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: icon.name,
                            class: "w-10 h-10 lg:w-12 lg:h-12 text-gray-900 dark:text-white"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UIcon, {
                              name: icon.name,
                              class: "w-10 h-10 lg:w-12 lg:h-12 text-gray-900 dark:text-white"
                            }, null, 8, ["name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(page).logos.icons, (icon) => {
                      return openBlock(), createBlock(_component_UTooltip, {
                        key: icon,
                        text: icon.text
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: icon.name,
                            class: "w-10 h-10 lg:w-12 lg:h-12 text-gray-900 dark:text-white"
                          }, null, 8, ["name"])
                        ]),
                        _: 2
                      }, 1032, ["text"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "relative flex justify-center lg:justify-end" }, [
                createVNode(_component_NuxtImg, {
                  src: "/portrait.webp",
                  format: "webp",
                  alt: "Raphael Charpentier",
                  class: "md:w-3/4 lg:w-11/12 lg:-mt-32 lg:-mb-44 portrait"
                })
              ]),
              createVNode(_component_ULandingLogos, {
                title: unref(page).logos.title,
                align: "center",
                ui: { images: "mx-auto mt-10 flex flex-wrap items-center justify-center gap-8" },
                class: "lg:col-span-2"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(page).logos.icons, (icon) => {
                    return openBlock(), createBlock(_component_UTooltip, {
                      key: icon,
                      text: icon.text
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: icon.name,
                          class: "w-10 h-10 lg:w-12 lg:h-12 text-gray-900 dark:text-white"
                        }, null, 8, ["name"])
                      ]),
                      _: 2
                    }, 1032, ["text"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, {
        title: unref(page).studies.title,
        description: unref(page).studies.description,
        headline: unref(page).studies.headline
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="studies" class="flex flex-col sm:flex-row gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+38px)]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(page).studies.items, (item, index) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UChip, {
                class: "flex-1",
                color: "green",
                position: "top-left",
                show: index === unref(page).studies.items.length - 1,
                ui: { base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap animate-ping transform-none" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ULandingCard, mergeProps({ ref_for: true }, item, {
                      ui: { icon: { base: "w-20 h-20 -my-7 flex-shrink-0 text-gray-900 dark:text-white grayscale" } },
                      class: "h-full",
                      orientation: "horizontal"
                    }), {
                      description: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${item.description ?? ""}</span>`);
                        } else {
                          return [
                            createVNode("span", {
                              innerHTML: item.description
                            }, null, 8, ["innerHTML"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.image) {
                            _push4(ssrRenderComponent(_component_NuxtImg, {
                              src: item.image,
                              format: "webp",
                              class: "w-full rounded-md"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            item.image ? (openBlock(), createBlock(_component_NuxtImg, {
                              key: 0,
                              src: item.image,
                              format: "webp",
                              class: "w-full rounded-md"
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ULandingCard, mergeProps({ ref_for: true }, item, {
                        ui: { icon: { base: "w-20 h-20 -my-7 flex-shrink-0 text-gray-900 dark:text-white grayscale" } },
                        class: "h-full",
                        orientation: "horizontal"
                      }), {
                        description: withCtx(() => [
                          createVNode("span", {
                            innerHTML: item.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        default: withCtx(() => [
                          item.image ? (openBlock(), createBlock(_component_NuxtImg, {
                            key: 0,
                            src: item.image,
                            format: "webp",
                            class: "w-full rounded-md"
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (index < unref(page).studies.items.length - 1) {
                _push2(ssrRenderComponent(_component_UDivider, {
                  icon: "i-heroicons-arrow-right",
                  class: "w-20 max-sm:hidden"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (index < unref(page).studies.items.length - 1) {
                _push2(ssrRenderComponent(_component_UDivider, {
                  icon: "i-heroicons-arrow-down",
                  class: "h-20 sm:hidden",
                  orientation: "vertical"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                id: "studies",
                class: "flex flex-col sm:flex-row gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+38px)]"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(page).studies.items, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode(_component_UChip, {
                      class: "flex-1",
                      color: "green",
                      position: "top-left",
                      show: index === unref(page).studies.items.length - 1,
                      ui: { base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap animate-ping transform-none" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ULandingCard, mergeProps({ ref_for: true }, item, {
                          ui: { icon: { base: "w-20 h-20 -my-7 flex-shrink-0 text-gray-900 dark:text-white grayscale" } },
                          class: "h-full",
                          orientation: "horizontal"
                        }), {
                          description: withCtx(() => [
                            createVNode("span", {
                              innerHTML: item.description
                            }, null, 8, ["innerHTML"])
                          ]),
                          default: withCtx(() => [
                            item.image ? (openBlock(), createBlock(_component_NuxtImg, {
                              key: 0,
                              src: item.image,
                              format: "webp",
                              class: "w-full rounded-md"
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      _: 2
                    }, 1032, ["show"]),
                    index < unref(page).studies.items.length - 1 ? (openBlock(), createBlock(_component_UDivider, {
                      key: 0,
                      icon: "i-heroicons-arrow-right",
                      class: "w-20 max-sm:hidden"
                    })) : createCommentVNode("", true),
                    index < unref(page).studies.items.length - 1 ? (openBlock(), createBlock(_component_UDivider, {
                      key: 1,
                      icon: "i-heroicons-arrow-down",
                      class: "h-20 sm:hidden",
                      orientation: "vertical"
                    })) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, {
        title: unref(page).pricing.title,
        description: unref(page).pricing.description,
        headline: unref(page).pricing.headline,
        class: "pricing-bg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="pricing" class="flex justify-center scroll-mt-[calc(var(--header-height)+140px+128px)]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPricingCard, mergeProps(unref(page).pricing.plan, { class: "md:w-1/2 lg:w-1/3" }), null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                id: "pricing",
                class: "flex justify-center scroll-mt-[calc(var(--header-height)+140px+128px)]"
              }, [
                createVNode(_component_UPricingCard, mergeProps(unref(page).pricing.plan, { class: "md:w-1/2 lg:w-1/3" }), null, 16)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, {
        headline: unref(page).projects.headline,
        title: unref(page).projects.title,
        description: unref(page).projects.description
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBlogList, {
              id: "projects",
              orientation: "horizontal",
              class: "scroll-mt-[calc(var(--header-height)+140px+128px)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(page).projects.items, (project, index) => {
                    _push3(ssrRenderComponent(_component_UBlogPost, mergeProps({
                      key: index,
                      ref_for: true
                    }, project), {
                      description: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${project.description ?? ""}</span>`);
                        } else {
                          return [
                            createVNode("span", {
                              innerHTML: project.description
                            }, null, 8, ["innerHTML"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(page).projects.items, (project, index) => {
                      return openBlock(), createBlock(_component_UBlogPost, mergeProps({
                        key: index,
                        ref_for: true
                      }, project), {
                        description: withCtx(() => [
                          createVNode("span", {
                            innerHTML: project.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 2
                      }, 1040);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBlogList, {
                id: "projects",
                orientation: "horizontal",
                class: "scroll-mt-[calc(var(--header-height)+140px+128px)]"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(page).projects.items, (project, index) => {
                    return openBlock(), createBlock(_component_UBlogPost, mergeProps({
                      key: index,
                      ref_for: true
                    }, project), {
                      description: withCtx(() => [
                        createVNode("span", {
                          innerHTML: project.description
                        }, null, 8, ["innerHTML"])
                      ]),
                      _: 2
                    }, 1040);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ULandingSection, { class: "relative overflow-hidden bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULandingCTA, mergeProps(unref(page).cta, { card: false }), null, _parent2, _scopeId));
            _push2(`<div class="absolute top-1/2 left-1/2 h-4/5 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 blur-sm mix-blend-difference pointer-events-none spotlight"${_scopeId}></div>`);
          } else {
            return [
              createVNode(_component_ULandingCTA, mergeProps(unref(page).cta, { card: false }), null, 16),
              createVNode("div", { class: "absolute top-1/2 left-1/2 h-4/5 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 blur-sm mix-blend-difference pointer-events-none spotlight" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B-CbkY_W.mjs.map
