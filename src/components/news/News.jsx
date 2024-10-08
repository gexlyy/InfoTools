import { useState } from 'react';
import './News.css'
const NewsApp = () => {
  const [articles, setArticles] = useState([]); // Массив для хранения статей
  const [newsTitle,setNewsTitle] = useState('')
  const [loading, setLoading] = useState(false);
  const fetchArticles = async () => {
    setLoading(true); // Устанавливаем статус загрузки
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${newsTitle}&from=2024-09-08&sortBy=publishedAt&apiKey=9b27cdaa7a664d1f90ed3946d60780d5`
      );
      const data = await response.json();
      
      if (data && data.articles) {
        setArticles(data.articles); // Сохраняем массив статей
      }
    } catch (error) {
      console.error("Ошибка при получении статей:", error);
    } finally {
      setLoading(false); // Отключаем статус загрузки
    }
  };

  return (
    <div className='news-main'>
      <input
        placeholder='What news do you want to see?'
        value={newsTitle}
        onChange={(e) => setNewsTitle(e.target.value)}
        className='news-input'
      />
      <button onClick={fetchArticles} disabled={loading} className='news-button'>
        SHOW NEWS
      </button>
      
      {/* Условный рендеринг заголовка */}
      {articles.length > 0 && <h2>Новости по вашему запросу:</h2>}
      
      <ul className='news-mainList'>
        {articles.map((article, index) => (
          <li key={index} className='news-list-item'>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsApp;