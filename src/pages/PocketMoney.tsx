import React from 'react';
import { Check, ChevronRight, Gift, PiggyBank, Settings, Sparkles, Target } from 'lucide-react';
import { Button, Card, Layout, Money, ProgressBar, SafetyNote, TopBar } from '../components/shared';

export const PocketMoney = ({ navigate }: any) => (
  <Layout hasTabBar={false} navigate={navigate}>
    <TopBar title="零花钱与财商" onBack={() => navigate('home')} rightIcon={null} />
    <div className="px-5 pb-7">
      <Card className="mb-5 border-[#FFE1C6] bg-[#FFF8EF]">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="mb-1 text-[15px] font-semibold">小宇本月可用零花钱</p>
            <Money value="420" className="text-[42px] font-bold" />
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#FF6C58] shadow-sm"><PiggyBank className="h-6 w-6" /></span>
        </div>
        <div className="mb-2 flex justify-between text-[13px] text-[#8A7A72]"><span>本月已用 ¥180</span><span>预算 ¥600</span></div>
        <ProgressBar value={30} color="#FF6C58" />
      </Card>

      <h2 className="mb-3 text-[18px] font-semibold">储蓄目标与愿望</h2>
      <div className="mb-5 grid grid-cols-2 gap-3">
        <Goal icon={<Target />} title="储蓄目标" desc="买新自行车" value="45%" color="#5B8DEE" />
        <Goal icon={<Gift />} title="压岁钱分配" desc="已存入专项账户" value="¥12,500" color="#FF9B3D" />
      </div>

      <Card className="mb-5">
        <div className="mb-3 flex items-center justify-between"><h2 className="text-[18px] font-semibold">愿望清单</h2><ChevronRight className="h-5 w-5 text-[#B7AAA4]" /></div>
        <Wish title="新自行车" amount="¥1,200" progress={45} />
        <Wish title="科学实验套装" amount="¥260" progress={20} last />
      </Card>

      <Card className="mb-5">
        <h2 className="mb-3 text-[18px] font-semibold">财商小任务</h2>
        <Task title="连续记账 3 天" reward="奖励 +10 元" />
        <Task title="阅读财商绘本 1 册" reward="已完成" done last />
      </Card>

      <Card className="mb-6 border-[#DDE8FF] bg-[#F4F8FF]">
        <h2 className="mb-2 flex items-center gap-2 text-[17px] font-semibold text-[#2F5597]"><Sparkles className="h-5 w-5" />跟孩子这样聊</h2>
        <p className="rounded-[18px] bg-white p-4 text-[14px] leading-7 text-[#4A403B]">“小宇，这个月的零花钱就像一个小水桶，现在用掉了三分之一。如果剩下的慢点用，月底还能存下来放进储蓄罐，离买自行车就更近啦！”</p>
      </Card>

      <Button variant="outline">设置本月零花钱规则 <Settings className="h-5 w-5" /></Button>
      <SafetyNote />
    </div>
  </Layout>
);

const Goal = ({ icon, title, desc, value, color }: any) => (
  <Card className="!p-4">
    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full" style={{ background: `${color}18`, color }}>{React.cloneElement(icon, { className: 'h-5 w-5' })}</span>
    <h3 className="text-[16px] font-semibold">{title}</h3>
    <p className="mt-1 text-[12px] text-[#8A7A72]">{desc}</p>
    <p className="amount mt-3 text-[20px] font-bold" style={{ color }}>{value}</p>
  </Card>
);

const Wish = ({ title, amount, progress, last }: any) => (
  <div className={`py-3 ${last ? '' : 'border-b border-[#F2E8E2]'}`}>
    <div className="mb-2 flex justify-between text-[14px]"><span className="font-semibold">{title}</span><span className="amount">{amount}</span></div>
    <ProgressBar value={progress} color="#5B8DEE" />
  </div>
);

const Task = ({ title, reward, done, last }: any) => (
  <div className={`flex items-center gap-3 py-3 ${last ? '' : 'border-b border-[#F2E8E2]'}`}>
    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${done ? 'bg-[#21A777] text-white' : 'border border-[#DDD1CA]'}`}>{done && <Check className="h-4 w-4" />}</span>
    <div><p className={`text-[15px] font-semibold ${done ? 'text-[#9A8B84] line-through' : ''}`}>{title}</p><p className="text-[12px] text-[#8A7A72]">{reward}</p></div>
  </div>
);
