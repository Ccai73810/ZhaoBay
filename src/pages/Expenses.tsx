import React from 'react';
import { AlertCircle, Bell, BookHeart, ChevronRight, Info } from 'lucide-react';
import { Button, Card, Chip, Donut, Layout, ListRow, Money, ProgressBar, SafetyNote, ShellScene, TopBar } from '../components/shared';

export const Expenses = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <TopBar title="育儿支出" onBack={() => navigate('ledger')} />
    <div className="px-5 pb-7">
      <div className="mb-5 mt-1 grid grid-cols-3 rounded-full border border-[#F0E4DD] bg-[#FFF9F5] p-1">
        {['本月', '本学期', '全年'].map((item, index) => (
          <button key={item} className={`h-10 rounded-full text-[15px] font-semibold ${index === 0 ? 'bg-white text-[#E60012] shadow-[0_4px_14px_rgba(75,36,16,.07)]' : 'text-[#7A6C65]'}`}>{item}</button>
        ))}
      </div>

      <Card className="mb-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="mb-2 flex items-center gap-1 text-[15px] font-semibold text-[#2B1712]">本月育儿支出（元）<Info className="h-4 w-4 text-[#B8ABA4]" /></div>
            <Money value="5,260" className="block text-[48px] font-bold leading-none" />
            <p className="mt-2 text-[13px] text-[#8A7A72]">预算 ¥6,000　剩余 <span className="font-semibold text-[#21A777]">¥740</span></p>
            <p className="mt-3 text-[13px] text-[#A69A94]">较上月 <span className="font-semibold text-[#E94E3E]">+8%（+¥380）</span></p>
          </div>
          <Donut size={112} />
        </div>
      </Card>

      <Card onClick={() => navigate('interest_class')} className="relative mb-4 overflow-hidden border-[#FFE1C6] bg-[#FFF8EF]">
        <div className="relative z-10 pr-20">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#FF8D2E] text-white"><Bell className="h-4 w-4" /></span>
            <h2 className="text-[18px] font-semibold">焦虑消费提醒</h2>
            <Chip tone="orange" className="!rounded-full !px-2 !py-0.5 !text-[11px]">需关注</Chip>
          </div>
          <p className="text-[19px] font-semibold leading-[1.55] text-[#2B1712]">14天内连续新增 2 个长期课包，可能属于焦虑型消费</p>
          <p className="mt-2 text-[13px] text-[#8A7A72]">建议先观察 4 周出勤和兴趣反馈</p>
        </div>
        <ShellScene className="absolute -bottom-8 right-4 h-[116px] w-[122px]" />
        <AlertCircle className="absolute bottom-12 right-7 h-10 w-10 rounded-full bg-[#FF5A52] p-2 text-white" />
        <ChevronRight className="absolute right-4 top-5 h-6 w-6 text-[#2B1712]" />
      </Card>

      <Card className="mb-4 grid grid-cols-4 divide-x divide-[#F1E6DF] !p-3">
        <ExpenseStat label="必要支出" amount="2,230" percent="42%" color="#21B38E" />
        <ExpenseStat label="成长型" amount="1,960" percent="37%" color="#4F85EA" />
        <ExpenseStat label="焦虑型" amount="680" percent="13%" color="#F37B16" />
        <ExpenseStat label="风险型" amount="390" percent="8%" color="#EF3E39" />
      </Card>

      <Card className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="text-[18px] font-semibold">本月支出明细</h2>
          <button className="flex items-center text-[13px] text-[#9A8B84]">全部明细 <ChevronRight className="h-4 w-4" /></button>
        </div>
        <ListRow icon="ABC" title="英语课续费（秋季班）" subtitle="长期课包 · 已上 2 次 / 共 24 次" tag="焦虑型" tagTone="orange" date="06-08" amount="1,580" onClick={() => navigate('interest_class')} />
        <ListRow icon="+" title="儿童医院（感冒就诊）" subtitle="医疗健康" tag="必要" tagTone="green" date="06-07" amount="320" />
        <ListRow icon="🏀" title="篮球课（周末班）" subtitle="兴趣培养 · 第 3 次课" tag="成长型" tagTone="blue" date="06-05" amount="680" />
        <ListRow icon="书" title="绘本（3 本）" subtitle="阅读启蒙" tag="成长型" tagTone="blue" date="06-04" amount="126" />
      </Card>

      <Card className="mb-5 border-[#DDF1E8] bg-[#F3FCF8]">
        <div className="mb-3 flex items-center justify-between border-b border-[#DDF1E8] pb-2">
          <h2 className="flex items-center gap-2 text-[18px] font-semibold text-[#10845F]"><BookHeart className="h-5 w-5" />成长账本</h2>
          <span className="text-[13px] font-semibold text-[#21A777]">与成长里程碑关联的支出</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-[58px] w-[74px] shrink-0 items-center justify-center rounded-2xl bg-white text-[26px] shadow-sm">🏀</div>
          <div className="flex-1">
            <h3 className="text-[15px] font-semibold">第一次完成 10 次篮球训练</h3>
            <p className="mt-1 text-[12px] text-[#8A7A72]">篮球课（周末班） · 记录于 06-05</p>
          </div>
          <div className="text-right">
            <Money value="680" className="text-[20px] font-bold text-[#21A777]" />
            <p className="text-[12px] text-[#7A8F82]">为成长时刻<br />投资值得纪念</p>
          </div>
        </div>
      </Card>

      <Button>查看预算建议 <ChevronRight className="h-5 w-5" /></Button>
      <SafetyNote />
    </div>
  </Layout>
);

const ExpenseStat = ({ label, amount, percent, color }: any) => (
  <div className="px-2">
    <div className="mb-2 text-[13px] font-semibold text-[#2B1712]">{label}</div>
    <Money value={amount} className="text-[18px] font-bold" />
    <ProgressBar value={Number(percent.replace('%', ''))} color={color} className="mt-2 h-1.5" />
    <p className="mt-1 text-[12px]" style={{ color }}>{percent}</p>
  </div>
);
