import React from 'react';
import { AlertCircle, CalendarClock, ChevronRight, GraduationCap, Shield, Sparkles } from 'lucide-react';
import { Button, Card, Chip, Layout, Money, ProgressBar, SafetyNote, TopBar } from '../components/shared';

export const Report = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <TopBar title="家庭财务初诊报告" onBack={() => navigate('assessment')} rightIcon={null} />
    <div className="px-5 pb-7">
      <section className="mb-5 mt-2 text-center">
        <Chip tone="orange" className="mb-3 !rounded-full"><Sparkles className="mr-1 h-4 w-4" />专属诊断已生成</Chip>
        <h1 className="text-[26px] font-semibold">家庭画像：小学投入型家庭</h1>
        <p className="mt-2 text-[14px] text-[#8A7A72]">基于您提供的信息综合评估</p>
      </section>

      <Card className="mb-4 text-center">
        <p className="mb-2 text-[15px] font-semibold text-[#8A7A72]">财务健康分</p>
        <div className="amount text-[64px] font-bold leading-none">86</div>
        <p className="mt-3 rounded-full bg-[#EFFBF6] px-3 py-1 text-[13px] font-semibold text-[#21A777]">领先于同城 86% 同类家庭</p>
      </Card>

      <Card className="mb-4 border-[#FFE1C6] bg-[#FFF8EF]">
        <h2 className="mb-3 flex items-center gap-2 text-[18px] font-semibold"><AlertCircle className="h-5 w-5 text-[#F37B16]" />最大问题</h2>
        <p className="text-[17px] font-semibold">兴趣班支出偏高</p>
        <p className="mt-2 text-[14px] leading-7 text-[#6D5D55]">本月建议：先复盘现有课程，不新增长期课包。</p>
      </Card>

      <Card className="mb-4">
        <h2 className="mb-3 flex items-center gap-2 text-[18px] font-semibold"><CalendarClock className="h-5 w-5 text-[#E60012]" />未来一年关键提醒</h2>
        <ReportRow num="1" title="完成教育金基础配置" text="教育金初步缺口 ¥272,000，建议逐步建立月储备计划。" />
        <ReportRow num="2" title="补充父母保障" text="保障初步建议：优先补齐家庭经济支柱重疾保障。" last />
      </Card>

      <div className="mb-6 grid grid-cols-2 gap-3">
        <Card className="!p-4"><GraduationCap className="mb-3 h-6 w-6 text-[#5B8DEE]" /><h3 className="text-[15px] font-semibold">教育金初步缺口</h3><Money value="272,000" className="mt-2 block text-[23px] font-bold" /><ProgressBar value={32} color="#5B8DEE" className="mt-3" /></Card>
        <Card className="!p-4"><Shield className="mb-3 h-6 w-6 text-[#43C6B8]" /><h3 className="text-[15px] font-semibold">保障初步建议</h3><p className="mt-2 text-[13px] leading-6 text-[#6D5D55]">补充父母保障，避免教育金计划中断</p></Card>
      </div>

      <Button onClick={() => navigate('home')}>进入首页 <ChevronRight className="h-5 w-5" /></Button>
      <SafetyNote />
    </div>
  </Layout>
);

const ReportRow = ({ num, title, text, last }: any) => (
  <div className={`flex gap-3 py-3 ${last ? '' : 'border-b border-[#F2E8E2]'}`}>
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F6FF] text-[15px] font-bold text-[#5B8DEE]">{num}</span>
    <div><h3 className="text-[15px] font-semibold">{title}</h3><p className="mt-1 text-[13px] leading-6 text-[#8A7A72]">{text}</p></div>
  </div>
);
