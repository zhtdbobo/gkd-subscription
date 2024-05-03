import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiangzi.dislikecn',
  name: 'Dislike',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      desc: '点击 跳过',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < [vid="csj_ad_container"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15201680'],
        },
        {
          matches: [
            '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="csj_ad_container"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15196702'],
        },
      ],
    },
  ],
});
