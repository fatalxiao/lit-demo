/**
 * @file simple-greeter-react.ts
 */

'use client';

import { createComponent } from '@lit/react';
import React from 'react';
import { SimpleGreeter } from './simple-greeter';

export default createComponent({
    react: React,
    tagName: 'simple-greeter',
    elementClass: SimpleGreeter,
});
