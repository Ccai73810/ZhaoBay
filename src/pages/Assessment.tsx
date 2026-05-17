import React from 'react';
import { Check, ChevronDown, ChevronRight, FileText, Shield, Sparkles, Wallet } from 'lucide-react';
import { BotAvatar, Button, Card, Chip, Layout, SafetyNote, ShellScene, StatusBar } from '../components/shared';

export const Assessment = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <div className="soft-band px-5 pb-7">
      <StatusBar />
      <header className="grid grid-cols-[92px_1fr_86px] items-center gap-2 pt-5">
        <img src="/logo-slogan.png" alt="招贝" className="h-[32px] w-[92px] object-contain object-left" />
        <span className="text-center text-[15px] font-medium leading-5 text-[#8A7A72]">3分钟家庭财务初诊</span>
        <span className="flex items-center justify-end gap-1 text-right text-[11px] font-medium leading-4 text-[#9B8B83]"><Shield className="h-3.5 w-3.5 shrink-0" />数据安全保障中</span>
      </header>

      <div className="mt-7 grid grid-cols-4 gap-2">
        <Step done label="基本信息" />
        <Step active label="家庭情况" num="2" />
        <Step label="收支与负债" num="3" />
        <Step label="担忧与目标" num="4" />
      </div>

      <Card className="relative mt-6 min-h-[105px] overflow-hidden !p-5">
        <div className="relative z-10 flex items-center gap-3">
          <BotAvatar size={58} />
          <div className="max-w-[190px]">
            <h1 className="text-[20px] font-semibold text-[#2B1712]">早安，我是<span className="text-[#E60012]">招小贝</span></h1>
            <p className="mt-1 text-[14px] leading-6 text-[#8A7A72]">为更准确地评估，想先了解您家的一些情况～</p>
          </div>
        </div>
        <ShellScene className="absolute -right-8 -top-1 h-[118px] w-[150px] opacity-95" />
      </Card>

      <Card className="mt-4 !p-4">
        <Question icon="👶" title="1. 孩子年龄"><Chip>0-2岁</Chip><Chip>3-5岁</Chip><Chip active>6-12岁</Chip><Chip>13-15岁</Chip></Question>
        <Question icon="📍" title="2. 所在城市"><div className="flex h-11 flex-1 items-center justify-between rounded-xl border border-[#EDE2DC] px-4 text-[14px] text-[#B3A49D]">请选择所在城市<ChevronDown className="h-4 w-4" /></div></Question>
        <Question icon={<Wallet className="h-5 w-5 text-[#FFB321]" />} title="3. 家庭月收入区间"><Chip>&lt;1万</Chip><Chip>1-2万</Chip><Chip active>2-3万</Chip><Chip>3-5万</Chip><Chip>&gt;5万</Chip></Question>
        <Question icon="¥" title="4. 每月育儿支出"><Chip>&lt;1000元</Chip><Chip>1000-3000元</Chip><Chip active>3000-6000元</Chip><Chip>&gt;6000元</Chip></Question>
        <Question icon="🏠" title="5. 有无房贷"><Chip active>有房贷</Chip><Chip>无房贷</Chip></Question>
        <Question icon="/cap.png" title="6. 是否已准备教育金"><Chip>已准备</Chip><Chip active>还未准备</Chip></Question>
        <Question last icon="?" title="7. 目前最担心的问题"><div className="flex h-11 flex-1 items-center justify-between rounded-xl border border-[#EDE2DC] px-4 text-[14px] text-[#B3A49D]">请选择最担心的问题<ChevronDown className="h-4 w-4" /></div></Question>
      </Card>

      <Card className="mt-4 flex gap-4 border-[#F6E1D0] bg-[#FFF9F5]">
        <div className="flex h-[92px] w-[82px] shrink-0 items-center justify-center rounded-[18px] bg-white shadow-[0_7px_18px_rgba(120,75,38,.08)]">
          <FileText className="h-11 w-11 text-[#F2B487]" />
        </div>
        <div>
          <h2 className="mb-1 flex items-center gap-1 text-[17px] font-semibold">即将生成的初诊报告 <Sparkles className="h-4 w-4 text-[#FF8E4B]" /></h2>
          <p className="mb-2 text-[13px] text-[#8A7A72]">为您产出一份专属的家庭财务初诊报告，包含：</p>
          <ul className="space-y-1.5 text-[12px] leading-5 text-[#7A6C65]">
            <li>家庭画像　全方位了解家庭财务现状</li>
            <li>财务健康分　综合评分与同城家庭对比</li>
            <li>本月建议　针对性优化建议与行动清单</li>
            <li>未来1年关键提醒　重要节点与规划提示</li>
          </ul>
        </div>
      </Card>

      <div className="mt-5">
        <Button onClick={() => navigate('report')}>生成初诊报告 <ChevronRight className="h-5 w-5" /></Button>
        <SafetyNote text="您的数据仅用于初诊分析，严格保密" />
      </div>
    </div>
  </Layout>
);

const Step = ({ done, active, label, num }: any) => (
  <div className="relative flex flex-col items-center gap-2 text-center">
    <div className={`flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-bold ${done ? 'bg-[#FFD8C1] text-[#E60012]' : active ? 'bg-[#E60012] text-white' : 'bg-white text-[#8A7A72]'}`}>
      {done ? <Check className="h-5 w-5" /> : num}
    </div>
    <span className={`${active ? 'text-[#4A332C]' : 'text-[#9A8B84]'} text-[12px] font-medium`}>{label}</span>
    {active && <span className="absolute left-[-24px] top-[17px] h-1 w-[42px] rounded-full bg-[#E60012]" />}
  </div>
);

const Question = ({ icon, title, children, last = false }: any) => (
  <div className={`py-3.5 ${last ? '' : 'border-b border-[#F2E8E2]'}`}>
    <div className="mb-3 flex items-center gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF5EF] text-[16px] font-semibold text-[#E60012]">
        {typeof icon === 'string' && icon.startsWith('/') ? <img src={icon} alt="" className="h-5 w-5" /> : icon}
      </div>
      <div className="min-w-0 text-[15px] font-semibold text-[#2B1712]">{title}</div>
    </div>
    <div className="flex flex-wrap gap-2 pl-11">{children}</div>
  </div>
);
