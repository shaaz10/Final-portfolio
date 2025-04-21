
import { MorphingShape } from "./MorphingShape";

export function Footer() {
  return (
    <footer className="py-16 px-4 relative overflow-hidden bg-background/50">
      {/* Background blurred shape */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-10 opacity-10 blur-3xl">
        <MorphingShape 
          color="rgba(190, 149, 255, 0.2)"
          size="80vw"
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-white font-bold text-xl mb-4 inline-block">
              <span className="text-primary">Shaaz</span> Hussain
            </a>
            <p className="text-white/60 max-w-md mb-6">
              Crafting digital experiences through innovation and animation. Turning creative ideas into immersive web realities.
            </p>
            <div className="flex space-x-4">
  {[
   
    { name: "GitHub", url: "https://github.com/shaaz10" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shaaz-hussain-4327a527b/" },
   
  ].map((platform, i) => (
    <a 
      key={i} 
      href={platform.url} 
      className="text-white/60 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform.name}
    >
      <span>{platform.name}</span>
    </a>
  ))}
</div>

          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-white/60">
                <span className="inline-block mr-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                shaikshaaz18@gmail.com
              </li>
              <li className="flex items-center text-white/60">
                <span className="inline-block mr-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                Hyderabad,Telangana
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AnimationAlchemist. All rights reserved.
          </p>
          
          <div className="text-white/40 text-sm">
            <span>Hand-crafted with precision & passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
