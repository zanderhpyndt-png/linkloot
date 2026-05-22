import React from 'react';
import { LinkLootLogo } from "@/components/LinkLootLogo";
import { SearchContainer } from "@/components/SearchContainer";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Zap, TrendingDown, Rocket } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AuthButton } from "@/components/AuthButton";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-product');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Ticker Bar */}
      <div className="w-full bg-primary/10 border-b border-primary/20 py-2 overflow-hidden whitespace-nowrap z-10">
        <div className="flex animate-marquee gap-8 items-center text-[10px] font-bold uppercase tracking-widest text-primary/80">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-8">
              <span>🔥 Found 85% Off Designer Lamps</span>
              <span>🚀 Viral Scams Detected: 12,402</span>
              <span>💎 Real-time Price Drop on PS5 Pro</span>
              <span>⚡️ Direct Factory Link Found: Keyboard</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 px-6 py-3 flex items-center justify-between glass-card rounded-full border-white/10">
        <LinkLootLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-bold uppercase tracking-tighter">How it works</a>
          <AuthButton />
        </nav>
        <div className="md:hidden">
          <AuthButton />
        </div>
      </header>

      <main className="flex-1 pt-48 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center space-y-10 mb-32 relative">
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Live Matching System v4.0
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
              STOP GETTING <br />
              <span className="text-gradient">ROBBED.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-tight">
              Paste a link. We find the factory source. <br />
              <span className="text-foreground">Stop overpaying for marked-up e-commerce junk.</span>
            </p>
          </div>

          <div className="pt-4">
            <SearchContainer />
          </div>
        </section>

        {/* Features Grid */}
        <section id="how-it-works" className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Bypass Middlemen", desc: "We track down original manufacturers on AliExpress, Temu, and Alibaba instantly.", icon: Globe, accent: "accent" },
             { title: "Scam Radar", desc: "Automatically identifies Shopify stores marking up prices by 300%+.", icon: Shield, accent: "primary" },
             { title: "Loot Score", desc: "Every deal gets a score from 1-100 based on price, shipping, and reliability.", icon: Zap, accent: "accent" }
           ].map((feat, i) => (
             <div key={i} className="glass-card p-8 rounded-[2.5rem] relative group overflow-hidden transition-all hover:-translate-y-2 border-white/5">
               <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
                 <feat.icon size={120} />
               </div>
               <div className={`h-12 w-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6`}>
                 <feat.icon size={24} className={feat.accent === 'primary' ? 'text-primary' : 'text-accent'} />
               </div>
               <h3 className="text-2xl font-black mb-3 italic tracking-tight uppercase">{feat.title}</h3>
               <p className="text-muted-foreground font-medium leading-snug">{feat.desc}</p>
             </div>
           ))}
        </section>

        {/* Viral Proof Section */}
        <section className="glass-card rounded-[3rem] p-12 relative overflow-hidden border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <Badge className="bg-accent text-accent-foreground font-black px-4 py-1 uppercase italic tracking-widest">Viral Proof</Badge>
              <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter uppercase italic">
                FROM $120 <br />
                <span className="text-accent">TO $14.</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                "I saw this lamp on a 'TikTok Made Me Buy It' ad for $120. LinkLoot found the exact same one at the factory source for $14."
              </p>
            </div>
            <div className="relative group">
               <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl animate-float">
                  <Image 
                    src={heroImage?.imageUrl || "https://picsum.photos/seed/loot/800/1000"} 
                    alt="Loot Demo" 
                    fill 
                    className="object-cover"
                    data-ai-hint="lamp designer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 space-y-4">
                     <div className="flex justify-between items-end">
                       <div className="bg-primary px-4 py-2 rounded-xl font-black text-2xl italic tracking-tighter">$14.99</div>
                       <div className="text-right">
                         <p className="text-[10px] font-bold text-white/60 uppercase">Market Price</p>
                         <p className="text-xl line-through text-white/40">$119.00</p>
                       </div>
                     </div>
                  </div>
               </div>
               <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl animate-bounce">
                  <TrendingDown className="text-accent" size={32} />
               </div>
            </div>
          </div>
        </section>

        {/* Deployment Helper */}
        <section className="mt-20 p-8 glass-card border-dashed border-primary/40 rounded-3xl">
          <h4 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <Rocket size={14} className="text-primary" /> How to go live for free
          </h4>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>1. Create a GitHub repo named <strong>link-loot</strong>.</p>
            <p>2. Upload these files to that repo using the "uploading an existing file" link on GitHub.</p>
            <p>3. Go to Firebase Console, click <strong>Build &gt; App Hosting</strong>, and connect your repo.</p>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <span>© {new Date().getFullYear()} LINKLOOT AI LABS</span>
          <div className="flex gap-6 col-span-3 justify-end">
            <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
            <a href="#" className="hover:text-primary transition-colors">DISCORD</a>
            <a href="#" className="hover:text-primary transition-colors">TIKTOK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
