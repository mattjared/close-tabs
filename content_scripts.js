const closeTabs = () => Array.from(document.querySelectorAll('div')).find(el => el.textContent.includes('Redirecting to your Notion app…')) !== undefined && window.close();
setTimeout(closeTabs, 60000);
