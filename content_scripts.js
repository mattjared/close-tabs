// const closeTabs = () => Array.from(document.querySelectorAll('div')).find(el => el.textContent.includes('Redirecting to your Notion app…')) !== undefined && window.close();
// const closeTabs = () => {
//   console.log("this works");
// }

function closeTabs() {
  const element = Array.from(document.querySelectorAll('div')).find(el => el.textContent.includes('Redirecting to your Notion app…'));
  // console.log(element);
  (element !== undefined) ? window.close() : null;
}
// setTimeout(closeTabs, 60000);
setTimeout(closeTabs, 10000);
