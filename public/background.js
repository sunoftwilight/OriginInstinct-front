// import './crx-hotreload.js';

// content_script는 content.js 자동 실행, 따로 조작하려면 manifest.json에서 content_script를 없애고 background.js에 작성

chrome.runtime.onInstalled.addListener(() => {
  console.log('React Extension Installed');
});