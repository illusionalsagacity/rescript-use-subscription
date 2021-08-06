// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as CreateSubscription from "create-subscription";

function useSubscription(prim) {
  return CreateSubscription.useSubscription(prim);
}

function UseSubscription__test(Props) {
  var options = React.useMemo(function () {
        return {
                getCurrentValue: (function (param) {
                    return 1;
                  }),
                subscribe: (function (callback) {
                    callback(1);
                    return function () {
                      
                    };
                  })
              };
      });
  var val = CreateSubscription.useSubscription(options);
  return React.createElement("div", undefined, Belt_Option.mapWithDefault(val, null, (function (prim) {
                    return prim;
                  })));
}

var make = UseSubscription__test;

export {
  useSubscription ,
  make ,
  
}
/* react Not a pure module */