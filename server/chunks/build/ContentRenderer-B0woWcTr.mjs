import { defineComponent, watch, useSlots, h, useSSRContext } from 'vue';
import _sfc_main$1 from './ContentRendererMarkdown-kMgStrZh.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'property-information';
import './node-04k6j4dz.mjs';
import 'vue/server-renderer';
import './preview-iiocoqHO.mjs';
import './server.mjs';
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

const _sfc_main = defineComponent({
  name: "ContentRenderer",
  props: {
    /**
     * The document to render.
     */
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        var _a, _b, _c;
        if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
          console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    const markdownAST = excerpt ? value == null ? void 0 : value.excerpt : value == null ? void 0 : value.body;
    if (!((_a = markdownAST == null ? void 0 : markdownAST.children) == null ? void 0 : _a.length) && (slots == null ? void 0 : slots.empty)) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if ((markdownAST == null ? void 0 : markdownAST.type) === "root" && ((_b = markdownAST == null ? void 0 : markdownAST.children) == null ? void 0 : _b.length)) {
      return h(
        _sfc_main$1,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+content@2.13.4_ioredis@5.4.1_magicast@0.3.5_nuxt@3.13.2_@parcel+watcher@2.4.1_@types+no_qa7mrztxm6vz5jlo2z6dn27ymy/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentRenderer-B0woWcTr.mjs.map
