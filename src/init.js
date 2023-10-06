import { initState } from "./state";
// add init method on Ugh
export function initMixin(Ugh) {
  Ugh.prototype._init = function (options) {
    // attach options to the instance
    const vm = this;
    vm.$options = options;

    // init the status
    initState(vm);
  };
}
