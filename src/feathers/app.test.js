import { describe, expect, it } from "@jest/globals";
import MessageService from "./app";

describe("MessageService", () => {
  it("Returns a list of messages", async () => {
    const messages = new MessageService();
    const actual = await messages.find();
    expect(actual).toEqual([]);
  });

  it("Creates a new message", async () => {
    const messages = new MessageService();

    const input = { text: "Hello, world!" };
    const expected = { id: 0, ...input };
    const actual = await messages.create(input);

    expect(actual).toEqual(expected);
  });

  it("Throws if no text property provided", () => {
    const messages = new MessageService();
    expect(() => messages.create()).toThrowError(TypeError);
  });

  it("Throws if data.text is not a string", () => {
    const messages = new MessageService();
    expect(() => messages.create({ text: 1 })).toThrowError(TypeError);
  })
});
