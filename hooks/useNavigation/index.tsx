import { useRouter } from 'next/router';
import { RouteUrl } from '../../utils/enums/routesUrl';

export const useNavigation = () => {
  const router = useRouter();

  const redirect = (url: RouteUrl) => {
    router.push(url);
  };
  const replace = (route: string) => {
    router.replace(route);
  };
  const back = () => {
    router.back();
  };

  return {
    redirect,
    replace,
    back,
  };
};
