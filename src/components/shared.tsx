import React from 'react';
import {
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Home,
  Lock,
  User,
} from 'lucide-react';

export type Navigate = (route: string) => void;

export const colors = {
  red: '#E60012',
  ink: '#2B1712',
  muted: '#8A7A72',
  bg: '#FDF9F7',
  card: '#FFFFFF',
  line: '#F1E6DF',
  teal: '#43C6B8',
  blue: '#5B8DEE',
  orange: '#FF9B3D',
};

export const Layout = ({ children, currentTab, navigate, hasTabBar = true }: any) => (
  <div className="flex min-h-screen w-screen min-w-0 items-center justify-start overflow-hidden bg-[#efe9e4] sm:justify-center sm:py-7">
    <div className="phone-frame relative mx-auto flex h-screen w-full max-w-[390px] flex-col overflow-hidden bg-[#FDF9F7] font-sans text-[#2B1712] shadow-[0_22px_70px_rgba(61,38,23,.18)] sm:h-[844px] sm:rounded-[42px]">
      <div className="scrollbar-hide relative flex-1 overflow-y-auto pb-[98px]">
        {children}
      </div>
      {hasTabBar && <BottomNav currentTab={currentTab} navigate={navigate} />}
    </div>
  </div>
);

export const BottomNav = ({ currentTab, navigate }: any) => (
  <nav className="absolute bottom-0 left-0 right-0 z-50 rounded-t-[24px] border-t border-[#F3EAE5] bg-white/96 px-4 pb-5 pt-2 shadow-[0_-8px_28px_rgba(72,40,20,.07)] backdrop-blur-xl">
    <div className="grid grid-cols-5 items-end">
      <TabItem icon={Home} label="首页" active={currentTab === 'home'} onClick={() => navigate('home')} />
      <TabItem icon={BookOpen} label="账本" active={currentTab === 'ledger'} onClick={() => navigate('ledger')} />
      <TabItem icon={CalendarDays} label="规划" active={currentTab === 'plan'} onClick={() => navigate('plan')} />
      <TabItem icon={Bot} label="顾问" active={currentTab === 'advisor'} onClick={() => navigate('advisor')} />
      <TabItem icon={User} label="我的" active={currentTab === 'profile'} onClick={() => navigate('profile')} />
    </div>
  </nav>
);

const TabItem = ({ icon: Icon, label, active, onClick }: any) => (
  <button
    type="button"
    onClick={onClick}
    className="group flex h-[58px] flex-col items-center justify-center gap-1 rounded-2xl text-[11px] transition active:scale-95"
  >
    <span className={`flex h-8 w-8 items-center justify-center rounded-2xl ${active ? 'bg-[#E60012] text-white shadow-[0_6px_14px_rgba(230,0,18,.2)]' : 'text-[#493832]'}`}>
      <Icon className="h-[19px] w-[19px]" strokeWidth={active ? 2.7 : 2.15} />
    </span>
    <span className={`${active ? 'font-semibold text-[#E60012]' : 'font-medium text-[#6f625c]'}`}>{label}</span>
  </button>
);

export const StatusBar = () => (
  <div className="flex items-center justify-between px-7 pt-7 text-[15px] font-semibold text-black">
    <span>9:41</span>
    <div className="flex items-center gap-1.5">
      <span className="h-3 w-[18px] rounded-[3px] border-2 border-black after:ml-[17px] after:block after:h-1.5 after:w-0.5 after:rounded-r after:bg-black" />
    </div>
  </div>
);

export const LogoHeader = ({ compact = false, right = true }: any) => (
  <div className={`flex items-center justify-between ${compact ? 'px-0' : 'px-5'} pt-5`}>
    <div className="flex items-center gap-2">
      <img src="/logo-slogan.png" alt="招贝 先安心，再生财" className="h-[38px] w-[132px] object-contain object-left" />
    </div>
    {right && <BellButton />}
  </div>
);

export const BellButton = () => (
  <button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF7F1] text-[#3a2018] shadow-[0_4px_18px_rgba(74,38,18,.06)]">
    <Bell className="h-5 w-5" strokeWidth={2} />
    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#ff2535] ring-2 ring-[#FFF7F1]" />
  </button>
);

