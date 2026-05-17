import React from 'react';
import { CalendarDays, ChevronRight, Globe2, GraduationCap, Landmark, ShieldPlus, Sparkles } from 'lucide-react';
import { BellButton, Button, Card, Layout, Money, ProgressBar, SafetyNote, ShellScene, StatusBar } from '../components/shared';

export const HighValue = ({ navigate }: any) => (
  <Layout currentTab="advisor" navigate={navigate}>
    <div className="soft-band px-5 pb-7">
      <StatusBar />
      <header className="relative pt-5">
        <div className="flex items-center justify-between">
          <img src="/logo-slogan.png" alt="招贝" className="h-[40px] w-[132px] object-contain object-left" />
          <BellButton />
        </div>
        <div className="relative min-h-[170px] pt-7">
          <h1 className="text-[30px] font-semibold leading-tight text-[#2B1712]">高价值家庭专区 <span className="text-[21px] text-[#B87922]">◆</span></h1>
          <p className="mt-2 text-[16px] text-[#7A6C65]">为孩子的未来，构建全球视野与财富保障</p>
          <ShellScene className="absolute -right-8 top-0 h-[158px] w-[184px]" />
        </div>
      </header>

      <Card className="mb-4 border-[#F3D4B0] bg-[#FFF3DF]">
        <div className="rounded-[20px] bg-[linear-gradient(90deg,rgba(184,117,45,.18),rgba(255,255,255,.42))] p-5">
          <h2 className="mb-3 text-[22px] font-semibold">全人教育与家庭财富协同</h2>
          <p className="max-w-[260px] text-[15px] leading-7 text-[#6F4A2C]">从教育、健康到财富传承，一站式规划家庭的长期价值与人生选择。</p>
        </div>
      </Card>

      <Card className="mb-4">
        <h2 className="mb-4 flex items-center gap-2 text-[18px] font-semibold"><Globe2 className="h-5 w-5 text-[#B87922]" />家庭全球化规划洞察</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[16px] border border-[#F0E4DD] bg-[#FFF9F5] p-4">
            <p className="mb-2 text-[13px] text-[#8A7A72]">国际路线年支出预估</p>
            <p className="amount text-[27px] font-bold">¥200,000 - ¥500,000</p>
            <p className="mt-2 text-[12px] text-[#9A8B84]">覆盖学费、生活及多元发展</p>
          </div>
          <div className="rounded-[16px] border border-[#F0E4DD] bg-[#FFF9F5] p-4">
            <p className="mb-2 text-[13px] text-[#8A7A72]">外币准备建议</p>
            <p className="amount text-[30px] font-bold">28%</p>
            <ProgressBar value={28} color="#4F85EA" className="mt-4" />
            <p className="mt-2 text-[12px] text-[#9A8B84]">建议占总教育支出的比例</p>
          </div>
        </div>
      </Card>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <Feature icon={<GraduationCap />} title="国际教育金规划" desc="覆盖留学全周期费用，科学规划教育金" color="#FF6C58" />
        <Feature icon={<Globe2 />} title="跨境资金准备" desc="多币种配置，汇率管理与跨境支付方案" color="#4F85EA" />
        <Feature icon={<ShieldPlus />} title="高端医疗保障" desc="全球医疗资源对接，守护家庭健康" color="#35B7A8" />
        <Feature icon={<Landmark />} title="家庭财富传承" desc="资产保护与传承规划，守护家族长远未来" color="#B87922" />
      </div>

      <Card className="mb-4 border-[#F0D6B8] bg-[#FFF7EC]">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#B87922] shadow-sm"><Sparkles className="h-6 w-6" /></div>
          <div className="flex-1">
            <h2 className="text-[18px] font-semibold">顾问建议 <span className="rounded-full bg-[#C48A46] px-2 py-0.5 text-[11px] text-white">专属顾问</span></h2>
            <p className="mt-1 text-[13px] leading-6 text-[#7A6C65]">建议根据孩子年龄、留学目标及家庭现金流，制定分阶段的教育与财富规划方案。</p>
            <p className="mt-1 text-[12px] text-[#9A8B84]">资深财富顾问 | CFA</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[#B87922]" />
        </div>
      </Card>

      <Card className="mb-5 border-[#F1DDC1] bg-white">
        <h2 className="mb-2 flex items-center gap-2 text-[20px] font-semibold"><CalendarDays className="h-5 w-5 text-[#E60012]" />顾问预约</h2>
        <p className="mb-4 text-[14px] text-[#8A7A72]">一对一深度沟通，定制专属家庭规划方案</p>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-[#7A6C65]">
          <Trust label="专业顾问团队" desc="资深背景认证" />
          <Trust label="专属定制方案" desc="贴合家庭目标" />
          <Trust label="隐私安全保障" desc="数据安全加密" />
        </div>
      </Card>

      <Button><CalendarDays className="h-5 w-5" />预约财富顾问</Button>
      <SafetyNote />
    </div>
  </Layout>
);

const Feature = ({ icon, title, desc, color }: any) => (
  <Card className="min-h-[132px] !p-4">
    <div className="mb-3 flex items-center justify-between">
      <span className="flex h-10 w-10 items-center justify-center rounded-[15px] text-white" style={{ background: color }}>{React.cloneElement(icon, { className: 'h-5 w-5' })}</span>
      <ChevronRight className="h-5 w-5 text-[#B7AAA4]" />
    </div>
    <h3 className="mb-2 text-[16px] font-semibold">{title}</h3>
    <p className="text-[12px] leading-5 text-[#8A7A72]">{desc}</p>
    <button className="mt-3 text-[13px] font-semibold" style={{ color }}>查看方案 <ChevronRight className="inline h-4 w-4" /></button>
  </Card>
);

const Trust = ({ label, desc }: any) => (
  <div className="rounded-[14px] border border-[#F1E6DF] bg-[#FFF9F5] p-2">
    <p className="font-semibold">{label}</p>
    <p className="mt-1 text-[#B09F96]">{desc}</p>
  </div>
);
