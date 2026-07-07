import { useEffect, useRef, useState } from "react";

interface PortfolioIframeProps {
  projectTitle: string;
  iframeKey: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export function PortfolioIframe({ projectTitle, iframeKey, aspectRatio = "16/9" }: PortfolioIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const aspectRatioValue = {
    "16/9": "56.25%",
    "4/3": "75%",
    "1/1": "100%",
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#f5f5f5] rounded-lg overflow-hidden"
      style={{
        paddingBottom: aspectRatioValue,
        position: "relative",
        minHeight: "200px",
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[#8B0AB4] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-[#999] text-sm">Loading preview...</p>
          </div>
        </div>
      )}

      {isVisible && (
        <iframe
          key={iframeKey}
          srcDoc={getMinimalHtml(projectTitle)}
          title={projectTitle}
          className="absolute top-0 left-0 w-full h-full border-0"
          style={{
            backgroundColor: "#fff",
          }}
          onLoad={() => setIsLoaded(true)}
          sandbox="allow-same-origin allow-popups"
        />
      )}
    </div>
  );
}

function getMinimalHtml(title: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background: white;
      border-radius: 12px;
      padding: 40px 30px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .logo {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, #8B0AB4 0%, #C13DB2 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 28px;
    }
    h1 {
      color: #121212;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 12px;
      letter-spacing: -0.5px;
    }
    .tagline {
      color: #8B0AB4;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
    }
    p {
      color: #555;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
      text-align: left;
    }
    .feature {
      padding: 15px;
      background: #f9f9f9;
      border-radius: 8px;
      border-left: 3px solid #8B0AB4;
    }
    .feature-title {
      font-weight: 600;
      color: #121212;
      font-size: 13px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .feature-desc {
      font-size: 12px;
      color: #777;
    }
    .cta {
      display: inline-block;
      background: linear-gradient(135deg, #8B0AB4 0%, #C13DB2 100%);
      color: white;
      padding: 12px 32px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: transform 0.2s, box-shadow 0.2s;
      border: none;
      cursor: pointer;
    }
    .cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(139, 10, 180, 0.3);
    }
    @media (max-width: 600px) {
      .container {
        padding: 30px 20px;
      }
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 14px;
      }
      .features {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">✓</div>
    <div class="tagline">Portfolio Project</div>
    <h1>${title}</h1>
    <p>This is a lightweight mockup of a portfolio project. Optimized for fast loading on all devices.</p>
    
    <div class="features">
      <div class="feature">
        <div class="feature-title">📱 Responsive</div>
        <div class="feature-desc">Works seamlessly on all screen sizes</div>
      </div>
      <div class="feature">
        <div class="feature-title">⚡ Fast</div>
        <div class="feature-desc">Lightweight and optimized</div>
      </div>
      <div class="feature">
        <div class="feature-title">🎨 Modern</div>
        <div class="feature-desc">Clean, professional design</div>
      </div>
      <div class="feature">
        <div class="feature-title">🔧 Custom</div>
        <div class="feature-desc">Tailored to your needs</div>
      </div>
    </div>
    
    <button class="cta">View Live Project</button>
  </div>
</body>
</html>`;
}
