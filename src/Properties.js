// property decorator for class properties that assigns a property to the class before the constructor
// useful for backbone properties working with classes
// e.g. @prop
// TODO: add tests and error conditions
export function prop(target, name, descriptor) {
  target[name] = descriptor.initializer();
}

// property decorator for class properties that assigns a property to the class prototype before the constructor
// e.g. @protoProp
// TODO: add tests and error conditions
export function protoProp(target, name, descriptor) {
  target.prototype[name] = descriptor.initializer();
}
