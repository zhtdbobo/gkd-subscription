import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.schunshang.bij.vfrg',
  name: '777影视',
  groups: [
    {
      enable: false,
      name: '全屏广告',
      key: 7,
      desc: '点击 x',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.anythink.basead.ui.ATPortraitTranslucentActivity',
      ],
      rules: [
        {
          name: 'x在右上角，会上下弹跳，等待弹跳完成点击',
          matches: [
            '@View <<2 View[childCount=2] -2 View <<7 FrameLayout -3 FrameLayout <<4 FrameLayout -2 FrameLayout <<3 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15209433'],
        },
        {
          name: 'x在左上角',
          matches: [
            '@ViewGroup < ViewGroup <3 ViewGroup[childCount=5] <<5 [vid="ksad_tk_view"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15209146'],
        },
        {
          name: 'x在右上角',
          matches: ['@ImageView - [vid="anythink_myoffer_feedback_ll_id"]'],
          snapshotUrls: ['https://i.gkd.li/import/15209464'],
        },
      ],
    },
    {
      name: '开屏广告',
      key: 0,
      desc: '点击 我知道了',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@View[desc="我知道了"]'],
          snapshotUrls: ['https://i.gkd.li/import/15209120'],
        },
      ],
    },
  ],
});
