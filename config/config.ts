/**
 * Custom Configuration
 * --------------------
 * Copy the settings you want to override from `config.example.ts` into this file.
 *
 * This file exists to avoid build-time "module not found" warnings in Next.js
 * when no custom config is present yet.
 */

import type { Config } from './config.example';
import { config as exampleConfig } from './config.example';

export const config = {
  // Job alerts are off in production until an Encharge write key is configured
  jobAlerts: {
    ...exampleConfig.jobAlerts,
    enabled: process.env.NODE_ENV !== 'production',
  },
} satisfies Partial<Config>;
