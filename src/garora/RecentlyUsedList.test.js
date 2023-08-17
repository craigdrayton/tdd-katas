import { describe, expect, it } from "@jest/globals";
import RecentlyUsedList from "./RecentlyUsedList";

describe("recentlyUsed", () => {
  it("Should return an empty list initially", () => {
    const list = new RecentlyUsedList();
    expect(list.items).toEqual([]);
  });

  it("allows a string to be added to a list", () => {
    const list = new RecentlyUsedList();
    list.add("hello");

    expect(list.items).toEqual(["hello"]);
  });

  it("orders strings from most recently added to least recently added", () => {
    const list = new RecentlyUsedList();
    list.add("world");
    list.add("hello");

    expect(list.items).toEqual(["hello", "world"]);
  });

  it("returns items by index", () => {
    const list = new RecentlyUsedList();
    list.add("world");
    list.add("hello");
    const item = list.items[0];

    expect(item).toEqual("hello");
  });

  it("moves re-added items to the front rather than duplicating them", () => {
    const list = new RecentlyUsedList();
    list.add("welcome");
    list.add("world");
    list.add("hello");
    list.add("world");

    expect(list.items).toEqual(["world", "hello", "welcome"]);
  });

  it("rejects empty strings with a TypeError", () => {
    const list = new RecentlyUsedList();

    expect(() => list.add("")).toThrowError(TypeError);
  });

  it("rejects non string values with a TypeError", () => {
    const list = new RecentlyUsedList();

    expect(() => list.add(3)).toThrowError(TypeError);
  });

  it("drops oldest items if capacity limit exceeded", () => {
    const list = new RecentlyUsedList({ limit: 3 });
    list.add("right");
    list.add("here");
    list.add("are");
    list.add("you");

    expect(list.items).toEqual(["you", "are", "here"]);
  });
});
