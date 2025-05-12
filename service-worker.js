self.addEventListener("install", (event) => {
    console.log("Service Worker installed!");
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated!");
    self.clients.claim();
});

// ✅ 定期的に通知を送る処理
function showNotification() {
    self.registration.showNotification("休憩のお知らせ", {
        body: "そろそろ休憩しましょう！💡",
        icon: "greentea.png"
    });
}

// ✅ Service Workerをバックグラウンドで動かすための間隔設定
setInterval(showNotification, 60 * 60 * 1000); // 60分ごとに通知
