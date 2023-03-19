import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';

const ROOT_PATH = '/';

export const useRouterHelper = () => {
  const location = useLocation();

  const includePath = useCallback(
    (path: string): boolean => {
      const currentPath = location.pathname;
      return currentPath.includes(path);
    },
    [location.pathname]
  );

  const includeHash = useCallback(
    (path: string): boolean => {
      const { hash: currentPath } = location;
      return currentPath.includes(path);
    },
    [location]
  );

  const includePathWithoutRoot = useCallback(
    (path: string) => {
      const currentPath = location.pathname;
      if (path !== ROOT_PATH) {
        return currentPath.includes(path);
      }
      const match = Boolean(currentPath.match(path));
      return match && currentPath === match[0];
    },
    [location.pathname]
  );

  const isRootPath = useCallback((path: string) => {
    return path === ROOT_PATH;
  }, []);

  const isPathEndWith = useCallback(
    (part: string): boolean => {
      return location.pathname.endsWith(part);
    },
    [location.pathname]
  );

  return { includePath, includeHash, includePathWithoutRoot, isRootPath, isPathEndWith };
};
