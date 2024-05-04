import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.file.function',
  name: '极光影院',
  groups: [
    {
      enable: false,
      name: '权限提示',
      key: -1,
      desc: '点击 同意并进入',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      activityIds: ['com.file.function.SplashActivity2'],
      rules: [
        {
          matches: ['@TextView[text="同意并进入"]'],
          snapshotUrls: ['https://i.gkd.li/import/15208333'],
        },
      ],
    },
    {
      enable: false,
      name: '局部广告',
      key: 6,
      desc: '点击 x',
      quickFind: true,
      activityIds: ['com.file.function.MainActivity'],
      rules: [
        {
          name: 'x在右上角',
          matches: [
            '@ImageView <<5 FrameLayout[childCount=3] <<4 [vid="home_ad"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15208392'],
        },
        {
          name: 'x在右下角',
          matches: [
            '@ImageView < FrameLayout -3 ImageView < FrameLayout[childCount=4] - LinearLayout[childCount=2] <<4 [vid="home_ad"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15208441'],
        },
      ],
    },
  ],
});
