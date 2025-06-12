export function loadChatwoot(token: string, baseUrl: string) {
  // Ensure baseUrl doesn't end with a slash
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '');
  
  if (!token || !normalizedBaseUrl) {
    console.error('Chatwoot token or base URL is missing');
    return;
  }

  if ((window as any).chatwootSDK) {
    console.log('Chatwoot already loaded');
    return;
  }

  // Add protocol if missing
  const fullBaseUrl = normalizedBaseUrl.startsWith('http') 
    ? normalizedBaseUrl 
    : `https://${normalizedBaseUrl}`;

  (function (d, t) {
    const g = d.createElement(t) as HTMLScriptElement;
    const s = d.getElementsByTagName(t)[0];
    g.src = `${fullBaseUrl}/packs/js/sdk.js`;
    g.defer = true;
    g.async = true;
    g.onload = () => {
      (window as any).chatwootSDK.run({
        websiteToken: token,
        baseUrl: fullBaseUrl,
      });
    };
    g.onerror = () => {
      console.error('Failed to load Chatwoot SDK');
    };
    s.parentNode!.insertBefore(g, s);
  })(document, "script");
}