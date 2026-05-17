import React from 'react';
import { AlertCircle, Bot, ChevronRight, HeartPulse, Shield, ShieldAlert, Zap } from 'lucide-react';
import { BotAvatar, Button, Card, Layout, ProgressBar, SafetyNote, TopBar } from '../components/shared';

export const Insurance = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <TopBar title="保险保障计划" onBack={() => navigate('home')} />
    <div className="px-5 pb-7">
      <Card className="mb-5 border-[#D9F1E8] bg-[#EFFFF8]">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-[15px] font-semibold text-[#16866F]">家庭保障完整度</p>
            <div className="amount text-[48px] font-bold text-[#126D5E]">78<span className="text-[24px]">%</span></div>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-[#FF5A52] px-2.5 py-1 text-[12px] font-semibold text-white">父母保障偏弱</span>
              <span className="rounded-full border border-[#BCEADB] bg-white/70 px-2.5 py-1 text-[12px] font-semibold text-[#16866F]">孩子保障较完整</span>
            </div>
          </div>
          <img src="/shield.png" alt="" className="h-20 w-20 object-contain" />
        </div>
      </Card>

      <h2 className="mb-3 text-[18px] font-semibold">核心保障体检</h2>
      <div className="mb-5 grid grid-cols-2 gap-3">
        <Cover icon={<HeartPulse />} title="医疗保障" label="覆盖率" value="95%" color="#5B8DEE" progress={95} />
        <Cover icon={<ShieldAlert />} title="重疾保障" label="缺口大" value="30%" color="#E60012" progress={30} weak />
        <Cover icon={<Zap />} title="意外保障" label="覆盖率" value="85%" color="#FF9B3D" progress={85} />
        <Cover icon={<AlertCircle />} title="教育金中断风险" label="需关注" value="45%" color="#F37B16" progress={45} weak />
      </div>

      <Card className="mb-6 border-[#FFE1C6] bg-[#FFF8EF]">
        <div className="flex gap-3">
          <BotAvatar size={44} />
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-[17px] font-semibold text-[#8B4A12]"><Bot className="h-5 w-5" />AI 建议</h2>
            <p className="text-[14px] leading-7 text-[#6D5D55]">优先补充父母保障，避免孩子教育金计划因家庭经济支柱风险而中断。</p>
          </div>
        </div>
      </Card>

      <Button onClick={() => navigate('plan')}>查看保障缺口 <ChevronRight className="h-5 w-5" /></Button>
      <SafetyNote />
    </div>
  </Layout>
);

const Cover = ({ icon, title, label, value, color, progress, weak }: any) => (
  <Card className={`!p-4 ${weak ? 'border-[#FFE1C6] bg-[#FFF8EF]' : ''}`}>
    <div className="mb-4 flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: `${color}18`, color }}>{React.cloneElement(icon, { className: 'h-5 w-5' })}</span>
      <h3 className="text-[15px] font-semibold">{title}</h3>
    </div>
    <div className="mb-2 flex justify-between text-[12px]"><span style={{ color }}>{label}</span><span className="font-semibold">{value}</span></div>
    <ProgressBar value={progress} color={color} />
  </Card>
);
