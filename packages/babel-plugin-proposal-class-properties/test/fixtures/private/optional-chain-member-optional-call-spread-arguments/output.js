var _m = new WeakMap();

class Foo {
  constructor() {
    _m.set(this, {
      writable: true,
      value: void 0
    });
  }

  init() {
    babelHelpers.classPrivateFieldSet(this, _m, (...args) => args);
  }

  static test() {
    const f = new Foo();
    f.init();
    return babelHelpers.classPrivateFieldGet(f, _m)?.apply(f, arguments);
  }

  static testNull() {
    const f = new Foo();
    return babelHelpers.classPrivateFieldGet(f, _m)?.apply(f, arguments);
  }

}
