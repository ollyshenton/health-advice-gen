import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Dice from "@/components/Dice.vue";

describe("Dice.vue", () => {
  it("basic check dice is here", () => {
    const wrapper = shallowMount(Dice, {
      props: {},
    });
    expect(wrapper.find("#dice-wrapper")).toBeTruthy();
  });
});
