import "./main.css";
function Main() {
  return (
    <main>
      <h1>
        УДОБНЫЙ ЗАКАЗ <br /> АВТОБУСНЫХ БИЛЕТОВ
      </h1>

      <form className="form-search-ticet">
        <div class="text-field">
          <label class="text-field__label" for="login">
            Начальный пункт
          </label>
          <select className="city">
            <option>Чаусы</option>
            <option>Могилев</option>
            <option>Минск</option>
            <option>Брест</option>
          </select>
        </div>

        <div class="text-field">
          <label class="text-field__label" for="login">
            Конечный пункт
          </label>
          <select className="city">
            <option>Чаусы</option>
            <option>Могилев</option>
            <option>Минск</option>
            <option>Брест</option>
          </select>
        </div>
        <input className="date-departure" type="date" />
        <input type="submit" />
      </form>
    </main>
  );
}

export default Main;
