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

export function rewriteAssetPaths(content) {
  return content
    .replace(
      /(src|href|poster)=("|')\/(img|videos)\//g,
      (_match, attr, quote, folder) => `${attr}=${quote}${basePath}${folder}/`,
    )
    .replace(
      /url\((["']?)\/(img|videos)\//g,
      (_match, quote, folder) => `url(${quote}${basePath}${folder}/`,
    );
}
