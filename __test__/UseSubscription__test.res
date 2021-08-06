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
