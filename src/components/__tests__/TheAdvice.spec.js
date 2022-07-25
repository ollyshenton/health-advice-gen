import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheAdvice from "@/components/TheAdvice.vue";
import Dice from "@/components/Dice.vue";

describe("TheAdvice", () => {
  it("renders properly", () => {
    const wrapper = mount(TheAdvice, {
      props: { advice: { advice: "text here" } },
    });
    expect(wrapper.text()).toContain("text here");
    expect(wrapper.findComponent(Dice).exists()).toBe(true);
  });
});
