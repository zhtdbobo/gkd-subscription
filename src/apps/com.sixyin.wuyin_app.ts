import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sixyin.wuyin_app',
  name: '五音助手',
  groups: [
    {
      enable: false,
      name: '全屏广告',
      key: 7,
      desc: '点击 今天不显示',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      activityIds: ['com.sixyin.wuyin_app.MainActivity'],
      rules: [
        {
          matches: [
            '@Button[desc="今天不显示"] <3 View[childCount=4] <<6 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15208563'],
        },
      ],
    },
  ],
});
