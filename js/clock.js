/**
 * Clock Card — 現在時刻を表示
 */
Dashboard.addCard({
  id: "clock",
  title: "時計",
  icon: "🕐",
  create() {
    const container = document.createElement("div");

    const timeEl = document.createElement("div");
    timeEl.className = "clock__time";

    const dateEl = document.createElement("div");
    dateEl.className = "clock__date";

    container.appendChild(timeEl);
    container.appendChild(dateEl);

    function update() {
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      dateEl.textContent = now.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
      });
    }

    update();
    setInterval(update, 1000);

    return container;
  },
});
