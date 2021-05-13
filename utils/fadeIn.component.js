import React from 'react';
import { View as MotiView } from 'moti'

export const FadeIn = () => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing' }}
  />
)