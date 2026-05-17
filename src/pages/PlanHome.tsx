import React from 'react';
import { CalendarClock, ChevronRight, GraduationCap, Shield, Sparkles, Target } from 'lucide-react';
import { Card, Chip, Layout, Money, ProgressBar, TopBar } from '../components/shared';

export const PlanHome = ({ navigate }: any) => (
  <Layout currentTab="plan" navigate={navigate}>
    <TopBar title="家庭目标地图" rightIcon={null} />
    <div className="px-5 pb-7">
      <h1 className="mb-3 mt-2 text-[25px] font-semibold leading-tight">把孩子的未来，<br />拆成今天能做的计划</h1>
      <Chip active className="mb-5">小宇 · 8岁 · 小学投入型家庭</Chip>

      <Card className="mb-5 border-[#FFE1C6] bg-[#FFF8EF]">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E60012] text-white"><CalendarClock className="h-5 w-5" /></span>
          <div>
            <h2 className="mb-1 text-[17px] font-semibold">未来12个月提醒</h2>
            <p className="text-[14px] leading-6 text-[#6D5D55]">小宇即将升入三年级，建议在本阶段完成至少 <span className="font-semibold text-[#E60012]">30%</span> 的教育金基础配置，并复盘兴趣班投入。</p>
          </div>
        </div>
      </Card>

      <h2 className="mb-3 text-[18px] font-semibold">本阶段规划任务</h2>
      <div className="space-y-3">
        <PlanCard icon={<GraduationCap />} title="教育金计划" status="进行中" statusTone="blue" label="目标进度" value="32%" meta="¥128,000 / ¥400,000" progress={32} color="#5B8DEE" onClick={() => navigate('education')} />
        <PlanCard icon={<Shield />} title="家庭保障计划" status="待完善" statusTone="orange" label="保障完整度" value="78%" meta="父母保障偏弱" progress={78} color="#43C6B8" onClick={() => navigate('insurance')} />
        <PlanCard icon={<Sparkles />} title="兴趣班预算计划" status="配置完成" label="全年预算控制" value="¥24,000" meta="预估占总支出 15%" progress={64} color="#FF9B3D" onClick={() => navigate('expenses')} />
      </div>

      <h2 className="mb-3 mt-6 text-[18px] font-semibold">成长目标</h2>
      <Card className="grid grid-cols-3 gap-2 text-center">
        <Goal img="/cap.png" label="教育金" amount="128,000" />
        <Goal img="/growth-chart.png" label="留学基金" amount="35,000" />
        <Goal img="/coin.png" label="兴趣发展" amount="12,000" />
      </Card>
    </div>
  </Layout>
);

const PlanCard = ({ icon, title, status, statusTone, label, value, meta, progress, color, onClick }: any) => (
  <Card onClick={onClick} className="!p-0">
    <div className="flex items-center justify-between border-b border-[#F4E9E2] px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: `${color}18`, color }}>{React.cloneElement(icon, { className: 'h-5 w-5' })}</span>
        <h3 className="text-[16px] font-semibold">{title}</h3>
      </div>
      <Chip tone={statusTone || 'green'} className="!rounded-full !px-2 !py-0.5 !text-[11px]">{status}</Chip>
    </div>
    <div className="flex items-center justify-between p-4">
      <div className="flex-1">
        <p className="mb-1 text-[12px] text-[#8A7A72]">{label}</p>
        <div className="mb-3 flex items-end gap-2"><span className="amount text-[25px] font-bold">{value}</span><span className="pb-1 text-[12px] text-[#8A7A72]">{meta}</span></div>
        <ProgressBar value={progress} color={color} />
      </div>
      <ChevronRight className="ml-3 h-5 w-5 text-[#B7AAA4]" />
    </div>
  </Card>
);

const Goal = ({ img, label, amount }: any) => (
  <div className="flex flex-col items-center gap-1">
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF3EC]"><img src={img} alt="" className="h-7 w-7 object-contain" /></span>
    <span className="text-[13px] font-semibold">{label}</span>
    <Money value={amount} className="text-[13px] font-semibold text-[#8A7A72]" />
  </div>
);
