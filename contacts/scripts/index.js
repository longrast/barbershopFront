/*main();

  async function main() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда
    // загрузятся все компоненты API.
    await ymaps3.ready;
    // Создание карты.
    const map = new ymaps3.YMap(document.getElementById('map-container"'), {
      location {
        // Координаты центра карты.
        // Порядок по умолчанию: «долгота, широта».
        center: [37.64, 55.76],

        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
      },
      [
        // Добавляем слой для отображения схематической карты Яндекса.
        new ymaps3.YMapDefaultSchemeLayer();
      ]
    })
  }*/
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nb").style.top = "0";
  } else {
    document.getElementById("nb").style.top = "-14vh";
  }
  prevScrollpos = currentScrollPos;
}