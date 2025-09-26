'use client';

import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';

// biar aman di TS: ref & props kita anggap generic
export type GlobeRef = any;
type RGProps = Record<string, any>;

// load hanya di client (WebGL)
const RG = dynamic(() => import('react-globe.gl'), { ssr: false }) as unknown as
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<RGProps> & React.RefAttributes<GlobeRef>
  >;

const GlobeClient = forwardRef<GlobeRef, RGProps>(function GlobeClient(props, ref) {
  return <RG {...props} ref={ref} />;
});

export default GlobeClient;
