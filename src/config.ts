import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: '博博的GKD订阅',
  author: '博博',
  supportUri: 'https://github.com/zhtdbobo/gkd-subscription',
  updateUrl:
    'https://registry.npmmirror.com/@zhtdbobo/gkd-subscription/latest/files',
  checkUpdateUrl:
    'https://registry.npmmirror.com/@zhtdbobo/gkd-subscription/latest/files/dist/zhtdbobo_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
