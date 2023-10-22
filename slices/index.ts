// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  features: defineAsyncComponent(() => import("./Features/index.vue")),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue")),
  testimonials: defineAsyncComponent(() => import("./Testimonials/index.vue")),
  text_with_image: defineAsyncComponent(
    () => import("./TextWithImage/index.vue")
  ),
});
