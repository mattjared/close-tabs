function closeTabs() {
  const element = Array.from(document.querySelectorAll('div')).find(el => el.textContent.includes('Redirecting to your Notion app…'));
  (element !== undefined) ? window.close() : null;
}
setTimeout(closeTabs, 10000);
