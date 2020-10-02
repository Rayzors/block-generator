const PROJECT_ACF_PATH = {
  nuxt: './admin/web/app/mu-plugins/ACF/acf-json',
  sage: './site/web/app/mu-plugins/ACF/acf-json',
};

const PROJECT_ASSETS_PATH = {
  nuxt: './site/assets',
  sage: './site/web/app/themes/[theme]/resources/assets',
};

const GLOBAL_ENV_PATH = {
  nuxt: './site',
  sage: './site/web/app/themes/[theme]',
};

module.exports = {
  PROJECT_ACF_PATH,
  GLOBAL_ENV_PATH,
  PROJECT_ASSETS_PATH
};
