import React from 'react';
import { BellRing, BookHeart, Camera, ChevronRight, PenLine } from 'lucide-react';
import { Card, CategoryMini, Layout, ListRow, Money, QuickAction, SectionTitle, TopBar } from '../components/shared';

export const LedgerHome = ({ navigate }: any) => (
  <Layout currentTab="ledger" navigate={navigate}>
    <TopBar title="亲子成长账本" rightIcon={null} />
    <div className="px-5 pb-7">
      <h1 className="mb-5 mt-2 text-[25px] font-semibold leading-tight text-[#2B1712]">每一笔支出，<br />都可以成为成长记录</h1>

      <Card onClick={() => navigate('expenses')} className="mb-4">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="mb-1 text-[14px] text-[#8A7A72]">本月育儿支出总览</p>
            <Money value="5,260" className="text-[42px] font-bold leading-none" />
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0ED] text-[#E60012]"><ChevronRight /></span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          <CategoryMini label="必要" amount="2,230" percent="42%" color="#21B38E" bg="#EFFBF6" />
          <CategoryMini label="成长" amount="1,960" percent="37%" color="#4F85EA" bg="#F2F6FF" />
          <CategoryMini label="焦虑" amount="680" percent="13%" color="#F37B16" bg="#FFF4E9" />
          <CategoryMini label="风险" amount="390" percent="8%" color="#EF3E39" bg="#FFF0EF" />
        </div>
      </Card>

      <Card onClick={() => navigate('interest_class')} className="mb-4 border-[#FFE1C6] bg-[#FFF8EF]">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F37B16]"><BellRing className="h-5 w-5" /></span>
          <div className="flex-1">
            <h2 className="mb-1 text-[16px] font-semibold text-[#7A3E08]">焦虑消费提醒 <span className="rounded-full bg-[#FF8D2E] px-2 py-0.5 text-[11px] text-white">需关注</span></h2>
            <p className="text-[13px] leading-6 text-[#9A6434]">14天内连续新增 2 个长期课包，可能属于焦虑型消费，点击查看分析。</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[#B78951]" />
        </div>
      </Card>

      <div className="mb-6 grid grid-cols-2 gap-3">
        <QuickAction icon={<Camera className="h-5 w-5" />} label="上传截图" />
        <QuickAction icon={<PenLine className="h-5 w-5" />} label="记录成长" />
      </div>

      <SectionTitle title="支出明细" action="全部明细" onAction={() => navigate('expenses')} />
      <Card className="mb-4">
        <ListRow icon="ABC" title="英语课续费（秋季班）" subtitle="长期课包 · 已上 2 次 / 共 24 次" tag="焦虑型" tagTone="orange" date="06-08" amount="1,580" onClick={() => navigate('interest_class')} />
        <ListRow icon="+" title="儿童医院（感冒就诊）" subtitle="医疗健康" tag="必要" tagTone="green" date="06-07" amount="320" />
        <ListRow icon="🏀" title="篮球课（周末班）" subtitle="兴趣培养 · 第 3 次课" tag="成长型" tagTone="blue" date="06-05" amount="680" />
      </Card>

      <Card className="border-[#DDF1E8] bg-[#F3FCF8]">
        <h2 className="mb-2 flex items-center gap-2 text-[17px] font-semibold text-[#10845F]"><BookHeart className="h-5 w-5" />成长账本入口</h2>
        <p className="text-[13px] leading-6 text-[#65786F]">把训练、阅读、看病、旅行等支出与成长瞬间关联，留下孩子的成长账本。</p>
      </Card>
    </div>
  </Layout>
);
