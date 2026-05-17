import React from 'react';
import { ChevronLeft, ChevronRight, History, PieChart, Send, Sparkles, User } from 'lucide-react';
import { BotAvatar, Button, Card, Chip, Layout, SafetyNote, StatusBar } from '../components/shared';

export const Advisor = ({ navigate }: any) => (
  <Layout currentTab="advisor" navigate={navigate}>
    <div className="blue-band min-h-full px-5 pb-7">
      <StatusBar />
      <header className="relative min-h-[244px] pt-7">
        <button onClick={() => navigate('home')} className="mb-7 flex h-10 w-10 items-center justify-center rounded-full active:bg-white/60"><ChevronLeft className="h-7 w-7" /></button>
        <button className="absolute right-0 top-7 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-[13px] font-medium text-[#4A403B] shadow-sm"><History className="h-4 w-4" />对话记录</button>
        <h1 className="relative z-10 text-[34px] font-bold leading-none text-[#4278F0]">AI顾问</h1>
        <p className="relative z-10 mt-4 max-w-[210px] text-[15px] leading-6 text-[#8A7A72]">专属家庭财务顾问，随时为你出谋划策</p>
        <img src="/bot-hero.png" alt="AI 顾问" className="absolute -right-4 top-[84px] h-[124px] w-[146px] object-cover object-left" />
      </header>

      <div className="space-y-5">
        <div className="flex justify-end gap-3">
          <div className="max-w-[265px] rounded-[22px] rounded-tr-[8px] border border-[#DDE8FF] bg-[#F2F6FF] px-5 py-4 text-[19px] leading-9 text-[#2B1712] shadow-[0_8px_24px_rgba(64,93,141,.08)]">我家孩子 8 岁，每年兴趣班花 3 万，算多吗？</div>
          <span className="flex h-44 w-44 max-h-11 max-w-11 shrink-0 items-center justify-center rounded-full bg-[#FFECE7]"><User className="h-6 w-6 text-[#E86A5D]" /></span>
        </div>

        <div className="flex gap-3">
          <BotAvatar size={42} />
          <Card className="max-w-[298px] !rounded-[22px] !rounded-tl-[8px] !p-5">
            <p className="text-[17px] leading-9 text-[#2B1712]">
              根据你的家庭画像，孩子8岁，家庭年收入约40万，教育支出占比约18%，略高于相似家庭中位水平。建议先优化兴趣班组合，保留孩子真正喜欢且长期受益的课程，再考虑新增项目，让每一分钱都花在成长的关键处。
            </p>
          </Card>
        </div>

        <Card className="border-[#DDE8FF] bg-[#F4F8FF]">
          <div className="mb-4 flex items-center gap-1 text-[15px] font-semibold text-[#2F5597]">基于你的家庭画像 <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#A8B8D9] text-[11px]">i</span></div>
          <div className="grid grid-cols-3 divide-x divide-[#DDE8FF]">
            <ProfileMetric icon={<User className="h-4 w-4" />} label="孩子年龄" value="8" unit="岁" />
            <ProfileMetric icon="💼" label="家庭年收入" value="40" unit="万" />
            <ProfileMetric icon={<PieChart className="h-4 w-4" />} label="教育支出占比" value="18%" badge="偏高" />
          </div>
        </Card>

        <div className="pt-3">
          <h2 className="mb-4 flex items-center gap-2 text-[18px] font-semibold text-[#244A93]"><Sparkles className="h-5 w-5" />你可能还想问</h2>
          <div className="flex flex-wrap gap-3">
            <QuestionChip text="先买保险还是先存教育金？" />
            <QuestionChip text="压岁钱怎么分配？" />
            <QuestionChip text="这个课值不值得续费？" />
            <button onClick={() => navigate('high_value')} className="rounded-[16px] border border-[#F5D9B5] bg-[#FFF7EC] px-4 py-3 text-[14px] font-semibold text-[#9B6328] shadow-sm">高价值家庭专区 <ChevronRight className="inline h-4 w-4" /></button>
          </div>
        </div>

        <div className="pt-4">
          <Button>继续提问 <Send className="h-5 w-5 -rotate-45" /></Button>
          <SafetyNote />
        </div>
      </div>
    </div>
  </Layout>
);

const ProfileMetric = ({ icon, label, value, unit, badge }: any) => (
  <div className="px-3 first:pl-0">
    <p className="mb-2 flex items-center gap-1 text-[12px] text-[#6680B2]">{icon}{label}</p>
    <div className="flex items-center gap-2">
      <span className="amount text-[29px] font-bold text-[#2B1712]">{value}</span>
      {unit && <span className="text-[14px] text-[#8A7A72]">{unit}</span>}
      {badge && <Chip tone="orange" className="!rounded-full !px-2 !py-0.5 !text-[12px]">{badge}</Chip>}
    </div>
  </div>
);

const QuestionChip = ({ text }: any) => (
  <button className="flex items-center gap-2 rounded-[16px] border border-[#EDE7E5] bg-white px-4 py-3 text-[15px] font-semibold text-[#234C96] shadow-[0_5px_16px_rgba(50,70,100,.05)]">{text}<ChevronRight className="h-4 w-4 text-[#A8B8D9]" /></button>
);
