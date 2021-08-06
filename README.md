# rescript-use-subscription

This is a zero-cost ReScript binding package for use with [use-subscription](https://github.com/facebook/react/tree/main/packages/use-subscription)

## Usage

Usage is essentially the same as the javascript package:

```reasonml
let {useSubscription} = module(UseSubscription)

@react.component
let make = () => {
  let options = React.useMemo(() => {
    UseSubscription.getCurrentValue: () => Some(1),
    subscribe: callback => {
      callback(. Some(1))

      (.) => ()
    },
  })
  let val = useSubscription(options)

  <div>{val->Belt.Option.mapWithDefault(React.null, React.int)}</div>
}
```

Uncurried functions are used to eliminate overhead from the ReScript generated output.
