import React from 'react';
import { Bell, BookOpen, ChevronRight, Database, FileText, Lock, ShieldCheck, UserRound } from 'lucide-react';
import { Card, Layout, Money, StatusBar } from '../components/shared';

export const Profile = ({ navigate }: any) => (
  <Layout currentTab="profile" navigate={navigate}>
    <div className="soft-band px-5 pb-7">
      <StatusBar />
      <header className="flex items-center gap-4 pt-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm"><UserRound className="h-8 w-8 text-[#E60012]" /></div>
        <div className="flex-1">
          <h1 className="text-[24px] font-semibold">小宇的家</h1>
          <p className="mt-1 inline-flex rounded-full bg-[#E60012] px-3 py-1 text-[12px] font-semibold text-white">当前画像：小学投入型家庭</p>
        </div>
      </header>

      <Card className="my-5 grid grid-cols-2 divide-x divide-[#F1E6DF] text-center">
        <button onClick={() => navigate('report')} className="px-3 py-2">
          <p className="text-[12px] text-[#8A7A72]">家庭财务健康分</p>
          <p className="amount mt-1 text-[30px] font-bold">86</p>
        </button>
        <div className="px-3 py-2">
          <p className="text-[12px] text-[#8A7A72]">已陪伴成长</p>
          <p className="amount mt-1 text-[30px] font-bold">126 <span className="text-[14px] font-normal">天</span></p>
        </div>
      </Card>

      <MenuGroup title="档案与报告">
        <MenuItem icon={<BookOpen />} label="家庭档案" />
        <MenuItem icon={<UserRound />} label="孩子信息" />
        <MenuItem icon={<FileText />} label="我的报告" onClick={() => navigate('report')} />
      </MenuGroup>
      <MenuGroup title="信任中心">
        <MenuItem icon={<Database />} label="账户与数据授权" />
        <MenuItem icon={<Bell />} label="提醒设置" />
        <MenuItem icon={<ShieldCheck />} label="隐私安全" />
        <MenuItem icon={<Lock />} label="AI 中立性说明" />
      </MenuGroup>
      <p className="mt-7 text-center text-[12px] leading-6 text-[#B0A29B]">招贝，先安心，再生财</p>
    </div>
  </Layout>
);

const MenuGroup = ({ title, children }: any) => (
  <div className="mb-5">
    <h2 className="mb-2 px-1 text-[13px] font-semibold text-[#8A7A72]">{title}</h2>
    <Card className="!p-2">{children}</Card>
  </div>
);

const MenuItem = ({ icon, label, onClick }: any) => (
  <button onClick={onClick} className="flex w-full items-center gap-3 rounded-2xl p-3 text-left active:bg-[#FBF4F0]">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F2EF] text-[#6D5D55]">{React.cloneElement(icon, { className: 'h-5 w-5' })}</span>
    <span className="flex-1 text-[15px] font-semibold">{label}</span>
    <ChevronRight className="h-5 w-5 text-[#B7AAA4]" />
  </button>
);
