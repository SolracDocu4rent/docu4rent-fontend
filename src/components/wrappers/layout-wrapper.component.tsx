'use client';
import { ReactNode } from 'react';
import { RouteGuard } from '@/components/security/route-guard.component';



export const LayoutWrapperComponent = ({ children }: { children: ReactNode }) => {
  return <RouteGuard>{children}</RouteGuard>;
};
