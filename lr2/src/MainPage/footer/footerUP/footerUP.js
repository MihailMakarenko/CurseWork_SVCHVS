import "./footerUP.css";

function FooterUP() {
  return (
    <div className="footer-up-container">
      <SectionInformation items={items1} title={"Сервис"} />
      <SectionInformation items={items2} title={"Наши услуги"} />
      <SectionInformation items={items3} title={"Контакты"} />
    </div>
  );
}

function SectionInformation({ items, title }) {
  return (
    <div className="section-information">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const items1 = ["Информацияо бронировании", "Оплата", "Контакты", "Реквизиты"];
const items2 = [
  "Заказ удобного рейса",
  "Бронирование онлайн",
  "Выбор маршрута",
];
const items3 = [
  "Телефон: +375(23)000-00-00",
  "Почта: info@sitename.ru",
  "Адрес: Могилевская область, улица Ленинская, дом 93",
];
export default FooterUP;
