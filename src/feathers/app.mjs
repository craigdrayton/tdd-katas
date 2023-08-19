export default class MessageService {
  constructor() {
    this.messages = [];
  }

  find() {
    return this.messages;
  }

  create(data) {
    if (!data || !data.text) {
      throw new TypeError("data.text is required");
    }

    if (typeof data.text !== "string") {
      throw new TypeError("data.text must be a string");
    }

    const message = {
      id: this.messages.length,
      text: data.text,
    };

    this.messages.push(message);
    return message;
  }
}
