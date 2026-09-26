const configuredBasePath = import.meta.env.BASE_URL || "/";
const basePath = configuredBasePath.endsWith("/")
  ? configuredBasePath
  : `${configuredBasePath}/`;

export function assetPath(path) {
  if (!path || /^(?:[a-z][a-z\d+\-.]*:|#)/i.test(path)) {
    return path;
  }

  return `${basePath}${path.replace(/^\/+/, "")}`;
}
