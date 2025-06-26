import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slider from './Slider';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <>
      <header>
        <div className="logo">cook<span>&travel</span></div>
        <nav>
          <a href="#about">Обо мне</a>
          <a href="#photos">Фотоотчет</a>
          <a href="#schedule">Расписание</a>
          <a href="#price">Цена</a>
          <a href="#blog">Блог</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="social-icons">
          <a href="https://www.youtube.com/" target='blanck'><img src="../l1.png" alt="Language 1" /></a>
          <a href="https://vk.com/" target='blanck'><img src="../l2.png" alt="Language 2" /></a>
          <a href="https://www.instagram.com/" target='blanck'><img src="../i.png" alt="Instagram" /></a>
          <a href="https://www.facebook.com/" target='blanck'><img src="../fb.png" alt="Facebook" /></a>
        </div>
      </header>
      <main>
        <section className="banner">
          <div className="left">
            <h1>
              <Typewriter
                options={{
                  strings: ['Cook&Travel'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>Мастер-классы</p>
            <p>Повара-путешественника</p>
            <button>Записаться</button>
          </div>
        </section>
        <section id="about" className="about">
          <img src="../profile.jpg" alt="Profile" className="profile-img" />
          <div className="about-text">
            <h2>Обо мне</h2>
            <div className="abm">
              <div className="abm1">
                <img src="../r.png" alt="" />
              </div>
              <div className="abm2">
                <img src="../a.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="photos" className="photos">
          <h2>Фотоотчет</h2>
          <div className="photo-gallery">
            <Slider />
          </div>
        </section>
        <section id="schedule" className="schedule">
          <img src="../s.png" alt="" />
          <div className="mast">
            <div className="grid">
              <img src="../m1.png" alt="" />
              <img src="../m2.png" alt="" />
              <img src="../m3.png" alt="" />
              <img src="../m4.png" alt="" />
              <img src="../m5.png" alt="" />
              <img src="../m6.png" alt="" />
            </div>
            <div className="grit">
              <p>На мастер - классе:
                <br />- Мы приготовим 5 экзотических блюд
                <br />- Научимся сервировке
                <br />- Я расскажу тонкости разных традиций
                <br />- Вы получите книгу с рецептами
                <br />- Много положительных эмоций
              </p>
              <p>
                Стоимость мастер-класса 15990 ₽
              </p>
              <p>
                Программу мастер-класса смотрите тут
              </p>
              <button>Записаться</button>
            </div>
          </div>
        </section>
        <section id="blog" className="blog">
          <h2>Блог</h2>
           <div className="post">
            <div className="left">
              <h3>Япония</h3>
              <p>Японская кухня — это гармония вкуса, свежести и эстетики. Попробуйте суши, рамен и традиционный чайный ритуал.</p>
              <a href="#">Подробнее...</a>
            </div>
            <div className="right">
              <img src="https://www.telegraph.co.uk/content/dam/travel/2025/04/25/TELEMMGLPICT000421224693_17455902368470_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg?imwidth=640" alt="Япония" />
            </div>
          </div>
          <div className="post2">
            <div className="left">
              <img src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/cda2d464a60b2a30db32dc1a107215f6/" alt="Италия" />
            </div>
            <div className="right">
              <h3>Италия</h3>
              <p>Паста, пицца, тирамису — итальянская кухня известна во всем мире своей простотой и насыщенным вкусом.</p>
              <a href="#">Подробнее...</a>
            </div>
          </div>
          <div className="post3">
            <div className="left">
              <h3>Марокко</h3>
              <p>Марокканская кухня — это специи, тажин и мята. Откройте для себя новые вкусы и ароматы Востока.</p>
              <a href="#">Подробнее...</a>
            </div>
            <div className="right">
              <img src="https://i.ytimg.com/vi/VzV9i5AOBsA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDL8JrhUMgmSbbvRDi-1EWXXVyIeg" alt="Марокко" />
            </div>
          </div>
          <div className="post">
            <div className="left">
              <img src="https://i.ytimg.com/vi/C6K_s6At_9k/sddefault.jpg" alt="Мексика" />
            </div>
            <div className="right">
              <h3>Мексика</h3>
              <p>Острая, яркая и насыщенная мексиканская кухня подарит вам бурю вкусовых ощущений — от тако до чуррос.</p>
              <a href="#">Подробнее...</a>
            </div>
          </div>
          <div className="post">
            
            <div className="left">
              <h3>Вьетнам</h3>
              <p>Вьетнамская кухня — отдельный повод для путешествия в эту страну.</p>
              <a href="#">Подробнее...</a>
            </div>
            <div className="right">
              <img src="../ch.png" alt="" />
            </div>
          </div>
          <div className="post2">
            <div className="left">
              <img src="../al.png" alt="" />
            </div>
            <div className="right">
              <h3>Аляска</h3>
              <p>Если вас не смущает то, из кого был сделан ваш стейк — вы легко сможете оценить это блюдо в самых разных уголках Аляски.</p>
              <a href="#">Подробнее...</a>
            </div>
          </div>
          <div className="post3">
            <div className="left">
              <h3>Париж</h3>
              <p>Еда является важнейший частью французской культуры, поэтому некоторые блюда и их подача смогут удивить даже самых требовательных туристов.</p>
              <a href="#">Подробнее...</a>
            </div>
            <div className="right">
              <img src="../p.png" alt="" />
            </div>
          </div>
          
        </section>

      
        <section id="facts" className="facts">
          <h2>
            <span role="img" aria-label="globe">🌍</span> Интересные факты о путешествиях и кухне
          </h2>
          <div className="facts-cards">
            <div className="fact-card">
              <img src="../fact1.png" alt="Уникальные блюда" />
              <p>В каждой стране есть уникальные блюда, которые не встретишь больше нигде в мире.</p>
            </div>
            <div className="fact-card">
              <img src="../fact2.png" alt="Кулинарные горизонты" />
              <p>Путешествия расширяют кулинарные горизонты и позволяют попробовать новые вкусы.</p>
            </div>
            <div className="fact-card">
              <img src="../fact3.png" alt="Семейные рецепты" />
              <p>Многие традиционные рецепты передаются из поколения в поколение и хранят семейные секреты.</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <h2>
            <span role="img" aria-label="star">⭐</span> Отзывы участников
          </h2>
          <div className="review-list">
            <div className="review">
              <div className="avatar" style={{backgroundImage: "url('../avatar1.png')"}}></div>
              <div>
                <p>“Это был незабываемый опыт! Я научилась готовить новые блюда и познакомилась с интересными людьми.”</p>
                <span>- Анна, Москва</span>
              </div>
            </div>
            <div className="review">
              <div className="avatar" style={{backgroundImage: "url('../avatar2.png')"}}></div>
              <div>
                <p>“Потрясающая атмосфера и вкусная еда! Спасибо за вдохновение и новые знания.”</p>
                <span>- Дмитрий, Санкт-Петербург</span>
              </div>
            </div>
          </div>
        </section>

        <div className="box">
          <div className="BackgrondRasmcha">

          </div>

         <div className="content">
            <div className="input-fields">
              <input type="text" placeholder="Имя" className="input-field" />
              <input type="text" placeholder="Телефон" className="input-field" />
              <input type="email" placeholder="E-Mail" className="input-field" />
              <input type="text" placeholder="Комментарий" className="input-field" />
            </div>
            <div className="action-area">
              <button className="register-btn">ЗАПИСАТЬСЯ</button>
              <div className="agreement">
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement">Да, согласен(а) на обработку данных</label>
              </div>
            </div>
          </div>

        </div>


        <footer className="footer">
          
          <div className="footer-inner">
            <div className="footer-column">
              <h4>cook&travel</h4>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Публичная оферта</a>
            </div>
            <div className="footer-column">
              <a href="#">Обо мне</a>
              <a href="#">Фотоотчет</a>
              <a href="#">Расписание</a>
              <a href="#">Блог</a>
            </div>
            <div className="footer-column">
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://vk.com/">Vkontakte</a>
              <a href="https://www.youtube.com/">Youtube</a>
              <div className="payment-icons">
                <img src="../mc.png" alt="Mastercard" />
                <img src="../mc2.png" alt="Visa" />
              </div>
            </div>
          </div>
        </footer>
      </main>

      
    </>
  );
}

export default App;