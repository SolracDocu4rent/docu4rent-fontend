'use client';
import { onAuthStateChanged } from 'firebase/auth';
import Lottie from 'lottie-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import loadingAnimation from '@/animations/loading.json';

import { auth } from '@/firebase/firebase';

import { AVAILABLE_ROUTES, ONLY_UNAUTHENTICATED_ROUTES, PRIVATE_ROUTES } from '@/constants/routes.constants';
import firebaseServiceInstance from '@/services/firebase.service';

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const [user, loading] = useAuthState(auth);
  const [fetching, setFetching] = useState(false);

  function showLoadingAnimation() {
    return (
      loading ||
      fetching ||
      (!user && PRIVATE_ROUTES.includes(pathName)) ||
      (user && ONLY_UNAUTHENTICATED_ROUTES.includes(pathName)) ||
      !isRouteAvailable(pathName)
    );
  }

  function isRouteAvailable(route: string): boolean {
    return AVAILABLE_ROUTES.some((availableRoute) => {
      const availableRoutePrefix = availableRoute.split('*')[0];
      return route.startsWith(availableRoutePrefix);
    });
  }


  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      if (!isRouteAvailable(pathName)) {
        router.replace('/home');
        return;
      }
      const isAuthenticated = !!user;
      if (isAuthenticated) {
        setFetching(() => true);
        const userData = await firebaseServiceInstance.getCurrentUser();

      }
      if (ONLY_UNAUTHENTICATED_ROUTES.includes(pathName)) {
        router.replace('/home');
        return setFetching(() => false);
      }
      if (PRIVATE_ROUTES.includes(pathName)) {
        router.replace('/login');
        return;
      }
      setFetching(() => false);
    });
    return () => listener();
  }, [pathName, router]);
  return showLoadingAnimation() ? (
    <Lottie className=" h-80 block mt-[20%]" animationData={loadingAnimation} loop={true} />
  ) : (
    <>{children}</>
  );
}
