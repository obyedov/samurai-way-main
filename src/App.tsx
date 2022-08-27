import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img src="https://ershisan99.github.io/student-notes/favicon/favicon-32x32.png" alt="Samurai"/>
            </header>
            <nav className={'nav'}>
                <ul>
                    <li><a href="#/">Profile</a></li>
                    <li><a href="#/">Messages</a></li>
                    <li><a href="#/">News</a></li>
                    <li><a href="#/">Music</a></li>
                    <li><a href="#/">Settings</a></li>
                </ul>
            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://wc.wallpaperuse.com/wallp/97-975933_s.jpg" alt="img content"/>
                </div>
                <div>
                    <img src="https://www.cure-naturali.it/.imaging/default/dam/cure-naturali/enciclopedia-naturale/animali/gatto-persiano.jpg/jcr:content.jpg" alt="avatar"/>
                    + desriptions
                </div>
                <div>
                    my posts
                    <div>new post</div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>

    );
}

export default App;
