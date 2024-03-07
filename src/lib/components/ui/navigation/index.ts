import { get, writable } from "svelte/store";

export const dir = writable<"r" | "l" | null>(null);
export const selected = writable<number | null>(null);

export const handleSetSelected = (val: number | null) => {
    const $selected = get(selected);
    if (typeof $selected === "number" && typeof val === "number") {
        dir.set($selected > val ? "r" : "l")
    } else if (val === null) {
        dir.set(null)
    }

    selected.set(val);
};

export { default as Arrow } from "./Arrow.svelte";
export { default as Bridge } from "./Bridge.svelte";
export { default as Content } from "./Content.svelte";
export { default as DefaultContent } from "./DefaultContent.svelte";
export { default as Tab } from "./Tab.svelte";
export { default as Tabs } from "./Tabs.svelte";