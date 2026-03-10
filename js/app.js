/**
 * Dashboard Core — カード登録・描画API
 */
const Dashboard = (() => {
  const cards = [];

  /**
   * カードを登録する
   * @param {Object} config
   * @param {string} config.id    - カードのユニークID
   * @param {string} config.title - カードタイトル
   * @param {string} config.icon  - アイコン（絵文字）
   * @param {function} config.create - カード本体のDOMを生成して返す関数
   */
  function addCard({ id, title, icon, create }) {
    cards.push({ id, title, icon, create });
  }

  /** 登録済みカードをグリッドに描画する */
  function render() {
    const grid = document.getElementById("card-grid");
    if (!grid) return;

    cards.forEach(({ id, title, icon, create }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.id = `card-${id}`;

      card.innerHTML = `
        <div class="card__header">
          <span class="card__icon">${icon}</span>
          <span class="card__title">${title}</span>
        </div>
        <div class="card__body" id="${id}-body"></div>
      `;

      grid.appendChild(card);

      // カード本体を描画
      const body = card.querySelector(`#${id}-body`);
      const content = create();
      if (content instanceof Node) {
        body.appendChild(content);
      } else if (typeof content === "string") {
        body.innerHTML = content;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", render);

  return { addCard };
})();
