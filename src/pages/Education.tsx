import React from 'react';
import { Bot, Check, ChevronRight, Edit3, Info } from 'lucide-react';
import { BotAvatar, Button, Card, Layout, Money, ProgressBar, SafetyNote, TopBar } from '../components/shared';

export const Education = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <TopBar title="教育金规划" onBack={() => navigate('plan')} />
    <div className="px-5 pb-7">
      <section className="relative mb-6 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#5B95F5_0%,#8EE5D1_100%)] p-5 text-white shadow-[0_10px_24px_rgba(73,132,215,.2)]">
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-2 text-[16px] font-semibold">为小宇规划美好未来 <Edit3 className="h-4 w-4" /></div>
          <p className="text-[14px] opacity-90">目标金额</p>
          <div className="amount mb-7 text-[48px] font-bold leading-none">¥400,000</div>
          <div className="grid grid-cols-3 divide-x divide-white/35">
            <Metric label="已储备" value="¥128,000" />
            <Metric label="还差" value="¥272,000" />
            <Metric label="建议每月储备" value="¥3,200" info />
          </div>
        </div>
        <img src="/cap.png" alt="" className="absolute right-8 top-14 h-[74px] w-[74px] opacity-95" />
        <div className="absolute bottom-6 right-4 h-14 w-28 rounded-[50%] bg-white/25 blur-sm" />
      </section>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-1 text-[18px] font-semibold">升学路线规划 <Info className="h-4 w-4 text-[#B8ABA4]" /></h2>
        <button className="flex items-center text-[13px] text-[#9A8B84]">了解更多路线 <ChevronRight className="h-4 w-4" /></button>
      </div>
      <div className="mb-7 grid grid-cols-3 gap-3">
        <RouteCard active icon="/cap.png" title="国内本科" amount="400,000" />
        <RouteCard icon="/family.png" title="民办本科" amount="680,000" tone="purple" />
        <RouteCard icon="/growth-chart.png" title="国际路线" amount="1,200,000" tone="green" />
      </div>

      <h2 className="mb-5 text-[18px] font-semibold">教育阶段规划</h2>
      <div className="relative mb-7 grid grid-cols-4 text-center">
        <div className="absolute left-10 right-10 top-6 h-1 rounded-full bg-[#ECE6E2]" />
        <div className="absolute left-10 top-6 h-1 w-[32%] rounded-full bg-[#5B8DEE]" />
        <Stage img="/cap.png" label="小学" age="6-12岁" state="已完成" color="#5B8DEE" />
        <Stage label="初中" age="12-15岁" state="进行中" color="#43C6B8" />
        <Stage label="高中" age="15-18岁" state="未来规划" color="#FFB05B" />
        <Stage label="大学" age="18-22岁" state="未来规划" color="#69C56D" />
      </div>

      <h2 className="mb-4 text-[18px] font-semibold">费用对比 <span className="text-[13px] font-normal text-[#9A8B84]">（预计总费用）</span></h2>
      <div className="mb-6 space-y-4">
        <Compare label="国内本科" amount="¥400,000" value={38} color="#5B8DEE" />
        <Compare label="民办本科" amount="¥680,000" value={58} color="#9A77DE" />
        <Compare label="国际路线" amount="¥1,200,000" value={96} color="#61BE82" />
      </div>

      <Card className="mb-6 flex items-center gap-4 border-[#DDE8FF] bg-[#F3F7FF]">
        <BotAvatar size={58} />
        <div className="flex-1">
          <h3 className="mb-1 flex items-center gap-2 text-[18px] font-semibold text-[#3768C9]"><Bot className="h-5 w-5" />AI 规划建议</h3>
          <p className="text-[14px] leading-6 text-[#4A5568]">当前更适合先建立稳健型教育金账户，再逐步增加长期储备。</p>
        </div>
        <button className="flex items-center text-[13px] font-semibold text-[#4F85EA]">查看详情 <ChevronRight className="h-4 w-4" /></button>
      </Card>

      <Button onClick={() => navigate('plan')}>开始目标计划</Button>
      <SafetyNote />
    </div>
  </Layout>
);

const Metric = ({ label, value, info }: any) => (
  <div className="px-3 first:pl-0">
    <p className="mb-2 flex items-center gap-1 text-[13px] opacity-85">{label}{info && <Info className="h-3.5 w-3.5" />}</p>
    <p className="amount text-[22px] font-semibold">{value}</p>
  </div>
);

const RouteCard = ({ active, icon, title, amount, tone = 'blue' }: any) => {
  const map: any = { blue: '#5B8DEE', purple: '#9A77DE', green: '#61BE82' };
  return (
    <Card className={`relative min-h-[128px] !p-3 ${active ? 'border-[#5B8DEE] ring-1 ring-[#5B8DEE]' : ''}`}>
      <img src={icon} alt="" className="mb-3 h-8 w-8 object-contain" />
      <h3 className="mb-2 text-[15px] font-semibold">{title}</h3>
      <p className="mb-1 text-[12px] text-[#9A8B84]">预计总费用</p>
      <Money value={amount} className="text-[18px] font-bold" />
      {active ? <span className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#5B8DEE] text-white"><Check className="h-4 w-4" /></span> : <span className="absolute bottom-3 right-3 h-6 w-6 rounded-full border border-[#E2D8D2]" />}
      <span className="absolute left-3 top-3 h-8 w-8 rounded-full opacity-10" style={{ background: map[tone] }} />
    </Card>
  );
};

const Stage = ({ img, label, age, state, color }: any) => (
  <div className="relative z-10 flex flex-col items-center">
    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_5px_14px_rgba(40,30,20,.08)] ring-4" style={{ color, ['--tw-ring-color' as any]: `${color}22` }}>
      {img ? <img src={img} alt="" className="h-7 w-7" /> : <span className="h-5 w-5 rounded-md" style={{ background: color }} />}
    </div>
    <span className="text-[15px] font-semibold">{label}</span>
    <span className="text-[12px] text-[#8A7A72]">{age}</span>
    <span className="mt-1 text-[12px] font-semibold" style={{ color }}>{state}</span>
  </div>
);

const Compare = ({ label, amount, value, color }: any) => (
  <div className="grid grid-cols-[72px_1fr_88px] items-center gap-3 text-[14px]">
    <span className="text-[#6D5D55]">{label}</span>
    <ProgressBar value={value} color={color} className="h-2" />
    <span className="amount text-right font-semibold">{amount}</span>
  </div>
);
