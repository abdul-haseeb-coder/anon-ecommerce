import nextTranslate from 'next-translate';
import i18nConfig from './i18n';

const nextConfig = {
  ...nextTranslate(i18nConfig),
};

export default nextConfig;

