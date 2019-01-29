<footer class="footer" id="footer">
  <div class="footer__content">
    <div class="footer__contacts">
      <div class="contacts__content"><img class="contacts__logo" src="http://adamantmg.ru/img/adamant/adamant.svg" width="190" height="58" alt="Логотип Adamant Media Group"/>
        <div class="contacts__block">
          <div class="contacts__item">
            <svg class="contacts__icon" width="25" height="22">
              <use xlink:href="#icon-phone"></use>
            </svg><a class="contacts__link contacts__link--phone" href="tel:+74991120777">+7 (499) 112 0 777</a>
          </div>
          <div class="contacts__item">
            <svg class="contacts__icon" width="25" height="22">
              <use xlink:href="#icon-tm"></use>
            </svg><a class="contacts__link" href="http://t.me/adamantmg">t.me/adamantmg</a>
          </div>
          <div class="contacts__item">
            <svg class="contacts__icon" width="25" height="17">
              <use xlink:href="#icon-mail"></use>
            </svg><a class="contacts__link" href="mailto:office@adamantmg.ru">office@adamantmg.ru</a>
          </div>
        </div>
        <div class="contacts__address">
          <svg class="contacts__icon" width="19" height="32">
            <use xlink:href="#icon-pin"></use>
          </svg>
          <p class="address__text">
            <b>г. Москва, Варшавское шоссе, д. 125, строение 1, офис 536</b><br>
            5 дней в неделю с 10:00 до 19:00 (по МСК)
            
          </p>
        </div>
      </div>
    </div>
    <form class="c-form footer__form" id="form-1" action="" method="post" onsubmit="validateform(this); return false;"><input type="hidden" name="Lead[offer]" value="adamant">
<input type="hidden" name="Lead[info]" value="Заявка с формы опроса">
<input type="hidden" name="Lead[data]" value="">
<input class="cityInput" value="Russia" name="Lead[city]" type="hidden">
<input type="hidden" name="Lead[landing_id]" value="<?php echo $landings_id; ?>">
<input type="hidden" name="Lead[sub1]" value="<?php echo isset($_GET['sub1']) ? $_GET['sub1'] : ''; ?>">
<input type="hidden" name="Lead[sub2]" value="<?php echo isset($_GET['sub2']) ? $_GET['sub2'] : ''; ?>">
<input type="hidden" name="Lead[sub3]" value="<?php echo isset($_GET['sub3']) ? $_GET['sub3'] : ''; ?>">
<input type="hidden" name="Lead[sub4]" value="<?php echo isset($_GET['sub4']) ? $_GET['sub4'] : ''; ?>">
<input type="hidden" name="Lead[sub5]" value="<?php echo isset($_GET['sub5']) ? $_GET['sub5'] : ''; ?>">
<input type="hidden" name="Lead[wmkey]" value="1275ba">
      <div class="c-form__header">
        <p class="header__text">Есть вопросы? Напишите нам сейчас</p>
      </div>
      <div class="c-form__content">
        <label class="c-form__block c-form__block--name">
          <input class="c-input" type="text" name="Lead[name]" data-mask="name" placeholder="Ваше имя" required="required"/>
        </label>
        <label class="c-form__block c-form__block--phone">
          <input class="c-input" type="tel" name="Lead[phone]" data-mask="phone" placeholder="Ваш телефон" required="required"/>
        </label>
        <label class="c-form__block c-form__block--message">
          <textarea class="c-input" name="Lead[message]" placeholder="Сообщение"></textarea>
        </label>
        <p class="c-form__footer-text">
          Нажимая на кнопку «Отправить», вы соглашаетесь на обработку
          персональных данных в соответствии с Политикой конфиденциальности
          
        </p>
        <input class="c-btn c-btn--arrow--white c-form__btn" type="submit" value="ОТПРАВИТЬ СООБЩЕНИЕ"/>
      </div>
    </form>
  </div>
  <div class="footer__map js-map"></div>
</footer>
<section class="copyright" id="copyright">
  <div class="wrap">
    <div class="copyright__list">
      <div class="list__item"><a class="list__link" href="http://docmedtv.ru/policy.php" target="_blank">Политика конфиденциальности</a></div>
      <div class="list__item"><a class="list__link" href="http://docmedtv.ru/agreement.php" target="_blank">Пользовательское соглашение</a></div>
      <div class="list__item"><a class="list__link" href="http://docmedtv.ru/personal.php" target="_blank">Согласие на обработкуперсональных данных</a></div>
    </div>
  </div>
</section>
<script>
  function validateform(form) {
    var digits_reg = new RegExp('[^0-9]', 'g');
  
    var nameInput = form.elements['Lead[name]'];
    if (nameInput.value == '' && nameInput.value.length < 2) {
      alert('Имя указано неверно!');
      return false;
    }
  
    var msgInput = form.elements['Lead[message]'];
    if (msgInput.value == '' && msgInput.value.length < 2) {
      alert('Заполните поле "Сообщение"!');
      return false;
    }
  
    
  
    var phoneInput = form.elements['Lead[phone]'];
    var phoneInputValue = phoneInput.value.replace(digits_reg, '');
    if (
      phoneInputValue == '' ||
      phoneInputValue.length < 11 ||
      phoneInputValue.length > 11
    ) {
      alert(
        'Телефон указан неверно! Должен сождержать 11 цифр. Пример: +7(912)345-67-89 или городской с кодом города +7(495)123-45-67'
      );
      return false;
    } else {
      phoneInput.value = phoneInputValue;
    }
  
    form.submit();
  }
  
</script><?=empty($sessiondata["landingsscripts"]["inbody"])?'':$sessiondata["landingsscripts"]["inbody"]?>

<?php if (($_SERVER['REQUEST_METHOD'] != 'POST') && isset($sessiondata["leadflag"])) {
 unset($sessiondata["leadflag"]);
 $_SESSION['l'.$landings_id] = json_encode($sessiondata);
 
 echo "<script>alert('Ваша заявка принята. Вскоре с вами свяжется оператор для уточнения деталей.');</script>";
} ?>
<script>
  'use strict';
  const contactsMap = document.querySelector('.js-map');
  
  function initMap() {
    const location = {lat: 55.629320, lng: 37.621216};
    const mapOptions = {
      center: new google.maps.LatLng(location),
      zoom: 16,
      disableDefaultUI: true
    };
  
    const map = new google.maps.Map(contactsMap, mapOptions);
    map.panBy(-7, -29);
  
    const markerImage = new google.maps.MarkerImage(
      'http://adamantmg.ru/img/contacts/map-adamant.svg',
      new google.maps.Size(114, 42)
    );
  
    new google.maps.Marker({
      position: location,
      map: map,
      icon: markerImage
    });
  
    window.addEventListener('resize', () => {
      map.setCenter(location);
      map.setZoom(16);
      map.panBy(-7, -29);
    });
  }
  //- function initMap() {
  //-   var location = {lat: 55.629320, lng: 37.621216};
  //-   var map = new google.maps.Map(
  //-       document.querySelector('.js-map'), {zoom: 16, center: location});
  //-   var marker = new google.maps.Marker({position: location, map: map});
  //- }
</script>
<script async="async" defer="defer" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmbMXDyKO6qmfgN3gL4LVXAPncLcM-5jQ&amp;callback=initMap"></script>