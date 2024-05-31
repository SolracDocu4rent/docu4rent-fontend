'use client';
import { ReactNode } from 'react';
import { RouteGuard } from '@/Components/security/route-guard.component';



export const LayoutWrapperComponent = ({ children }: { children: ReactNode }) => {
  return <RouteGuard>{children}</RouteGuard>;
};