export const TopBar = ({ title, onBack, rightIcon = 'bell', transparent = false }: any) => (
  <header className={`sticky top-0 z-30 ${transparent ? 'bg-transparent' : 'bg-[#FDF9F7]/92 backdrop-blur-xl'}`}>
    <StatusBar />
    <div className="flex h-[54px] items-center justify-between px-5">
      {onBack ? (
        <button type="button" onClick={onBack} className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full active:bg-[#f3ebe5]">
          <ChevronLeft className="h-7 w-7" strokeWidth={2.1} />
        </button>
      ) : <div className="h-10 w-10" />}
      <h1 className="text-[18px] font-semibold tracking-[0] text-[#1f1512]">{title}</h1>
      <div className="flex h-10 w-10 items-center justify-end">{rightIcon === 'bell' && <BellButton />}</div>
    </div>
  </header>
);

export const Card = ({ children, className = '', onClick }: any) => {
  const classes = `rounded-[24px] border border-[#F3EAE5] bg-white p-4 shadow-[0_8px_24px_rgba(60,30,15,.06)] ${onClick ? 'w-full cursor-pointer text-left transition active:scale-[.985]' : ''} ${className}`;
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
  return <section className={classes}>{children}</section>;
};

export const Button = ({ children, className = '', onClick, variant = 'primary' }: any) => {
  const variants: Record<string, string> = {
    primary: 'bg-[#E60012] text-white shadow-[0_10px_22px_rgba(230,0,18,.2)]',
    secondary: 'bg-[#FFF0ED] text-[#E60012] border border-[#FFD5CE]',
    outline: 'bg-white text-[#493832] border border-[#EADDD6]',
    ghost: 'bg-transparent text-[#7A6C65]',
  };
  return (
    <button
      type="button"
      className={`flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full px-5 text-[17px] font-semibold tracking-[.01em] transition active:scale-[.985] ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SafetyNote = ({ text = '数据安全保障中，招贝守护您的隐私' }: any) => (
  <p className="mt-3 flex items-center justify-center gap-1 text-center text-[11px] font-medium text-[#B5A59D]">
    <Lock className="h-3.5 w-3.5" /> {text}
  </p>
);

export const Money = ({ value, className = '' }: any) => (
  <span className={`amount tracking-[-.01em] text-[#2B1712] ${className}`}>¥{value}</span>
);

export const ProgressBar = ({ value, color = '#43C6B8', className = '' }: any) => (
  <div className={`h-2 overflow-hidden rounded-full bg-[#F1ECE9] ${className}`}>
    <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
  </div>
);

export const Chip = ({ children, active = false, tone = 'red', className = '' }: any) => {
  const tones: Record<string, string> = {
    red: active ? 'border-[#FF7D80] bg-[#FFF2F1] text-[#E60012]' : 'border-[#EDE2DC] bg-white text-[#7A6C65]',
    orange: 'border-[#FFE1C6] bg-[#FFF4E9] text-[#F37B16]',
    blue: 'border-[#DDE8FF] bg-[#F2F6FF] text-[#477EEA]',
    green: 'border-[#D9F1E8] bg-[#EFFBF6] text-[#21A777]',
  };
  return <span className={`inline-flex items-center rounded-xl border px-3 py-1.5 text-[13px] font-medium ${tones[tone]} ${className}`}>{children}</span>;
};

export const SectionTitle = ({ title, action, onAction, className = '' }: any) => (
  <div className={`mb-3 flex items-center justify-between px-1 ${className}`}>
    <h2 className="text-[18px] font-semibold text-[#231713]">{title}</h2>
    {action && (
      <button type="button" onClick={onAction} className="flex items-center text-[13px] font-medium text-[#9A8B84]">
        {action}<ChevronRight className="h-4 w-4" />
      </button>
    )}
  </div>
);

export const ListRow = ({ icon, title, subtitle, tag, tagTone = 'blue', date, amount, onClick }: any) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center justify-between gap-3 rounded-2xl px-1 py-3 text-left transition active:bg-[#FBF4F0]"
  >
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[13px] bg-[#F4F7FF] text-[13px] font-bold text-[#4F85EA]">
        {typeof icon === 'string' ? icon : icon}
      </div>
      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <span className="truncate text-[15px] font-semibold text-[#2B1712]">{title}</span>
          {tag && <Chip tone={tagTone} className="shrink-0 !rounded-full !px-2 !py-0.5 !text-[11px]">{tag}</Chip>}
        </div>
        <p className="mt-0.5 truncate text-[12px] text-[#9B8B83]">{subtitle}</p>
      </div>
    </div>
    <div className="shrink-0 text-right">
      {date && <p className="mb-1 text-[12px] text-[#A69A94]">{date}</p>}
      {amount && <div className="flex items-center justify-end gap-1 text-[16px] font-semibold"><Money value={amount} /><ChevronRight className="h-4 w-4 text-[#B7AAA4]" /></div>}
    </div>
  </button>
);

export const Donut = ({ size = 112, className = '' }: any) => (
  <div
    className={`relative shrink-0 rounded-full ${className}`}
    style={{
      width: size,
      height: size,
      background: 'conic-gradient(#43C6B8 0 42%, #5B8DEE 42% 79%, #FF9B3D 79% 92%, #FF5A52 92% 100%)',
    }}
  >
    <div className="absolute inset-[13px] flex items-center justify-center rounded-full bg-white text-[12px] font-medium text-[#8A7A72]">支出占比</div>
  </div>
);

export const ShellScene = ({ className = '' }: any) => (
  <div className={`pointer-events-none relative ${className}`}>
    <img src="/shell-seed.png" alt="" className="h-full w-full object-contain" />
  </div>
);

export const BotAvatar = ({ size = 44, hero = false, className = '' }: any) => (
  <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_5px_18px_rgba(72,116,190,.12)] ring-1 ring-[#E4EEFF] ${className}`} style={{ width: size, height: size }}>
    <img src={hero ? '/bot-hero.png' : '/bot-small.png'} alt="AI 顾问" className="h-full w-full object-cover" />
  </div>
);

export const CategoryMini = ({ label, amount, percent, color, bg = '#F7FAF9' }: any) => (
  <div className="rounded-[14px] px-2.5 py-2" style={{ background: bg }}>
    <div className="mb-1 flex items-center gap-1 text-[11px] font-semibold" style={{ color }}>
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />{label}
    </div>
    <Money value={amount} className="text-[13px] font-semibold" />
    <div className="mt-1 text-[11px] font-medium" style={{ color }}>{percent}</div>
  </div>
);

export const QuickAction = ({ icon, label, onClick }: any) => (
  <button type="button" onClick={onClick} className="flex items-center gap-3 rounded-[20px] border border-[#F2E7E0] bg-white p-4 shadow-[0_7px_20px_rgba(60,30,15,.05)] active:scale-[.985]">
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF3EC] text-[#E60012]">{icon || <Camera className="h-5 w-5" />}</span>
    <span className="text-[14px] font-semibold text-[#35231E]">{label}</span>
  </button>
);
