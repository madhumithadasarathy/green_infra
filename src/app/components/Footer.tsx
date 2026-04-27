"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f6f4] pt-24 pb-12">
      <div className="px-8 md:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#2f5f1e] rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Aazhi</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-semibold leading-tight mb-10 max-w-md">
              Let's build a greener future together.
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#2f5f1e] transition-colors">
                Start a Project
              </Link>
              <Link href="#" className="px-8 py-4 border border-zinc-300 rounded-full font-medium hover:bg-zinc-100 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-zinc-400">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">Overview</Link></li>
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">Features</Link></li>
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">Solutions</Link></li>
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">Impact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-zinc-400">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">News</Link></li>
                <li><Link href="#" className="text-zinc-600 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-zinc-400">Newsletter</h4>
              <p className="text-zinc-500 mb-6 text-sm">Get the latest updates on green infrastructure.</p>
              <form className="relative w-full min-w-[300px] max-w-sm">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white border border-zinc-200 rounded-full py-3 pl-5 pr-20 text-sm outline-none focus:border-[#2f5f1e] transition-colors"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-black text-white px-4 rounded-full text-xs font-medium hover:bg-[#2f5f1e] transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-sm">
            © 2026 Aazhi Infrastructure. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-zinc-500 hover:text-black text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-zinc-500 hover:text-black text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-zinc-500 hover:text-black text-sm transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
