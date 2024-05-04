import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      desc: '点击 跳过',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.vega.main.MainActivity',
        'com.vega.export.edit.view.ExportActivity',
      ],
      rules: [
        {
          matches: ['[id="com.lemon.lv:id/home_tool_badge"]'],
          snapshotUrls: ['https://i.gkd.li/import/15208563'],
        },
        {
          matches: '@FlattenUIImage + LynxAdComponentView',
          snapshotUrls: 'https://i.gkd.li/import/12911010',
        },
      ],
    },
  ],
});
