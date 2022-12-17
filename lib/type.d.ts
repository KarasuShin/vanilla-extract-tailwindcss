declare type AtomicProperties = {
  [Property in keyof import('@vanilla-extract/css').CSSProperties]?: Record<string, import('@vanilla-extract/css').CSSProperties[Property] | Omit<import('@vanilla-extract/css').StyleRule, '@media' | '@supports' | '@container' | 'selector'>> | ReadonlyArray<import('@vanilla-extract/css').CSSProperties[Property]>;
}
