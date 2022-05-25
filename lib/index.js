var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.dev.js
var require_vanilla_extract_recipes_createRuntimeFn_cjs_dev = __commonJS({
  "node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.dev.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    var shouldApplyCompound = (compoundCheck, selections) => {
      for (var key of Object.keys(compoundCheck)) {
        if (compoundCheck[key] !== selections[key]) {
          return false;
        }
      }
      return true;
    };
    var createRuntimeFn = (config) => (options) => {
      var className2 = config.defaultClassName;
      var selections = _objectSpread2(_objectSpread2({}, config.defaultVariants), options);
      for (var variantName in selections) {
        var _selections$variantNa;
        var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
        if (variantSelection != null) {
          var selection = variantSelection;
          if (typeof selection === "boolean") {
            selection = selection === true ? "true" : "false";
          }
          var selectionClassName = config.variantClassNames[variantName][selection];
          if (selectionClassName) {
            className2 += " " + selectionClassName;
          }
        }
      }
      for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
        if (shouldApplyCompound(compoundCheck, selections)) {
          className2 += " " + compoundClassName;
        }
      }
      return className2;
    };
    exports.createRuntimeFn = createRuntimeFn;
  }
});

// node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.js
var require_vanilla_extract_recipes_createRuntimeFn_cjs = __commonJS({
  "node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_vanilla_extract_recipes_createRuntimeFn_cjs_dev();
    }
  }
});

// src/components/Input/index.tsx
import * as React from "react";

// src/components/Input/styles.css.ts
var import_createRuntimeFn = __toESM(require_vanilla_extract_recipes_createRuntimeFn_cjs());
var input = (0, import_createRuntimeFn.createRuntimeFn)({ defaultClassName: "", variantClassNames: { color: { red: "styles_color_red__1nise5x0", blue: "styles_color_blue__1nise5x1", black: "styles_color_black__1nise5x2" } }, defaultVariants: { color: "blue" }, compoundVariants: [] });

// src/components/Input/index.tsx
function Input({ variants, ...rest }) {
  return /* @__PURE__ */ React.createElement("input", {
    ...rest,
    className: input({ ...variants })
  });
}
var Input_default = Input;

// src/components/Button/index.tsx
import * as React2 from "react";

// src/components/Button/styles.css.ts
var className = "styles__12x804h0";

// src/components/Button/index.tsx
function Button({ ...rest }) {
  return /* @__PURE__ */ React2.createElement("button", {
    ...rest,
    className
  });
}
var Button_default = Button;
export {
  Button_default as Button,
  Input_default as Input
};
