import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.schunshang.bij.vfrg',
  name: '777影视',
  groups: [
    {
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
        'com.schunshang.bij.vfrg.MainActivity',
      ],
      rules: [
        {
          name: 'x在右上角，界面更大1',
          matches: [
            '@ImageView < FrameLayout <2 FrameLayout[childCount=5] < FrameLayout[childCount=2] < FrameLayout[childCount=2] <<2 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15211771'],
        },
        {
          name: 'x在右上角，界面更大2',
          matches: [
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout[childCount=2] <<2 [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/15211593',
            'https://i.gkd.li/import/15211416',
          ],
        },
        {
          name: 'x在左上角，界面更大',
          matches: [
            '@ImageView < FrameLayout <3 FrameLayout[childCount=5] <2 FrameLayout[childCount=3] <<2 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15211580'],
        },
        {
          name: 'x在右上角，会上下弹跳，等待弹跳完成点击',
          matches: [
            '@Image <<2 View[childCount=7] < View[childCount=2] -2 View <<7 FrameLayout -3 FrameLayout <<4 FrameLayout -2 FrameLayout <<3 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15209433'],
        },
        {
          name: '点击跳过',
          matches: ['@TextView[text="跳过"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/15211435',
            'https://i.gkd.li/import/15211809',
          ],
        },
        {
          name: 'x在左上角1',
          matches: [
            '@ImageView <<2 ViewGroup <3 ViewGroup[childCount=5] <<5 [vid="ksad_tk_view"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/15209146',
            'https://i.gkd.li/import/15211419',
          ],
        },
        {
          name: 'x在中间',
          matches: [
            '@ImageView < FrameLayout <5 FrameLayout[childCount=6] <2 FrameLayout[childCount=4] <<2 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15211779'],
        },
        {
          name: 'x在右上角1，可以直接得到vid',
          matches: ['@ImageView[vid="anythink_myoffer_btn_close_id"]'],
          snapshotUrls: ['https://i.gkd.li/import/15209464'],
        },
        {
          name: 'x在右上角2',
          matches: [
            '@ImageView <<2 LinearLayout <2 LinearLayout[childCount=2] <<4 FrameLayout <3 FrameLayout[childCount=3] <<2 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15211818'],
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
      activityIds: ['com.schunshang.bij.vfrg.MainActivity'],
      rules: [
        {
          matches: ['@View[desc="我知道了"]'],
          snapshotUrls: ['https://i.gkd.li/import/15209120'],
        },
      ],
    },
    {
      name: '局部广告',
      key: 6,
      desc: '搜索页面的广告，点击 x',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: ['com.schunshang.bij.vfrg.MainActivity'],
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout - LinearLayout[childCount=2] > TextView[height=43 && right=903]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/15211460',
            'https://i.gkd.li/import/15211487',
            'https://i.gkd.li/import/15211533',
          ],
        },
      ],
    },
    {
      name: '功能类',
      key: 9,
      desc: '左上角更大，无法点击',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout <3 FrameLayout[childCount=5] <2 FrameLayout[childCount=3] <<2 [id="android:id/content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/15211793'],
        },
      ],
    },
  ],
});
