import elementary from '@quarkly/elementary';

export const Box = elementary.div({
  styles: [
    'display',
    'height',
    'minHeight',
    'maxHeight',
    'width',
    'minWidth',
    'maxWidth',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexBasis',
    'flexDirection',
    'flex',
    'order',
    'justifySelf',
    'alignSelf',
    'zIndex',
  ],
  aliases: true,
});

export const Flex = elementary(Box)(
  {},
  {
    display: 'flex',
  },
);
