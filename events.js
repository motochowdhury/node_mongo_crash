// Core Module
const events = require("events");
const eventEmmiter = new events.EventEmitter();

// Event handler
const eventHandler = () => {
  console.log("This is my first event handling");
};

// Event assign
eventEmmiter.on("excited", eventHandler).eventHandler;

// firing the event
eventEmmiter.emit("excited");
