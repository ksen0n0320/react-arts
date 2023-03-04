var displaycart= 'none';

function swithcart(){
  displaycart = displaycart==='none'? 'block':'none';
  console.log(displaycart);
}

function App() {
  return (
    <div className="wrapper clear"> {/*clear отчистка ul li a*/}
      <div  style={{display: displaycart}} className="overlay"> {/*тень на сам сайт при просмотре корзины*/}
          <div className="cart"> {/*корзина*/}
            <h2 className=" d-flex justify-between align-center mb-30">
              Корзина <img className="removeBtn m-25 cu-p" src="/img/btn-remove.svg" onClick={()=>swithcart()} alt="remove" /> </h2>

            <div className="items">
              <div className="cartItem d-flex justify-between align-center mb-20"> {/*товары в корзине*/}
                <img className="mr-20" width={80} height={110} src="/img/manga/put_dom.jpg" alt="manga" />
                <div>
                  <p className="mb-5">Путь домохозяина. Том 1</p>
                  <b>770 руб</b>
                </div>
                <div>
                    <img className="removeBtn m-25" src="/img/btn-remove.svg" alt="remove" />
                </div>
              </div>

              <div className="cartItem d-flex justify-between align-center mb-20"> {/*тоже самое что и display: flex; justify-content: space-between;*/}
                <img className="mr-20" width={80} height={110} src="/img/manga/vol.jpg" alt="manga" />
                <div>
                  <p className="mb-5">Волейбол. Том 32</p>
                  <b>670 руб</b>
                </div>
                <div>
                    <img className="removeBtn m-25" src="/img/btn-remove.svg" alt="remove" />
                </div>
              </div>
            </div>

            <div className="cartPoint">
              <ul> {/*точечки в итого*/}
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>1 440 руб.</b>
                </li>
              </ul>

              <button>Оформить заказ</button>
            </div>

          </div>
      </div>
      
      
      <header className="d-flex justify-between align-center p-40"> 
        <div className="d-flex alig-center">
          <img width={70} height={70} src="/img/logo.svg" />
          <div>
            <h3 className="text-uppercase">Mангa на русском языке</h3>
            <p> </p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30"> 
          <img width={25} height={25} src="/img/cart.svg" onClick={()=>swithcart()}/> 
            <span> 0 руб. </span>
          </li>
          <li>
          <img width={25} height={25} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      {/* */}
      <div className="content p-30">
        <div className="d-flex align-center justify-between mb-40 ">
          <h1>Манга</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" /> 
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <img width={200} height={290} src="/img/manga/put_dom.jpg" alt="manga" />
            <p>Путь домохозяина. Том 1</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>770 руб.</b>
              </div>

              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="plus" />
              </button>

            </div>
          </div> 

          <div className="card">
            <img width={200} height={290} src="/img/manga/benz.jpg" alt="manga" />
            <p>Человек Бензопила. Том 1</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>800 руб.</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div> 

          <div className="card">
            <img width={200} height={290} src="/img/manga/vol.jpg" alt="manga" />
            <p>Волейбол. Том 32</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>670 руб.</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div> 

          <div className="card">
            <img width={200} height={290} src="/img/manga/ataka_na_titanov.jpg" alt="manga" />
            <p>Атака на Титанов. Том 1</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>бесценна</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div> 
        </div>

      </div>
    </div>
  );
}

export default App;
