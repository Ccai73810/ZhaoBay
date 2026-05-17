import React from 'react';
import { AlertCircle, Bot, CalendarCheck, ChevronRight, MessageCircle, PieChart, SmilePlus } from 'lucide-react';
import { BotAvatar, Button, Card, Chip, Layout, Money, ProgressBar, SafetyNote, TopBar } from '../components/shared';

export const InterestClass = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <TopBar title="单笔支出分析" onBack={() => navigate('expenses')} rightIcon={null} />
    <div className="px-5 pb-7">
      <section className="mb-5 mt-2 text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#E9FFF4] text-[15px] font-bold text-[#21A777]">ABC</div>
        <h1 className="mb-2 text-[20px] font-semibold">英语课续费（秋季班）</h1>
        <Money value="1,580" className="block text-[40px] font-bold" />
        <div className="mt-3"><Chip tone="orange" className="!rounded-full"><AlertCircle className="mr-1 h-4 w-4" />焦虑型消费</Chip></div>
      </section>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <InfoCard icon={<CalendarCheck />} label="长期课包" value="已上 2 次 / 共 24 次" progress={8} color="#5B8DEE" />
        <InfoCard icon={<PieChart />} label="预算占比" value="30%" progress={30} color="#FF9B3D" note="单项支出偏高" />
      </div>

      <Card className="mb-4">
        <h2 className="mb-3 flex items-center gap-2 text-[17px] font-semibold"><SmilePlus className="h-5 w-5 text-[#4F85EA]" />孩子兴趣反馈</h2>
        <Feedback title="兴趣反馈" text="反馈作业压力大，兴趣有所下降" />
        <Feedback title="出勤情况" text="上周缺勤 1 次，近 4 周出勤不稳定" />
        <Feedback title="预算占比" text="该笔支出占本月育儿预算 30%" last />
      </Card>

      <Card className="mb-6 border-[#FFE1C6] bg-[#FFF8EF]">
        <div className="flex gap-3">
          <BotAvatar size={46} />
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-[17px] font-semibold text-[#8B4A12]"><Bot className="h-5 w-5" />招贝分析</h2>
            <p className="text-[14px] leading-7 text-[#6D5D55]">先观察 4 周，不建议立即续长期课包。建议结合出勤和孩子反馈，再决定是否保留英语课或调整为更轻量的学习方式。</p>
          </div>
        </div>
      </Card>

      <Button onClick={() => navigate('expenses')}>设置复盘提醒 <ChevronRight className="h-5 w-5" /></Button>
      <Button onClick={() => navigate('expenses')} variant="ghost" className="mt-2">忽略，这是必要支出</Button>
      <SafetyNote />
    </div>
  </Layout>
);

const InfoCard = ({ icon, label, value, progress, color, note }: any) => (
  <Card className="!p-4">
    <p className="mb-2 flex items-center gap-1 text-[12px] text-[#8A7A72]">{React.cloneElement(icon, { className: 'h-4 w-4' })}{label}</p>
    <p className="mb-3 text-[16px] font-semibold">{value}</p>
    <ProgressBar value={progress} color={color} />
    {note && <p className="mt-2 text-[12px]" style={{ color }}>{note}</p>}
  </Card>
);

const Feedback = ({ title, text, last }: any) => (
  <div className={`flex gap-3 py-3 ${last ? '' : 'border-b border-[#F2E8E2]'}`}>
    <MessageCircle className="mt-0.5 h-4 w-4 text-[#FF9B3D]" />
    <p className="text-[14px] leading-6"><span className="font-semibold">{title}：</span>{text}</p>
  </div>
);
