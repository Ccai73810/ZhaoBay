import React from 'react';
import {
  Bot,
  ChevronRight,
  GraduationCap,
  Heart,
  PiggyBank,
  Shield,
  Target,
  WalletCards,
} from 'lucide-react';
import {
  BotAvatar,
  Button,
  Card,
  CategoryMini,
  Donut,
  Layout,
  LogoHeader,
  Money,
  ProgressBar,
  SafetyNote,
  ShellScene,
  StatusBar,
} from '../components/shared';

export const Home = ({ navigate }: any) => (
  <Layout currentTab="home" navigate={navigate}>
    <div className="soft-band px-5 pb-8">
      <StatusBar />
      <LogoHeader compact />

      <section className="relative min-h-[196px] pt-6">
        <div className="relative z-10">
          <h1 className="mb-3 text-[28px] font-semibold leading-[1.16] text-[#2B1712]">早安，</h1>
          <p className="max-w-[235px] text-[18px] leading-[1.65] text-[#2B1712]">
            今天也一起守护<span className="font-semibold text-[#E60012]">小宇</span>的成长
          </p>
        </div>
        <ShellScene className="absolute -right-5 top-2 h-[178px] w-[220px]" />
      </section>

      <Card onClick={() => navigate('report')} className="mb-3 flex items-center justify-between !rounded-[22px] !p-5">
        <div>
          <div className="mb-2 flex items-center gap-1 text-[15px] font-semibold text-[#2B1712]">
            家庭财务健康分 <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#D8CDC6] text-[11px] font-medium text-[#B0A29B]">i</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="amount text-[58px] font-bold leading-none text-[#3A1F18]">86</span>
            <span className="mb-2 text-[14px] font-medium text-[#2B1712]">分 / <span className="text-[#21B38E]">优秀</span></span>
          </div>
          <p className="mt-2 text-[13px] text-[#94847D]">超过了 <span className="font-semibold text-[#20AF8A]">86%</span> 的同龄家庭</p>
        </div>
        <Donut size={106} />
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card onClick={() => navigate('expenses')} className="min-h-[174px]">
          <TileHead icon={<WalletCards className="h-4 w-4 text-white" />} color="#FF6C58" title="本月育儿支出" />
          <Money value="5,260" className="mt-3 block text-[28px] font-bold" />
          <div className="mt-4 grid grid-cols-4 gap-1">
            <CategoryMini label="必要" amount="2,230" percent="42%" color="#21B38E" bg="#EFFBF6" />
            <CategoryMini label="成长" amount="1,960" percent="37%" color="#4F85EA" bg="#F2F6FF" />
            <CategoryMini label="焦虑" amount="680" percent="13%" color="#F37B16" bg="#FFF4E9" />
            <CategoryMini label="风险" amount="390" percent="8%" color="#EF3E39" bg="#FFF0EF" />
          </div>
        </Card>

        <Card onClick={() => navigate('education')} className="min-h-[174px]">
          <TileHead icon={<GraduationCap className="h-4 w-4 text-white" />} color="#5B8DEE" title="教育金完成率" />
          <div className="mt-3 text-[30px] font-bold text-[#2B1712]">32<span className="text-[17px]">%</span></div>
          <ProgressBar value={32} color="#5B8DEE" className="my-4" />
          <p className="text-[12px] leading-6 text-[#887970]">已储备 <span className="font-semibold text-[#4F85EA]">¥128,000</span> / 目标 ¥400,000<br />距目标还需 ¥272,000</p>
        </Card>

        <Card onClick={() => navigate('insurance')} className="min-h-[150px]">
          <TileHead icon={<Shield className="h-4 w-4 text-white" />} color="#43C6B8" title="保障完整度" />
          <div className="mt-4 text-[33px] font-bold text-[#2B1712]">78<span className="text-[18px]">%</span></div>
          <ProgressBar value={78} color="#43C6B8" className="my-3" />
          <p className="text-[12px] leading-5 text-[#887970]">已配置 <span className="text-[#21A777]">4</span> 项保障<br /><span className="text-[#1FAE9A]">建议补充重疾保障</span></p>
        </Card>

        <Card onClick={() => navigate('advisor')} className="min-h-[150px] border-[#DFEAFF] bg-[#F3F7FF]">
          <div className="mb-3 flex items-center gap-2">
            <BotAvatar size={32} />
            <h3 className="text-[16px] font-semibold text-[#2F5597]">AI 今日建议</h3>
          </div>
          <div className="rounded-[18px] bg-white/70 p-3 text-[13px] leading-6 text-[#3D4A62]">
            兴趣班支出接近预算上限，建议先观望 2 周
            <div className="mt-2 flex items-center justify-between text-[12px] font-semibold text-[#4F85EA]">查看详情 <ChevronRight className="h-4 w-4" /></div>
          </div>
        </Card>

        <Card onClick={() => navigate('pocket_money')} className="min-h-[150px]">
          <TileHead icon={<PiggyBank className="h-4 w-4 text-white" />} color="#FF6C58" title="孩子零花钱 · 小宇" />
          <div className="mt-4 flex items-end gap-2"><Money value="420" className="text-[31px] font-bold" /><span className="pb-1 text-[12px] text-[#8A7A72]">本月可用</span></div>
          <ProgressBar value={30} color="#FF6C58" className="my-3" />
          <p className="text-[12px] text-[#8A7A72]">本月已用 <span className="text-[#E60012]">¥180</span> / 预算 ¥600</p>
        </Card>

        <Card onClick={() => navigate('plan')} className="min-h-[150px]">
          <TileHead icon={<Target className="h-4 w-4 text-white" />} color="#FF7A45" title="成长目标" />
          <p className="mt-3 text-[13px] text-[#8A7A72]">为小宇准备的 <span className="font-semibold text-[#4F85EA]">3</span> 个目标</p>
          <div className="mt-3 flex justify-between text-center text-[11px] text-[#6D5D55]">
            <Goal icon="/cap.png" label="教育金" value="¥128,000" />
            <Goal icon="/growth-chart.png" label="留学基金" value="¥35,000" />
            <Goal icon="/coin.png" label="兴趣发展" value="¥12,000" />
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Button onClick={() => navigate('report')}>查看完整初诊 <ChevronRight className="h-5 w-5" /></Button>
        <SafetyNote />
      </div>
    </div>
  </Layout>
);

const TileHead = ({ icon, color, title }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex min-w-0 items-center gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px]" style={{ background: color }}>{icon}</span>
      <h3 className="truncate text-[15px] font-semibold text-[#2B1712]">{title}</h3>
    </div>
    <ChevronRight className="h-5 w-5 shrink-0 text-[#B7AAA4]" />
  </div>
);

const Goal = ({ icon, label, value }: any) => (
  <div className="flex w-[30%] flex-col items-center gap-1">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF2EA]"><img src={icon} alt="" className="h-6 w-6 object-contain" /></span>
    <span>{label}</span>
    <span className="amount text-[11px] text-[#7A6C65]">{value}</span>
  </div>
);
