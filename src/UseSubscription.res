type options<'value> = {
  getCurrentValue: unit => 'value,
  subscribe: ((. 'value) => unit) => (. unit) => unit,
}

@module("use-subscription")
external useSubscription: (options<'value>) => 'value = "useSubscription"
