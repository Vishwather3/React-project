import React from 'react';
import './style.css';

const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1>Welcome to Anime World</h1>
          <p>“If you don't share someone's pain, you can never understand them”</p>
          <a href="#" className="button">Explore Anime</a>
        </section>
        
        <section className="Featured-Animes">
          <h2>Featured Animes</h2>
          <ul>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEfXY1W3YxxZnGJpn5qB2hp8ZqM0cHPotBQ&usqp=CAU" alt="Poster 1" />
              <h3>Naurto</h3>
              <p>Naruto[a] is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village</p>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9JHwk108msFnESUg-7Zx3vxdFYlNxDAq5A&usqp=CAU" alt="Poster 2" />
              <h3>Attack on Titan</h3>
              <p>Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. 'The Attacking Giant') is a Japanese dark fantasy anime television series, adapted from the manga series of the same name by Hajime Isayama, that premiered on April 7, 2013. It has aired on NHK General TV in Japan,[g] and Aniplus Asia in various Asia-Pacific countries.</p>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5sytSi6Ta2qPBSXKwZdDv62maH1oaOU6Zg&usqp=CAU" alt="Poster 3" />
              <h3>Onepiece</h3>
              <p>One Piece  is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 105 tankōbon volumes as of March 2023. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his pirate crew,</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;